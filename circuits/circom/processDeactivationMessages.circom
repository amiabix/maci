pragma circom 2.0.0;

include "./elGamalEncryption.circom";
include "../node_modules/circomlib/circuits/bitify.circom";
include "../node_modules/circomlib/circuits/comparators.circom";
include "../node_modules/circomlib/circuits/escalarmulany.circom";

include "./trees/incrementalQuinTree.circom";
include "./poseidon/poseidonHashT3.circom";
include "./isDeactivatedKey.circom";
include "./messageToCommand.circom";
include "./verifySignature.circom";
include "./messageHasher.circom";

template ProcessDeactivationMessages(msgQueueSize, stateTreeDepth) {
    var MSG_LENGTH = 11;
    var TREE_ARITY = 5;
    var STATE_LEAF_LENGTH = 4;
    var msgTreeZeroValue = 8370432830353022751713833565135785980866757267633941821328460903436894336785;

    // Coordinator's key
    signal input coordPrivKey;
    signal input coordPubKey[2];

    // Encryption keys for each message
    signal input encPubKeys[msgQueueSize][2];

    // Key deactivation messages
    signal input msgs[msgQueueSize][MSG_LENGTH];

    // Inclusion proof path elements for deactivated keys
    signal input deactivatedTreePathElements[msgQueueSize][stateTreeDepth][TREE_ARITY - 1];

    // Inclusion proof path elements for state tree leaves
    signal input stateLeafPathElements[msgQueueSize][stateTreeDepth][TREE_ARITY - 1];

    // State leaves for each message
    signal input currentStateLeaves[msgQueueSize][STATE_LEAF_LENGTH];

    // ElGamal ciphertext values of key deactivation statuses for each message
    signal input elGamalEnc[msgQueueSize][2][2];

    // ElGamal randomness
    signal input maskingValues[msgQueueSize];

    // Root hash of deactivated keys tree
    signal input deactivatedTreeRoot;

    // State tree root hash
    signal input currentStateRoot;

    // Total number of key deactivation messages
    signal input numMsgs;

    // Total number of signups
    signal input numSignUps;

    // Incremental array of root hashes
    signal messageHashes[msgQueueSize + 1];    
    messageHashes[0] <== msgTreeZeroValue;

    // Message chain hash
    signal output newMessageChainHash;

    // Process each message
    component processor[msgQueueSize];
    for (var i = 0; i < msgQueueSize; i++) {
        processor[i] = ProcessSingleDeactivationMessage(stateTreeDepth, TREE_ARITY);
        processor[i].currentMessageIndex <== i;
        processor[i].prevHash <== messageHashes[i];
        processor[i].deactivatedTreeRoot <== deactivatedTreeRoot;
        processor[i].numSignUps <== numSignUps;

        for (var j = 0; j < MSG_LENGTH; j++) {
            processor[i].msg[j] <== msgs[i][j];
        }
        
        
        processor[i].coordPrivKey <== coordPrivKey;
        processor[i].coordPubKey[0] <== coordPubKey[0];
        processor[i].coordPubKey[1] <== coordPubKey[1];
        processor[i].encPubKey[0] <== encPubKeys[i][0];
        processor[i].encPubKey[1] <== encPubKeys[i][1];
        processor[i].currentStateRoot <== currentStateRoot;
        processor[i].maskingValue <== maskingValues[i];

        // Copy deactivated tree path elements and state tree path elements
        for (var j = 0; j < stateTreeDepth; j++) {
            for (var k = 0; k < TREE_ARITY - 1; k++) {
                processor[i].deactivatedTreePathElements[j][k] <== deactivatedTreePathElements[i][j][k];
                processor[i].stateLeafPathElements[j][k] <== stateLeafPathElements[i][j][k];
            }
        }

        // Copy state leaves
        for (var j = 0; j < STATE_LEAF_LENGTH; j++) {
            processor[i].stateLeaf[j] <== currentStateLeaves[i][j];
        }

        // Copy c1 and c2 enc values
        processor[i].c1[0] <== elGamalEnc[i][0][0];
        processor[i].c1[1] <== elGamalEnc[i][0][1];

        processor[i].c2[0] <== elGamalEnc[i][1][0];
        processor[i].c2[1] <== elGamalEnc[i][1][1];

        messageHashes[i + 1] <== processor[i].newHash;
    }

    // Output final hash
    newMessageChainHash <== messageHashes[msgQueueSize];
}

template ProcessSingleDeactivationMessage(stateTreeDepth, treeArity) {
    var MSG_LENGTH = 11;
    var STATE_LEAF_LENGTH = 4;
    var PACKED_CMD_LENGTH = 4;

    // Decrypt message into a command
    signal input prevHash;
    signal input msg[MSG_LENGTH];
    signal input coordPrivKey;
    signal input coordPubKey[2];
    signal input encPubKey[2];
    signal input maskingValue;
    signal input c1[2];
    signal input c2[2];
    signal input numSignUps;
    signal input deactivatedTreeRoot;
    signal input deactivatedTreePathElements[stateTreeDepth][treeArity - 1];
    signal input stateLeafPathElements[stateTreeDepth][treeArity - 1];
    signal input stateLeaf[STATE_LEAF_LENGTH];
    signal input currentStateRoot;
    signal input currentMessageIndex;

    signal output newHash;

    // Decode message
    // ------------------------------------
    component command = MessageToCommand();
    command.encPrivKey <== coordPrivKey;
    command.encPubKey[0] <== encPubKey[0];
    command.encPubKey[1] <== encPubKey[1];

    for (var j = 0; j < MSG_LENGTH; j ++) {
        command.message[j] <== msg[j];
    }
    // ------------------------------------
    // Verify if pubkey value is (0,0)
    component isPubKeyValid = IsEqual();
    isPubKeyValid.in[0] <== 0;
    isPubKeyValid.in[1] <== command.newPubKey[0] + command.newPubKey[1];

    // Verify if voteWeight is 0
    component isVoteWeightValid = IsEqual();
    isVoteWeightValid.in[0] <== 0;
    isVoteWeightValid.in[1] <== command.newVoteWeight;

    // Verify message signature
    component validSignature = VerifySignature();
    validSignature.pubKey[0] <== stateLeaf[0];
    validSignature.pubKey[1] <== stateLeaf[1];
    validSignature.R8[0] <== command.sigR8[0];
    validSignature.R8[1] <== command.sigR8[1];
    validSignature.S <== command.sigS;
    for (var i = 0; i < PACKED_CMD_LENGTH; i ++) {
        validSignature.preimage[i] <== command.packedCommandOut[i];
    }

    // Verify that the state leaf exists in the given state root
    // ------------------------------------------------------------------
    component stateLeafQip = QuinTreeInclusionProof(stateTreeDepth);
    component stateLeafHasher = Hasher4();
    for (var i = 0; i < STATE_LEAF_LENGTH; i++) {
        stateLeafHasher.in[i] <== stateLeaf[i];
    }

    component validStateLeafIndex = LessEqThan(252);
    validStateLeafIndex.in[0] <== command.stateIndex;
    validStateLeafIndex.in[1] <== numSignUps;

    component indexMux = Mux1();
    indexMux.s <== validStateLeafIndex.out;
    indexMux.c[0] <== 0;
    indexMux.c[1] <== command.stateIndex;

    component stateLeafPathIndices = QuinGeneratePathIndices(stateTreeDepth);
    stateLeafPathIndices.in <== indexMux.out;

    stateLeafQip.leaf <== stateLeafHasher.hash;
    for (var i = 0; i < stateTreeDepth; i ++) {
        stateLeafQip.path_index[i] <== stateLeafPathIndices.out[i];
        for (var j = 0; j < treeArity - 1; j++) {
            stateLeafQip.path_elements[i][j] <== stateLeafPathElements[i][j];
        }
    }

    component stateLeafValid = IsEqual();
    stateLeafValid.in[0] <== stateLeafQip.root;
    stateLeafValid.in[1] <== currentStateRoot;

    component isDataValid = IsEqual();
    isDataValid.in[0] <== 4;
    isDataValid.in[1] <== isPubKeyValid.out + isVoteWeightValid.out + stateLeafValid.out + validSignature.valid;

    // Compute ElGamal encryption
    // --------------------------
    component elGamalBit = ElGamalEncryptBit();
    elGamalBit.pk[0] <== coordPubKey[0];
    elGamalBit.pk[1] <== coordPubKey[1];
    elGamalBit.k <== maskingValue;
    elGamalBit.m <== isDataValid.out;

    elGamalBit.Me[0] === c1[0];
    elGamalBit.Me[1] === c1[1];

    elGamalBit.kG[0] === c2[0];
    elGamalBit.kG[1] === c2[1];
    // --------------------------
    // Compute deactivated key leaf hash
    component deactivatedLeafHasher = PoseidonHashT4();
    deactivatedLeafHasher.inputs[0] <== stateLeaf[0];
    deactivatedLeafHasher.inputs[1] <== stateLeaf[1];
    deactivatedLeafHasher.inputs[2] <== command.salt;

    // Verify that the deactivated leaf exists in the given deactivated keys root
    // --------------------------------------------------------------------------
    // Get inclusion proof path indices for deactivated keys tree
    component deactLeafPathIndices = QuinGeneratePathIndices(stateTreeDepth);
    deactLeafPathIndices.in <== currentMessageIndex;

    component isInDeactivated = IsDeactivatedKey(stateTreeDepth);
    isInDeactivated.root <== deactivatedTreeRoot;
    isInDeactivated.key[0] <== command.newPubKey[0];
    isInDeactivated.key[1] <== command.newPubKey[1];
    isInDeactivated.c1[0] <== c1[0];
    isInDeactivated.c1[1] <== c1[1];
    isInDeactivated.c2[0] <== c2[0];
    isInDeactivated.c2[1] <== c2[1];
    isInDeactivated.salt <== command.salt;

    for (var i = 0; i < stateTreeDepth; i ++) {
        isInDeactivated.path_index[i] <== deactLeafPathIndices.out[i];
        for (var j = 0; j < treeArity - 1; j++) {
            isInDeactivated.path_elements[i][j] <== deactivatedTreePathElements[i][j];
        }
    }

    isInDeactivated.isDeactivated === 1;
    // ------------------------------------------------------------------
    // Compute new "root" hash
    // -------------------------------------------
    // Hashing message
    component messageHasher = MessageHasher();
    for (var j = 0; j < MSG_LENGTH; j ++) {
        messageHasher.in[j] <== msg[j];
    }
    messageHasher.encPubKey[0] <== encPubKey[0];
    messageHasher.encPubKey[1] <== encPubKey[1];
    
    // Hashing previous hash and message hash
    component newChainHash = PoseidonHashT3();
    newChainHash.inputs[0] <== prevHash;
    newChainHash.inputs[1] <== messageHasher.hash;

    newHash <== newChainHash.out;
    // -------------------------------------------
}