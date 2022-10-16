"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[5685],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,c(c({ref:t},l),{},{components:n})):a.createElement(k,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<i;o++)c[o]=n[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4067:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return o}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],s={},p={unversionedId:"advance/jwt",id:"advance/jwt",isDocsHomePage:!1,title:"jwt\u9274\u6743",description:"\u6982\u8ff0",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/advance/jwt.md",sourceDirName:"advance",slug:"/advance/jwt",permalink:"/cn/docs/advance/jwt",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/advance/jwt.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u4e1a\u52a1\u7f16\u7801",permalink:"/cn/docs/advance/business-coding"},next:{title:"\u4e2d\u95f4\u4ef6\u4f7f\u7528",permalink:"/cn/docs/advance/middleware"}},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528JWT",id:"\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528jwt",children:[]},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528JSON Web\u4ee4\u724c",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528json-web\u4ee4\u724c",children:[]},{value:"go-zero\u4e2d\u600e\u4e48\u4f7f\u7528jwt",id:"go-zero\u4e2d\u600e\u4e48\u4f7f\u7528jwt",children:[{value:"user api\u751f\u6210jwt token",id:"user-api\u751f\u6210jwt-token",children:[]},{value:"search api\u4f7f\u7528jwt token\u9274\u6743",id:"search-api\u4f7f\u7528jwt-token\u9274\u6743",children:[]},{value:"\u9a8c\u8bc1 jwt token",id:"\u9a8c\u8bc1-jwt-token",children:[]},{value:"\u83b7\u53d6jwt token\u4e2d\u643a\u5e26\u7684\u4fe1\u606f",id:"\u83b7\u53d6jwt-token\u4e2d\u643a\u5e26\u7684\u4fe1\u606f",children:[]}]}],l={toc:o};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"JSON Web\u4ee4\u724c\uff08JWT\uff09\u662f\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\uff08RFC 7519\uff09\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u79cd\u7d27\u51d1\u800c\u72ec\u7acb\u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u5728\u5404\u65b9\u4e4b\u95f4\u5b89\u5168\u5730\u5c06\u4fe1\u606f\u4f5c\u4e3aJSON\u5bf9\u8c61\u4f20\u8f93\u3002\u7531\u4e8e\u6b64\u4fe1\u606f\u662f\u7ecf\u8fc7\u6570\u5b57\u7b7e\u540d\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u88ab\u9a8c\u8bc1\u548c\u4fe1\u4efb\u3002\u53ef\u4ee5\u4f7f\u7528\u79d8\u94a5\uff08\u4f7f\u7528HMAC\u7b97\u6cd5\uff09\u6216\u4f7f\u7528RSA\u6216ECDSA\u7684\u516c\u94a5/\u79c1\u94a5\u5bf9\u5bf9JWT\u8fdb\u884c\u7b7e\u540d\u3002")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528jwt"},"\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528JWT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6388\u6743\uff1a\u8fd9\u662f\u4f7f\u7528JWT\u7684\u6700\u5e38\u89c1\u65b9\u6848\u3002\u4e00\u65e6\u7528\u6237\u767b\u5f55\uff0c\u6bcf\u4e2a\u540e\u7eed\u8bf7\u6c42\u5c06\u5305\u62ecJWT\uff0c\u4ece\u800c\u5141\u8bb8\u7528\u6237\u8bbf\u95ee\u8be5\u4ee4\u724c\u5141\u8bb8\u7684\u8def\u7531\uff0c\u670d\u52a1\u548c\u8d44\u6e90\u3002\u5355\u4e00\u767b\u5f55\u662f\u5f53\u4eca\u5e7f\u6cdb\u4f7f\u7528JWT\u7684\u4e00\u9879\u529f\u80fd\uff0c\u56e0\u4e3a\u5b83\u7684\u5f00\u9500\u5f88\u5c0f\u5e76\u4e14\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u57df\u4e2d\u8f7b\u677e\u4f7f\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4fe1\u606f\u4ea4\u6362\uff1aJSON Web\u4ee4\u724c\u662f\u5728\u5404\u65b9\u4e4b\u95f4\u5b89\u5168\u5730\u4f20\u8f93\u4fe1\u606f\u7684\u4e00\u79cd\u597d\u65b9\u6cd5\u3002\u56e0\u4e3a\u53ef\u4ee5\u5bf9JWT\u8fdb\u884c\u7b7e\u540d\uff08\u4f8b\u5982\uff0c\u4f7f\u7528\u516c\u94a5/\u79c1\u94a5\u5bf9\uff09\uff0c\u6240\u4ee5\u60a8\u53ef\u4ee5\u786e\u4fdd\u53d1\u4ef6\u4eba\u662f\u4ed6\u4eec\u6240\u8bf4\u7684\u4eba\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u7b7e\u540d\u662f\u4f7f\u7528\u6807\u5934\u548c\u6709\u6548\u8d1f\u8f7d\u8ba1\u7b97\u7684\uff0c\u56e0\u6b64\u60a8\u8fd8\u53ef\u4ee5\u9a8c\u8bc1\u5185\u5bb9\u662f\u5426\u672a\u88ab\u7be1\u6539\u3002"))),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528json-web\u4ee4\u724c"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528JSON Web\u4ee4\u724c"),(0,i.kt)("p",null,"\u7531\u4e8eJSON\u4e0d\u5982XML\u5197\u957f\uff0c\u56e0\u6b64\u5728\u7f16\u7801\u65f6JSON\u7684\u5927\u5c0f\u4e5f\u8f83\u5c0f\uff0c\u4ece\u800c\u4f7fJWT\u6bd4SAML\u66f4\u4e3a\u7d27\u51d1\u3002\u8fd9\u4f7f\u5f97JWT\u662f\u5728HTML\u548cHTTP\u73af\u5883\u4e2d\u4f20\u9012\u7684\u4e0d\u9519\u7684\u9009\u62e9\u3002"),(0,i.kt)("p",null,"\u5728\u5b89\u5168\u65b9\u9762\uff0c\u53ea\u80fd\u4f7f\u7528HMAC\u7b97\u6cd5\u7531\u5171\u4eab\u673a\u5bc6\u5bf9SWT\u8fdb\u884c\u5bf9\u79f0\u7b7e\u540d\u3002\u4f46\u662f\uff0cJWT\u548cSAML\u4ee4\u724c\u53ef\u4ee5\u4f7f\u7528X.509\u8bc1\u4e66\u5f62\u5f0f\u7684\u516c\u7528/\u4e13\u7528\u5bc6\u94a5\u5bf9\u8fdb\u884c\u7b7e\u540d\u3002\u4e0e\u7b7e\u7f72JSON\u7684\u7b80\u5355\u6027\u76f8\u6bd4\uff0c\u4f7f\u7528XML Digital Signature\u7b7e\u7f72XML\u800c\u4e0d\u5f15\u5165\u6a21\u7cca\u7684\u5b89\u5168\u6f0f\u6d1e\u662f\u975e\u5e38\u56f0\u96be\u7684\u3002"),(0,i.kt)("p",null,"JSON\u89e3\u6790\u5668\u5728\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u4e2d\u90fd\u5f88\u5e38\u89c1\uff0c\u56e0\u4e3a\u5b83\u4eec\u76f4\u63a5\u6620\u5c04\u5230\u5bf9\u8c61\u3002\u76f8\u53cd\uff0cXML\u6ca1\u6709\u81ea\u7136\u7684\u6587\u6863\u5230\u5bf9\u8c61\u7684\u6620\u5c04\u3002\u4e0eSAML\u65ad\u8a00\u76f8\u6bd4\uff0c\u8fd9\u4f7f\u4f7f\u7528JWT\u66f4\u52a0\u5bb9\u6613\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e\u7528\u6cd5\uff0cJWT\u662f\u5728Internet\u89c4\u6a21\u4e0a\u4f7f\u7528\u7684\u3002\u8fd9\u7a81\u663e\u4e86\u5728\u591a\u4e2a\u5e73\u53f0\uff08\u5c24\u5176\u662f\u79fb\u52a8\u5e73\u53f0\uff09\u4e0a\u5bf9JSON Web\u4ee4\u724c\u8fdb\u884c\u5ba2\u6237\u7aef\u5904\u7406\u7684\u7b80\u4fbf\u6027\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u5185\u5bb9\u5168\u90e8\u6765\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"jwt\u5b98\u7f51\u4ecb\u7ecd")))),(0,i.kt)("h2",{id:"go-zero\u4e2d\u600e\u4e48\u4f7f\u7528jwt"},"go-zero\u4e2d\u600e\u4e48\u4f7f\u7528jwt"),(0,i.kt)("p",null,"jwt\u9274\u6743\u4e00\u822c\u5728api\u5c42\u4f7f\u7528\uff0c\u6211\u4eec\u8fd9\u6b21\u6f14\u793a\u5de5\u7a0b\u4e2d\u5206\u522b\u5728user api\u767b\u5f55\u65f6\u751f\u6210jwt token\uff0c\u5728search api\u67e5\u8be2\u56fe\u4e66\u65f6\u9a8c\u8bc1\u7528\u6237jwt token\u4e24\u6b65\u6765\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"user-api\u751f\u6210jwt-token"},"user api\u751f\u6210jwt token"),(0,i.kt)("p",null,"\u63a5\u7740",(0,i.kt)("a",{parentName:"p",href:"business-coding"},"\u4e1a\u52a1\u7f16\u7801"),"\u7ae0\u8282\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u5b8c\u5584\u4e0a\u4e00\u8282\u9057\u7559\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"getJwtToken"),"\u65b9\u6cd5\uff0c\u5373\u751f\u6210jwt token\u903b\u8f91"),(0,i.kt)("h4",{id:"\u6dfb\u52a0\u914d\u7f6e\u5b9a\u4e49\u548cyaml\u914d\u7f6e\u9879"},"\u6dfb\u52a0\u914d\u7f6e\u5b9a\u4e49\u548cyaml\u914d\u7f6e\u9879"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/internal/config/config.go\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    rest.RestConf\n    Mysql struct{\n        DataSource string\n    }\n    CacheRedis cache.CacheConf\n    Auth      struct {\n        AccessSecret string\n        AccessExpire int64\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/etc/user-api.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: user-api\nHost: 0.0.0.0\nPort: 8888\nMysql:\n  DataSource: $user:$password@tcp($url)/$db?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai\nCacheRedis:\n  - Host: $host\n    Pass: $pass\n    Type: node\nAuth:\n  AccessSecret: $AccessSecret\n  AccessExpire: $AccessExpire\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"$AccessSecret\uff1a\u751f\u6210jwt token\u7684\u5bc6\u94a5\uff0c\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2auuid\u503c\u3002"),(0,i.kt)("p",{parentName:"div"},"$AccessExpire\uff1ajwt token\u6709\u6548\u671f\uff0c\u5355\u4f4d\uff1a\u79d2"),(0,i.kt)("p",{parentName:"div"},"\u66f4\u591a\u914d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../configuration/api"},"api\u914d\u7f6e\u4ecb\u7ecd")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/internal/logic/loginlogic.go\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (l *LoginLogic) getJwtToken(secretKey string, iat, seconds, userId int64) (string, error) {\n  claims := make(jwt.MapClaims)\n  claims["exp"] = iat + seconds\n  claims["iat"] = iat\n  claims["userId"] = userId\n  token := jwt.New(jwt.SigningMethodHS256)\n  token.Claims = claims\n  return token.SignedString([]byte(secretKey))\n}\n')),(0,i.kt)("h3",{id:"search-api\u4f7f\u7528jwt-token\u9274\u6743"},"search api\u4f7f\u7528jwt token\u9274\u6743"),(0,i.kt)("h4",{id:"\u7f16\u5199searchapi\u6587\u4ef6"},"\u7f16\u5199search.api\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/search.api\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type (\n    SearchReq {\n        // \u56fe\u4e66\u540d\u79f0\n        Name string `form:"name"`\n    }\n\n    SearchReply {\n        Name string `json:"name"`\n        Count int `json:"count"`\n    }\n)\n\n@server(\n    jwt: Auth\n)\nservice search-api {\n    @handler search\n    get /search/do (SearchReq) returns (SearchReply)\n}\n\nservice search-api {\n    @handler ping\n    get /search/ping\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"jwt: Auth"),"\uff1a\u5f00\u542fjwt\u9274\u6743"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u8def\u7531\u9700\u8981jwt\u9274\u6743\uff0c\u5219\u9700\u8981\u5728service\u4e0a\u65b9\u58f0\u660e\u6b64\u8bed\u6cd5\u6807\u5fd7\uff0c\u5982\u4e0a\u6587\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"}," /search/do")),(0,i.kt)("p",{parentName:"div"},"\u4e0d\u9700\u8981jwt\u9274\u6743\u7684\u8def\u7531\u5c31\u65e0\u9700\u58f0\u660e\uff0c\u5982\u4e0a\u6587\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"/search/ping")),(0,i.kt)("p",{parentName:"div"},"\u66f4\u591a\u8bed\u6cd5\u8bf7\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"../design/grammar"},"api\u8bed\u6cd5\u4ecb\u7ecd")))),(0,i.kt)("h4",{id:"\u751f\u6210\u4ee3\u7801"},"\u751f\u6210\u4ee3\u7801"),(0,i.kt)("p",null,"\u524d\u9762\u5df2\u7ecf\u63cf\u8ff0\u8fc7\u6709\u4e09\u79cd\u65b9\u5f0f\u53bb\u751f\u6210\u4ee3\u7801\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d58\u8ff0\u4e86\u3002"),(0,i.kt)("h4",{id:"\u6dfb\u52a0yaml\u914d\u7f6e\u9879"},"\u6dfb\u52a0yaml\u914d\u7f6e\u9879"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/etc/search-api.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: search-api\nHost: 0.0.0.0\nPort: 8889\nAuth:\n  AccessSecret: $AccessSecret\n  AccessExpire: $AccessExpire\n\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"$AccessSecret\uff1a\u8fd9\u4e2a\u503c\u5fc5\u987b\u8981\u548cuser api\u4e2d\u58f0\u660e\u7684\u4e00\u81f4\u3002"),(0,i.kt)("p",{parentName:"div"},"$AccessExpire: \u6709\u6548\u671f"),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u4fee\u6539\u4e00\u4e0b\u7aef\u53e3\uff0c\u907f\u514d\u548cuser api\u7aef\u53e38888\u51b2\u7a81"))),(0,i.kt)("h3",{id:"\u9a8c\u8bc1-jwt-token"},"\u9a8c\u8bc1 jwt token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u542f\u52a8user api\u670d\u52a1\uff0c\u767b\u5f55"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/user/api\n$ go run user.go -f etc/user-api.yaml\nStarting server at 0.0.0.0:8888...\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "username":"666",\n    "password":"123456"\n}\'\n')),(0,i.kt)("p",{parentName:"li"},"  \u5982\u679c\u662f\u5728Windows\u7684CMD\u91cc\u8fd0\u884c\uff0c\u547d\u4ee4\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X POST http://127.0.0.1:8888/user/login -H "Content-Type: application/json" -d "{ \\"username\\":\\"666\\", \\"password\\":\\"123456\\" }"\n')),(0,i.kt)("p",{parentName:"li"},"  \u8bbf\u95ee\u7ed3\u679c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Mon, 08 Feb 2021 10:37:54 GMT\nContent-Length: 251\n\n{"id":1,"name":"\u5c0f\u660e","gender":"\u7537","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI4NjcwNzQsImlhdCI6MTYxMjc4MDY3NCwidXNlcklkIjoxfQ.JKa83g9BlEW84IiCXFGwP2aSd0xF3tMnxrOzVebbt80","accessExpire":1612867074,"refreshAfter":1612823874}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u542f\u52a8search api\u670d\u52a1\uff0c\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"/search/do"),"\u9a8c\u8bc1jwt\u9274\u6743\u662f\u5426\u901a\u8fc7"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ go run search.go -f etc/search-api.yaml\nStarting server at 0.0.0.0:8889...\n")),(0,i.kt)("p",{parentName:"li"},"  \u6211\u4eec\u5148\u4e0d\u4f20jwt token\uff0c\u770b\u770b\u7ed3\u679c"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  'http://127.0.0.1:8889/search/do?name=%E8%A5%BF%E6%B8%B8%E8%AE%B0'\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 401 Unauthorized\nDate: Mon, 08 Feb 2021 10:41:57 GMT\nContent-Length: 0\n")),(0,i.kt)("p",{parentName:"li"},"  \u5f88\u660e\u663e\uff0cjwt\u9274\u6743\u5931\u8d25\u4e86\uff0c\u8fd4\u56de401\u7684statusCode\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5e26\u4e00\u4e0bjwt token\uff08\u5373\u7528\u6237\u767b\u5f55\u8fd4\u56de\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken"),"\uff09"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  'http://127.0.0.1:8889/search/do?name=%E8%A5%BF%E6%B8%B8%E8%AE%B0' \\\n  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTI4NjcwNzQsImlhdCI6MTYxMjc4MDY3NCwidXNlcklkIjoxfQ.JKa83g9BlEW84IiCXFGwP2aSd0xF3tMnxrOzVebbt80'\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Mon, 08 Feb 2021 10:44:45 GMT\nContent-Length: 21\n\n{"name":"","count":0}\n')))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u670d\u52a1\u542f\u52a8\u9519\u8bef\uff0c\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"../faq/error"},"\u5e38\u89c1\u9519\u8bef\u5904\u7406")))),(0,i.kt)("p",null,"\u81f3\u6b64\uff0cjwt\u4ece\u751f\u6210\u5230\u4f7f\u7528\u5c31\u6f14\u793a\u5b8c\u6210\u4e86\uff0cjwt token\u7684\u9274\u6743\u662fgo-zero\u5185\u90e8\u5df2\u7ecf\u5c01\u88c5\u4e86\uff0c\u4f60\u53ea\u9700\u5728api\u6587\u4ef6\u4e2d\u5b9a\u4e49\u670d\u52a1\u65f6\u7b80\u5355\u7684\u58f0\u660e\u4e00\u4e0b\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"\u83b7\u53d6jwt-token\u4e2d\u643a\u5e26\u7684\u4fe1\u606f"},"\u83b7\u53d6jwt token\u4e2d\u643a\u5e26\u7684\u4fe1\u606f"),(0,i.kt)("p",null,"go-zero\u4ecejwt token\u89e3\u6790\u540e\u4f1a\u5c06\u7528\u6237\u751f\u6210token\u65f6\u4f20\u5165\u7684kv\u539f\u5c01\u4e0d\u52a8\u7684\u653e\u5728http.Request\u7684Context\u4e2d\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7Context\u5c31\u53ef\u4ee5\u62ff\u5230\u4f60\u60f3\u8981\u7684\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /service/search/api/internal/logic/searchlogic.go\n")),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2alog\u6765\u8f93\u51fa\u4ecejwt\u89e3\u6790\u51fa\u6765\u7684userId\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (l *SearchLogic) Search(req *types.SearchReq) (*types.SearchReply, error) {\n    logx.Infof("userId: %v",l.ctx.Value("userId"))// \u8fd9\u91cc\u7684key\u548c\u751f\u6210jwt token\u65f6\u4f20\u5165\u7684key\u4e00\u81f4\n    return &types.SearchReply{}, nil\n}\n')),(0,i.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{"@timestamp":"2021-02-09T10:29:09.399+08","level":"info","content":"userId: 1"}\n')))}m.isMDXComponent=!0}}]);