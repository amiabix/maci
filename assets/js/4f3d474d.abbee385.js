"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1843],{3380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=r(5250),n=r(720);const d={},c="IPollFactory",l={id:"solidity-docs/interfaces/IPollFactory",title:"IPollFactory",description:"PollFactory interface",source:"@site/versioned_docs/version-v1.x/solidity-docs/interfaces/IPollFactory.md",sourceDirName:"solidity-docs/interfaces",slug:"/solidity-docs/interfaces/IPollFactory",permalink:"/docs/solidity-docs/interfaces/IPollFactory",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/interfaces/IPollFactory.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"IPoll",permalink:"/docs/solidity-docs/interfaces/IPoll"},next:{title:"ITallySubsidyFactory",permalink:"/docs/solidity-docs/interfaces/ITallySubsidyFactory"}},i={},o=[{value:"deploy",id:"deploy",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values",level:4}];function a(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"ipollfactory",children:"IPollFactory"}),"\n",(0,s.jsx)(t.p,{children:"PollFactory interface"}),"\n",(0,s.jsx)(t.h3,{id:"deploy",children:"deploy"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function deploy(uint256 _duration, struct Params.MaxValues _maxValues, struct Params.TreeDepths _treeDepths, struct DomainObjs.PubKey _coordinatorPubKey, contract IMACI _maci, contract TopupCredit _topupCredit, address _pollOwner) external returns (address)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Deploy a new Poll contract and AccQueue contract for messages."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_duration"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The duration of the poll"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_maxValues"}),(0,s.jsx)(t.td,{children:"struct Params.MaxValues"}),(0,s.jsx)(t.td,{children:"The max values for the poll"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_treeDepths"}),(0,s.jsx)(t.td,{children:"struct Params.TreeDepths"}),(0,s.jsx)(t.td,{children:"The depths of the merkle trees"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_coordinatorPubKey"}),(0,s.jsx)(t.td,{children:"struct DomainObjs.PubKey"}),(0,s.jsx)(t.td,{children:"The coordinator's public key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_maci"}),(0,s.jsx)(t.td,{children:"contract IMACI"}),(0,s.jsx)(t.td,{children:"The MACI contract interface reference"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_topupCredit"}),(0,s.jsx)(t.td,{children:"contract TopupCredit"}),(0,s.jsx)(t.td,{children:"The TopupCredit contract"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_pollOwner"}),(0,s.jsx)(t.td,{children:"address"}),(0,s.jsx)(t.td,{children:"The owner of the poll"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[0]"}),(0,s.jsx)(t.td,{children:"address"}),(0,s.jsx)(t.td,{children:"The deployed Poll contract"})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},720:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>c});var s=r(79);const n={},d=s.createContext(n);function c(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);