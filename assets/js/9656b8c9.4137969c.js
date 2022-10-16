"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1671],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,y=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9912:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),c=["components"],o={},a={unversionedId:"advance/service-design",id:"advance/service-design",isDocsHomePage:!1,title:"Directory Structure",description:"Directory splitting refers to the directory splitting in line with the best practices of go-zero, which is related to the splitting of microservices. In the best practice within the team,",source:"@site/docs/advance/service-design.md",sourceDirName:"advance",slug:"/advance/service-design",permalink:"/docs/advance/service-design",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/service-design.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"A Business Scenerio",permalink:"/docs/advance/business-dev"},next:{title:"Model Generation",permalink:"/docs/advance/model-gen"}},l=[{value:"System structure analysis",id:"system-structure-analysis",children:[]},{value:"rpc call chain suggestion",id:"rpc-call-chain-suggestion",children:[]},{value:"Directory structure of common service types",id:"directory-structure-of-common-service-types",children:[]},{value:"Example of complete project directory structure",id:"example-of-complete-project-directory-structure",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,s.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Directory splitting refers to the directory splitting in line with the best practices of go-zero, which is related to the splitting of microservices. In the best practice within the team,\nWe split a system into multiple subsystems according to the horizontal division of the business, and each subsystem should have an independent persistent storage and cache system.\nFor example, a shopping mall system needs to consist of a user system (user), a product management system (product), an order system (order), a shopping cart system (cart), a settlement center system (pay), an after-sale system (afterSale), etc."),(0,i.kt)("h2",{id:"system-structure-analysis"},"System structure analysis"),(0,i.kt)("p",null,"In the mall system mentioned above, while each system provides services to the outside (http), it also provides data to other subsystems for data access interfaces (rpc), so each subsystem can be split into a service , And provides two external ways to access the system, api and rpc, therefore,\nThe above system is divided into the following structure according to the directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 afterSale\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n\u251c\u2500\u2500 cart\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n\u251c\u2500\u2500 order\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n\u251c\u2500\u2500 pay\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n\u251c\u2500\u2500 product\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n\u2514\u2500\u2500 user\n    \u251c\u2500\u2500 api\n    \u2514\u2500\u2500 rpc\n")),(0,i.kt)("h2",{id:"rpc-call-chain-suggestion"},"rpc call chain suggestion"),(0,i.kt)("p",null,"When designing the system, try to make the call between services one-way in the chain instead of cyclically. For example, the order service calls the user service, and the user service does not call the order service in turn.\nWhen one of the services fails to start, it will affect each other and enter an infinite loop. You order to think it is caused by the user service failure, and the user thinks it is caused by the order service. If there are a large number of services in a mutual call chain,\nYou need to consider whether the service split is reasonable."),(0,i.kt)("h2",{id:"directory-structure-of-common-service-types"},"Directory structure of common service types"),(0,i.kt)("p",null,"Among the above services, only api/rpc services are listed. In addition, there may be more service types under one service, such as rmq (message processing system), cron (timed task system), script (script), etc. ,\nTherefore, a service may contain the following directory structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u251c\u2500\u2500 api //  http access service, business requirement realization\n\u251c\u2500\u2500 cronjob // Timed task, timed data update service\n\u251c\u2500\u2500 rmq // Message processing system: mq and dq, handle some high concurrency and delay message services\n\u251c\u2500\u2500 rpc // rpc service to provide basic data access to other subsystems\n\u2514\u2500\u2500 script // Script, handle some temporary operation requirements, and repair temporary data\n")),(0,i.kt)("h2",{id:"example-of-complete-project-directory-structure"},"Example of complete project directory structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"mall // Project name\n\u251c\u2500\u2500 common // Common lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 randx\n\u2502\xa0\xa0 \u2514\u2500\u2500 stringx\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u2514\u2500\u2500 service // business logic\n    \u251c\u2500\u2500 afterSale\n    \u2502\xa0\xa0 \u251c\u2500\u2500 api\n    \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n    \u251c\u2500\u2500 cart\n    \u2502\xa0\xa0 \u251c\u2500\u2500 api\n    \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n    \u251c\u2500\u2500 order\n    \u2502\xa0\xa0 \u251c\u2500\u2500 api\n    \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n    \u251c\u2500\u2500 pay\n    \u2502\xa0\xa0 \u251c\u2500\u2500 api\n    \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n    \u251c\u2500\u2500 product\n    \u2502\xa0\xa0 \u251c\u2500\u2500 api\n    \u2502\xa0\xa0 \u2514\u2500\u2500 model\n    \u2502\xa0\xa0 \u2514\u2500\u2500 rpc\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 api\n        \u251c\u2500\u2500 cronjob\n        \u251c\u2500\u2500 model\n        \u251c\u2500\u2500 rmq\n        \u251c\u2500\u2500 rpc\n        \u2514\u2500\u2500 script\n")))}u.isMDXComponent=!0}}]);