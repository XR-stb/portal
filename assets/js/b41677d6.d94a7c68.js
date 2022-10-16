"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6814:function(e,t,n){n.r(t),n.d(t,{default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"collection.",authors:"kevwan"},l={unversionedId:"blog/cache/collection",id:"blog/cache/collection",isDocsHomePage:!1,title:"Caching via collection",description:"The go-zero microservices framework provides many out-of-the-box tools, good tools can not only improve the performance of the service but also improve the robustness of the code to avoid errors, to achieve a uniform style of code for others to read, etc. This series of articles will introduce the use of the go-zero framework tools and their implementation principles",source:"@site/docs/blog/cache/collection.md",sourceDirName:"blog/cache",slug:"/blog/cache/collection",permalink:"/docs/blog/cache/collection",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/cache/collection.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{title:"collection.",authors:"kevwan"},sidebar:"blog",previous:{title:"go-zero cache design for business-level caching",permalink:"/docs/blog/cache/business-cache"},next:{title:"Executors",permalink:"/docs/blog/tool/executors"}},s=[{value:"In-process caching tool collection.Cache",id:"in-process-caching-tool-collectioncache",children:[]}],u={toc:s};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The go-zero microservices framework provides many out-of-the-box tools, good tools can not only improve the performance of the service but also improve the robustness of the code to avoid errors, to achieve a uniform style of code for others to read, etc. This series of articles will introduce the use of the go-zero framework tools and their implementation principles"),(0,i.kt)("h2",{id:"in-process-caching-tool-collectioncache"},"In-process caching tool ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/zeromicro/go-zero/tree/master/core/collection/cache.go"},"collection.Cache")),(0,i.kt)("p",null,"When doing server development, I believe we will encounter the use of cache, go-zero provides a simple cache package ",(0,i.kt)("strong",{parentName:"p"},"collection.Cache"),", simple to use as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize the cache, where WithLimit can specify the maximum number of caches\nc, err := collection.NewCache(time.Minute, collection.WithLimit(10000))\nif err ! = nil {\npanic(err)\n}\n\n// Set the cache\nc.Set("key", user)\n\n// Get the cache, ok: if it exists\nv, ok := c.Get("key")\n\n// Delete the cache\nc.Del("key")\n\n// Get the cache, if the key does not exist, then func will be called to generate the cache\nv, err := c.Take("key", func() (interface{}, error) {\nreturn user, nil\n})\n')),(0,i.kt)("p",null,"The built features implemented by cache include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"automatic cache expiration, you can specify the expiration time"),(0,i.kt)("li",{parentName:"ul"},"Cache size limit, you can specify the number of caches"),(0,i.kt)("li",{parentName:"ul"},"cache add, delete and change"),(0,i.kt)("li",{parentName:"ul"},"Cache hit rate statistics"),(0,i.kt)("li",{parentName:"ul"},"Concurrency security"),(0,i.kt)("li",{parentName:"ul"},"Cache hitting")),(0,i.kt)("p",null,"Implementation principle.\nCache automatic invalidation is managed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zeromicro/blob/master/core/collection/timingwheel.go"},"TimingWheel")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"timingWheel, err := NewTimingWheel(time.Second, slots, func(k, v interface{}) {\n        key, ok := k.(string)\n        if !ok {\n            return\n        }\n\n        cache.Del(key)\n})\n")),(0,i.kt)("p",null,"Cache size limit, is the use of LRU elimination policy, when the new cache will check whether the limit has been exceeded, the specific code in the keyLru implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (klru *keyLru) add(key string) {\n    if elem, ok := klru.elements[key]; ok {\n        klru.events.MoveToFront(elem)\n        return\n    MoveToFront(elem) return\n\n    // Add new item\n    elem := klru.evicts.PushFront(key)\n    klru.items[key] = elem\n\n    // Verify size not exceeded\n    if klru.evicts.Len() > klru.limit {\n        klru.removeOldest()\n    }\n}\n")),(0,i.kt)("p",null,"Cache hit statistics are implemented in code as cacheStat, which automatically counts when a cache hit is lost and prints the status of hits, qps, etc. used at regular intervals."),(0,i.kt)("p",null,"The printout will look like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cache(proc) - qpm: 2, hit_ratio: 50.0%, elements: 0, hit: 1, miss: 1\n")),(0,i.kt)("p",null,"Cache hit containment is implemented using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zeromicro/blob/master/core/syncx/singleflight.go"},"syncx.SingleFlight"),", which is a request for the same key at the same time, SingleFlight(), which will request the same key at the same time, will be added later. The specific implementation is described in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (c *Cache) Take(key string, fetch func() (interface{}, error)) (interface{}, error) {\n    val, fresh, err := c.barrier.DoEx(key, func() (interface{}, error) {\n        v, e := fetch()\n        if e ! = nil {\n            return nil, e\n        }\n\n        c.Set(key, v)\n        return v, nil\n    })\n    if err ! = nil {\n        return nil, err\n    }\n\n    if fresh {\n        c.stats.IncrementMiss()\n        return val, nil\n    } else {\n        // got the result from previous ongoing query\n        c.stats.IncrementHit()\n    }\n\n    return val, nil\n}\n")),(0,i.kt)("p",null,"This article introduces the Cache tool in the go-zero framework, which is very useful in real projects. Using good tools for improving service performance and development efficiency are very helpful, I hope this article can bring you some gains."))}h.isMDXComponent=!0}}]);