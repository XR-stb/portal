"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4665],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=o,g=m["".concat(l,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(g,p(p({ref:t},d),{},{components:n})):r.createElement(g,p({ref:t},d))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9087:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={},l={unversionedId:"faq/troubleshooting",id:"faq/troubleshooting",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"1 goctl\u5b89\u88c5\u4e86\u6267\u884c\u547d\u4ee4\u5374\u63d0\u793a command not found: goctl \u5b57\u6837\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/faq/troubleshooting.md",sourceDirName:"faq",slug:"/faq/troubleshooting",permalink:"/cn/docs/faq/troubleshooting",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/faq/troubleshooting.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"go-zero\u94fe\u8def\u8ffd\u8e2a",permalink:"/cn/docs/deployment/trace"},next:{title:"\u5e38\u89c1\u9519\u8bef\u5904\u7406",permalink:"/cn/docs/faq/error"}},c=[{value:"1 goctl\u5b89\u88c5\u4e86\u6267\u884c\u547d\u4ee4\u5374\u63d0\u793a <code>command not found: goctl</code> \u5b57\u6837\u3002",id:"1-goctl\u5b89\u88c5\u4e86\u6267\u884c\u547d\u4ee4\u5374\u63d0\u793a-command-not-found-goctl-\u5b57\u6837",children:[]},{value:"2. rpc\u600e\u4e48\u8c03\u7528",id:"2-rpc\u600e\u4e48\u8c03\u7528",children:[]},{value:"3. proto\u4f7f\u7528\u4e86import\uff0cgoctl\u547d\u4ee4\u9700\u8981\u600e\u4e48\u5199\u3002",id:"3-proto\u4f7f\u7528\u4e86importgoctl\u547d\u4ee4\u9700\u8981\u600e\u4e48\u5199",children:[]},{value:"4. \u5047\u8bbe <code>base.proto</code> \u7684\u88abmain proto \u5f15\u5165\u4e86\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u751f\u80fd\u751f\u6210<code>base.pb.go</code>\u3002",id:"4-\u5047\u8bbe-baseproto-\u7684\u88abmain-proto-\u5f15\u5165\u4e86\u4e3a\u4ec0\u4e48\u4e0d\u751f\u80fd\u751f\u6210basepbgo",children:[]},{value:"5. model\u600e\u4e48\u63a7\u5236\u7f13\u5b58\u65f6\u95f4",id:"5-model\u600e\u4e48\u63a7\u5236\u7f13\u5b58\u65f6\u95f4",children:[]},{value:"6. jwt\u9274\u6743\u600e\u4e48\u5b9e\u73b0",id:"6-jwt\u9274\u6743\u600e\u4e48\u5b9e\u73b0",children:[]},{value:"7. api\u4e2d\u95f4\u4ef6\u600e\u4e48\u4f7f\u7528",id:"7-api\u4e2d\u95f4\u4ef6\u600e\u4e48\u4f7f\u7528",children:[]},{value:"8. \u600e\u4e48\u5173\u95ed\u8f93\u51fa\u7684\u7edf\u8ba1\u65e5\u5fd7(stat)\uff1f",id:"8-\u600e\u4e48\u5173\u95ed\u8f93\u51fa\u7684\u7edf\u8ba1\u65e5\u5fd7stat",children:[]},{value:"9. rpc\u76f4\u8fde\u4e0e\u670d\u52a1\u53d1\u73b0\u8fde\u63a5\u6a21\u5f0f\u5199\u6cd5",id:"9-rpc\u76f4\u8fde\u4e0e\u670d\u52a1\u53d1\u73b0\u8fde\u63a5\u6a21\u5f0f\u5199\u6cd5",children:[]},{value:"10. \u8de8\u57df",id:"10-\u8de8\u57df",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-goctl\u5b89\u88c5\u4e86\u6267\u884c\u547d\u4ee4\u5374\u63d0\u793a-command-not-found-goctl-\u5b57\u6837"},"1 goctl\u5b89\u88c5\u4e86\u6267\u884c\u547d\u4ee4\u5374\u63d0\u793a ",(0,a.kt)("inlineCode",{parentName:"h3"},"command not found: goctl")," \u5b57\u6837\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," \u65b9\u5f0f\u5b89\u88c5\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl")," \u5e94\u8be5\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH")," \u4e2d\uff0c\n\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"go env GOPATH")," \u67e5\u770b\u5b8c\u6574\u8def\u5f84\uff0c\u4e0d\u7ba1\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl")," \u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH"),"\u4e2d\uff0c\n\u8fd8\u662f\u5728\u5176\u4ed6\u76ee\u5f55\uff0c\u51fa\u73b0\u4e0a\u8ff0\u95ee\u9898\u7684\u539f\u56e0\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl")," \u6240\u5728\u76ee\u5f55\u4e0d\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," (\u73af\u5883\u53d8\u91cf)\u4e2d\u6240\u81f4\u3002"),(0,a.kt)("h3",{id:"2-rpc\u600e\u4e48\u8c03\u7528"},"2. rpc\u600e\u4e48\u8c03\u7528"),(0,a.kt)("p",null,"\u8be5\u95ee\u9898\u53ef\u4ee5\u53c2\u8003\u5feb\u901f\u5f00\u59cb\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"../advance/rpc-call"},"rpc\u7f16\u5199\u4e0e\u8c03\u7528"),"\u4ecb\u7ecd\uff0c\u5176\u4e2d\u6709rpc\u8c03\u7528\u7684\u4f7f\u7528\u903b\u8f91\u3002"),(0,a.kt)("h3",{id:"3-proto\u4f7f\u7528\u4e86importgoctl\u547d\u4ee4\u9700\u8981\u600e\u4e48\u5199"},"3. proto\u4f7f\u7528\u4e86import\uff0cgoctl\u547d\u4ee4\u9700\u8981\u600e\u4e48\u5199\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"goctl")," \u5bf9\u4e8eimport\u7684proto\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"BasePath")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc")," \u7684flag\u6620\u5c04\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"--proto_path, -I"),"\uff0c\n",(0,a.kt)("inlineCode",{parentName:"p"},"goctl")," \u4f1a\u5c06\u6b64flag\u503c\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc"),"."),(0,a.kt)("h3",{id:"4-\u5047\u8bbe-baseproto-\u7684\u88abmain-proto-\u5f15\u5165\u4e86\u4e3a\u4ec0\u4e48\u4e0d\u751f\u80fd\u751f\u6210basepbgo"},"4. \u5047\u8bbe ",(0,a.kt)("inlineCode",{parentName:"h3"},"base.proto")," \u7684\u88abmain proto \u5f15\u5165\u4e86\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u751f\u80fd\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"h3"},"base.pb.go"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"base.proto")," \u8fd9\u79cd\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u4e00\u822c\u90fd\u662f\u5f00\u53d1\u8005\u6709message\u590d\u7528\u7684\u9700\u6c42\uff0c\u4ed6\u7684\u6765\u6e90\u4e0d\u6b62\u6709\u5f00\u53d1\u8005\u81ea\u5df1\u7f16\u5199\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"proto"),"\u6587\u4ef6\uff0c\n\u8fd8\u6709\u53ef\u80fd\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"google.golang.org/grpc")," \u4e2d\u63d0\u4f9b\u7684\u4e00\u4e9b\u57fa\u672c\u7684proto,\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"google/protobuf/any.proto"),", \u5982\u679c\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl"),"\n\u6765\u751f\u6210\uff0c\u90a3\u4e48\u5c31\u5931\u53bb\u4e86\u96c6\u4e2d\u7ba1\u7406\u8fd9\u4e9bproto\u7684\u610f\u4e49\u3002"),(0,a.kt)("h3",{id:"5-model\u600e\u4e48\u63a7\u5236\u7f13\u5b58\u65f6\u95f4"},"5. model\u600e\u4e48\u63a7\u5236\u7f13\u5b58\u65f6\u95f4"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlc.NewNodeConn")," \u7684\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u53ef\u9009\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"cache.WithExpiry")," \u4f20\u9012\uff0c\u5982\u7f13\u5b58\u65f6\u95f4\u63a7\u5236\u4e3a1\u5929\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"sqlc.NewNodeConn(conn,redis,cache.WithExpiry(24*time.Hour))  \n")),(0,a.kt)("h3",{id:"6-jwt\u9274\u6743\u600e\u4e48\u5b9e\u73b0"},"6. jwt\u9274\u6743\u600e\u4e48\u5b9e\u73b0"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../advance/jwt"},"jwt\u9274\u6743")),(0,a.kt)("h3",{id:"7-api\u4e2d\u95f4\u4ef6\u600e\u4e48\u4f7f\u7528"},"7. api\u4e2d\u95f4\u4ef6\u600e\u4e48\u4f7f\u7528"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../advance/middleware"},"\u4e2d\u95f4\u4ef6")),(0,a.kt)("h3",{id:"8-\u600e\u4e48\u5173\u95ed\u8f93\u51fa\u7684\u7edf\u8ba1\u65e5\u5fd7stat"},"8. \u600e\u4e48\u5173\u95ed\u8f93\u51fa\u7684\u7edf\u8ba1\u65e5\u5fd7(stat)\uff1f"),(0,a.kt)("p",null,"logx.DisableStat()"),(0,a.kt)("h3",{id:"9-rpc\u76f4\u8fde\u4e0e\u670d\u52a1\u53d1\u73b0\u8fde\u63a5\u6a21\u5f0f\u5199\u6cd5"},"9. rpc\u76f4\u8fde\u4e0e\u670d\u52a1\u53d1\u73b0\u8fde\u63a5\u6a21\u5f0f\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// mode1: \u96c6\u7fa4\u76f4\u8fde\n// conf:=zrpc.NewDirectClientConf([]string{"ip:port"},"app","token")\n\n// mode2: etcd \u670d\u52a1\u53d1\u73b0\n// conf:=zrpc.NewEtcdClientConf([]string{"ip:port"},"key","app","token")\n// client, _ := zrpc.NewClient(conf)\n\n// mode3: ip\u76f4\u8fdemode\n// client, _ := zrpc.NewClientWithTarget("127.0.0.1:8888")\n')),(0,a.kt)("h3",{id:"10-\u8de8\u57df"},"10. \u8de8\u57df"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"srv := rest.MustNewServer(c, rest.WithCors())\n")),(0,a.kt)("p",null,"\u5355\u4e2a\u57df\u540d\u7684\u60c5\u51b5\uff1a "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'srv := rest.MustNewServer(c, rest.WithCors("http://example.com"))\n')),(0,a.kt)("p",null,"faq\u4f1a\u4e0d\u5b9a\u671f\u66f4\u65b0\u5927\u5bb6\u9047\u5230\u7684\u95ee\u9898\uff0c\u4e5f\u6b22\u8fce\u5927\u5bb6\u628a\u5e38\u89c1\u95ee\u9898\u901a\u8fc7pr\u5199\u5728\u8fd9\u91cc\u3002"))}u.isMDXComponent=!0}}]);