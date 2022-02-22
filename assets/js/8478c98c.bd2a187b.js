"use strict";(self.webpackChunkweb_tutorial=self.webpackChunkweb_tutorial||[]).push([[775],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=l,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),l=n(7294),a=n(2389),o=n(9548),u=n(6010),i="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,l.useState)(g),O=T[0],E=T[1],x=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=y[f];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&E(N)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(j(t),E(r),null!=f&&w(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;n=x[l]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},m)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:Z,onClick:Z},a,{className:(0,u.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,l.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,a.Z)();return l.createElement(c,(0,r.Z)({key:String(t)},e))}},3362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n(9877),u=n(8215),i=["components"],c={sidebar_position:1},s="Git",p={unversionedId:"Tools/post-1",id:"Tools/post-1",title:"Git",description:"git \u662f\u4e00\u4e2a\u4ee3\u7801\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u8ffd\u8e2a\u4ee3\u7801\u7684\u63d0\u4ea4\u8bb0\u5f55\u3002\u8fd9\u662f\u6bcf\u4e2a\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u5fc5\u5907\u5de5\u5177\uff0c\u6ca1\u6709\u4e4b\u4e00\u3002",source:"@site/docs/Tools/post-1.mdx",sourceDirName:"Tools",slug:"/Tools/post-1",permalink:"/web-tutorial/docs/Tools/post-1",editUrl:"https://github.com/idealjs/web-tutorial/tree/main/docs/Tools/post-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f15\u8a00",permalink:"/web-tutorial/docs/"},next:{title:"\u4fe1\u606f\u65f6\u4ee3",permalink:"/web-tutorial/docs/Web/post-2"}},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u514b\u9686",id:"\u514b\u9686",children:[],level:3},{value:"\u62c9\u53d6\u4ee3\u7801",id:"\u62c9\u53d6\u4ee3\u7801",children:[],level:3},{value:"\u63a8\u9001\u4ee3\u7801",id:"\u63a8\u9001\u4ee3\u7801",children:[],level:3}],level:2}],f={toc:d};function m(e){var t=e.components,c=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git"},"Git"),(0,a.kt)("p",null,"git \u662f\u4e00\u4e2a\u4ee3\u7801\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u8ffd\u8e2a\u4ee3\u7801\u7684\u63d0\u4ea4\u8bb0\u5f55\u3002\u8fd9\u662f\u6bcf\u4e2a\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u5fc5\u5907\u5de5\u5177\uff0c\u6ca1\u6709\u4e4b\u4e00\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668\u3002"),(0,a.kt)(o.Z,{defaultValue:"win",values:[{label:"win",value:"win"},{label:"ubuntu",value:"ubuntu"},{label:"mac",value:"mac"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"win",mdxType:"TabItem"},"\u4e0b\u8f7d\u5730\u5740 https://git-scm.com/"),(0,a.kt)(u.Z,{value:"ubuntu",mdxType:"TabItem"},"\u5927\u90e8\u5206linux\u7cfb\u7edf\u90fd\u81ea\u5e26git\uff0c\u6253\u5f00\u63a7\u5236\u53f0\u8f93\u5165 git --version \u67e5\u770b git \u7248\u672c"),(0,a.kt)(u.Z,{value:"mac",mdxType:"TabItem"},"mac\u7cfb\u7edf\u81ea\u5e26git\uff0c\u6253\u5f00\u63a7\u5236\u53f0\u8f93\u5165 git --version \u67e5\u770b git \u7248\u672c")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u901a\u5e38\u4e00\u4e2a\u9879\u76ee\u4f1a\u5bf9\u5e94\u4e00\u4e2a git \u4ed3\u5e93\uff0c\u6bcf\u6b21\u63d0\u4ea4\u4ee3\u7801\u90fd\u4f1a\u8bb0\u5f55\u5230 git \u4ed3\u5e93\u4e2d\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8ffd\u8e2a\u4ee3\u7801\u7684\u63d0\u4ea4\u8bb0\u5f55\u3002"),(0,a.kt)("p",null,"\u7528\u56fe\u5f62\u5316\u7684\u5de5\u5177\u6765\u770b\u7684\u8bdd\uff0c\u4f1a\u5448\u73b0\u51fa\u5982\u4e0b\u56fe\n",(0,a.kt)("img",{alt:"\u9884\u89c8\u6548\u679c",src:n(2161).Z,width:"1551",height:"627"})),(0,a.kt)("h3",{id:"\u514b\u9686"},"\u514b\u9686"),(0,a.kt)("p",null,"\u514b\u9686\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c06\u4ee3\u7801\u4ed3\u5e93\u590d\u5236\u4e86\u4e00\u4efd\u3002"),(0,a.kt)("p",null,"\u4ee5\u6b64\u4ee3\u7801\u4ed3\u5e93\u4e3a\u4f8b\uff0c\u5b9e\u9645\u64cd\u4f5c\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/idealjs/web-tutorial.git\n")),(0,a.kt)("p",null,"\u540e\u9762\u7684\u5730\u5740\u6211\u4eec\u53ef\u4ee5\u5728 github \u4e0a\u770b\u5230\uff0c\u4f46\u662f\u9700\u8981\u9009\u7528 https \u7684\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a ssh \u5730\u5740\u9700\u8981\u505a\u4e00\u4e9b\u914d\u7f6e\uff0c\u6240\u4ee5\u5148\u7528 https \u7684\u5730\u5740\u514b\u9686\u3002"),(0,a.kt)("p",null,"\u88ab\u514b\u9686\u7684\u4ed3\u5e93\uff0c\u6211\u4eec\u901a\u5e38\u53eb\u4ed6 ",(0,a.kt)("strong",{parentName:"p"},"\u8fdc\u7a0b\u4ed3\u5e93"),"\u3002\u6216\u8005\u6e90\u4ed3\u5e93\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u9884\u89c8\u6548\u679c",src:n(3093).Z,width:"1226",height:"715"})),(0,a.kt)("h3",{id:"\u62c9\u53d6\u4ee3\u7801"},"\u62c9\u53d6\u4ee3\u7801"),(0,a.kt)("p",null,"\u521a\u514b\u9686\u4e0b\u7684\u4ee3\u7801\u53ef\u80fd\u662f\u6700\u65b0\u7684\uff0c\u4f46\u662f\u8fc7\u4e00\u6bb5\u65f6\u95f4\u5982\u679c\u6709\u4eba\u63a8\u9001\u4e86\u65b0\u7684\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u90a3\u4e48\u672c\u5730\u4ed3\u5e93\u5982\u4f55\u540c\u6b65\u8fdc\u7a0b\u4ed3\u5e93\u5462\u3002"),(0,a.kt)("p",null,"\u8f93\u5165\u5982\u4e0b\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git pull\n")),(0,a.kt)("h3",{id:"\u63a8\u9001\u4ee3\u7801"},"\u63a8\u9001\u4ee3\u7801"),(0,a.kt)("p",null,"\u4fee\u6539\u540e\u7684\u4ee3\u7801\uff0c\u60f3\u8981\u5171\u4eab\u7ed9\u5176\u4ed6\u4eba\uff0c\u8981\u5982\u4f55\u505a\uff1f"),(0,a.kt)("p",null,"\u5728 git \u4e2d\uff0c\u53ef\u4ee5\u63a8\u9001\u7684\u4e1c\u897f\u53ea\u6709\u4fee\u6539\u8bb0\u5f55\u3002"),(0,a.kt)("p",null,"\u800c\u4fee\u6539\u8bb0\u5f55\u662f\u4e0d\u4f1a\u56e0\u4e3a\u6587\u4ef6\u88ab\u66f4\u6539\uff0c\u5c31\u81ea\u52a8\u751f\u6210\u7684\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7 git \u5de5\u5177\u628a\u6587\u4ef6\u4fee\u6539\u8bb0\u5f55\u4e0b\u6765\u3002"),(0,a.kt)("p",null,"\u7528\u5982\u4e0b\u547d\u4ee4\u628a\u6240\u6709\u7684\u4fee\u6539\u90fd\u8bb0\u5f55\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git add .\n")),(0,a.kt)("p",null,"\u7136\u540e\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git commit -m "test"\n')),(0,a.kt)("p",null,"\u6700\u540e\u628a\u65b0\u7684\u63d0\u4ea4\u8bb0\u5f55\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push\n")))}m.isMDXComponent=!0},2161:function(e,t,n){t.Z=n.p+"assets/images/post-1-1-56fb80638b437f26883498732fa6dbd9.png"},3093:function(e,t,n){t.Z=n.p+"assets/images/post-1-2-c069723346805d039a57f29fa62e746c.png"}}]);