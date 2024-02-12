"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3563],{5237:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=t(5250),r=t(720);const i={},l="IPoll",d={id:"solidity-docs/interfaces/IPoll",title:"IPoll",description:"Poll interface",source:"@site/versioned_docs/version-v1.x/solidity-docs/interfaces/IPoll.md",sourceDirName:"solidity-docs/interfaces",slug:"/solidity-docs/interfaces/IPoll",permalink:"/docs/solidity-docs/interfaces/IPoll",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/interfaces/IPoll.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"IMessageProcessor",permalink:"/docs/solidity-docs/interfaces/IMessageProcessor"},next:{title:"IPollFactory",permalink:"/docs/solidity-docs/interfaces/IPollFactory"}},c={},a=[{value:"numSignUpsAndMessages",id:"numsignupsandmessages",level:3},{value:"Return Values",id:"return-values",level:4},{value:"topup",id:"topup",level:3},{value:"Parameters",id:"parameters",level:4},{value:"publishMessage",id:"publishmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"mergeMaciStateAqSubRoots",id:"mergemacistateaqsubroots",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"mergeMaciStateAq",id:"mergemacistateaq",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"mergeMessageAqSubRoots",id:"mergemessageaqsubroots",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"mergeMessageAq",id:"mergemessageaq",level:3},{value:"getDeployTimeAndDuration",id:"getdeploytimeandduration",level:3},{value:"Return Values",id:"return-values-1",level:4},{value:"stateAqMerged",id:"stateaqmerged",level:3},{value:"Return Values",id:"return-values-2",level:4},{value:"treeDepths",id:"treedepths",level:3},{value:"Return Values",id:"return-values-3",level:4},{value:"maxValues",id:"maxvalues",level:3},{value:"Return Values",id:"return-values-4",level:4},{value:"extContracts",id:"extcontracts",level:3},{value:"Return Values",id:"return-values-5",level:4},{value:"coordinatorPubKeyHash",id:"coordinatorpubkeyhash",level:3},{value:"Return Values",id:"return-values-6",level:4},{value:"currentSbCommitment",id:"currentsbcommitment",level:3},{value:"Return Values",id:"return-values-7",level:4}];function h(e){const s={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"ipoll",children:"IPoll"}),"\n",(0,n.jsx)(s.p,{children:"Poll interface"}),"\n",(0,n.jsx)(s.h3,{id:"numsignupsandmessages",children:"numSignUpsAndMessages"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function numSignUpsAndMessages() external view returns (uint256 numSignups, uint256 numMsgs)\n"})}),"\n",(0,n.jsx)(s.p,{children:"The number of messages which have been processed and the number of signups"}),"\n",(0,n.jsx)(s.h4,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"numSignups"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The number of signups"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"numMsgs"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The number of messages sent by voters"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"topup",children:"topup"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function topup(uint256 stateIndex, uint256 amount) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"Allows to publish a Topup message"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stateIndex"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The index of user in the state queue"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"amount"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The amount of credits to topup"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"publishmessage",children:"publishMessage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function publishMessage(struct DomainObjs.Message _message, struct DomainObjs.PubKey _encPubKey) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"Allows anyone to publish a message (an encrypted command and signature).\nThis function also enqueues the message."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_message"}),(0,n.jsx)(s.td,{children:"struct DomainObjs.Message"}),(0,n.jsx)(s.td,{children:"The message to publish"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_encPubKey"}),(0,n.jsx)(s.td,{children:"struct DomainObjs.PubKey"}),(0,n.jsx)(s.td,{children:"An epheremal public key which can be combined with the coordinator's private key to generate an ECDH shared key with which to encrypt the message."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"mergemacistateaqsubroots",children:"mergeMaciStateAqSubRoots"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function mergeMaciStateAqSubRoots(uint256 _numSrQueueOps, uint256 _pollId) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"The first step of merging the MACI state AccQueue. This allows the\nProcessMessages circuit to access the latest state tree and ballots via\ncurrentSbCommitment."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_numSrQueueOps"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"Number of operations"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_pollId"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The ID of the active Poll"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"mergemacistateaq",children:"mergeMaciStateAq"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function mergeMaciStateAq(uint256 _pollId) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"The second step of merging the MACI state AccQueue. This allows the\nProcessMessages circuit to access the latest state tree and ballots via\ncurrentSbCommitment."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_pollId"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The ID of the active Poll"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"mergemessageaqsubroots",children:"mergeMessageAqSubRoots"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function mergeMessageAqSubRoots(uint256 _numSrQueueOps) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"The first step in merging the message AccQueue so that the\nProcessMessages circuit can access the message root."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_numSrQueueOps"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The number of subroot queue operations to perform"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"mergemessageaq",children:"mergeMessageAq"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function mergeMessageAq() external\n"})}),"\n",(0,n.jsx)(s.p,{children:"The second step in merging the message AccQueue so that the\nProcessMessages circuit can access the message root."}),"\n",(0,n.jsx)(s.h3,{id:"getdeploytimeandduration",children:"getDeployTimeAndDuration"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function getDeployTimeAndDuration() external view returns (uint256 _deployTime, uint256 _duration)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Returns the Poll's deploy time and duration"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_deployTime"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The deployment timestamp"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_duration"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The duration of the poll"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"stateaqmerged",children:"stateAqMerged"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function stateAqMerged() external view returns (bool)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the result of whether the MACI contract's stateAq has been merged by this contract"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[0]"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Whether the MACI contract's stateAq has been merged by this contract"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"treedepths",children:"treeDepths"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function treeDepths() external view returns (uint8 intStateTreeDepth, uint8 messageTreeSubDepth, uint8 messageTreeDepth, uint8 voteOptionTreeDepth)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the depths of the merkle trees"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"intStateTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The depth of the state tree"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"messageTreeSubDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The subdepth of the message tree"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"messageTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The depth of the message tree"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"voteOptionTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The subdepth of the vote option tree"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"maxvalues",children:"maxValues"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function maxValues() external view returns (uint256 maxMessages, uint256 maxVoteOptions)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the max values for the poll"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxMessages"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The maximum number of messages"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxVoteOptions"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The maximum number of vote options"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"extcontracts",children:"extContracts"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function extContracts() external view returns (contract IMACI maci, contract AccQueue messageAq, contract TopupCredit topupCredit)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the external contracts"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-5",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maci"}),(0,n.jsx)(s.td,{children:"contract IMACI"}),(0,n.jsx)(s.td,{children:"The IMACI contract"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"messageAq"}),(0,n.jsx)(s.td,{children:"contract AccQueue"}),(0,n.jsx)(s.td,{children:"The AccQueue contract"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"topupCredit"}),(0,n.jsx)(s.td,{children:"contract TopupCredit"}),(0,n.jsx)(s.td,{children:"The TopupCredit contract"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"coordinatorpubkeyhash",children:"coordinatorPubKeyHash"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function coordinatorPubKeyHash() external view returns (uint256 _coordinatorPubKeyHash)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the hash of coordinator's public key"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-6",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_coordinatorPubKeyHash"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"the hash of coordinator's public key"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"currentsbcommitment",children:"currentSbCommitment"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function currentSbCommitment() external view returns (uint256)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the commitment to the state leaves and the ballots. This is\nhash3(stateRoot, ballotRoot, salt).\nIts initial value should be\nhash(maciStateRootSnapshot, emptyBallotRoot, 0)\nEach successful invocation of processMessages() should use a different\nsalt to update this value, so that an external observer cannot tell in\nthe case that none of the messages are valid."}),"\n",(0,n.jsx)(s.h4,{id:"return-values-7",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"[0]"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The commitment to the state leaves and the ballots"})]})})]})]})}function o(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},720:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>l});var n=t(79);const r={},i=n.createContext(r);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);