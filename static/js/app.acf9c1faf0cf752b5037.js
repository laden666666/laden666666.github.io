webpackJsonp([1],{"02jQ":function(e,t){},"1lke":function(e,t){},"2kNH":function(e,t){e.exports={photo:"https://avatars0.githubusercontent.com/u/5233914?s=460&v=4",name:"laden666666",home:"https://github.com/laden666666",blog:"http://www.cnblogs.com/laden666666/"}},"3FsN":function(e,t){},LREb:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("VYSC");t.default={openFolder:function(e){s.default.state.selectPath.push(e)},selectFolderLevel:function(e){s.default.state.selectPath.splice(e,s.default.state.selectPath.length)}}},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("j1ja");var s=i("7+uW"),n=i("Dd8w"),a=i.n(n),r=i("LREb"),c=i.n(r),o={props:{image:{type:String,default:""},title:{type:String,isRequired:!0},describe:{type:String,default:""}}};var l={extends:i("VU/8")(o,null,!1,function(e){i("3FsN")},null,null).exports},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("figure",{staticClass:"animation1"},[e.image?i("img",{staticClass:"animation1_image",attrs:{src:e.image,alt:"title"}}):e._e(),e._v(" "),i("figcaption",[i("h2",{staticClass:"animation1_title",attrs:{title:e.title}},[i("span",{staticClass:"animation1_title_text",staticStyle:{"vertical-align":"middle"}},[e._v(e._s(e.title))])]),e._v(" "),i("p",{staticClass:"animation1_describe",attrs:{title:e.describe}},[e._v(e._s(e.describe))])])])},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(e){i("r3GQ")},"data-v-17a12d0a",null).exports,m=void 0;var p={props:{index:{type:Number,isRequired:!0},image:{type:String,default:""},title:{type:String,isRequired:!0},describe:{type:String,default:""},isFolder:{type:Boolean,default:!1},url:{type:String,default:""},linkList:{type:Array,default:function(){return[]}}},data:function(){return{LinkList:{name:"Folder",props:{linkList:{type:Array}},template:'<LinkList :linkList="linkList.slice(0, 4)" :hasAnimation="false"></LinkList>',components:{LinkList:m}},show:!1}},components:{Animation1:u},mounted:function(){var e=this;setTimeout(function(){e.show=!0},40*this.index)},methods:{openFolder:function(e){c.a.openFolder(e)}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"link"},[i("transition",{attrs:{name:"slide-fade"}},[e.show?[e.isFolder?i("div",{staticClass:"link_Folder",on:{click:function(t){e.openFolder(e.index)}}},[i(e.LinkList,{tag:"component",staticClass:"link_Folder_list",attrs:{linkList:e.linkList}}),e._v(" "),i("span",{staticClass:"link_Folder_title"},[e._v(e._s(e.title))])],1):i("div",{staticClass:"link_link",on:{click:function(t){e.openFolder(e.index)}}},[i("Animation1",{attrs:{image:e.image,title:e.title,describe:e.describe}})],1)]:e._e()],2)],1)},staticRenderFns:[]};var h=i("VU/8")(p,g,!1,function(e){i("1lke")},"data-v-74463248",null).exports,v=i("2kNH"),w=i.n(v),b={data:function(){return{myData:w.a}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"my",attrs:{href:this.myData.home,target:"_blank"}},[t("img",{staticClass:"my_photo",attrs:{src:this.myData.photo}})])},staticRenderFns:[]};var k=i("VU/8")(b,f,!1,function(e){i("wJSC")},"data-v-7c406345",null).exports,y=i("NYxO"),C={components:{My:k},computed:a()({},Object(y.mapState)({selectPath:function(e){return e.selectPath.reduce(function(t,i){return t.push(e.linkList[i]),t},[])}})),methods:{selectFolderLevel:function(e){c.a.selectFolderLevel(e)}}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"header_my"},[i("My")],1),e._v(" "),i("div",{staticClass:"header_tools"},[i("div",{staticClass:"header_tools-item",on:{click:function(t){e.selectFolderLevel(0)}}},[i("i",{staticClass:"icon iconfont icon-homepage"})])]),e._v(" "),i("div",{staticClass:"header_select"},e._l(e.selectPath,function(t,s){return i("div",{key:s,staticClass:"header_select-item",style:{zIndex:1e3-s},on:{click:function(t){e.selectFolderLevel(s+1)}}},[i("span",{staticClass:"header_select-item-text"},[e._v(e._s(t.title))])])}))])},staticRenderFns:[]};var S=i("VU/8")(C,_,!1,function(e){i("qvtL")},"data-v-1a40cc97",null).exports,P={props:{linkList:{type:Array,isRequired:!0},hasAnimation:{type:Boolean,default:!0}},components:{Link:h},data:function(){return{}}};m=P;var q=P,L={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"link-list"},[e._l(e.linkList,function(t,s){return i("Link",{key:s,attrs:{image:t.image,title:t.title,describe:t.describe,url:"",linkList:t.linkList||[],isFolder:t.isFolder,index:e.hasAnimation?s:0}})}),e._v(" "),e._l(20,function(e){return i("div",{staticClass:"link-block"})})],2)},staticRenderFns:[]};var j=i("VU/8")(q,L,!1,function(e){i("02jQ")},"data-v-39ff4903",null).exports,N={props:{link:{type:Object,isRequired:!0}},computed:a()({},Object(y.mapState)({linkData:function(e){return e.selectPath.reduce(function(e,t){return e[t].linkList},e.linkList)[0]}})),data:function(){return{}}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"view-blog"},[t("iframe",{staticClass:"view-blog_view",attrs:{src:this.link.url}})])},staticRenderFns:[]};var A=i("VU/8")(N,x,!1,function(e){i("ctY5")},"data-v-7715c4ee",null).exports,D={props:{backgroundImage:{type:String,default:"none"}},computed:a()({},Object(y.mapState)({linkData:function(e){return e.selectPath.reduce(function(e,t){return e[t].isFolder?e[t].linkList:e[t]},e.linkList)},linkDataKey:function(e){return e.selectPath.join("-")}})),components:{Link:h,LinkList:j,Header:S,ViewBlog:A},data:function(){return{}}},F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"desktop"},[t("Header"),this._v(" "),t("div",{staticClass:"desktop_background"},[t("div",{staticClass:"desktop_background-image",style:{backgroundImage:"url("+this.backgroundImage+")"}})]),this._v(" "),Array.isArray(this.linkData)?t("LinkList",{key:this.linkDataKey,staticClass:"desktop_link-list",attrs:{linkList:this.linkData}}):t("ViewBlog",{attrs:{link:this.linkData}})],1)},staticRenderFns:[]};var M=i("VU/8")(D,F,!1,function(e){i("iL//")},"data-v-33347aae",null).exports,O=(i("PARO"),{name:"App",components:{Desktop:M}}),E={render:function(){var e=this.$createElement;return(this._self._c||e)("Desktop",{attrs:{backgroundImage:"http://demo.cssmoban.com/cssthemes4/hxc_19_SimplePix/images/wood.png"}})},staticRenderFns:[]};var V=i("VU/8")(O,E,!1,function(e){i("rbdi")},null,null).exports,R=i("VYSC"),J=i.n(R);s.default.config.productionTip=!1,new s.default({el:"#app",store:J.a,components:{App:V},template:"<App/>"})},PARO:function(e,t){},VYSC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("NYxO");i("7+uW").default.use(s.default);var n=i("sfWg");t.default=new s.default.Store({state:{selectPath:[],linkList:n}})},ctY5:function(e,t){},"iL//":function(e,t){},qvtL:function(e,t){},r3GQ:function(e,t){},rbdi:function(e,t){},sfWg:function(e,t){e.exports=[{title:"使用VS Code开发asp.net core (上)",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",url:"https://cn.vuejs.org/v2/guide/transitions.html",describe:"使用Visual Studio Code来开发asp.net core项目. 对vscode的使用进行了介绍, 并且包含一些技巧, 例如: 代码段 snippet, zen coding, debugging等等. ..."},{title:"前端小白的个人习惯和笔记(一)",url:"https://cn.vuejs.org/v2/guide/transitions.html",describe:"快键键 已经敲代码这么久,分享一下自己的小习惯(可能有点乱有点杂) 可以说是window用户的神器,可以随意开启全局的软件,配合cmd使用, 直接关闭这样就省下按鼠标的时间 在webstorm中快速打开本项目文件也可以直接打开cmd,不会打开webstorm自带的cmd我 习惯使用 这个切换窗口你们 ..."},{title:"DaemonSet 案例分析 - 每天5分钟玩转 Docker 容器技术（130）",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"本节详细分析两个 k8s 自己的 DaemonSet：kube-flannel-ds 和 kube-proxy 。 ..."},{title:"布衣之路(二)：虚拟机的文件共享和网络模式",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"除夕之夜，当别的大神都在和家人一起辞旧岁，迎新年的时候，博主这样的小喽啰不敢懈怠，想着一年之计，当早做谋划，趁着别人嗨的时间，笔耕不辍的写篇日志，以此颇觉有意义的度过一个祥和的除夕之夜。。。其实麻痹的是博主家里没网，也没电视看，眼见着别人家歌舞升平，一股子过年的噪味儿，心痒痒却又没奈何，只能关起门来 ..."},{title:"从劳动价值到货币再到比特币，从原始社会到“社会大同”",describe:"在写这篇文章之前，我曾经思考了商品交换的问题，发现商品交易需要解决2个问题：交易的信用（不可抵赖）和一般等价物的信用（货币“值钱”）。如果没有一般等价物，那就只好“以物易物”，如果有了一般等价物那么最终它会发生变异，衍生出更多的问题，引起严重的金融危机和经济危机。是一般等价物选的不合适，还是现在或者... ..."},{title:"pandas中的分组技术",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"目录 1  分组操作1.1  按照列进行分组1.2  按照字典进行分组1.3  根据函数进行分组1.4  按照list组合1.5  按照索引级别进行分组2  分 ..."},{title:"使用Openresty加快网页速度",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:'新年快乐~~~ 上一篇文章讲到使用多级缓存来减少数据库的访问来加快网页的速度，只是，仍旧没有“嗖”一下就加载出来的感觉，想再优化一下，优化代码什么的已经到了极限。上周无意中看到了openresty，能够直接在nginx层直接对请求处理，而不需要每次都访问tomcat，特别是对于自己的首页 "http ...'},{title:"Java数据结构和算法（九）——高级排序",describe:"春晚好看吗？不存在的！！！ 在Java数据结构和算法（三）——冒泡、选择、插入排序算法中我们介绍了三种简单的排序算法，它们的时间复杂度大O表示法都是O(N2)，如果数据量少，我们还能忍受，但是数据量大，那么这三种简单的排序所需要的时间则是我们所不能接受的。接着我们在讲解递归 的时候，介绍了归并排序， ..."},{title:"2017年度总结",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"滴答~ 滴答~ 滴答~ 无论你在意，还是不在意，时间总是按照自己的节奏，从你的身旁悄悄溜走。他无声无息，来去无踪，却又让人着迷。 ..."},{title:"4.C++中的函数重载,C++调用C代码,new/delete关键字,namespace(命名空间)",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"本章主要内容: 1)函数重载 2)C++调用C代码 3)new/delete关键字实现动态内存分配 4)namespace命名空间 大家都知道,在生活中,动词和不同的名词搭配一起,意义都会大有不同,比如”玩”: 玩游戏 玩卡牌 玩足球 所以在C++中,便出现了函数重载(JAVA,c#等语言都有函数重 ..."},{title:"DirectSound---简易Wav播放器",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"这篇文章主要给大家介绍下如何用DirectSound打造一个简易播放器，因为篇幅有限且代码逻辑较为复杂，我们只介绍下核心技术内容。该播放器主要包括以下功能： 播放、暂停 播放进度提示。 1. DirectSound播放概念简介 1.1 播放相关概念 首先要介绍下DirectSound的设计理念： ! ..."},{title:"发放春节福利，ASP.NET Core断点续传",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"ASP.NET Core断点续传 在ASP.NET WebAPi写过完整的断点续传文章，目前我对ASP.NET Core仅止于整体上会用，对于原理还未去深入学习，由于有园友想看断点续传在ASP.NET Core中的具体实现，于是借助在家中休息时间看了下ASP.NET Core是否支持断点续传以及支持 ..."},{title:"Java对象序列化",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"为什么需要序列化 当我们创建对象时，只要需要，对象就会一直存在，但在程序终止的时候，无论如何它都不会继续存在。这么做有一定的意义，但是如果对象能够在程序不运行的情况下仍能存在并保存其信息，这样，在下次运行程序时，该对象将被重建并且拥有的信息与在程序上次运行时它所拥有的信息相同。为达到这目的，通常的做 ..."},{title:"test",isFolder:!0,linkList:[{title:"使用VS Code开发asp.net core (上)",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"使用Visual Studio Code来开发asp.net core项目. 对vscode的使用进行了介绍, 并且包含一些技巧, 例如: 代码段 snippet, zen coding, debugging等等. ..."},{title:"前端小白的个人习惯和笔记(一)",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"快键键 已经敲代码这么久,分享一下自己的小习惯(可能有点乱有点杂) 可以说是window用户的神器,可以随意开启全局的软件,配合cmd使用, 直接关闭这样就省下按鼠标的时间 在webstorm中快速打开本项目文件也可以直接打开cmd,不会打开webstorm自带的cmd我 习惯使用 这个切换窗口你们 ..."},{title:"DaemonSet 案例分析 - 每天5分钟玩转 Docker 容器技术（130）",describe:"本节详细分析两个 k8s 自己的 DaemonSet：kube-flannel-ds 和 kube-proxy 。 ..."},{title:"布衣之路(二)：虚拟机的文件共享和网络模式",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"除夕之夜，当别的大神都在和家人一起辞旧岁，迎新年的时候，博主这样的小喽啰不敢懈怠，想着一年之计，当早做谋划，趁着别人嗨的时间，笔耕不辍的写篇日志，以此颇觉有意义的度过一个祥和的除夕之夜。。。其实麻痹的是博主家里没网，也没电视看，眼见着别人家歌舞升平，一股子过年的噪味儿，心痒痒却又没奈何，只能关起门来 ..."},{title:"从劳动价值到货币再到比特币，从原始社会到“社会大同”",describe:"在写这篇文章之前，我曾经思考了商品交换的问题，发现商品交易需要解决2个问题：交易的信用（不可抵赖）和一般等价物的信用（货币“值钱”）。如果没有一般等价物，那就只好“以物易物”，如果有了一般等价物那么最终它会发生变异，衍生出更多的问题，引起严重的金融危机和经济危机。是一般等价物选的不合适，还是现在或者... ..."},{title:"pandas中的分组技术",describe:"目录 1  分组操作1.1  按照列进行分组1.2  按照字典进行分组1.3  根据函数进行分组1.4  按照list组合1.5  按照索引级别进行分组2  分 ..."},{title:"使用Openresty加快网页速度",describe:'新年快乐~~~ 上一篇文章讲到使用多级缓存来减少数据库的访问来加快网页的速度，只是，仍旧没有“嗖”一下就加载出来的感觉，想再优化一下，优化代码什么的已经到了极限。上周无意中看到了openresty，能够直接在nginx层直接对请求处理，而不需要每次都访问tomcat，特别是对于自己的首页 "http ...'},{title:"Java数据结构和算法（九）——高级排序",describe:"春晚好看吗？不存在的！！！ 在Java数据结构和算法（三）——冒泡、选择、插入排序算法中我们介绍了三种简单的排序算法，它们的时间复杂度大O表示法都是O(N2)，如果数据量少，我们还能忍受，但是数据量大，那么这三种简单的排序所需要的时间则是我们所不能接受的。接着我们在讲解递归 的时候，介绍了归并排序， ..."},{title:"2017年度总结",describe:"滴答~ 滴答~ 滴答~ 无论你在意，还是不在意，时间总是按照自己的节奏，从你的身旁悄悄溜走。他无声无息，来去无踪，却又让人着迷。 ..."},{title:"4.C++中的函数重载,C++调用C代码,new/delete关键字,namespace(命名空间)",isFolder:!0,describe:"本章主要内容: 1)函数重载 2)C++调用C代码 3)new/delete关键字实现动态内存分配 4)namespace命名空间 大家都知道,在生活中,动词和不同的名词搭配一起,意义都会大有不同,比如”玩”: 玩游戏 玩卡牌 玩足球 所以在C++中,便出现了函数重载(JAVA,c#等语言都有函数重 ...",linkList:[{title:"使用VS Code开发asp.net core (上)",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"使用Visual Studio Code来开发asp.net core项目. 对vscode的使用进行了介绍, 并且包含一些技巧, 例如: 代码段 snippet, zen coding, debugging等等. ..."},{title:"前端小白的个人习惯和笔记(一)",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"快键键 已经敲代码这么久,分享一下自己的小习惯(可能有点乱有点杂) 可以说是window用户的神器,可以随意开启全局的软件,配合cmd使用, 直接关闭这样就省下按鼠标的时间 在webstorm中快速打开本项目文件也可以直接打开cmd,不会打开webstorm自带的cmd我 习惯使用 这个切换窗口你们 ..."},{title:"DaemonSet 案例分析 - 每天5分钟玩转 Docker 容器技术（130）",describe:"本节详细分析两个 k8s 自己的 DaemonSet：kube-flannel-ds 和 kube-proxy 。 ..."}]},{title:"DirectSound---简易Wav播放器",describe:"这篇文章主要给大家介绍下如何用DirectSound打造一个简易播放器，因为篇幅有限且代码逻辑较为复杂，我们只介绍下核心技术内容。该播放器主要包括以下功能： 播放、暂停 播放进度提示。 1. DirectSound播放概念简介 1.1 播放相关概念 首先要介绍下DirectSound的设计理念： ! ..."},{title:"发放春节福利，ASP.NET Core断点续传",describe:"ASP.NET Core断点续传 在ASP.NET WebAPi写过完整的断点续传文章，目前我对ASP.NET Core仅止于整体上会用，对于原理还未去深入学习，由于有园友想看断点续传在ASP.NET Core中的具体实现，于是借助在家中休息时间看了下ASP.NET Core是否支持断点续传以及支持 ..."},{title:"Java对象序列化",describe:"为什么需要序列化 当我们创建对象时，只要需要，对象就会一直存在，但在程序终止的时候，无论如何它都不会继续存在。这么做有一定的意义，但是如果对象能够在程序不运行的情况下仍能存在并保存其信息，这样，在下次运行程序时，该对象将被重建并且拥有的信息与在程序上次运行时它所拥有的信息相同。为达到这目的，通常的做 ..."},{title:"浅析Numpy.genfromtxt及File I/O讲解",describe:"Python 并没有提供数组功能，虽然列表 (list) 可以完成基本的数组功能，但它并不是真正的数组，而且在数据量较大时，使用列表的速度就会慢的让人难受。为此，Numpy 提供了真正的数组功能，以及对数据快速处理的函数。Numpy 还是很多更高级的扩展库的依赖库，例如： Scipy，Matplot ..."},{title:"深入浅出Hadoop之mapreduce",describe:"卿哥原创，转载请注明出处，谢谢 之前已经作出预告，那么今天就聊聊mapreduce，起源于Google的map reduce paper, 而后经历了mapreduce 1，和构建于yarn上的mapreduce 2，mapreduce1 除了提供一定的历史演变价值和了解一下mapreduce最初的 ..."},{title:"redux简明学习",describe:"[1]核心概念 [2]简单实例 [3]目录结构 [4]UI层 [5]异步 [6]展示和容器 [7]最终结构 ..."},{title:"读论文系列：Object Detection SPP-net",describe:"SPP-net为RCNN进化到Fast-RCNN起了很大的借鉴作用，值得一读。 ..."},{title:"瀑布流知识的延伸",describe:"瀑布流，很常见了，淘宝，网易云音乐等等都有，实现原理，咱先放着一遍，先将涉及到的知识点拓展开来 一、Math的方法 Math求最小值、最大值， 对于一般的数字直接求，Math.min Math.max 但是求数组呢，一个方法，三种形式，js高程书中利用apply的回调函数，将this指向window ..."},{title:"cmd 与 bash 基础命令入门",describe:"学习 CMD 或者是 BASH 可以让我们在 windows  或者 linux 等简单使用场景中，脱离对鼠标与用户界面的依赖，提高编码效率。 ..."},{title:"MessagePack简析",describe:"一、MessagePack是什么 先看官方的定义：MessagePack是一种高效的二进制序列化格式。它允许您像JSON一样在多个语言之间交换数据。但是，它更快并且更小。 从官方定义中，可以有如下的结论： MessagePack是一个二进制序列化格式，因而它序列化的结果可以在多个语言间进行数据的交换 ..."}]},{title:"浅析Numpy.genfromtxt及File I/O讲解",describe:"Python 并没有提供数组功能，虽然列表 (list) 可以完成基本的数组功能，但它并不是真正的数组，而且在数据量较大时，使用列表的速度就会慢的让人难受。为此，Numpy 提供了真正的数组功能，以及对数据快速处理的函数。Numpy 还是很多更高级的扩展库的依赖库，例如： Scipy，Matplot ..."},{title:"瀑布流知识的延伸",describe:"瀑布流，很常见了，淘宝，网易云音乐等等都有，实现原理，咱先放着一遍，先将涉及到的知识点拓展开来 一、Math的方法 Math求最小值、最大值， 对于一般的数字直接求，Math.min Math.max 但是求数组呢，一个方法，三种形式，js高程书中利用apply的回调函数，将this指向window ..."},{title:"cmd 与 bash 基础命令入门",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"学习 CMD 或者是 BASH 可以让我们在 windows  或者 linux 等简单使用场景中，脱离对鼠标与用户界面的依赖，提高编码效率。 ..."},{title:"MessagePack简析",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"一、MessagePack是什么 先看官方的定义：MessagePack是一种高效的二进制序列化格式。它允许您像JSON一样在多个语言之间交换数据。但是，它更快并且更小。 从官方定义中，可以有如下的结论： MessagePack是一个二进制序列化格式，因而它序列化的结果可以在多个语言间进行数据的交换 ..."},{title:"深入浅出Hadoop之mapreduce",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"卿哥原创，转载请注明出处，谢谢 之前已经作出预告，那么今天就聊聊mapreduce，起源于Google的map reduce paper, 而后经历了mapreduce 1，和构建于yarn上的mapreduce 2，mapreduce1 除了提供一定的历史演变价值和了解一下mapreduce最初的 ..."},{title:"redux简明学习",describe:"[1]核心概念 [2]简单实例 [3]目录结构 [4]UI层 [5]异步 [6]展示和容器 [7]最终结构 ..."},{title:"读论文系列：Object Detection SPP-net",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"SPP-net为RCNN进化到Fast-RCNN起了很大的借鉴作用，值得一读。 ..."},{title:"瀑布流知识的延伸",describe:"瀑布流，很常见了，淘宝，网易云音乐等等都有，实现原理，咱先放着一遍，先将涉及到的知识点拓展开来 一、Math的方法 Math求最小值、最大值， 对于一般的数字直接求，Math.min Math.max 但是求数组呢，一个方法，三种形式，js高程书中利用apply的回调函数，将this指向window ..."},{title:"cmd 与 bash 基础命令入门",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"学习 CMD 或者是 BASH 可以让我们在 windows  或者 linux 等简单使用场景中，脱离对鼠标与用户界面的依赖，提高编码效率。 ..."},{title:"MessagePack简析",image:"http://www.yangqq.com/ceshi/hover/img/1.jpg",describe:"一、MessagePack是什么 先看官方的定义：MessagePack是一种高效的二进制序列化格式。它允许您像JSON一样在多个语言之间交换数据。但是，它更快并且更小。 从官方定义中，可以有如下的结论： MessagePack是一个二进制序列化格式，因而它序列化的结果可以在多个语言间进行数据的交换 ..."}]},wJSC:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.acf9c1faf0cf752b5037.js.map