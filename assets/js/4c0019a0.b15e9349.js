"use strict";(self.webpackChunkfull_stack_tutorial=self.webpackChunkfull_stack_tutorial||[]).push([[58],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=d(r),k=o,f=u["".concat(c,".").concat(k)]||u[k]||p[k]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3152:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return d}});var n=r(3117),o=(r(7294),r(3905));const l={sidebar_position:1},i="docker\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528",a={unversionedId:"docker/install",id:"docker/install",title:"docker\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528",description:"docker\u662f\u4e00\u79cd\u5f00\u6e90\u5e73\u53f0\uff0c\u7528\u4e8e\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/docs/docker/install.md",sourceDirName:"docker",slug:"/docker/install",permalink:"/full-stack-tutorial/docs/docker/install",draft:!1,editUrl:"https://github.com/idealjs/full-stack-tutorial/tree/main/docs/docker/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"docker\u5b89\u88c5\u6559\u7a0b",permalink:"/full-stack-tutorial/docs/category/docker\u5b89\u88c5\u6559\u7a0b"},next:{title:"DEMO",permalink:"/full-stack-tutorial/docs/Plugin exception/DEMO"}},c={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"docker\u7684\u5b89\u88c5",id:"docker\u7684\u5b89\u88c5",level:2},{value:"1. \u5f00\u542fwindows\u529f\u80fd",id:"1-\u5f00\u542fwindows\u529f\u80fd",level:3},{value:"2. \u4e0b\u8f7d\u5e76\u5b89\u88c5docker",id:"2-\u4e0b\u8f7d\u5e76\u5b89\u88c5docker",level:3},{value:"docker\u7684\u4f7f\u7528",id:"docker\u7684\u4f7f\u7528",level:2},{value:"1. \u914d\u7f6e\u955c\u50cf",id:"1-\u914d\u7f6e\u955c\u50cf",level:3},{value:"2. \u62c9\u53d6\u955c\u50cf",id:"2-\u62c9\u53d6\u955c\u50cf",level:3},{value:"3. \u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668",id:"3-\u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668",level:3},{value:"4. \u9a8c\u8bc1\u5bb9\u5668\u542f\u52a8",id:"4-\u9a8c\u8bc1\u5bb9\u5668\u542f\u52a8",level:3}],s={toc:d};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528"},"docker\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528"),(0,o.kt)("p",null,"docker\u662f\u4e00\u79cd\u5f00\u6e90\u5e73\u53f0\uff0c\u7528\u4e8e\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u60a8\u7684\u7cfb\u7edf\u662fwindows\u4e13\u4e1a\u7248"),(0,o.kt)("li",{parentName:"ol"},"\u5df2\u5b89\u88c5\u4e86wsl2 ")),(0,o.kt)("h2",{id:"docker\u7684\u5b89\u88c5"},"docker\u7684\u5b89\u88c5"),(0,o.kt)("h3",{id:"1-\u5f00\u542fwindows\u529f\u80fd"},"1. \u5f00\u542fwindows\u529f\u80fd"),(0,o.kt)("p",null,"\u901a\u8fc7\u63a7\u5236\u9762\u677f\uff0c\u5f00\u542fHyper-v\u548c\u9002\u7528\u4e8ewindows\u5b50\u7cfb\u7edf\u529f\u80fd"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u63a7\u5236\u9762\u677f",src:r(9645).Z,width:"1399",height:"743"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u542f\u52a8windows\u529f\u80fd",src:r(6460).Z,width:"481",height:"493"})),(0,o.kt)("h3",{id:"2-\u4e0b\u8f7d\u5e76\u5b89\u88c5docker"},"2. \u4e0b\u8f7d\u5e76\u5b89\u88c5docker"),(0,o.kt)("p",null,"\u4e0b\u8f7ddocker\u6700\u5b89\u5168\u7684\u8def\u5f84\u5c31\u662f\u53bb\u5b98\u7f51\uff0c\u5b89\u88c5\u65f6\u8981\u6ce8\u610f\u52fe\u9009",(0,o.kt)("inlineCode",{parentName:"p"},"wsl"),"\u9009\u9879\uff0c\u5b89\u88c5\u6210\u529f\u540e\u8df3\u8fc7\u767b\u5f55docker Hub\u8d26\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://docs.docker.com/desktop/install/windows-install/\n")),(0,o.kt)("h2",{id:"docker\u7684\u4f7f\u7528"},"docker\u7684\u4f7f\u7528"),(0,o.kt)("h3",{id:"1-\u914d\u7f6e\u955c\u50cf"},"1. \u914d\u7f6e\u955c\u50cf"),(0,o.kt)("p",null,"\u8fdb\u5165docker\u540e\uff0c\u5f00\u59cb\u914d\u7f6e\u955c\u50cf"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u8bbe\u7f6e\u9875\u9762",src:r(4883).Z,width:"1616",height:"916"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker Engine",src:r(2930).Z,width:"1618",height:"917"})),(0,o.kt)("p",null,"\u914d\u7f6e\u955c\u50cf\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"registry-mirrors":["https://docker.m.daocloud.io","https://docker.1panel.live"]\n')),(0,o.kt)("h3",{id:"2-\u62c9\u53d6\u955c\u50cf"},"2. \u62c9\u53d6\u955c\u50cf"),(0,o.kt)("p",null," \u8fd9\u91cc\u6211\u5728wsl\u547d\u4ee4\u884c\u4e2d\u62c9\u53d6\u7684postgres\u955c\u50cf\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"pull"),"              "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo docker pull postgres\n")),(0,o.kt)("h3",{id:"3-\u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668"},"3. \u521b\u5efa\u5e76\u542f\u52a8\u5bb9\u5668"),(0,o.kt)("p",null,"\u521b\u5efa\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\u7684\u6587\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"     "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5185\u5bb9",src:r(9558).Z,width:"474",height:"506"})),(0,o.kt)("h3",{id:"4-\u9a8c\u8bc1\u5bb9\u5668\u542f\u52a8"},"4. \u9a8c\u8bc1\u5bb9\u5668\u542f\u52a8"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4",(0,o.kt)("inlineCode",{parentName:"p"},"ps"),"\uff0c\u5f53STATUS\u51fa\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"up"),"\u7684\u65f6\u5019\uff0c\u5bb9\u5668\u5c31\u8868\u793a\u542f\u52a8\u6210\u529f                   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{alt:"\u8fd0\u884c\u5bb9\u5668",src:r(9187).Z,width:"1477",height:"121"})))}p.isMDXComponent=!0},9645:function(e,t,r){t.Z=r.p+"assets/images/1-812a4537f1f430707f171a30e3ae6920.png"},6460:function(e,t,r){t.Z=r.p+"assets/images/2-6772692390acc429c706c0960f739c32.png"},9558:function(e,t,r){t.Z=r.p+"assets/images/3-297d16f43d7b60f26607d519879422ca.png"},9187:function(e,t,r){t.Z=r.p+"assets/images/5-6fb7e166d8977be7084f85109201b66f.png"},4883:function(e,t,r){t.Z=r.p+"assets/images/6-65734fcc431d97c2873f3eaef1ee728e.png"},2930:function(e,t,r){t.Z=r.p+"assets/images/7-301f23065daeca3806b021d1bd1a7dd3.png"}}]);