"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[942],{487:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const n={},d="VkRegistry",l={id:"solidity-docs/VkRegistry",title:"VkRegistry",description:"Stores verifying keys for the circuits.",source:"@site/versioned_docs/version-v1.x/solidity-docs/VkRegistry.md",sourceDirName:"solidity-docs",slug:"/solidity-docs/VkRegistry",permalink:"/docs/solidity-docs/VkRegistry",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/VkRegistry.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"TopupCredit",permalink:"/docs/solidity-docs/TopupCredit"},next:{title:"HasherBenchmarks",permalink:"/docs/solidity-docs/benchmarks/HasherBenchmarks"}},h={},c=[{value:"processVks",id:"processvks",level:3},{value:"processVkSet",id:"processvkset",level:3},{value:"tallyVks",id:"tallyvks",level:3},{value:"tallyVkSet",id:"tallyvkset",level:3},{value:"subsidyVks",id:"subsidyvks",level:3},{value:"subsidyVkSet",id:"subsidyvkset",level:3},{value:"ProcessVkSet",id:"processvkset-1",level:3},{value:"TallyVkSet",id:"tallyvkset-1",level:3},{value:"SubsidyVkSet",id:"subsidyvkset-1",level:3},{value:"ProcessVkAlreadySet",id:"processvkalreadyset",level:3},{value:"TallyVkAlreadySet",id:"tallyvkalreadyset",level:3},{value:"SubsidyVkAlreadySet",id:"subsidyvkalreadyset",level:3},{value:"ProcessVkNotSet",id:"processvknotset",level:3},{value:"TallyVkNotSet",id:"tallyvknotset",level:3},{value:"SubsidyVkNotSet",id:"subsidyvknotset",level:3},{value:"isProcessVkSet",id:"isprocessvkset",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values",level:4},{value:"isTallyVkSet",id:"istallyvkset",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"isSubsidyVkSet",id:"issubsidyvkset",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"genProcessVkSig",id:"genprocessvksig",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"genTallyVkSig",id:"gentallyvksig",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"genSubsidyVkSig",id:"gensubsidyvksig",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Values",id:"return-values-4",level:4},{value:"setVerifyingKeys",id:"setverifyingkeys",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"setSubsidyKeys",id:"setsubsidykeys",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"hasProcessVk",id:"hasprocessvk",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Return Values",id:"return-values-5",level:4},{value:"getProcessVkBySig",id:"getprocessvkbysig",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Return Values",id:"return-values-6",level:4},{value:"getProcessVk",id:"getprocessvk",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Return Values",id:"return-values-7",level:4},{value:"hasTallyVk",id:"hastallyvk",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Return Values",id:"return-values-8",level:4},{value:"getTallyVkBySig",id:"gettallyvkbysig",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Return Values",id:"return-values-9",level:4},{value:"getTallyVk",id:"gettallyvk",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Return Values",id:"return-values-10",level:4},{value:"hasSubsidyVk",id:"hassubsidyvk",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"Return Values",id:"return-values-11",level:4},{value:"getSubsidyVkBySig",id:"getsubsidyvkbysig",level:3},{value:"Parameters",id:"parameters-15",level:4},{value:"Return Values",id:"return-values-12",level:4},{value:"getSubsidyVk",id:"getsubsidyvk",level:3},{value:"Parameters",id:"parameters-16",level:4},{value:"Return Values",id:"return-values-13",level:4}];function a(e){const s={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"vkregistry",children:"VkRegistry"}),"\n",(0,i.jsx)(s.p,{children:"Stores verifying keys for the circuits.\nEach circuit has a signature which is its compile-time constants represented\nas a uint256."}),"\n",(0,i.jsx)(s.h3,{id:"processvks",children:"processVks"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => struct SnarkCommon.VerifyingKey) processVks\n"})}),"\n",(0,i.jsx)(s.h3,{id:"processvkset",children:"processVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => bool) processVkSet\n"})}),"\n",(0,i.jsx)(s.h3,{id:"tallyvks",children:"tallyVks"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => struct SnarkCommon.VerifyingKey) tallyVks\n"})}),"\n",(0,i.jsx)(s.h3,{id:"tallyvkset",children:"tallyVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => bool) tallyVkSet\n"})}),"\n",(0,i.jsx)(s.h3,{id:"subsidyvks",children:"subsidyVks"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => struct SnarkCommon.VerifyingKey) subsidyVks\n"})}),"\n",(0,i.jsx)(s.h3,{id:"subsidyvkset",children:"subsidyVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => bool) subsidyVkSet\n"})}),"\n",(0,i.jsx)(s.h3,{id:"processvkset-1",children:"ProcessVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"event ProcessVkSet(uint256 _sig)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"tallyvkset-1",children:"TallyVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"event TallyVkSet(uint256 _sig)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"subsidyvkset-1",children:"SubsidyVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"event SubsidyVkSet(uint256 _sig)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"processvkalreadyset",children:"ProcessVkAlreadySet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error ProcessVkAlreadySet()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"tallyvkalreadyset",children:"TallyVkAlreadySet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error TallyVkAlreadySet()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"subsidyvkalreadyset",children:"SubsidyVkAlreadySet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error SubsidyVkAlreadySet()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"processvknotset",children:"ProcessVkNotSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error ProcessVkNotSet()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"tallyvknotset",children:"TallyVkNotSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error TallyVkNotSet()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"subsidyvknotset",children:"SubsidyVkNotSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error SubsidyVkNotSet()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"isprocessvkset",children:"isProcessVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function isProcessVkSet(uint256 _sig) public view returns (bool isSet)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Check if the process verifying key is set"}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isSet"}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"whether the verifying key is set"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"istallyvkset",children:"isTallyVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function isTallyVkSet(uint256 _sig) public view returns (bool isSet)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Check if the tally verifying key is set"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isSet"}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"whether the verifying key is set"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"issubsidyvkset",children:"isSubsidyVkSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function isSubsidyVkSet(uint256 _sig) public view returns (bool isSet)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Check if the subsidy verifying key is set"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isSet"}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"whether the verifying key is set"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"genprocessvksig",children:"genProcessVkSig"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function genProcessVkSig(uint256 _stateTreeDepth, uint256 _messageTreeDepth, uint256 _voteOptionTreeDepth, uint256 _messageBatchSize) public pure returns (uint256 sig)\n"})}),"\n",(0,i.jsx)(s.p,{children:"generate the signature for the process verifying key"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageBatchSize"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message batch size"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"gentallyvksig",children:"genTallyVkSig"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function genTallyVkSig(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth) public pure returns (uint256 sig)\n"})}),"\n",(0,i.jsx)(s.p,{children:"generate the signature for the tally verifying key"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"gensubsidyvksig",children:"genSubsidyVkSig"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function genSubsidyVkSig(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth) public pure returns (uint256 sig)\n"})}),"\n",(0,i.jsx)(s.p,{children:"generate the signature for the subsidy verifying key"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"setverifyingkeys",children:"setVerifyingKeys"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function setVerifyingKeys(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _messageTreeDepth, uint256 _voteOptionTreeDepth, uint256 _messageBatchSize, struct SnarkCommon.VerifyingKey _processVk, struct SnarkCommon.VerifyingKey _tallyVk) public\n"})}),"\n",(0,i.jsx)(s.p,{children:"Set the process and tally verifying keys for a certain combination\nof parameters"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageBatchSize"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message batch size"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_processVk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The process verifying key"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_tallyVk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The tally verifying key"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"setsubsidykeys",children:"setSubsidyKeys"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function setSubsidyKeys(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth, struct SnarkCommon.VerifyingKey _subsidyVk) public\n"})}),"\n",(0,i.jsx)(s.p,{children:"Set the process verifying key for a certain combination\nof parameters"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_subsidyVk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"hasprocessvk",children:"hasProcessVk"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function hasProcessVk(uint256 _stateTreeDepth, uint256 _messageTreeDepth, uint256 _voteOptionTreeDepth, uint256 _messageBatchSize) public view returns (bool isSet)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Check if the process verifying key is set"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageBatchSize"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message batch size"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-5",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isSet"}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"whether the verifying key is set"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"getprocessvkbysig",children:"getProcessVkBySig"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function getProcessVkBySig(uint256 _sig) public view returns (struct SnarkCommon.VerifyingKey vk)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get the process verifying key by signature"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-6",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"vk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"getprocessvk",children:"getProcessVk"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function getProcessVk(uint256 _stateTreeDepth, uint256 _messageTreeDepth, uint256 _voteOptionTreeDepth, uint256 _messageBatchSize) public view returns (struct SnarkCommon.VerifyingKey vk)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get the process verifying key"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageBatchSize"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The message batch size"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-7",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"vk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"hastallyvk",children:"hasTallyVk"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function hasTallyVk(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth) public view returns (bool isSet)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Check if the tally verifying key is set"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-8",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isSet"}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"whether the verifying key is set"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"gettallyvkbysig",children:"getTallyVkBySig"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function getTallyVkBySig(uint256 _sig) public view returns (struct SnarkCommon.VerifyingKey vk)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get the tally verifying key by signature"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-9",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"vk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"gettallyvk",children:"getTallyVk"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function getTallyVk(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth) public view returns (struct SnarkCommon.VerifyingKey vk)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get the tally verifying key"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-10",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"vk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"hassubsidyvk",children:"hasSubsidyVk"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function hasSubsidyVk(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth) public view returns (bool isSet)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Check if the subsidy verifying key is set"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-14",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-11",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"isSet"}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"whether the verifying key is set"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"getsubsidyvkbysig",children:"getSubsidyVkBySig"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function getSubsidyVkBySig(uint256 _sig) public view returns (struct SnarkCommon.VerifyingKey vk)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get the subsidy verifying key by signature"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-15",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_sig"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The signature"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-12",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"vk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"getsubsidyvk",children:"getSubsidyVk"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function getSubsidyVk(uint256 _stateTreeDepth, uint256 _intStateTreeDepth, uint256 _voteOptionTreeDepth) public view returns (struct SnarkCommon.VerifyingKey vk)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Get the subsidy verifying key"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-16",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_stateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_intStateTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The intermediate state tree depth"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The vote option tree depth"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values-13",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"vk"}),(0,i.jsx)(s.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,i.jsx)(s.td,{children:"The verifying key"})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>d});var i=t(7294);const r={},n=i.createContext(r);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);