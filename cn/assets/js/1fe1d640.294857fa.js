"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,d=g["".concat(l,".").concat(m)]||g[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2824:function(e,t,n){n.r(t),n.d(t,{default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l={unversionedId:"quick-start/monolithic-service",id:"quick-start/monolithic-service",isDocsHomePage:!1,title:"\u5355\u4f53\u670d\u52a1",description:"\u524d\u8a00",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick-start/monolithic-service.md",sourceDirName:"quick-start",slug:"/quick-start/monolithic-service",permalink:"/cn/docs/quick-start/monolithic-service",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/quick-start/monolithic-service.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/cn/docs/quick-start/quick-start"},next:{title:"\u5fae\u670d\u52a1",permalink:"/cn/docs/quick-start/micro-service"}},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u521b\u5efagreet\u670d\u52a1",id:"\u521b\u5efagreet\u670d\u52a1",children:[]},{value:"\u7f16\u5199\u903b\u8f91",id:"\u7f16\u5199\u903b\u8f91",children:[]},{value:"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1",id:"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u7531\u4e8ego-zero\u96c6\u6210\u4e86web/rpc\u4e8e\u4e00\u4f53\uff0c\u793e\u533a\u6709\u90e8\u5206\u5c0f\u4f19\u4f34\u4f1a\u95ee\u6211\uff0cgo-zero\u7684\u5b9a\u4f4d\u662f\u5426\u662f\u4e00\u6b3e\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u7b54\u6848\u662f\u4e0d\u6b62\u4e8e\u6b64\uff0c\ngo-zero\u867d\u7136\u96c6\u4f17\u591a\u529f\u80fd\u4e8e\u4e00\u8eab\uff0c\u4f46\u4f60\u53ef\u4ee5\u5c06\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u529f\u80fd\u72ec\u7acb\u51fa\u6765\u53bb\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5f00\u53d1\u5355\u4f53\u670d\u52a1\uff0c\n\u4e0d\u662f\u8bf4\u6bcf\u4e2a\u670d\u52a1\u4e0a\u6765\u5c31\u4e00\u5b9a\u8981\u91c7\u7528\u5fae\u670d\u52a1\u7684\u67b6\u6784\u7684\u8bbe\u8ba1\uff0c\u8fd9\u70b9\u5927\u5bb6\u53ef\u4ee5\u770b\u770b\u4f5c\u8005(kevin)\u7684\u7b2c\u56db\u671f",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Jy4y127Xu"},"\u5f00\u6e90\u8bf4")," \uff0c\u5176\u4e2d\u5bf9\u6b64\u6709\u8be6\u7ec6\u7684\u8bb2\u89e3\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efagreet\u670d\u52a1"},"\u521b\u5efagreet\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir go-zero-demo\n$ cd go-zero-demo\n$ go mod init go-zero-demo\n$ goctl api new greet\n$ go mod tidy\nDone.\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a\u5982\u65e0 ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," \u6539\u53d8\u76ee\u5f55\u7684\u64cd\u4f5c\uff0c\u6240\u6709\u64cd\u4f5c\u5747\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"go-zero-demo")," \u76ee\u5f55\u6267\u884c")),(0,a.kt)("p",null,"\u67e5\u770b\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"greet"),"\u670d\u52a1\u7684\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree greet\ngreet\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet-api.yaml\n\u251c\u2500\u2500 greet.api\n\u251c\u2500\u2500 greet.go\n\u2514\u2500\u2500 internal\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u251c\u2500\u2500 handler\n    \u2502\xa0\xa0 \u251c\u2500\u2500 greethandler.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 routes.go\n    \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go\n    \u251c\u2500\u2500 svc\n    \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go\n    \u2514\u2500\u2500 types\n        \u2514\u2500\u2500 types.go\n")),(0,a.kt)("p",null,"\u7531\u4ee5\u4e0a\u76ee\u5f55\u7ed3\u6784\u53ef\u4ee5\u89c2\u5bdf\u5230\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"greet"),'\u670d\u52a1\u867d\u5c0f\uff0c\u4f46"\u4e94\u810f\u4ff1\u5168"\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u5728',(0,a.kt)("inlineCode",{parentName:"p"},"greetlogic.go"),"\u4e2d\u7f16\u5199\u4e1a\u52a1\u4ee3\u7801\u4e86\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199\u903b\u8f91"},"\u7f16\u5199\u903b\u8f91"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim greet/internal/logic/greetlogic.go \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (l *GreetLogic) Greet(req *types.Request) (*types.Response, error) {\n    return &types.Response{\n        Message: "Hello go-zero",\n    }, nil\n}\n')),(0,a.kt)("h2",{id:"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1"},"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd greet\n$ go run greet.go -f etc/greet-api.yaml\n")),(0,a.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5982\u4e0b\uff0c\u670d\u52a1\u542f\u52a8\u5e76\u4fa6\u542c\u57288888\u7aef\u53e3\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Starting server at 0.0.0.0:8888...\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u670d\u52a1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET http://localhost:8888/from/you\n")),(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 07 Feb 2021 04:31:25 GMT\nContent-Length: 27\n  \n{"message":"Hello go-zero"}\n')))),(0,a.kt)("h1",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero-demo/tree/master/greet"},"greet\u6e90\u7801")))}s.isMDXComponent=!0}}]);