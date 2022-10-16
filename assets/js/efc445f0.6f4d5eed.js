"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[5595],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2402:function(e,n,t){t.r(n),t.d(n,{default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s={unversionedId:"blog/concurrency/stream",id:"blog/concurrency/stream",isDocsHomePage:!1,title:"Stream processing",description:"Stream processing is a computer programming paradigm that allows given a data sequence (stream processing data source), a series of data operations (functions) are applied to each element in the stream. At the same time, stream processing tools can significantly improve programmers' development efficiency, allowing them to write effective, clean, and concise code.",source:"@site/docs/blog/concurrency/stream.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/stream",permalink:"/docs/blog/concurrency/stream",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/concurrency/stream.md",version:"current",lastUpdatedAt:1665927573,formattedLastUpdatedAt:"10/16/2022",frontMatter:{},sidebar:"blog",previous:{title:"Mapreduce",permalink:"/docs/blog/concurrency/mapreduce"},next:{title:"Redis Lock",permalink:"/docs/blog/concurrency/redis-lock"}},l=[{value:"fx",id:"fx",children:[]},{value:"Intermediate operations of streaming data processing",id:"intermediate-operations-of-streaming-data-processing",children:[]},{value:"Usage and principle analysis",id:"usage-and-principle-analysis",children:[]},{value:"Concurrent processing",id:"concurrent-processing",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:l};function m(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stream processing is a computer programming paradigm that allows given a data sequence (stream processing data source), a series of data operations (functions) are applied to each element in the stream. At the same time, stream processing tools can significantly improve programmers' development efficiency, allowing them to write effective, clean, and concise code."),(0,o.kt)("p",null,"Streaming data processing is very common in our daily work. For example, we often record many business logs in business development. These logs are usually sent to Kafka first, and then written to elasticsearch by the Job consumption Kafka, and the logs are in progress. In the process of stream processing, logs are often processed, such as filtering invalid logs, doing some calculations and recombining logs, etc. The schematic diagram is as follows:\n",(0,o.kt)("img",{alt:"fx_log.png",src:t(8621).Z})),(0,o.kt)("h3",{id:"fx"},"fx"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," is a full-featured microservice framework. There are many very useful tools built in the framework, including streaming data processing tools ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/tree/master/core/fx"},"fx "),", let\u2019s use a simple example to understand the tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "os"\n    "os/signal"\n    "syscall"\n    "time"\n\n    "github.com/zeromicro/go-zero/core/fx"\n)\n\nfunc main() {\n    ch := make(chan int)\n\n    go inputStream(ch)\n    go outputStream(ch)\n\n    c := make(chan os.Signal, 1)\n    signal.Notify(c, syscall.SIGTERM, syscall.SIGINT)\n    <-c\n}\n\nfunc inputStream(ch chan int) {\n    count := 0\n    for {\n        ch <- count\n        time.Sleep(time.Millisecond * 500)\n        count++\n    }\n}\n\nfunc outputStream(ch chan int) {\n    fx.From(func(source chan<- interface{}) {\n        for c := range ch {\n            source <- c\n        }\n    }).Walk(func(item interface{}, pipe chan<- interface{}) {\n        count := item.(int)\n        pipe <- count\n    }).Filter(func(item interface{}) bool {\n        itemInt := item.(int)\n        if itemInt%2 == 0 {\n            return true\n        }\n        return false\n    }).ForEach(func(item interface{}) {\n        fmt.Println(item)\n    })\n}\n')),(0,o.kt)("p",null,"The inputStream function simulates the generation of stream data, and the outputStream function simulates the process of stream data. The From function is the input of the stream. The Walk function concurrently acts on each item. The Filter function filters the item as true and keeps it as false. Keep, the ForEach function traverses and outputs each item element."),(0,o.kt)("h3",{id:"intermediate-operations-of-streaming-data-processing"},"Intermediate operations of streaming data processing"),(0,o.kt)("p",null,"There may be many intermediate operations in the data processing of a stream, and each intermediate operation can act on the stream. Just like the workers on the assembly line, each worker will return to the processed new part after operating the part, and in the same way, after the intermediate operation of the flow processing is completed, it will also return to a new flow.\n",(0,o.kt)("img",{alt:"7715f4b6-8739-41ac-8c8c-04d187172e9d.png",src:t(8839).Z}),"\nIntermediate operations of fx stream processing:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operation function"),(0,o.kt)("th",{parentName:"tr",align:null},"Features"),(0,o.kt)("th",{parentName:"tr",align:null},"Input"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Distinct"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove duplicate items"),(0,o.kt)("td",{parentName:"tr",align:null},"KeyFunc, return the key that needs to be deduplicated")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Filter"),(0,o.kt)("td",{parentName:"tr",align:null},"Filter items that do not meet the conditions"),(0,o.kt)("td",{parentName:"tr",align:null},"FilterFunc, Option controls the amount of concurrency")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group"),(0,o.kt)("td",{parentName:"tr",align:null},"Group items"),(0,o.kt)("td",{parentName:"tr",align:null},"KeyFunc, group by key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Head"),(0,o.kt)("td",{parentName:"tr",align:null},"Take out the first n items and return to the new stream"),(0,o.kt)("td",{parentName:"tr",align:null},"int64 reserved number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Map"),(0,o.kt)("td",{parentName:"tr",align:null},"Object conversion"),(0,o.kt)("td",{parentName:"tr",align:null},"MapFunc, Option controls the amount of concurrency")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Merge"),(0,o.kt)("td",{parentName:"tr",align:null},"Merge item into slice and generate new stream"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reverse"),(0,o.kt)("td",{parentName:"tr",align:null},"Reverse item"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sort"),(0,o.kt)("td",{parentName:"tr",align:null},"Sort items"),(0,o.kt)("td",{parentName:"tr",align:null},"LessFunc implements sorting algorithm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tail"),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to the Head function, n items form a new stream after being taken out"),(0,o.kt)("td",{parentName:"tr",align:null},"int64 reserved number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Walk"),(0,o.kt)("td",{parentName:"tr",align:null},"Act on each item"),(0,o.kt)("td",{parentName:"tr",align:null},"WalkFunc, Option controls the amount of concurrency")))),(0,o.kt)("p",null,"The following figure shows each step and the result of each step:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3aefec98-56eb-45a6-a4b2-9adbdf4d63c0.png",src:t(3707).Z})),(0,o.kt)("h3",{id:"usage-and-principle-analysis"},"Usage and principle analysis"),(0,o.kt)("h4",{id:"from"},"From"),(0,o.kt)("p",null,"Construct a stream through the From function and return the Stream, and the stream data is stored through the channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Example\ns := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}\nfx.From(func(source chan<- interface{}) {\n  for _, v := range s {\n    source <- v\n  }\n})\n\n// Source Code\nfunc From(generate GenerateFunc) Stream {\n    source := make(chan interface{})\n\n    threading.GoSafe(func() {\n        defer close(source)\n        generate(source)\n    })\n\n    return Range(source)\n}\n")),(0,o.kt)("h4",{id:"filter"},"Filter"),(0,o.kt)("p",null,"The Filter function provides the function of filtering items, FilterFunc defines the filtering logic true to retain the item, and false to not retain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Example: Keep even numbers\ns := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}\nfx.From(func(source chan<- interface{}) {\n  for _, v := range s {\n    source <- v\n  }\n}).Filter(func(item interface{}) bool {\n  if item.(int)%2 == 0 {\n    return true\n  }\n  return false\n})\n\n// Source Code\nfunc (p Stream) Filter(fn FilterFunc, opts ...Option) Stream {\n    return p.Walk(func(item interface{}, pipe chan<- interface{}) {\n    // Execute the filter function true to retain, false to discard\n        if fn(item) {\n            pipe <- item\n        }\n    }, opts...)\n}\n")),(0,o.kt)("h4",{id:"group"},"Group"),(0,o.kt)("p",null,"Group groups the stream data. The key of the group needs to be defined. After the data is grouped, it is stored in the channel as slices:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Example Group according to the first character "g" or "p", if not, it will be divided into another group\n    ss := []string{"golang", "google", "php", "python", "java", "c++"}\n    fx.From(func(source chan<- interface{}) {\n        for _, s := range ss {\n            source <- s\n        }\n    }).Group(func(item interface{}) interface{} {\n        if strings.HasPrefix(item.(string), "g") {\n            return "g"\n        } else if strings.HasPrefix(item.(string), "p") {\n            return "p"\n        }\n        return ""\n    }).ForEach(func(item interface{}) {\n        fmt.Println(item)\n    })\n}\n\n// Source Code\nfunc (p Stream) Group(fn KeyFunc) Stream {\n  // Define group storage map\n    groups := make(map[interface{}][]interface{})\n    for item := range p.source {\n    // User-defined group key\n        key := fn(item)\n    // Group the same key into a group\n        groups[key] = append(groups[key], item)\n    }\n\n    source := make(chan interface{})\n    go func() {\n        for _, group := range groups {\n      // A group of data with the same key is written to the channel\n            source <- group\n        }\n        close(source)\n    }()\n\n    return Range(source)\n}\n')),(0,o.kt)("h4",{id:"reverse"},"Reverse"),(0,o.kt)("p",null,"reverse can reverse the elements in the stream:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"7e0fd2b8-d4c1-4130-a216-a7d3d4301116.png",src:t(1480).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Example\nfx.Just(1, 2, 3, 4, 5).Reverse().ForEach(func(item interface{}) {\n  fmt.Println(item)\n})\n\n// Source Code\nfunc (p Stream) Reverse() Stream {\n    var items []interface{}\n  // Get the data in the stream\n    for item := range p.source {\n        items = append(items, item)\n    }\n    // Reversal algorithm\n    for i := len(items)/2 - 1; i >= 0; i-- {\n        opp := len(items) - 1 - i\n        items[i], items[opp] = items[opp], items[i]\n    }\n    \n  // Write stream\n    return Just(items...)\n}\n")),(0,o.kt)("h4",{id:"distinct"},"Distinct"),(0,o.kt)("p",null,"Distinct de-duplicates elements in the stream. De-duplication is commonly used in business development. It is often necessary to de-duplicate user IDs, etc.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Example\nfx.Just(1, 2, 2, 2, 3, 3, 4, 5, 6).Distinct(func(item interface{}) interface{} {\n  return item\n}).ForEach(func(item interface{}) {\n  fmt.Println(item)\n})\n// Output: 1\uff0c2\uff0c3\uff0c4\uff0c5\uff0c6\n\n// Source Code\nfunc (p Stream) Distinct(fn KeyFunc) Stream {\n    source := make(chan interface{})\n\n    threading.GoSafe(func() {\n        defer close(source)\n        // Deduplication is performed by key, and only one of the same key is kept\n        keys := make(map[interface{}]lang.PlaceholderType)\n        for item := range p.source {\n            key := fn(item)\n      // The key is not retained if it exists\n            if _, ok := keys[key]; !ok {\n                source <- item\n                keys[key] = lang.Placeholder\n            }\n        }\n    })\n\n    return Range(source)\n}\n")),(0,o.kt)("h4",{id:"walk"},"Walk"),(0,o.kt)("p",null,"The concurrency of the Walk function works on each item in the stream. You can set the number of concurrency through WithWorkers. The default number of concurrency is 16, and the minimum number of concurrency is 1. If you set unlimitedWorkers to true, the number of concurrency is unlimited, but the number of concurrent writes in the stream is unlimited. The data is limited by defaultWorkers. In WalkFunc, users can customize the elements that are subsequently written to the stream, and can write multiple elements without writing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Example\nfx.Just("aaa", "bbb", "ccc").Walk(func(item interface{}, pipe chan<- interface{}) {\n  newItem := strings.ToUpper(item.(string))\n  pipe <- newItem\n}).ForEach(func(item interface{}) {\n  fmt.Println(item)\n})\n\n// Source Code\nfunc (p Stream) walkLimited(fn WalkFunc, option *rxOptions) Stream {\n    pipe := make(chan interface{}, option.workers)\n\n    go func() {\n        var wg sync.WaitGroup\n        pool := make(chan lang.PlaceholderType, option.workers)\n\n        for {\n      // Control the number of concurrent\n            pool <- lang.Placeholder\n            item, ok := <-p.source\n            if !ok {\n                <-pool\n                break\n            }\n\n            wg.Add(1)\n            go func() {\n                defer func() {\n                    wg.Done()\n                    <-pool\n                }()\n                // Acting on every element\n                fn(item, pipe)\n            }()\n        }\n\n    // Wait for processing to complete\n        wg.Wait()\n        close(pipe)\n    }()\n\n    return Range(pipe)\n}\n')),(0,o.kt)("h3",{id:"concurrent-processing"},"Concurrent processing"),(0,o.kt)("p",null,"In addition to stream data processing, the fx tool also provides function concurrency. The realization of a function in microservices often requires multiple services. Concurrent processing dependence can effectively reduce dependency time and improve service performance."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"b97bf7df-1781-436e-bf04-f1dd90c60537.png",src:t(8572).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"fx.Parallel(func() {\n  userRPC() \n}, func() {\n  accountRPC() \n}, func() {\n  orderRPC() \n})\n")),(0,o.kt)("p",null,"Note that when fx.Parallel performs dependency parallel processing, there will be no error return. If you need an error return, or a dependency error report needs to end the dependency request immediately, please use the ",(0,o.kt)("a",{parentName:"p",href:"https://gocn.vip/topics/10941"},"MapReduce")," tool To process."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This article introduces the basic concepts of stream processing and the stream processing tool fx in go-zero. There are many stream processing scenarios in actual production. I hope this article can give you some inspiration and better response Stream processing scene at work."))}m.isMDXComponent=!0},3707:function(e,n,t){n.Z=t.p+"assets/images/3aefec98-56eb-45a6-a4b2-9adbdf4d63c0-c34c2084d7bd7afcd7af99091d253e9f.png"},8839:function(e,n,t){n.Z=t.p+"assets/images/7715f4b6-8739-41ac-8c8c-04d187172e9d-a8ea18bb42eb39c127b90fac0f221572.png"},1480:function(e,n,t){n.Z=t.p+"assets/images/7e0fd2b8-d4c1-4130-a216-a7d3d4301116-e3b9f82cd085ec8fee6838fb5c76bd67.png"},8572:function(e,n,t){n.Z=t.p+"assets/images/b97bf7df-1781-436e-bf04-f1dd90c60537-9eb292a48d1c49c88610ce733919a670.png"},8621:function(e,n,t){n.Z=t.p+"assets/images/fx_log-57de6d72cdd7d0f5fdbbf70145e67576.png"}}]);