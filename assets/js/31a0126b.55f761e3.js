"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2800],{880:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var l=t(5893),n=t(1151);const s={},r="MACI",d={id:"solidity-docs/MACI",title:"MACI",description:"A contract which allows users to sign up, and deploy new polls",source:"@site/versioned_docs/version-v1.x/solidity-docs/MACI.md",sourceDirName:"solidity-docs",slug:"/solidity-docs/MACI",permalink:"/docs/solidity-docs/MACI",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/MACI.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"MessageProcessor",permalink:"/docs/solidity-docs/MessageProcessor"}},a={},c=[{value:"stateTreeDepth",id:"statetreedepth",level:3},{value:"STATE_TREE_SUBDEPTH",id:"state_tree_subdepth",level:3},{value:"STATE_TREE_ARITY",id:"state_tree_arity",level:3},{value:"MESSAGE_TREE_ARITY",id:"message_tree_arity",level:3},{value:"BLANK_STATE_LEAF_HASH",id:"blank_state_leaf_hash",level:3},{value:"nextPollId",id:"nextpollid",level:3},{value:"polls",id:"polls",level:3},{value:"numSignUps",id:"numsignups",level:3},{value:"numStateLeaves",id:"numstateleaves",level:3},{value:"vkRegistry",id:"vkregistry",level:3},{value:"topupCredit",id:"topupcredit",level:3},{value:"pollFactory",id:"pollfactory",level:3},{value:"stateAq",id:"stateaq",level:3},{value:"isInitialised",id:"isinitialised",level:3},{value:"signUpGatekeeper",id:"signupgatekeeper",level:3},{value:"initialVoiceCreditProxy",id:"initialvoicecreditproxy",level:3},{value:"signUpTimestamp",id:"signuptimestamp",level:3},{value:"Init",id:"init",level:3},{value:"SignUp",id:"signup",level:3},{value:"DeployPoll",id:"deploypoll",level:3},{value:"MergeStateAqSubRoots",id:"mergestateaqsubroots",level:3},{value:"MergeStateAq",id:"mergestateaq",level:3},{value:"afterInit",id:"afterinit",level:3},{value:"onlyPoll",id:"onlypoll",level:3},{value:"MaciNotInit",id:"macinotinit",level:3},{value:"CallerMustBePoll",id:"callermustbepoll",level:3},{value:"AlreadyInitialized",id:"alreadyinitialized",level:3},{value:"PoseidonHashLibrariesNotLinked",id:"poseidonhashlibrariesnotlinked",level:3},{value:"WrongPollOwner",id:"wrongpollowner",level:3},{value:"WrongVkRegistryOwner",id:"wrongvkregistryowner",level:3},{value:"TooManySignups",id:"toomanysignups",level:3},{value:"MaciPubKeyLargerThanSnarkFieldSize",id:"macipubkeylargerthansnarkfieldsize",level:3},{value:"PreviousPollNotCompleted",id:"previouspollnotcompleted",level:3},{value:"PollDoesNotExist",id:"polldoesnotexist",level:3},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"init",id:"init-1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"signUp",id:"signup-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"deployPoll",id:"deploypoll-1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return Values",id:"return-values",level:4},{value:"mergeStateAqSubRoots",id:"mergestateaqsubroots-1",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"mergeStateAq",id:"mergestateaq-1",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"getStateAqRoot",id:"getstateaqroot",level:3},{value:"Return Values",id:"return-values-2",level:4},{value:"getPoll",id:"getpoll",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Return Values",id:"return-values-3",level:4}];function o(e){const i={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"maci",children:"MACI"}),"\n",(0,l.jsx)(i.p,{children:"A contract which allows users to sign up, and deploy new polls"}),"\n",(0,l.jsx)(i.h3,{id:"statetreedepth",children:"stateTreeDepth"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint8 stateTreeDepth\n"})}),"\n",(0,l.jsx)(i.p,{children:"The state tree depth is fixed. As such it should be as large as feasible\nso that there can be as many users as possible.  i.e. 5 ** 10 = 9765625\nthis should also match the parameter of the circom circuits."}),"\n",(0,l.jsx)(i.h3,{id:"state_tree_subdepth",children:"STATE_TREE_SUBDEPTH"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint8 STATE_TREE_SUBDEPTH\n"})}),"\n",(0,l.jsx)(i.p,{children:"IMPORTANT: remember to change the ballot tree depth\nin contracts/ts/genEmptyBallotRootsContract.ts file\nif we change the state tree depth!"}),"\n",(0,l.jsx)(i.h3,{id:"state_tree_arity",children:"STATE_TREE_ARITY"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint8 STATE_TREE_ARITY\n"})}),"\n",(0,l.jsx)(i.h3,{id:"message_tree_arity",children:"MESSAGE_TREE_ARITY"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint8 MESSAGE_TREE_ARITY\n"})}),"\n",(0,l.jsx)(i.h3,{id:"blank_state_leaf_hash",children:"BLANK_STATE_LEAF_HASH"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint256 BLANK_STATE_LEAF_HASH\n"})}),"\n",(0,l.jsx)(i.p,{children:"The hash of a blank state leaf"}),"\n",(0,l.jsx)(i.h3,{id:"nextpollid",children:"nextPollId"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint256 nextPollId\n"})}),"\n",(0,l.jsx)(i.p,{children:"Each poll has an incrementing ID"}),"\n",(0,l.jsx)(i.h3,{id:"polls",children:"polls"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"mapping(uint256 => contract Poll) polls\n"})}),"\n",(0,l.jsx)(i.p,{children:"A mapping of poll IDs to Poll contracts."}),"\n",(0,l.jsx)(i.h3,{id:"numsignups",children:"numSignUps"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint256 numSignUps\n"})}),"\n",(0,l.jsx)(i.p,{children:"The number of signups"}),"\n",(0,l.jsx)(i.h3,{id:"numstateleaves",children:"numStateLeaves"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"mapping(uint256 => uint256) numStateLeaves\n"})}),"\n",(0,l.jsx)(i.p,{children:"A mapping of block timestamps to the number of state leaves"}),"\n",(0,l.jsx)(i.h3,{id:"vkregistry",children:"vkRegistry"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"contract VkRegistry vkRegistry\n"})}),"\n",(0,l.jsx)(i.p,{children:"The verifying key registry. There may be multiple verifying keys stored\non chain, and Poll contracts must select the correct VK based on the\ncircuit's compile-time parameters, such as tree depths and batch sizes."}),"\n",(0,l.jsx)(i.h3,{id:"topupcredit",children:"topupCredit"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"contract TopupCredit topupCredit\n"})}),"\n",(0,l.jsx)(i.h3,{id:"pollfactory",children:"pollFactory"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"contract PollFactory pollFactory\n"})}),"\n",(0,l.jsx)(i.h3,{id:"stateaq",children:"stateAq"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"contract AccQueue stateAq\n"})}),"\n",(0,l.jsx)(i.p,{children:"The state AccQueue. Represents a mapping between each user's public key\nand their voice credit balance."}),"\n",(0,l.jsx)(i.h3,{id:"isinitialised",children:"isInitialised"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"bool isInitialised\n"})}),"\n",(0,l.jsx)(i.p,{children:"Whether the init() function has been successfully executed yet."}),"\n",(0,l.jsx)(i.h3,{id:"signupgatekeeper",children:"signUpGatekeeper"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"contract SignUpGatekeeper signUpGatekeeper\n"})}),"\n",(0,l.jsx)(i.p,{children:"Address of the SignUpGatekeeper, a contract which determines whether a\nuser may sign up to vote"}),"\n",(0,l.jsx)(i.h3,{id:"initialvoicecreditproxy",children:"initialVoiceCreditProxy"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"contract InitialVoiceCreditProxy initialVoiceCreditProxy\n"})}),"\n",(0,l.jsx)(i.p,{children:"The contract which provides the values of the initial voice credit\nbalance per user"}),"\n",(0,l.jsx)(i.h3,{id:"signuptimestamp",children:"signUpTimestamp"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"uint256 signUpTimestamp\n"})}),"\n",(0,l.jsx)(i.p,{children:"When the contract was deployed. We assume that the signup period starts\nimmediately upon deployment."}),"\n",(0,l.jsx)(i.h3,{id:"init",children:"Init"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"event Init(contract VkRegistry _vkRegistry, contract TopupCredit _topupCredit)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"signup",children:"SignUp"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"event SignUp(uint256 _stateIndex, struct DomainObjs.PubKey _userPubKey, uint256 _voiceCreditBalance, uint256 _timestamp)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"deploypoll",children:"DeployPoll"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"event DeployPoll(uint256 _pollId, address _pollAddr, struct DomainObjs.PubKey _pubKey)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"mergestateaqsubroots",children:"MergeStateAqSubRoots"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"event MergeStateAqSubRoots(uint256 _pollId, uint256 _numSrQueueOps)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"mergestateaq",children:"MergeStateAq"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"event MergeStateAq(uint256 _pollId)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"afterinit",children:"afterInit"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"modifier afterInit()\n"})}),"\n",(0,l.jsx)(i.p,{children:"Ensure certain functions only run after the contract has been initialized"}),"\n",(0,l.jsx)(i.h3,{id:"onlypoll",children:"onlyPoll"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"modifier onlyPoll(uint256 _pollId)\n"})}),"\n",(0,l.jsx)(i.p,{children:"Only allow a Poll contract to call the modified function."}),"\n",(0,l.jsx)(i.h3,{id:"macinotinit",children:"MaciNotInit"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error MaciNotInit()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"callermustbepoll",children:"CallerMustBePoll"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error CallerMustBePoll(address _caller)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"alreadyinitialized",children:"AlreadyInitialized"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error AlreadyInitialized()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"poseidonhashlibrariesnotlinked",children:"PoseidonHashLibrariesNotLinked"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error PoseidonHashLibrariesNotLinked()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"wrongpollowner",children:"WrongPollOwner"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error WrongPollOwner()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"wrongvkregistryowner",children:"WrongVkRegistryOwner"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error WrongVkRegistryOwner()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"toomanysignups",children:"TooManySignups"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error TooManySignups()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"macipubkeylargerthansnarkfieldsize",children:"MaciPubKeyLargerThanSnarkFieldSize"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error MaciPubKeyLargerThanSnarkFieldSize()\n"})}),"\n",(0,l.jsx)(i.h3,{id:"previouspollnotcompleted",children:"PreviousPollNotCompleted"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error PreviousPollNotCompleted(uint256 pollId)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"polldoesnotexist",children:"PollDoesNotExist"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"error PollDoesNotExist(uint256 pollId)\n"})}),"\n",(0,l.jsx)(i.h3,{id:"constructor",children:"constructor"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"constructor(contract PollFactory _pollFactory, contract SignUpGatekeeper _signUpGatekeeper, contract InitialVoiceCreditProxy _initialVoiceCreditProxy, uint8 _stateTreeDepth) public\n"})}),"\n",(0,l.jsx)(i.p,{children:"Create a new instance of the MACI contract."}),"\n",(0,l.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_pollFactory"}),(0,l.jsx)(i.td,{children:"contract PollFactory"}),(0,l.jsx)(i.td,{children:"The PollFactory contract"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_signUpGatekeeper"}),(0,l.jsx)(i.td,{children:"contract SignUpGatekeeper"}),(0,l.jsx)(i.td,{children:"The SignUpGatekeeper contract"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_initialVoiceCreditProxy"}),(0,l.jsx)(i.td,{children:"contract InitialVoiceCreditProxy"}),(0,l.jsx)(i.td,{children:"The InitialVoiceCreditProxy contract"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_stateTreeDepth"}),(0,l.jsx)(i.td,{children:"uint8"}),(0,l.jsx)(i.td,{children:"The depth of the state tree"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"init-1",children:"init"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function init(contract VkRegistry _vkRegistry, contract TopupCredit _topupCredit) public\n"})}),"\n",(0,l.jsx)(i.p,{children:"Initialise the various factory/helper contracts. This should only be run\nonce and it must be run before deploying the first Poll."}),"\n",(0,l.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_vkRegistry"}),(0,l.jsx)(i.td,{children:"contract VkRegistry"}),(0,l.jsx)(i.td,{children:"The VkRegistry contract"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_topupCredit"}),(0,l.jsx)(i.td,{children:"contract TopupCredit"}),(0,l.jsx)(i.td,{children:"The topupCredit contract"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"signup-1",children:"signUp"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function signUp(struct DomainObjs.PubKey _pubKey, bytes _signUpGatekeeperData, bytes _initialVoiceCreditProxyData) public\n"})}),"\n",(0,l.jsx)(i.p,{children:"Allows any eligible user sign up. The sign-up gatekeeper should prevent\ndouble sign-ups or ineligible users from doing so.  This function will\nonly succeed if the sign-up deadline has not passed. It also enqueues a\nfresh state leaf into the state AccQueue."}),"\n",(0,l.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_pubKey"}),(0,l.jsx)(i.td,{children:"struct DomainObjs.PubKey"}),(0,l.jsx)(i.td,{children:"The user's desired public key."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_signUpGatekeeperData"}),(0,l.jsx)(i.td,{children:"bytes"}),(0,l.jsx)(i.td,{children:"Data to pass to the sign-up gatekeeper's     register() function. For instance, the POAPGatekeeper or     SignUpTokenGatekeeper requires this value to be the ABI-encoded     token ID."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_initialVoiceCreditProxyData"}),(0,l.jsx)(i.td,{children:"bytes"}),(0,l.jsx)(i.td,{children:"Data to pass to the     InitialVoiceCreditProxy, which allows it to determine how many voice     credits this user should have."})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"deploypoll-1",children:"deployPoll"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function deployPoll(uint256 _duration, struct Params.MaxValues _maxValues, struct Params.TreeDepths _treeDepths, struct DomainObjs.PubKey _coordinatorPubKey) public returns (address pollAddr)\n"})}),"\n",(0,l.jsx)(i.p,{children:"Deploy a new Poll contract."}),"\n",(0,l.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_duration"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"How long should the Poll last for"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_maxValues"}),(0,l.jsx)(i.td,{children:"struct Params.MaxValues"}),(0,l.jsx)(i.td,{children:"The maximum number of vote options, and messages"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_treeDepths"}),(0,l.jsx)(i.td,{children:"struct Params.TreeDepths"}),(0,l.jsx)(i.td,{children:"The depth of the Merkle trees"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_coordinatorPubKey"}),(0,l.jsx)(i.td,{children:"struct DomainObjs.PubKey"}),(0,l.jsx)(i.td,{children:"The coordinator's public key"})]})]})]}),"\n",(0,l.jsx)(i.h4,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"pollAddr"}),(0,l.jsx)(i.td,{children:"address"}),(0,l.jsx)(i.td,{children:"a new Poll contract address"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"mergestateaqsubroots-1",children:"mergeStateAqSubRoots"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function mergeStateAqSubRoots(uint256 _numSrQueueOps, uint256 _pollId) public\n"})}),"\n",(0,l.jsx)(i.p,{children:"Allow Poll contracts to merge the state subroots"}),"\n",(0,l.jsx)(i.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_numSrQueueOps"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"Number of operations"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_pollId"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"The active Poll ID"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"mergestateaq-1",children:"mergeStateAq"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function mergeStateAq(uint256 _pollId) public returns (uint256 root)\n"})}),"\n",(0,l.jsx)(i.p,{children:"Allow Poll contracts to merge the state root"}),"\n",(0,l.jsx)(i.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_pollId"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"The active Poll ID"})]})})]}),"\n",(0,l.jsx)(i.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"root"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"The calculated Merkle root"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"getstateaqroot",children:"getStateAqRoot"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function getStateAqRoot() public view returns (uint256 root)\n"})}),"\n",(0,l.jsx)(i.p,{children:"Return the main root of the StateAq contract"}),"\n",(0,l.jsx)(i.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"root"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"The Merkle root"})]})})]}),"\n",(0,l.jsx)(i.h3,{id:"getpoll",children:"getPoll"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-solidity",children:"function getPoll(uint256 _pollId) public view returns (contract Poll poll)\n"})}),"\n",(0,l.jsx)(i.p,{children:"Get the Poll details"}),"\n",(0,l.jsx)(i.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"_pollId"}),(0,l.jsx)(i.td,{children:"uint256"}),(0,l.jsx)(i.td,{children:"The identifier of the Poll to retrieve"})]})})]}),"\n",(0,l.jsx)(i.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Type"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsx)(i.tbody,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"poll"}),(0,l.jsx)(i.td,{children:"contract Poll"}),(0,l.jsx)(i.td,{children:"The Poll contract object"})]})})]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>d,a:()=>r});var l=t(7294);const n={},s=l.createContext(n);function r(e){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(s.Provider,{value:i},e.children)}}}]);