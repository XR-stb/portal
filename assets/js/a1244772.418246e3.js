"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4017],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5015:function(e,t,a){a.r(t),a.d(t,{default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={},s={unversionedId:"blog/share/online-exchange",id:"blog/share/online-exchange",isDocsHomePage:!1,title:"Online Communication on October 3,2020",description:"- Go-zero applicable scenarios",source:"@site/docs/blog/share/online-exchange.md",sourceDirName:"blog/share",slug:"/blog/share/online-exchange",permalink:"/docs/blog/share/online-exchange",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/share/online-exchange.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{},sidebar:"blog",previous:{title:"Microservice metrics monitoring based on prometheus",permalink:"/docs/blog/showcase/metric"},next:{title:"goctl share part 1",permalink:"/docs/blog/share/goctl-share-part-one"}},c=[],u={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go-zero applicable scenarios",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"I hope to talk about the application scenarios and the advantages of each scenario",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Highly concurrent microservice system"),(0,r.kt)("li",{parentName:"ul"},"Support tens of millions of daily activities, millions of QPS"),(0,r.kt)("li",{parentName:"ul"},"Complete microservice governance capabilities"),(0,r.kt)("li",{parentName:"ul"},"Support custom middleware"),(0,r.kt)("li",{parentName:"ul"},"Well managed database and cache"),(0,r.kt)("li",{parentName:"ul"},"Effectively isolate faults"))),(0,r.kt)("li",{parentName:"ul"},"Monolithic system with low concurrency",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This kind of system can directly use the api layer without rpc service"))),(0,r.kt)("li",{parentName:"ul"},"Use scenarios and use cases of each function",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Limiting"),(0,r.kt)("li",{parentName:"ul"},"Fuse"),(0,r.kt)("li",{parentName:"ul"},"Load reduction"),(0,r.kt)("li",{parentName:"ul"},"time out"),(0,r.kt)("li",{parentName:"ul"},"Observability"))))),(0,r.kt)("li",{parentName:"ul"},"The actual experience of go-zero",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The service is stable"),(0,r.kt)("li",{parentName:"ul"},"Front-end and back-end interface consistency, one api file can generate front-end and back-end code"),(0,r.kt)("li",{parentName:"ul"},"Less specification and less code means less bugs"),(0,r.kt)("li",{parentName:"ul"},"Eliminate api documents, greatly reducing communication costs"),(0,r.kt)("li",{parentName:"ul"},"The code structure is completely consistent, easy to maintain and take over"))),(0,r.kt)("li",{parentName:"ul"},"Project structure of microservices, CICD processing of monorepo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  bookstore\n  \u251c\u2500\u2500 api\n  \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n  \u2502\xa0\xa0 \u2514\u2500\u2500 internal\n  \u2502\xa0\xa0     \u251c\u2500\u2500 config\n  \u2502\xa0\xa0     \u251c\u2500\u2500 handler\n  \u2502\xa0\xa0     \u251c\u2500\u2500 logic\n  \u2502\xa0\xa0     \u251c\u2500\u2500 svc\n  \u2502\xa0\xa0     \u2514\u2500\u2500 types\n  \u2514\u2500\u2500 rpc\n  \u251c\u2500\u2500 add\n  \u2502\xa0\xa0 \u251c\u2500\u2500 adder\n  \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n  \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 server\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 svc\n  \u2502\xa0\xa0 \u2514\u2500\u2500 pb\n  \u251c\u2500\u2500 check\n  \u2502\xa0\xa0 \u251c\u2500\u2500 checker\n  \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n  \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 server\n  \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 svc\n  \u2502\xa0\xa0 \u2514\u2500\u2500 pb\n  \u2514\u2500\u2500 model\n")),(0,r.kt)("p",null,"The CI of the mono repo is made through gitlab, and the CD uses jenkins\nCI is as strict as possible, such as -race, using tools such as sonar\nCD has development, testing, pre-release, grayscale and formal clusters\nIf it is in grayscale at 6 p.m. and there is no fault, it will automatically synchronize to the official cluster at 10 the next day\nThe formal cluster is divided into multiple k8s clusters, which can effectively prevent a single cluster from failing, just remove it directly, and the cluster upgrade is better"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How to deploy and how to monitor?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The full amount of K8S is automatically packaged into a docker image through jenkins, and the tag is packaged according to the time, so that you can see which day of the image is at a glance"),(0,r.kt)("li",{parentName:"ul"},"As mentioned above, pre-release -> grayscale -> formal"),(0,r.kt)("li",{parentName:"ul"},"Prometheus+ self-built dashboard service"),(0,r.kt)("li",{parentName:"ul"},"Detect service and request exceptions based on logs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you plan to change the go-zero framework to refactor your business, how can you make the online business stable and safe for users to switch without feeling? In addition, how to divide the service under consultation?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Gradually replace, from outside to inside, add a proxy to proofread, you can switch after proofreading a week"),(0,r.kt)("li",{parentName:"ul"},"If there is a database reconstruction, you need to do a good job of synchronizing the old and the new"),(0,r.kt)("li",{parentName:"ul"},"Service division is based on business, following the principle of coarse to fine, avoiding one api and one microservice"),(0,r.kt)("li",{parentName:"ul"},"Data splitting is particularly important for microservices. The upper layer is easy to split, and the data is difficult to split. As far as possible, ensure that the data is split according to the business"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service discovery"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Service discovery etcd key design",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Service key + timestamp, the probability of timestamp conflict in the number of service processes is extremely low, ignore it"))),(0,r.kt)("li",{parentName:"ul"},"etcd service discovery and management, exception capture and exception handling",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Why k8s also uses etcd for service discovery, because the refresh of dns is delayed, resulting in a large number of failures in rolling updates, and etcd can achieve completely lossless updates"),(0,r.kt)("li",{parentName:"ul"},"The etcd cluster is directly deployed in the k8s cluster, because there are multiple formal clusters, clusters are single-pointed and registered to avoid confusion"),(0,r.kt)("li",{parentName:"ul"},"Automatically detect and refresh for etcd abnormalities or leader switching. When etcd has abnormalities that cannot be recovered, the service list will not be refreshed to ensure that the services are still available"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache design and use cases"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Distributed multiple redis clusters, dozens of largest online clusters provide caching services for the same service"),(0,r.kt)("li",{parentName:"ul"},"Seamless expansion and contraction"),(0,r.kt)("li",{parentName:"ul"},"There is no cache without expiration time to avoid a large amount of infrequently used data occupying resources, the default is one week"),(0,r.kt)("li",{parentName:"ul"},"Cache penetration, no data will be cached for one minute for a short period of time to avoid the system crashing due to interface brushing or a large number of non-existent data requests"),(0,r.kt)("li",{parentName:"ul"},"Cache breakdown, a process will only refresh the same data once, avoiding a large number of hot data being loaded at the same time"),(0,r.kt)("li",{parentName:"ul"},"Cache avalanche, automatically jitter the cache expiration time, with a standard deviation of 5%, so that the expiration time of a week is distributed within 16 hours, effectively preventing avalanches"),(0,r.kt)("li",{parentName:"ul"},"Our online database has a cache, otherwise it will not be able to support massive concurrency"),(0,r.kt)("li",{parentName:"ul"},"Automatic cache management has been built into go-zero, and code can be automatically generated through goctl"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Can you explain the design ideas of middleware and interceptor\uff1f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Onion model"),(0,r.kt)("li",{parentName:"ul"},"This middleware processes, such as current limiting, fusing, etc., and then decides whether to call next"),(0,r.kt)("li",{parentName:"ul"},"next call"),(0,r.kt)("li",{parentName:"ul"},"Process the return result of the next call"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How to implement the transaction processing of microservices, the design and implementation of gozero distributed transactions, and what good middleware recommendations are there?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2PC, two-phase submission"),(0,r.kt)("li",{parentName:"ul"},"TCC, Try-Confirm-Cancel"),(0,r.kt)("li",{parentName:"ul"},"Message queue, maximum attempt"),(0,r.kt)("li",{parentName:"ul"},"Manual compensation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How to design better multi-level goroutine exception capture\uff1f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Microservice system request exceptions should be isolated, and a single exception request should not crash the entire process"),(0,r.kt)("li",{parentName:"ul"},"go-zero comes with RunSafe/GoSafe to prevent a single abnormal request from causing the process to crash"),(0,r.kt)("li",{parentName:"ul"},"Monitoring needs to keep up to prevent abnormal excess without knowing it"),(0,r.kt)("li",{parentName:"ul"},"The contradiction between fail fast and fault isolation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generation and use of k8s configuration (gateway, service, slb)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"K8s yaml file is automatically generated internally, which is too dependent on configuration and not open source"),(0,r.kt)("li",{parentName:"ul"},"I plan to add a k8s configuration template to the bookstore example"),(0,r.kt)("li",{parentName:"ul"},"slb->nginx->nodeport->api gateway->rpc service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gateway current limiting, fusing and load reduction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There are two types of current limiting: concurrency control and distributed current limiting"),(0,r.kt)("li",{parentName:"ul"},"Concurrency control is used to prevent instantaneous excessive requests and protect the system from being overwhelmed"),(0,r.kt)("li",{parentName:"ul"},"Distributed current limit is used to configure different quotas for different services"),(0,r.kt)("li",{parentName:"ul"},"Fuse is to protect dependent services. When a service has a large number of exceptions, the caller should protect it so that it has a chance to return to normal and also achieve the effect of fail fast"),(0,r.kt)("li",{parentName:"ul"},"Downloading is to protect the current process from exhausting its resources and fall into complete unavailability, ensuring that the maximum amount of requests that can be carried is served as well as possible"),(0,r.kt)("li",{parentName:"ul"},"Load reduction and k8s can effectively protect k8s expansion, k8s expansion in minutes, go-zero load reduction in seconds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Introduce useful components in core, such as timingwheel, etc., and talk about design ideas"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bloom filter"),(0,r.kt)("li",{parentName:"ul"},"In-process cache"),(0,r.kt)("li",{parentName:"ul"},"RollingWindow"),(0,r.kt)("li",{parentName:"ul"},"TimingWheel"),(0,r.kt)("li",{parentName:"ul"},"Various executors"),(0,r.kt)("li",{parentName:"ul"},"fx package, map/reduce/filter/sort/group/distinct/head/tail..."),(0,r.kt)("li",{parentName:"ul"},"Consistent hash implementation"),(0,r.kt)("li",{parentName:"ul"},"Distributed current limiting implementation"),(0,r.kt)("li",{parentName:"ul"},"mapreduce, with cancel ability"),(0,r.kt)("li",{parentName:"ul"},"There are a lot of concurrency tools in the syncx package"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How to quickly add a kind of rpc protocol support, change the cross-machine discovery to the local node adjustment, and turn off the complex filter and load balancing functions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"go-zero has a relatively close relationship with grpc, and it did not consider supporting protocols other than grpc at the beginning of the design"),(0,r.kt)("li",{parentName:"ul"},"If you want to increase it, you can only fork out and change it."),(0,r.kt)("li",{parentName:"ul"},"You can use the direct scheme directly by adjusting the machine"),(0,r.kt)("li",{parentName:"ul"},"Why remove filter and load balancing? If you want to go, fork is changed, but there is no need"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The design and implementation ideas of log and monitoring and link tracking, it is best to have a rough diagram"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log and monitoring We use prometheus, customize the dashboard service, bundle and submit data (every minute)"),(0,r.kt)("li",{parentName:"ul"},"Link tracking can see the calling relationship and automatically record the trace log\n",(0,r.kt)("img",{parentName:"li",src:"https://lh5.googleusercontent.com/PBRdYmRs22xEH1gjNkQnoHuB5WFBva10oKCm61A6G23xvi28u95Bwq-qTc_WVV-PihzAHyLpAKkBtbtzK8v9Kjtrp3YBZqGiTSXhHJHwf7CAv5K9AqBSc1CZuV0u3URCDVP8r1RD0PY#align=left&display=inline&height=658&margin=%5Bobject%20Object%5D&originHeight=658&originWidth=1294&status=done&style=none&width=1294",alt:null})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Is there any pooling technique useful for the go-zero framework? If so, in which core code can you refer to"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generally do not need to optimize in advance, over-optimization is a taboo"),(0,r.kt)("li",{parentName:"ul"},"Core/syncx/pool.go defines a general pooling technology with expiration time"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go-zero uses those performance test method frameworks, is there a code reference? You can talk about ideas and experience"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"go benchmark"),(0,r.kt)("li",{parentName:"ul"},"Stress testing can be scaled up according to the estimated ratio by using existing business log samples"),(0,r.kt)("li",{parentName:"ul"},"The pressure test must be pressured until the system cannot be carried, see where the first bottleneck is, and then pressure again after the change, and cycle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Talk about the abstract experience and experience of the code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Don\u2019t repeat yourself",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You may not need it. Before, business developers often asked me if I could add this function or that function. I usually ask the deep-level purpose carefully. In many cases, I find that this function is redundant, and it is the best practice to not need it."),(0,r.kt)("li",{parentName:"ul"},"Martin Fowler proposed the principle of abstracting after three occurrences. Sometimes some colleagues will ask me to add a function to the framework. After I think about it, I often answer this. You write it in the business layer first. If there is a need in other places, you will tell me again, and it will appear three times. I will consider integrating into the framework"),(0,r.kt)("li",{parentName:"ul"},"A file should only do one thing as much as possible, each file should be controlled within 200 lines as much as possible, and a function should be controlled within 50 lines as much as possible, so that you can see the entire function without scrolling"),(0,r.kt)("li",{parentName:"ul"},"Need the ability to abstract and refine, think more, often look back and think about the previous architecture or implementation"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Will you publish a book on the go-zero framework from design to practice? What is the future development plan of the framework?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There is no book publishing plan, and a good framework is the most important"),(0,r.kt)("li",{parentName:"ul"},"Continue to focus on engineering efficiency"),(0,r.kt)("li",{parentName:"ul"},"Improve service governance capabilities"),(0,r.kt)("li",{parentName:"ul"},"Help business development land as quickly as possible")))))}p.isMDXComponent=!0}}]);