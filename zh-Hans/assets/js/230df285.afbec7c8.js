"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[3945],{3905:(t,L,u)=>{u.d(L,{Zo:()=>g,kt:()=>I});var M=u(7294);function j(t,L,u){return L in t?Object.defineProperty(t,L,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[L]=u,t}function e(t,L){var u=Object.keys(t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(t);L&&(M=M.filter((function(L){return Object.getOwnPropertyDescriptor(t,L).enumerable}))),u.push.apply(u,M)}return u}function i(t){for(var L=1;L<arguments.length;L++){var u=null!=arguments[L]?arguments[L]:{};L%2?e(Object(u),!0).forEach((function(L){j(t,L,u[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(u)):e(Object(u)).forEach((function(L){Object.defineProperty(t,L,Object.getOwnPropertyDescriptor(u,L))}))}return t}function a(t,L){if(null==t)return{};var u,M,j=function(t,L){if(null==t)return{};var u,M,j={},e=Object.keys(t);for(M=0;M<e.length;M++)u=e[M],L.indexOf(u)>=0||(j[u]=t[u]);return j}(t,L);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);for(M=0;M<e.length;M++)u=e[M],L.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(t,u)&&(j[u]=t[u])}return j}var N=M.createContext({}),S=function(t){var L=M.useContext(N),u=L;return t&&(u="function"==typeof t?t(L):i(i({},L),t)),u},g=function(t){var L=S(t.components);return M.createElement(N.Provider,{value:L},t.children)},y="mdxType",c={inlineCode:"code",wrapper:function(t){var L=t.children;return M.createElement(M.Fragment,{},L)}},n=M.forwardRef((function(t,L){var u=t.components,j=t.mdxType,e=t.originalType,N=t.parentName,g=a(t,["components","mdxType","originalType","parentName"]),y=S(u),n=j,I=y["".concat(N,".").concat(n)]||y[n]||c[n]||e;return u?M.createElement(I,i(i({ref:L},g),{},{components:u})):M.createElement(I,i({ref:L},g))}));function I(t,L){var u=arguments,j=L&&L.mdxType;if("string"==typeof t||j){var e=u.length,i=new Array(e);i[0]=n;var a={};for(var N in L)hasOwnProperty.call(L,N)&&(a[N]=L[N]);a.originalType=t,a[y]="string"==typeof t?t:j,i[1]=a;for(var S=2;S<e;S++)i[S]=u[S];return M.createElement.apply(null,i)}return M.createElement.apply(null,u)}n.displayName="MDXCreateElement"},9786:(t,L,u)=>{u.r(L),u.d(L,{assets:()=>N,contentTitle:()=>i,default:()=>c,frontMatter:()=>e,metadata:()=>a,toc:()=>S});var M=u(7462),j=(u(7294),u(3905));const e={slug:"react-native-echarts-1.1-released",title:"React Native Echarts 1.1 \u53d1\u5e03\u4e86\uff01",authors:["yechunxi"],tags:["website"]},i=void 0,a={permalink:"/react-native-echarts/zh-Hans/blog/react-native-echarts-1.1-released",editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-05-29-react-native-echarts-1.1-released/index.md",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2023-05-29-react-native-echarts-1.1-released/index.md",title:"React Native Echarts 1.1 \u53d1\u5e03\u4e86\uff01",description:"@wuba/react-native-echart \u5f00\u6e90\u9879\u76ee\u516c\u5f00\u53d1\u5e03\u5df2\u7ecf\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\uff0c\u6211\u4eec\u975e\u5e38\u9ad8\u5174\u7684\u5ba3\u5e03\u7a33\u5b9a\u7248 1.1 \u6b63\u5f0f\u53d1\u5e03\u4e86 \ud83c\udf89\ud83c\udf89\ud83c\udf89\u3002",date:"2023-05-29T00:00:00.000Z",formattedDate:"2023\u5e745\u670829\u65e5",tags:[{label:"website",permalink:"/react-native-echarts/zh-Hans/blog/tags/website"}],readingTime:8.385,hasTruncateMarker:!1,authors:[{name:"yechunxi",title:"react-native-echarts \u7684\u7ef4\u62a4\u8005",url:"https://github.com/yechunxi",imageURL:"https://github.com/yechunxi.png",key:"yechunxi"}],frontMatter:{slug:"react-native-echarts-1.1-released",title:"React Native Echarts 1.1 \u53d1\u5e03\u4e86\uff01",authors:["yechunxi"],tags:["website"]},prevItem:{title:"React Native ECharts \u5168\u65b9\u4f4d\u5bf9\u6bd4 React Native \u793e\u533a\u6d41\u884c\u7684\u7ed8\u56fe\u5e93",permalink:"/react-native-echarts/zh-Hans/blog/react-native-echarts-vs-victory-native-vs-react-native-chart-kit"},nextItem:{title:"React Native Echarts \u5b98\u65b9\u7f51\u7ad9\u6b63\u5f0f\u4e0a\u7ebf\uff01",permalink:"/react-native-echarts/zh-Hans/blog/the-official-website-has-launched"}},N={authorsImageUrls:[void 0]},S=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5168\u9762\u4e30\u5bcc\u7684\u56fe\u8868\u652f\u6301",id:"\u5168\u9762\u4e30\u5bcc\u7684\u56fe\u8868\u652f\u6301",level:3},{value:"\u652f\u6301 SVG \u4e0e Skia",id:"\u652f\u6301-svg-\u4e0e-skia",level:3},{value:"\u652f\u6301\u5404\u79cd\u624b\u52bf",id:"\u652f\u6301\u5404\u79cd\u624b\u52bf",level:3},{value:"\u652f\u6301 Web \u590d\u7528",id:"\u652f\u6301-web-\u590d\u7528",level:3},{value:"\u540e\u7eed\u89c4\u5212",id:"\u540e\u7eed\u89c4\u5212",level:2},{value:"\u6027\u80fd\u63d0\u5347",id:"\u6027\u80fd\u63d0\u5347",level:3},{value:"\u529f\u80fd\u5b8c\u5584",id:"\u529f\u80fd\u5b8c\u5584",level:3},{value:"\u652f\u6301 ECharts GL",id:"\u652f\u6301-echarts-gl",level:3},{value:"\u5b8c\u5584\u7528\u4f8b",id:"\u5b8c\u5584\u7528\u4f8b",level:3},{value:"\u611f\u8c22",id:"\u611f\u8c22",level:2}],g={toc:S},y="wrapper";function c(t){let{components:L,...e}=t;return(0,j.kt)(y,(0,M.Z)({},g,e,{components:L,mdxType:"MDXLayout"}),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(5156).Z,width:"500",height:"114"})),(0,j.kt)("p",null,(0,j.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts/"},"@wuba/react-native-echart")," \u5f00\u6e90\u9879\u76ee\u516c\u5f00\u53d1\u5e03\u5df2\u7ecf\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\uff0c\u6211\u4eec\u975e\u5e38\u9ad8\u5174\u7684\u5ba3\u5e03\u7a33\u5b9a\u7248 1.1 \u6b63\u5f0f\u53d1\u5e03\u4e86 \ud83c\udf89\ud83c\udf89\ud83c\udf89\u3002"),(0,j.kt)("p",null,(0,j.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts/"},"@wuba/react-native-echart"),"\u662f\u4e00\u4e2a\u57fa\u4e8e ",(0,j.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-svg"},"react-native-svg")," \u4e0e ",(0,j.kt)("a",{parentName:"p",href:"https://github.com/shopify/react-native-skia"},"react-native-skia"),"\uff0c\u4f7f\u7528 RN \u539f\u751f\u7ec4\u4ef6\u6765\u6e32\u67d3 Echarts \u7684\u56fe\u8868\uff0c\u76f8\u6bd4 Webview \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6027\u80fd\u6709\u4e86\u5f88\u5927\u7684\u63d0\u5347\u3002\u5982\u679c\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u9879\u76ee\u8bbe\u8ba1\u539f\u7406\uff0c\u53ef\u4ee5\u53c2\u8003",(0,j.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7199529508112711738"},"\u8fd9\u91cc"),"\u3002"),(0,j.kt)("p",null,"\u4e3a\u4e86\u5927\u5bb6\u80fd\u591f\u66f4\u52a0\u76f4\u89c2\u548c\u51c6\u786e\u7684\u4e86\u89e3\u9879\u76ee\u7684\u7279\u6027\uff0c\u6211\u4eec\u51b3\u5b9a\u5c06\u6700\u521d\u7684 ",(0,j.kt)("inlineCode",{parentName:"p"},"wrn-echarts")," \u6b63\u5f0f\u66f4\u540d\u4e3a ",(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echarts"),"\u3002\u5728\u65b0\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u5bf9",(0,j.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},"react-native-gesture-handler")," \u624b\u52bf\u65b9\u6848\u7684\u652f\u6301\u7b49\u7b49\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4e00\u8d77\u6765\u770b\u4e0b\u6709\u54ea\u4e9b\u7279\u6027\u5427\u3002"),(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"\u5b98\u7f51\uff1a",(0,j.kt)("a",{parentName:"li",href:"https://wuba.github.io/react-native-echarts/"},"https://wuba.github.io/react-native-echarts/")),(0,j.kt)("li",{parentName:"ul"},"github: ",(0,j.kt)("a",{parentName:"li",href:"https://github.com/wuba/react-native-echarts/"},"https://github.com/wuba/react-native-echarts/"))),(0,j.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,j.kt)("h3",{id:"\u5168\u9762\u4e30\u5bcc\u7684\u56fe\u8868\u652f\u6301"},"\u5168\u9762\u4e30\u5bcc\u7684\u56fe\u8868\u652f\u6301"),(0,j.kt)("p",null,(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echart")," \u662f\u4e00\u4e2a\u5c06 Echarts \u56fe\u8868\u5e93\u5e94\u7528\u4e8e React Native \u5e94\u7528\u4e2d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u91c7\u7528 React Native \u539f\u751f\u7ec4\u4ef6\u7684\u6e32\u67d3\u65b9\u5f0f\uff0c\u4ece\u800c\u5927\u5e45\u63d0\u5347\u4e86\u6e32\u67d3\u901f\u5ea6\u3002\u652f\u6301\u5e38\u89c1\u7684\u5404\u79cd\u6298\u7ebf\u56fe\u3001\u9762\u79ef\u56fe\u3001\u67f1\u72b6\u56fe\u3001\u6563\u70b9\u56fe\uff0c\u8fd8\u662f\u66f4\u590d\u6742\u7684 K \u7ebf\u56fe\u3001\u70ed\u529b\u56fe\u7b49\uff0c\u80fd\u591f\u6ee1\u8db3\u5404\u79cd\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u53ef\u89c6\u5316\u9700\u6c42\u3002"),(0,j.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u56fe\u8868\u7c7b\u578b\u793a\u4f8b\uff1a"),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(6250).Z,width:"1778",height:"790"})),(0,j.kt)("p",null,"\u9664\u4e86\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b\u5916\uff0c",(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echart")," \u8fd8\u652f\u6301\u5176\u4ed6\u5404\u79cd\u56fe\u5f62\uff0c\u5982\u6811\u56fe\u3001\u70ed\u529b\u56fe\u548c K\u7ebf\u56fe \u7b49\uff0c\u4e0b\u9762\u662f\u5bf9\u5e94\u7684\u56fe\u8868\u793a\u4f8b\uff1a"),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(886).Z,width:"1684",height:"894"})),(0,j.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u652f\u6301\u5404\u79cd\u52a8\u6001\u56fe\u8868\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u56fe\u8868\u793a\u4f8b\u3002\u56fe\u4e00\u548c\u56fe\u4e8c\u5c55\u793a\u4e86\u5173\u4e8e\u591a\u4e2a\u56fd\u5bb6\u4eba\u5747\u6536\u5165\u7684\u52a8\u6001\u53d8\u5316\u3002\u56fe\u4e00\u5448\u73b0\u4e86\u8fd1 70 \u5e74\u4eba\u5747\u6536\u5165\u7684\u589e\u957f\u8d8b\u52bf\uff0c\u800c\u56fe\u4e8c\u5c55\u793a\u4e86\u8fd1 82 \u5e74\u65f6 10 \u4e2a\u56fd\u5bb6\u4eba\u5747\u6536\u5165\u7684\u52a8\u6001\u6392\u5e8f\u3002\u56fe\u4e09\u5c55\u793a\u4e86\u968f\u7740\u65f6\u95f4\u53d8\u5316\u800c\u4e0d\u65ad\u66f4\u65b0\u7684\u901f\u5ea6\u4eea\u8868\u76d8\uff0c\u800c\u56fe\u56db\u5219\u5c55\u793a\u4e86\u52a8\u6001\u589e\u52a0\u8282\u70b9\u7684\u56fe\u8868\u3002"),(0,j.kt)("p",null,"\u8fd9\u4e9b\u56fe\u8868\u80fd\u591f\u6839\u636e\u4e0d\u65ad\u53d8\u5316\u7684\u6570\u636e\u5b9e\u73b0\u52a8\u6001\u91cd\u65b0\u6e32\u67d3\u3002\u65e0\u8bba\u6570\u636e\u66f4\u65b0\u9891\u7387\u5982\u4f55\uff0c\u5b83\u4eec\u90fd\u80fd\u591f\u8868\u73b0\u51fa\u8272\u7684\u6e32\u67d3\u6027\u80fd\u3002"),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(685).Z,width:"426",height:"240"}),"\n",(0,j.kt)("img",{src:u(1894).Z,width:"426",height:"240"})),(0,j.kt)("p",null,(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echart")," \u652f\u6301\u56fe\u8868\u7c7b\u578b\u975e\u5e38\u4e30\u5bcc\uff0c\u4e0d\u4e00\u4e00\u5728\u6b64\u5c55\u793a\u3002\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u5168\u9762\u7684\u56fe\u8868\u7c7b\u578b\uff0c\u53ef\u4ee5\u53bb",(0,j.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground"},"taro-playground"),"\u8fd9\u91cc\u67e5\u770b\u3002\u5728\u8fd9\u91cc\u53ef\u4ee5\u627e\u5230\u5305\u542b\u5404\u79cd Echarts \u56fe\u8868\u7c7b\u578b\u7684\u793a\u4f8b Demo\u3002"),(0,j.kt)("h3",{id:"\u652f\u6301-svg-\u4e0e-skia"},"\u652f\u6301 SVG \u4e0e Skia"),(0,j.kt)("p",null,(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echart")," \u652f\u6301 Svg \u548c Skia \u4e24\u79cd\u6e32\u67d3\u65b9\u5f0f\uff0c\u5b83\u57fa\u4e8e ",(0,j.kt)("inlineCode",{parentName:"p"},"react-native-svg")," \u548c ",(0,j.kt)("inlineCode",{parentName:"p"},"react-native-skia")," \u5b9e\u73b0\u3002\u4e24\u79cd\u6e32\u67d3\u65b9\u5f0f\u5982\u4f55\u9009\u62e9\uff1f\u4ece\u6e32\u67d3\u901f\u5ea6\u7684\u89d2\u5ea6\u6765\u770b\uff0cSvg \u548c Skia \u7684\u6027\u80fd\u8868\u73b0\u76f8\u5bf9\u63a5\u8fd1\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\u4f46\u662f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6bd4\u5982\u5728\u4e2d\u6587\u652f\u6301\u65b9\u9762\uff0cSkia \u6e32\u67d3\u5b58\u5728\u4e00\u4e9b\u9650\u5236\uff0c\u9700\u8981\u53bb\u58f0\u660e\u8bbe\u7f6e\u5b57\u4f53\u624d\u80fd\u6b63\u786e\u663e\u793a\u4e2d\u6587\u5b57\u7b26\u3002\u56e0\u6b64\uff0c\u5728\u9009\u62e9\u6e32\u67d3\u5e93\u65f6\uff0c\u8003\u8651\u9879\u76ee\u7684\u8bed\u8a00\u9700\u6c42\u548c\u5bf9\u4e2d\u6587\u652f\u6301\u7684\u91cd\u8981\u6027\uff0c\u6839\u636e\u5177\u4f53\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6e32\u67d3\u65b9\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u6700\u4f73\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002"),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(4987).Z,width:"240",height:"473"}),"\n",(0,j.kt)("img",{src:u(8754).Z,width:"240",height:"473"}),"\n",(0,j.kt)("img",{src:u(4553).Z,width:"240",height:"473"})),(0,j.kt)("h3",{id:"\u652f\u6301\u5404\u79cd\u624b\u52bf"},"\u652f\u6301\u5404\u79cd\u624b\u52bf"),(0,j.kt)("p",null,"\u652f\u6301\u70b9\u51fb\u3001\u62d6\u62fd\u3001\u7f29\u653e\u7b49\u5404\u79cd\u624b\u52bf\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528 React Native \u81ea\u5e26\u7684 ",(0,j.kt)("inlineCode",{parentName:"p"},"PanResponder")," \u6765\u5904\u7406\u8fd9\u4e9b\u624b\u52bf\u64cd\u4f5c\u3002\u5728 1.1 \u7248\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u5bf9 ",(0,j.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," \u624b\u52bf\u5e93\u7684\u652f\u6301\u3002\u5982\u679c\u9879\u76ee\u4e2d\u5df2\u7ecf\u5f15\u5165\u4e86\u8be5 \u624b\u52bf\u5e93\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\u8be5\u5e93\u6765\u5904\u7406\u624b\u52bf\u64cd\u4f5c\uff0c\u4ee5\u83b7\u5f97\u66f4\u51fa\u8272\u7a33\u5b9a\u7684\u6027\u80fd\u548c\u4f53\u9a8c\u3002"),(0,j.kt)("p",null,"\u4e0b\u9762\u662f\u5bf9\u6bd4\u4e24\u79cd\u624b\u52bf\u65b9\u6848\u7684\u6548\u679c\uff0c\u4ece\u56fe\u8868\u6ed1\u52a8\u7684\u6d41\u7545\u7a0b\u5ea6\u6765\u770b\uff0c\u65e0\u8bba\u662f\u9ed8\u8ba4\u624b\u52bf\u5904\u7406\u8fd8\u662f\u91c7\u7528 ",(0,j.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," \u5904\u7406\uff0c\u624b\u52bf\u6ed1\u52a8\u90fd\u975e\u5e38\u7684\u6d41\u7545\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u91c7\u7528\u54ea\u79cd\u65b9\u5f0f\u3002"),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(6387).Z,width:"240",height:"457"}),"\n",(0,j.kt)("img",{src:u(3671).Z,width:"240",height:"457"}),"\n",(0,j.kt)("img",{src:u(6858).Z,width:"240",height:"457"})),(0,j.kt)("h3",{id:"\u652f\u6301-web-\u590d\u7528"},"\u652f\u6301 Web \u590d\u7528"),(0,j.kt)("p",null,"\u6211\u4eec\u8fd8\u652f\u6301\u5c06 ",(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echart")," \u7684\u7ec4\u4ef6\u590d\u7528\u5230 Web \u7aef\uff0c\u4ee5\u6ee1\u8db3\u8de8\u7aef\u9700\u6c42\u5e76\u5b9e\u73b0\u591a\u7aef\u4ee3\u7801\u5171\u4eab\u3002\u8f7b\u677e\u5b9e\u73b0\u4ee3\u7801\u7684\u7edf\u4e00\u6027\uff0c\u5e76\u786e\u4fdd\u56fe\u8868\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u7684\u4e00\u81f4\u6027\uff0c\u4e5f\u63d0\u5347\u6211\u4eec\u5f00\u53d1\u7684\u6548\u7387\u3002"),(0,j.kt)("p",null,"ECharts \u56fe\u8868\u5e93\u5728 Web \u7aef\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5728\u7ebf\u6e32\u67d3\u6848\u4f8b\uff0c\u90a3\u4e48\u5728 React Native \u4e0a\u662f\u5426\u80fd\u591f\u4fdd\u6301\u4e00\u81f4\uff1f\u6211\u4eec\u4e3a\u6b64\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u5728\u7ebf\u9884\u89c8\u548c\u6d4b\u8bd5\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u56fe\u8868\u914d\u7f6e\uff0c\u4ee5\u67e5\u770b\u5176\u5728 React Native \u4e0a\u7684\u6e32\u67d3\u6548\u679c\u3002",(0,j.kt)("a",{parentName:"p",href:"https://wuba.github.io/react-native-echarts/zh-Hans/docs/expo-snacks/simple-line-chart"},"\u70b9\u51fb\u5728\u7ebf\u9884\u89c8")),(0,j.kt)("h2",{id:"\u540e\u7eed\u89c4\u5212"},"\u540e\u7eed\u89c4\u5212"),(0,j.kt)("p",null,"\u5c3d\u7ba1\u6211\u4eec\u5df2\u7ecf\u5728\u5bf9 Echarts \u7684\u652f\u6301\u65b9\u9762\u505a\u5f97\u76f8\u5f53\u4e30\u5bcc\u548c\u5b8c\u5584\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u81f4\u529b\u4e8e\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\u548c\u63d0\u5347\u3002\u5728\u63a5\u4e0b\u6765\u7684\u5de5\u4f5c\u4e2d\uff0c\u6211\u4eec\u5c06\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\u8fdb\u884c\u4f18\u5316\u548c\u6539\u8fdb\uff0c\u4ee5\u63d0\u4f9b\u66f4\u52a0\u7cbe\u76ca\u6c42\u7cbe\u7684\u529f\u80fd\u3002\u70b9\u51fb",(0,j.kt)("a",{parentName:"p",href:"https://github.com/orgs/wuba/projects/10"},"\u8fd9\u91cc"),"\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u8fdb\u5c55\u60c5\u51b5\u3002"),(0,j.kt)("h3",{id:"\u6027\u80fd\u63d0\u5347"},"\u6027\u80fd\u63d0\u5347"),(0,j.kt)("p",null,"\u76f8\u8f83\u4e8e\u4f7f\u7528 Webview \u7684\u6e32\u67d3\u65b9\u6848 ",(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echart"),"  \u5728\u6574\u4f53\u6e32\u67d3\u6027\u80fd\u65b9\u9762\u53d6\u5f97\u4e86\u663e\u8457\u7684\u63d0\u5347\u3002\u7136\u800c\uff0c\u5728\u5904\u7406\u5927\u6570\u636e\u91cf\u65f6\uff0c\u7ec4\u4ef6\u7684\u6e32\u67d3\u901f\u5ea6\u548c\u5185\u5b58\u5360\u7528\u65b9\u9762\u4ecd\u6709\u8fdb\u4e00\u6b65\u6539\u8fdb\u7684\u7a7a\u95f4\u3002\u6211\u4eec\u4f1a\u52aa\u529b\u4f18\u5316\u5728\u5904\u7406\u5927\u6570\u636e\u91cf\u65f6\u7684\u6027\u80fd\u8868\u73b0\uff0c\u4ee5\u786e\u4fdd\u5728\u5404\u79cd\u590d\u6742\u6570\u636e\u573a\u666f\u4e0b\uff0c\u80fd\u591f\u63d0\u4f9b\u66f4\u51fa\u8272\u7684\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"),(0,j.kt)("h3",{id:"\u529f\u80fd\u5b8c\u5584"},"\u529f\u80fd\u5b8c\u5584"),(0,j.kt)("p",null,"\u5f53\u524d\uff0cEcharts \u56fe\u8868\u5e93\u7684\u652f\u6301\u5df2\u7ecf\u76f8\u5f53\u5168\u9762\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u56fe\u8868\u6e32\u67d3\u65b9\u9762\u4ecd\u5b58\u5728\u4e00\u4e9b\u9700\u8981\u5b8c\u5584\u7684",(0,j.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts/issues/16"},"\u95ee\u9898"),"\uff0c\u4f8b\u5982\u4e0d\u652f\u6301\u5730\u56fe\u5c55\u793a\u548c\u5728 Skia \u6e32\u67d3\u6a21\u5f0f\u4e0b\u56fe\u7247\u5c55\u793a\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u7b49\u3002\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u8fd9\u4e9b\u95ee\u9898\uff0c\u5e76\u4f1a\u6301\u7eed\u52aa\u529b\u4fee\u590d\u5b83\u4eec\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u56fe\u8868\u5c55\u793a\u4f53\u9a8c\u3002"),(0,j.kt)("h3",{id:"\u652f\u6301-echarts-gl"},"\u652f\u6301 ECharts GL"),(0,j.kt)("p",null,"\u968f\u7740 3D \u53ef\u89c6\u5316\u5728\u5404\u4e2a\u4e1a\u52a1\u573a\u666f\u4e2d\u7684\u5e7f\u6cdb\u5e94\u7528\uff0c\u4f8b\u5982\u4e0b\u65b9\u5c55\u793a\u7684 3D \u56fe\u8868\uff0c\u6211\u4eec\u5c06\u6301\u7eed\u63a2\u7d22\u5e76\u589e\u52a0\u5bf9 ECharts GL \u7684\u652f\u6301\uff0c\u4ee5\u6ee1\u8db3\u66f4\u591a\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u60a8\u53ef\u4ee5\u70b9\u51fb ",(0,j.kt)("a",{parentName:"p",href:"https://github.com/orgs/wuba/projects/10"},"\u8fd9\u91cc")," \u67e5\u770b\u6700\u65b0\u7684\u8fdb\u5c55\u60c5\u51b5\u3002"),(0,j.kt)("p",null,(0,j.kt)("img",{src:u(9515).Z,width:"1566",height:"388"})),(0,j.kt)("h3",{id:"\u5b8c\u5584\u7528\u4f8b"},"\u5b8c\u5584\u7528\u4f8b"),(0,j.kt)("p",null,"\u540e\u7eed\uff0c\u6211\u4eec\u4f1a\u589e\u52a0\u66f4\u591a\u7528\u6237\u4f7f\u7528\u6848\u4f8b\u4e0e\u6d4b\u8bd5\u7528\u4f8b\u3002\u89c4\u8303\u6d4b\u8bd5\u7528\u4f8b\u80fd\u68c0\u67e5\u51fa\u4f60\u7684\u4efb\u4f55\u6539\u52a8\u662f\u4e0d\u662f\u5bf9\u5176\u4ed6\u529f\u80fd\u4ea7\u751f\u4e86\u5f71\u54cd\u3002\u80fd\u591f\u4ece\u6839\u672c\u4e0a\u5c31\u4fdd\u8bc1\u9879\u76ee\u7684\u8d28\u91cf\uff0c\u540e\u7eed\u6211\u4eec\u4e5f\u5c06\u9010\u6b65\u6dfb\u52a0\u66f4\u591a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u89c4\u8303\u4ee3\u7801\uff0c\u63d0\u5347\u4ee3\u7801\u8d28\u91cf\u3002"),(0,j.kt)("h2",{id:"\u611f\u8c22"},"\u611f\u8c22"),(0,j.kt)("p",null,"\u975e\u5e38\u611f\u8c22 ",(0,j.kt)("inlineCode",{parentName:"p"},"@wuba/react-native-echarts")," \u5f00\u6e90\u793e\u533a\u7684\u6240\u6709\u670b\u53cb\u4eec\u3002\u65e0\u8bba\u662f\u4e3a\u4ee3\u7801\u5e93\u505a\u51fa\u8d21\u732e\uff0c\u8fd8\u662f\u4e3a\u89e3\u51b3bug\u63d0\u4f9b\u62a5\u544a\u548c\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u6216\u662f\u6539\u8fdb\u73b0\u6709\u7279\u6027\u7684\u60f3\u6cd5\uff0c\u90fd\u662f\u5bf9\u8fd9\u4e2a\u9879\u76ee\u975e\u5e38\u5b9d\u8d35\u7684\u8d21\u732e\u3002\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u4f60\u52a0\u5165\u6211\u4eec\uff0c\u4e00\u8d77\u53c2\u4e0e\u5230\u9879\u76ee\u4ea4\u6d41\u5171\u5efa\u3002"),(0,j.kt)("p",null,"\u6700\u540e\uff0c\u7279\u522b\u611f\u8c22\u4e3a\u9879\u76ee\u505a\u51fa\u8d21\u732e\u7684\u5f00\u53d1\u8005:"),(0,j.kt)("a",{href:"https://github.com/wuba/react-native-echarts/graphs/contributors"},(0,j.kt)("img",{src:"https://opencollective.com/react-native-echarts/contributors.svg?button=false"})))}c.isMDXComponent=!0},685:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_1-2413c50a198bf7c4a40959b871022c93.gif"},1894:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_2-de4fe25f49655f4690c284dbc1795b97.gif"},4987:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_3-215d76cdc8bc4f878f0c65e0f38cb67f.gif"},8754:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_4-d2d3eb531d522b3c2ecc06c75708a422.gif"},4553:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_5-c38985cbe7d9f1230834006f3c180756.gif"},6387:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_6-972a56cbf3f3e4dcf1405c5171221ac3.gif"},3671:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_7-4e8aa05d9387bd54375d1937fd5d268f.gif"},6858:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/animation_8-1543dac6e2122810972ca08d1b2494ca.gif"},6250:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/examples-c520fb3a8573eae6662f19f5cd7222ca.png"},886:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/examples_specialty-28a050cc9e8ab61cedc9fc4547895192.png"},9515:(t,L,u)=>{u.d(L,{Z:()=>M});const M=u.p+"assets/images/gl-6725eadc73d5ca40cd33198e781c636c.png"},5156:(t,L,u)=>{u.d(L,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMTEzLjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwMCAxMTMuNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTExOCA3MS4ydi05LjljMC0uNC4zLS43LjctLjdoMi40YzEgMCAxLjguMyAyLjQgMSAuOC44IDEuMiAxLjYgMi4yIDQuOC42IDEuOCAxIDMuNSAxLjQgNS4xLjEuMy40LjYuNy42aDUuNmMuNCAwIC43LS4zLjctLjcgMC0uMSAwLS4yLS4xLS4zLS41LTEuMy0uOS0yLjMtMS4xLTIuOC0uOS0yLjUtMS43LTQuNi0yLjMtNi4zLTEtMi42LTEuNy0zLjQtMy4zLTQgMS41LS42IDIuMi0xIDMtMS44IDEuMi0xLjMgMS44LTMuNCAxLjgtNiAwLTUuMi0yLjktOC4zLTgtOC4zaC0xMS44Yy0uNCAwLS43LjMtLjcuN3YyOC44YzAgLjQuMy43LjcuN2g0LjdjLjYtLjIgMS0uNSAxLS45em00LjgtMTdoLTQuMWMtLjQgMC0uNy0uMy0uNy0uN3YtNWMwLS40LjMtLjcuNy0uN2g0LjJjMS45IDAgMi45IDEuMSAyLjkgMy4xcy0xLjEgMy4zLTMgMy4zem0yMy4zIDE4LjZjMy4xIDAgNS42LTEuMSA3LjQtMy4xLjUtLjYgMS4xLTEuNiAxLjctMyAuMi0uNCAwLS44LS40LTFoLS4xbC00LTEuM2MtLjQtLjEtLjguMS0uOS40LS4yLjYtLjUgMS0uNyAxLjItLjguOS0xLjkgMS4zLTMuMiAxLjMtMi41IDAtMy45LTEuNi00LjItNC41SDE1NWMuNCAwIC43LS4zLjctLjd2LS40Yy0uMS0xLjktLjItMy4zLS40LTQuMy0xLjEtNS40LTQuNS04LjUtOS40LTguNS02IDAtOS45IDQuOC05LjkgMTIgMCAzLjYgMSA2LjcgMi44IDguOSAxLjkgMiA0LjMgMyA3LjMgM3ptMy44LTE1aC04Yy41LTIuNCAxLjktMy42IDQuMS0zLjYgMi4xLjEgMy41IDEuMyAzLjkgMy42em0xNC45IDE0LjZjMi42IDAgNC4zLS42IDYuMS0yLjJ2LjljMCAuNC4zLjcuNy43aDQuNGMuNCAwIC43LS4zLjctLjdWNTYuOWMwLTMuMy0uOS01LjMtMi45LTYuNS0xLjItLjgtMy41LTEuMy01LjgtMS4zLTMgMC01LjMuNy03IDIuMS0xLjEuOS0xLjcgMS44LTIuMyAzLjMgMCAuMS0uMS4yLS4xLjMtLjEuNC4xLjguNS45aC4xbDQuNS45Yy40LjEuNy0uMS44LS41VjU2Yy41LTEuMyAxLjYtMS45IDMuMy0xLjkgMi4xIDAgMyAuOCAzIDIuNXYuMWMwIC40LS4zLjctLjcuNy0xLjcuMS0zIC4xLTMuNy4yLTIuOC4zLTQuOSAxLjEtNi41IDIuNC0xLjUgMS4yLTIuMyAzLTIuMyA1LjMgMCAyIC42IDMuNyAxLjcgNC45IDEuMyAxLjYgMy4xIDIuMiA1LjUgMi4yem0xLjQtNWMtMS42IDAtMi42LS44LTIuNi0yLjEgMC0xLjEuNy0yIDEuOC0yLjQuOC0uMyAyLjMtLjUgNC42LS43LjQgMCAuOC4zLjguN3YuM2MwIDEuMS0uNCAyLjEtMS4xIDIuOC0uOC45LTIuMiAxLjQtMy41IDEuNHptMjMuMiA1LjNjMy42IDAgNi41LTEuNSA4LTQuMi4zLS42LjctMS41IDEuMS0yLjguMS0uNC0uMS0uOC0uNS0uOWgtLjFsLTQuMy0uOGMtLjQtLjEtLjcuMi0uOC41LS4xLjUtLjMuOC0uNCAxLS42IDEtMS43IDEuNi0zIDEuNi0yLjUgMC00LjEtMi41LTQuMS02LjVzMS41LTYuMyA0LTYuM2MxLjEgMCAyIC40IDIuNiAxLjMuMi4zLjQuOC43IDEuNS4xLjQuNS42LjkuNWw0LjItMWMuNC0uMS42LS41LjUtLjktLjEtLjQtLjItLjYtLjMtLjktMS40LTMuOC00LjUtNi04LjctNi02LjEgMC0xMCA0LjctMTAgMTEuOSAwIDMuNiAxIDYuOCAyLjggOC44IDEuOSAyLjIgNC40IDMuMiA3LjQgMy4yem0yMC41LS4yaDMuNmMuNCAwIC43LS4zLjctLjd2LTQuMWMwLS40LS4zLS43LS43LS43aC0xLjljLS42IDAtMS4xLS4xLTEuNC0uNC0uNC0uMy0uNi0uOC0uNi0xLjl2LTkuM2gzLjRjLjQgMCAuNy0uMy43LS43di00LjJjMC0uNC0uMy0uNy0uNy0uN2gtMy40di01YzAtLjQtLjMtLjctLjctLjdoLTQuNGMtLjQgMC0uNy4zLS43Ljd2NWgtMy4yYy0uNCAwLS43LjMtLjcuN3Y0LjJjMCAuNC4zLjcuNy43aDMuMnYxMS4xYzAgMi41LjQgMy43IDEuNiA0LjguOS44IDIuNCAxLjIgNC41IDEuMnptMjMuNS0xLjRjLS4xLTEuNy0uMi0zLjItLjItNC41VjU4YzAtMS44LS4xLTMuOC0uMi01LjQuOSAxLjkgMS40IDMgMi4yIDQuNWw1LjggMTAuMSAxLjkgMy44Yy4zLjUuOC44IDEuMy44aDUuMmMuNCAwIC43LS4zLjctLjdWNDIuNGMwLS40LS4zLS43LS43LS43aC00LjljLS40IDAtLjcuMy0uNy43djEzLjFjMCAyLjUuMSA0LjMuMiA1LjQtLjctMS42LTEuMy0yLjgtMi4yLTQuM0wyMzQgNDIuNGMtLjMtLjUtLjgtLjgtMS4zLS44aC00LjljLS40IDAtLjcuMy0uNy43djI4LjhjMCAuNC4zLjcuNy43aDQuOWMuNC4xLjctLjIuNy0uN3ptMjYuOCAxLjNjMi42IDAgNC4zLS42IDYuMS0yLjJ2LjljMCAuNC4zLjcuNy43aDQuNGMuNCAwIC43LS4zLjctLjdWNTYuOWMwLTMuMy0uOS01LjMtMi45LTYuNS0xLjItLjgtMy41LTEuMy01LjgtMS4zLTMgMC01LjMuNy03IDIuMS0xLjEuOS0xLjcgMS44LTIuMyAzLjMgMCAuMS0uMS4yLS4xLjMtLjEuNC4xLjguNS45aC4xbDQuNS45Yy40LjEuNy0uMS44LS41LjEtLjIuMS0uMy4yLS40LjYtMS4xIDEuNi0xLjYgMy4yLTEuNiAyLjEgMCAzIC44IDMgMi41di4xYzAgLjQtLjMuNy0uNy43LTEuNy4xLTMgLjEtMy43LjItMi44LjMtNC45IDEuMS02LjUgMi40LTEuNSAxLjItMi4zIDMtMi4zIDUuMyAwIDIgLjYgMy43IDEuNyA0LjkgMS4zIDEuNiAzLjEgMi4yIDUuNCAyLjJ6bTEuNS01Yy0xLjYgMC0yLjYtLjgtMi42LTIuMSAwLTEuMS43LTIgMS44LTIuNC44LS4zIDIuMy0uNSA0LjYtLjcuNCAwIC44LjMuOC43di4zYzAgMS4xLS40IDIuMS0xLjEgMi44LS45LjktMi4zIDEuNC0zLjUgMS40em0yMi42IDUuMWgzLjZjLjQgMCAuNy0uMy43LS43di00LjFjMC0uNC0uMy0uNy0uNy0uN0gyODZjLS42IDAtMS4xLS4xLTEuNC0uNC0uNC0uMy0uNi0uOC0uNi0xLjl2LTkuM2gzLjRjLjQgMCAuNy0uMy43LS43di00LjJjMC0uNC0uMy0uNy0uNy0uN0gyODR2LTVjMC0uNC0uMy0uNy0uNy0uN2gtNC40Yy0uNCAwLS43LjMtLjcuN3Y1SDI3NWMtLjQgMC0uNy4zLS43Ljd2NC4yYzAgLjQuMy43LjcuN2gzLjJ2MTEuMWMwIDIuNS40IDMuNyAxLjYgNC44LjkuOCAyLjQgMS4yIDQuNSAxLjJ6bTEyLjYtMjYuMXYtNGMwLS40LS4zLS43LS43LS43aC00LjVjLS40IDAtLjcuMy0uNy43djRjMCAuNC4zLjcuNy43aDQuNWMuMyAwIC43LS4zLjctLjd6bTAgMjQuOFY1MC41YzAtLjQtLjMtLjctLjctLjdoLTQuNWMtLjQgMC0uNy4zLS43Ljd2MjAuN2MwIC40LjMuNy43LjdoNC41Yy4zIDAgLjctLjMuNy0uN3ptMTYuNS4yIDYuNS0yMC43Yy4xLS40LS4xLS44LS41LS45aC01LjJjLS4zIDAtLjYuMi0uNy42bC0zLjQgMTMuOGMwIC4yLS4yLjMtLjQuMy0uMSAwLS4yLS4xLS4zLS4zTDMwNiA1MC40Yy0uMS0uMy0uNC0uNi0uNy0uNmgtNC45Yy0uNCAwLS43LjMtLjcuN3YuMmw2LjUgMjAuN2MuMS4zLjQuNS43LjVoNS43Yy40IDAgLjctLjIuOC0uNXptMTguMyAxLjRjMy4xIDAgNS42LTEuMSA3LjQtMy4xLjgtLjkgMS4yLTEuNiAxLjgtMy4xLjEtLjMgMC0uNy0uNC0uOWwtNC4xLTEuNGMtLjMtLjEtLjcuMS0uOC40LS4yLjUtLjQuOS0uOCAxLjMtLjguOS0xLjkgMS4zLTMuMiAxLjMtMi41IDAtMy45LTEuNi00LjItNC41aDEzLjNjLjQgMCAuNy0uMy43LS43LS4xLTIuMS0uMi0zLjYtLjUtNC44LTEuMS01LjQtNC41LTguNS05LjQtOC41LTYgMC05LjkgNC44LTkuOSAxMiAwIDMuNiAxIDYuNyAyLjggOC45IDEuOCAyLjEgNC4yIDMuMSA3LjMgMy4xem0zLjgtMTVoLThjLjUtMi40IDEuOS0zLjYgNC4xLTMuNiAyLjEuMSAzLjQgMS4zIDMuOSAzLjZ6bTM4LjYgMTMuNHYtNC44YzAtLjQtLjMtLjctLjctLjdIMzYxdi02LjFoMTAuNmMuNCAwIC43LS4zLjctLjdWNTRjMC0uNC0uMy0uNy0uNy0uN0gzNjFWNDhoMTJjLjQgMCAuNy0uMy43LS43di00LjhjMC0uNC0uMy0uNy0uNy0uN2gtMTcuNWMtLjQgMC0uNy4zLS43Ljd2MjguOGMwIC40LjMuNy43LjdoMTcuOGMuNS0uMS44LS40LjgtLjh6bTEyLjIgMS41YzMuNiAwIDYuNS0xLjUgOC00LjIuNS0uOS44LTEuNyAxLjEtMi44LjEtLjQtLjEtLjgtLjUtLjloLS4xbC00LjMtLjhjLS40LS4xLS43LjItLjguNS0uMS40LS4yLjctLjQgMS0uNiAxLTEuNyAxLjYtMyAxLjYtMi41IDAtNC4xLTIuNS00LjEtNi41czEuNS02LjMgNC02LjNjMS4xIDAgMiAuNCAyLjYgMS4zLjMuNC41LjguNyAxLjQuMS40LjUuNi45LjVsNC4yLTFjLjQtLjEuNi0uNS41LS45di0uMWMtMS4yLTQuMy00LjQtNi43LTktNi43LTYuMSAwLTEwIDQuNy0xMCAxMS45IDAgMy42IDEgNi44IDIuOCA4LjggMS44IDIuMiA0LjQgMy4yIDcuNCAzLjJ6bTE3LjktMS41VjU5YzAtMi4zIDEuOC0zLjcgMy42LTMuN3MzLjYuOCAzLjYgMy43djEyLjJjMCAuNC4zLjcuNy43aDQuNWMuNCAwIC43LS4zLjctLjdWNTguM2MwLTIuOS0uNC00LjktMS41LTYuMy0xLjEtMS40LTMtMi43LTUuNi0yLjctMi43IDAtNC40LjctNi4xIDIuNXYtOS40YzAtLjQtLjMtLjctLjctLjdIMzk5Yy0uNCAwLS43LjMtLjcuN3YyOC43YzAgLjQuMy43LjcuN2g0LjVjLjQuMS43LS4yLjctLjZ6bTIzLjIgMS4yYzIuNiAwIDQuMy0uNiA2LjEtMi4ydi45YzAgLjQuMy43LjcuN2g0LjRjLjQgMCAuNy0uMy43LS43VjU2LjljMC0zLjMtLjktNS4zLTIuOS02LjUtMS4yLS44LTMuNS0xLjMtNS44LTEuMy0zIDAtNS4zLjctNyAyLjEtMS4xLjktMS44IDEuOS0yLjQgMy42LS4xLjQuMS44LjUuOWguMWw0LjUuOWMuNC4xLjctLjEuOC0uNVY1NmMuNS0xLjMgMS42LTEuOSAzLjMtMS45IDIuMSAwIDMgLjggMyAyLjV2LjFjMCAuNC0uMy43LS43LjctMS43LjEtMyAuMS0zLjcuMi0yLjguMy00LjkgMS4xLTYuNSAyLjQtMS41IDEuMi0yLjMgMy0yLjMgNS4zIDAgMiAuNiAzLjcgMS43IDQuOSAxLjMgMS42IDMuMSAyLjIgNS41IDIuMnptMS40LTVjLTEuNiAwLTIuNi0uOC0yLjYtMi4xIDAtMS4xLjctMiAxLjgtMi40LjgtLjMgMi4zLS41IDQuNi0uNy40IDAgLjguMy44Ljd2LjNjMCAxLjEtLjQgMi4xLTEuMSAyLjgtLjguOS0yLjIgMS40LTMuNSAxLjR6bTIwLjIgMy44VjYwLjhjLjItMS42LjUtMi43LjktMy4yLjktMS4zIDIuMS0yIDMuNy0yaDIuNWMuNCAwIC43LS4zLjctLjd2LTMuNWMwLS4zLS4yLS42LS41LS43LS43LS4zLTEuNi0uNS0yLjctLjUtMiAwLTMuMS40LTQuNiAyLjR2LTIuMWMwLS40LS4zLS43LS43LS43aC00LjVjLS40IDAtLjcuMy0uNy43djIwLjZjMCAuNC4zLjcuNy43aDQuNWMuNC4xLjctLjIuNy0uNnptMTkuOCAxLjNoMy4xYy40IDAgLjctLjMuNy0uN3YtNC4xYzAtLjQtLjMtLjctLjctLjdoLTEuNGMtLjYgMC0xLjEtLjEtMS40LS40LS40LS4zLS42LS44LS42LTEuOXYtOS4zaDMuNGMuNCAwIC43LS4zLjctLjd2LTQuMmMwLS40LS4zLS43LS43LS43aC0zLjR2LTVjMC0uNC0uMy0uNy0uNy0uN2gtNC40Yy0uNCAwLS43LjMtLjcuN3Y1aC0zLjJjLS40IDAtLjcuMy0uNy43djQuMmMwIC40LjMuNy43LjdoMy4ydjExLjFjMCAyLjUuNCAzLjcgMS42IDQuOCAxIC44IDIuNCAxLjIgNC41IDEuMnptMTUuMS4xYzMuMyAwIDUuOS0uOSA3LjQtMi43IDEtMS4yIDEuNi0yLjkgMS42LTQuOCAwLTIuNi0xLTQuNC0zLTUuNi0xLjEtLjctMi4xLTEtNS4xLTEuNy0zLjEtLjgtMy43LTEuMi0zLjctMi4xIDAtLjkgMS0xLjYgMi42LTEuNiAxLjIgMCAxLjkuMyAyLjMgMSAuMS4xLjEuMy4yLjUuMS40LjQuNi44LjVsNC41LS42Yy40LS4xLjctLjQuNi0uOHYtLjFjLS4xLS4zLS4yLS42LS4yLS43LS40LTEuMS0uOC0xLjgtMS42LTIuNi0xLjUtMS42LTMuNy0yLjMtNi42LTIuMy01LjIgMC04LjQgMi43LTguNCA3IDAgMS4yLjMgMi41LjggMy41LjYgMS4xIDEuNiAxLjkgMy4xIDIuNiAxIC40IDIuMi44IDQuNiAxLjMgMS43LjQgMi4xLjUgMi42LjguNC4zLjcuOC43IDEuMyAwIDEuMS0xLjEgMS43LTIuOSAxLjctMS43IDAtMi43LS42LTMuMi0xLjggMC0uMS0uMS0uMi0uMS0uMy0uMS0uNC0uNC0uNi0uOC0uNWwtNC43LjZjLS40LjEtLjcuNC0uNi44di4xYzAgLjIuMS4zLjEuNC4yIDEgLjUgMS43IDEgMi41IDEuMyAyLjMgNCAzLjYgOCAzLjZ6IiBzdHlsZT0iZmlsbDojMzA2ZGY4Ii8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTTAgMGgxMDYuMXYxMTMuNkgweiIvPjxnIHRyYW5zZm9ybT0icm90YXRlKC0zIDIxNC4xNSAtMTY1LjQ1MSkiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzczLjI1OSIgeTE9IjExODAuOTk1IiB4Mj0iLTM3NC45MTciIHkyPSIxMTgxLjA4MSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgzMS41NTkzIDEuNjY5MiAxLjY1NCAtMzEuODUwMSA5ODk4LjMwNCAzODI4Ny42NikiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzUwYTBmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzMwNmRmOCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTY3LjQgMjYuNiA1My4xIDQwLjhjLS40LjQtMSAuNy0xLjcuNy0uMyAwLS42LS4xLS45LS4yLTItMS4xLTQuNS0xLjMtNi44LS40LTQuMiAxLjYtNi4zIDYuNC00LjcgMTAuNiAxLjYgNC4yIDYuNCA2LjQgMTAuNiA0LjcgMi40LS45IDQuMS0yLjggNC44LTUuMS4yLTEgMS4xLTEuNiAyLjItMS42aC4zTDc0LjEgNTFoLjNjMS4yLjEgMi4xIDEuMSAyIDIuM3YuM2MtMS43IDEwLjItOC42IDE5LjItMTguOSAyMy4xLTE1LjUgNi0zMy0xLjgtMzguOS0xNy40czEuOC0zMyAxNy4zLTM5YzExLjItNC4zIDIzLjMtMS40IDMxLjUgNi4zeiIgc3R5bGU9ImZpbGw6dXJsKCNhKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzc0LjU3NyIgeTE9IjExODkuMSIgeDI9Ii0zNzUuMzYyIiB5Mj0iMTE4OS43MTYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMzQuNDIxMiAyLjE0NDkgMS44MDM5IC00MC45MjYzIDEwODEzLjI3MyA0OTUzNS4yODUpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMmRkZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMWI5ZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Im03MS41IDE5LjQtLjItLjFjLjUuNC44IDEgLjcgMS43IDAgLjUtLjMgMS0uNiAxLjRsLjEtLjEtNy43IDcuN2MtMTAtOS4yLTI1LjgtOS0zNS43LjktMTAgMTAtMTAuMSAyNi4zIDAgMzYuMyA5LjYgOS42IDI0LjkgMTAgMzUgMS4ydi4xYy40LS4zLjktLjUgMS41LS41LjUgMCAxIC4zIDEuNC42aC4xbDYuNSA2LjUtLjQtLjFjLjQuNC42IDEgLjYgMS42IDAgLjgtLjUgMS41LTEuMiAxLjhsLjQtLjRjLTE1LjMgMTMuNi0zOC42IDEzLjEtNTMuMi0xLjUtMTUuMS0xNS4xLTE1LjEtMzkuNy4xLTU0LjlDMzMuMyA3LjIgNTYuMyA2LjUgNzEuNSAxOS40eiIgc3R5bGU9ImZpbGw6dXJsKCNiKSIvPjwvZz48L3N2Zz4="}}]);