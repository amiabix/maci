"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2603],{9571:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var o=n(5250),s=n(720);const a={title:"Domainobjs",sidebar_label:"Domainobjs"},t=void 0,c={id:"typedoc/domainobjs/index",title:"Domainobjs",description:"NPM Package",source:"@site/versioned_docs/version-v1.x/typedoc/domainobjs/index.md",sourceDirName:"typedoc/domainobjs",slug:"/typedoc/domainobjs/",permalink:"/docs/typedoc/domainobjs/",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/typedoc/domainobjs/index.md",tags:[],version:"v1.x",frontMatter:{title:"Domainobjs",sidebar_label:"Domainobjs"},sidebar:"version-1.x/mySidebar",previous:{title:"Signature",permalink:"/docs/typedoc/crypto/interfaces/Signature"},next:{title:"module",permalink:"/docs/typedoc/domainobjs/modules"}},d={},r=[{value:"<code>PrivKey</code>",id:"privkey",level:2},{value:"<code>PubKey</code>",id:"pubkey",level:2},{value:"<code>Keypair</code>",id:"keypair",level:2},{value:"<code>Command</code>",id:"command",level:2},{value:"<code>Message</code>",id:"message",level:2},{value:"<code>Ballot</code>",id:"ballot",level:2},{value:"<code>StateLeaf</code>",id:"stateleaf",level:2},{value:"<code>VerifyingKey</code>",id:"verifyingkey",level:2},{value:"<code>Proof</code>",id:"proof",level:2}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-domainobjs",children:(0,o.jsx)(i.img,{src:"https://img.shields.io/npm/v/maci-domainobjs.svg",alt:"NPM Package"})}),"\n",(0,o.jsx)(i.a,{href:"https://github.com/privacy-scaling-explorations/maci/actions?query=workflow%3Adomainobjs",children:(0,o.jsx)(i.img,{src:"https://github.com/privacy-scaling-explorations/maci/actions/workflows/domainobjs-build.yml/badge.svg",alt:"Actions Status"})})]}),"\n",(0,o.jsx)(i.p,{children:"This module implements domain objects. A domain object is:"}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"a logical container of purely domain information, usually representing a\nlogical entity in the problem domain space"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://wiki.c2.com/?DomainObject",children:"https://wiki.c2.com/?DomainObject"})}),"\n",(0,o.jsx)(i.p,{children:"In effect, domain objects are representations of objects shared between other\nmodules in this codebase. They also encapsulate helper functions which make it\neasy to use them with said modules."}),"\n",(0,o.jsx)(i.h2,{id:"privkey",children:(0,o.jsx)(i.code,{children:"PrivKey"})}),"\n",(0,o.jsx)(i.p,{children:"A private key. Provides helper functions to do with passing it into a circuit\nin the right format, serialisation and deserialisation, and deep copying."}),"\n",(0,o.jsx)(i.p,{children:"This is a MACI private key, which is not to be confused with an Ethereum private key.\nA serialized MACI private key is prefixed by 'macisk.'\nA raw MACI private key can be thought as a point on the baby jubjub curve."}),"\n",(0,o.jsx)(i.h2,{id:"pubkey",children:(0,o.jsx)(i.code,{children:"PubKey"})}),"\n",(0,o.jsx)(i.p,{children:"A public key. Provides helper functions to do with passing it into a contract\nfunction or circuit in the right format, hashing, serialisation and\ndeserialisation, and deep copying."}),"\n",(0,o.jsx)(i.p,{children:"This is a MACI public key, which is not to be confused with an Ethereum public key. A serialized MACI public key is prefixed by 'macipk.' A raw MACI public key can be thought as a pair of BigIntegers (x, y) representing a point on the baby jubjub curve."}),"\n",(0,o.jsx)(i.h2,{id:"keypair",children:(0,o.jsx)(i.code,{children:"Keypair"})}),"\n",(0,o.jsxs)(i.p,{children:["Encapsulates a ",(0,o.jsx)(i.code,{children:"PrivKey"})," and ",(0,o.jsx)(i.code,{children:"PubKey"}),". Also provides ",(0,o.jsx)(i.code,{children:"genEcdhSharedKey"})," which\ngenerates an ECDH shared key from a public key and a private key."]}),"\n",(0,o.jsx)(i.p,{children:"This is a MACI keypair, which is not to be confused with an Ethereum keypair.\nA MACI keypair is comprised of a MACI public key and a MACI private key"}),"\n",(0,o.jsx)(i.h2,{id:"command",children:(0,o.jsx)(i.code,{children:"Command"})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Command"})," domain object represents a request by a user to cast a vote\nand/or change one's public key."]}),"\n",(0,o.jsx)(i.h2,{id:"message",children:(0,o.jsx)(i.code,{children:"Message"})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Message"})," domain object is an encrypted ",(0,o.jsx)(i.code,{children:"Command"})," and signature. That is, a\n",(0,o.jsx)(i.code,{children:"Message"})," is a ",(0,o.jsx)(i.code,{children:"Ciphertext"})," (defined in ",(0,o.jsx)(i.a,{href:"/docs/typedoc/crypto/",children:(0,o.jsx)(i.code,{children:"maci-crypto"})}),")\nwhich is the encrypted ",(0,o.jsx)(i.code,{children:"Command"})," and its ",(0,o.jsx)(i.code,{children:"Signature"})," (also defined in\n",(0,o.jsx)(i.code,{children:"maci-crypto"}),"). In other terms:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"Message = Encrypt([Command, Signature], Key)\n"})}),"\n",(0,o.jsx)(i.h2,{id:"ballot",children:(0,o.jsx)(i.code,{children:"Ballot"})}),"\n",(0,o.jsx)(i.p,{children:"Represents a User's votes in a Poll, as well as their next valid nonce."}),"\n",(0,o.jsx)(i.h2,{id:"stateleaf",children:(0,o.jsx)(i.code,{children:"StateLeaf"})}),"\n",(0,o.jsx)(i.p,{children:"Represents a leaf in the state tree, which maps public keys to voice credit\nbalances, as well as the timestamp at which it was inserted."}),"\n",(0,o.jsx)(i.h2,{id:"verifyingkey",children:(0,o.jsx)(i.code,{children:"VerifyingKey"})}),"\n",(0,o.jsx)(i.p,{children:"Encapsulates a Groth16 zk-SNARK verifying key."}),"\n",(0,o.jsx)(i.h2,{id:"proof",children:(0,o.jsx)(i.code,{children:"Proof"})}),"\n",(0,o.jsx)(i.p,{children:"Encapsulates a Groth16 zk-SNARK proof."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},720:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>t});var o=n(79);const s={},a=o.createContext(s);function t(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(a.Provider,{value:i},e.children)}}}]);