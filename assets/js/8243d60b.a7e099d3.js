"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),h=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=h(a),m=r,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(d,o(o({ref:t},l),{},{components:a})):n.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const i={slug:"using-apache-echarts-in-react-native",title:"Using Apache ECharts in React Native",authors:["zhiqing"],tags:["intro"]},o=void 0,s={permalink:"/react-native-echarts/blog/using-apache-echarts-in-react-native",editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/blog/2023-02-09-using-apache-echarts-in-react-native/index.md",source:"@site/blog/2023-02-09-using-apache-echarts-in-react-native/index.md",title:"Using Apache ECharts in React Native",description:"We have developed an open source graphics library for react native APP, which is based on Apache ECharts and uses RNSVG or RNSkia for rendering in a way that is almost identical to using it in the web, and can satisfy most graphics situations. The project source code is available at https://github.com/wuba/react-native-echarts.",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"intro",permalink:"/react-native-echarts/blog/tags/intro"}],readingTime:6.785,hasTruncateMarker:!1,authors:[{name:"Zhiqing Chen",title:"Maintainer of react-native-echarts",url:"https://github.com/zhiqingchen",imageURL:"https://github.com/zhiqingchen.png",key:"zhiqing"}],frontMatter:{slug:"using-apache-echarts-in-react-native",title:"Using Apache ECharts in React Native",authors:["zhiqing"],tags:["intro"]},nextItem:{title:"Welcome",permalink:"/react-native-echarts/blog/welcome"}},c={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Performance",id:"performance",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Handling TouchEvent",id:"handling-touchevent",level:2},{value:"For more information",id:"for-more-information",level:2}],l={toc:h},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have developed an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"open source graphics library")," for react native APP, which is based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts"},"Apache ECharts")," and uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-svg/react-native-svg"},"RNSVG")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shopify/react-native-skia"},"RNSkia")," for rendering in a way that is almost identical to using it in the web, and can satisfy most graphics situations. The project source code is available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"https://github.com/wuba/react-native-echarts"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Examples",src:a(6378).Z,width:"4160",height:"3120"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"When drawing charts, the chart library we use most frequently is ECharts. As one of the most mature chart libraries on the market, mainly for web-side use, there is no best way to use it in React Native, in the face of this situation, our solutions are:"),(0,r.kt)("p",null,"Option 1, use a chart libraries developed specifically for React Native as an alternative, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuxudong/react-native-charts-wrapper"},"react-native-charts-wrapper"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/victory/tree/main/packages/victory-native"},"victory-native"),", etc. The style and interaction of these chart libraries are different from ECahrts, and the richness of charts is not enough. Especially in the scenario of multi-platform requirements, a separate UI interaction design is needed for React Native."),(0,r.kt)("p",null,"Option 2, charts are rendered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},"react-native-webview"),", This solution uses injectedJavaScript for initialization and postMessage for event response, you can directly use open source libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/supervons/react-native-echarts-pro"},"react-native-echarts-pro"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/somonus/react-native-echarts"},"native-echarts"),", etc. When there are multiple charts or too many chart elements on the page, it will encounter performance bottlenecks, such as white screen phenomenon for large data volume area charts and single-axis scatter charts on Android, and there will be more obvious lag and frame drop during rendering."),(0,r.kt)("p",null,"Therefore, we consider developing a new chart library that can integrate the capabilities of ECharts into React Native applications for better usability and stronger performance."),(0,r.kt)("p",null,"Since we don\u2019t want to write a graphics library from scratch, let\u2019s look at what graphics libraries we currently have designed for React Native:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"react-native-svg: provides SVG support to React Native on iOS, Android, macOS, Windows, and a compatibility layer for the web."),(0,r.kt)("li",{parentName:"ol"},"react-native-skia: React Native Skia brings the Skia Graphics Library to React Native. Skia serves as the graphics engine for Google Chrome and Chrome OS, Android, Flutter, Mozilla Firefox and Firefox OS, and many other products. It also provides an ",(0,r.kt)("a",{parentName:"li",href:"https://shopify.github.io/react-native-skia/docs/images-svg"},"ImageSVG")," component that supports rendering of SVG formatted images.")),(0,r.kt)("p",null,"We know that ECharts supports SVG rendering, so if we get the SVG data before the chart is rendered and provide it to react-native-svg or react-native-skia for rendering, we will be able to achieve our goal."),(0,r.kt)("p",null,"After a period of experimentation, we have developed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"wrn-echart")," with the following features\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd25 The same way as Apache ECharts"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfa8 Rich charts, covering almost all usage scenarios"),(0,r.kt)("li",{parentName:"ul"},"\u2728 Optional rendering library, Skia or SVG"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude80 Able to reuse code with web"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf1 Support for zoom gestures")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"In practice, the overall process for wrn-echarts is similar to ECharts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"yarn add wrn-echarts"),(0,r.kt)("li",{parentName:"ol"},"Choose to install react-native-svg or @shopify/react-native-skia"),(0,r.kt)("li",{parentName:"ol"},"Introduce the relevant components from wrn-echarts"),(0,r.kt)("li",{parentName:"ol"},"Replace the SVGRenderer of ECharts with the SVGRenderer of wrn-echarts"),(0,r.kt)("li",{parentName:"ol"},"Write the option configuration information for the chart"),(0,r.kt)("li",{parentName:"ol"},"Use SkiaChart / SvgChart component")),(0,r.kt)("p",null,"Here is the sample code\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// import { SkiaChart, SVGRenderer } from 'wrn-echarts';\nimport SkiaChart, { SVGRenderer } from 'wrn-echarts/skiaChart';\nimport * as echarts from 'echarts/core';\nimport { useRef, useEffect } from 'react';\nimport { LineChart } from 'echarts/charts';\n\necharts.use([ SVGRenderer, LineChart ])\n\nexport default function App() {\n  const skiaRef = useRef<any>(null);\n  useEffect(() => {\n    const option = {\n      xAxis: {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n      },\n      yAxis: {\n        type: 'value'\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: 'line'\n        }\n      ]\n    }\n    let chart: any;\n    if (skiaRef.current) {\n      chart = echarts.init(skiaRef.current, 'light', {\n        renderer: 'svg',\n        width: 250,\n        height: 300,\n      });\n      chart.setOption(option);\n    }\n    return () => chart?.dispose();\n  }, []);\n\n  return <SkiaChart ref={skiaRef} />;\n}\n")),(0,r.kt)("p",null,"Here is a screenshot of it:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot",src:a(875).Z,width:"584",height:"395"})),(0,r.kt)("p",null,"Isn\u2019t it particularly easy? More chart configurations can be viewed on the ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/en/index.html"},"echarts website"),"."),(0,r.kt)("p",null,"We support most of the charts currently supported by ECharts. I will show some of the charts below, and more examples can be seen on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground"},"taro-playground")," project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example",src:a(2971).Z,width:"645",height:"527"}),"\n",(0,r.kt)("img",{alt:"Animate1",src:a(3539).Z,width:"400",height:"287"}),"\n",(0,r.kt)("img",{alt:"Animate2",src:a(1192).Z,width:"400",height:"292"}),"\n",(0,r.kt)("img",{alt:"Animate3",src:a(5554).Z,width:"400",height:"284"})),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"As mentioned before, the mainstream solution for using ECharts in React Native is to implement it via WebView. Among the many WebView-based implementations, react-native-echarts-pro has more users, so we chose react-native-echarts-pro as a comparison."),(0,r.kt)("p",null,"The following are screenshots of the initialization process for the different implementations:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Performance",src:a(5408).Z,width:"400",height:"776"})),(0,r.kt)("p",null,"After quite a few test cases, we found that wrn-echarts has performance advantages in regular usage scenarios, but in scenarios with large amounts of data, there will be significant lag because of the declarative UI rendering method, which we will continue to explore to improve performance subsequently."),(0,r.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Principle",src:a(3515).Z,width:"1146",height:"640"})),(0,r.kt)("p",null,"Above is the flowchart of the library, taking react-native-svg as an example, the core workflow is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Replace the SVGRenderer of ECharts, and replace the registered SVGPainter with the custom SVGPainter."),(0,r.kt)("li",{parentName:"ol"},"CustomSVGPainter inherits from SVGPainter, overwrites the constructor and part of the refresh function, calls the patch function registered on SVGComponent when the chart data is initialized or updated, and passes the calculated new SVG data to it."),(0,r.kt)("li",{parentName:"ol"},"Define SVGComponent, which manages the current chart instance and has a core patch function on it to receive real-time SVG data and then call the SVGElement function."),(0,r.kt)("li",{parentName:"ol"},"SVGElement function iterates all SVG nodes and transforms them into the corresponding SVG elements provided by react-native-svg for the final rendering action.")),(0,r.kt)("p",null,"When using react-native-skia, there are some differences. There is a core method patchString on the defined SkiaComponent component. patchString receives the changed SVG data, converts it into SVG string, and passes it to the ImageSVG component of react-native-skia for rendering."),(0,r.kt)("h2",{id:"handling-touchevent"},"Handling TouchEvent"),(0,r.kt)("p",null,"ECharts events are mouse events, such as click, dblclick, mousedown, mousemove, etc. The mouse events are used to trigger the display or animation of the chart elements."),(0,r.kt)("p",null,"We use the PanResponder of React Native to capture the events, then simulate the mobile TouchEvent as a mouse event and dispatch it to the chart instance generated by the ECharts init method."),(0,r.kt)("p",null,"For example, the action of following the mouse to display the legend on the chart is TouchStart + TouchMove on the mobile side, which translates to a mouse event of mousedown + mousemove."),(0,r.kt)("p",null,"Another example is the zooming of the chart, the mobile side is two-finger zooming, which is translated to the mouse mousewheel event, and the corresponding mousewheel scrolling distance is calculated by the two-finger distance change."),(0,r.kt)("p",null,"Here is the key code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Convert TouchEvent to MouseEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"PanResponder.create({\n  onPanResponderGrant: ({ nativeEvent }) => {\n    // Action start, translated into mouse down and move events\n    dispatchEvent(\n      zrenderId,\n      ['mousedown', 'mousemove'],\n      nativeEvent,\n      'start'\n    );\n  },\n  onPanResponderMove: ({ nativeEvent }) => {\n    // Handling finger movement operations\n    const length = nativeEvent.touches.length;\n    if (length === 1) {\n      // single finger\n    } else if (length === 2) {\n      // Handling two-finger movement operations here\n      if (!zooming) {\n        // ...\n      } else {\n        // Here the event is converted to a scroll wheel\n        const { initialX, initialY, prevDistance } = pan.current;\n        const delta = distance - prevDistance;\n        pan.current.prevDistance = distance;\n        dispatchEvent(zrenderId, ['mousewheel'], nativeEvent, undefined, {\n          zrX: initialX,\n          zrY: initialY,\n          zrDelta: delta / 120,\n        });\n      }\n    }\n  },\n  onPanResponderRelease: ({ nativeEvent }) => {\n    // The action is over, where it is transformed into a mouse click release operation\n  },\n})\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Applying a MouseEvent to an ECharts chart instance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function dispatchEvent(\n  zrenderId: number,\n  types: HandlerName[],\n  nativeEvent: NativeTouchEvent,\n  stage: 'start' | 'end' | 'change' | undefined,\n  props: any = {\n    zrX: nativeEvent.locationX,\n    zrY: nativeEvent.locationY,\n  }\n) {\n  if (zrenderId) {\n    var handler = getInstance(zrenderId).handler;\n    types.forEach(function (type) {\n      handler.dispatch(type, {\n        preventDefault: noop,\n        stopImmediatePropagation: noop,\n        stopPropagation: noop,\n        ...props,\n      });\n      stage && handler.processGesture(wrapTouch(nativeEvent), stage);\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"for-more-information"},"For more information"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts"},"https://github.com/wuba/react-native-echarts")," to view the source code, and give us a star if you like it. If you encounter any problems, you can submit an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/react-native-echarts/issues"},"issue"),"."),(0,r.kt)("p",null,"The sample code in this post is on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground"},"https://github.com/wuba/taro-playground")," project, which is also open source, and interested parties can also install the new version of the Taro Playground app directly from the app store or from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground/releases"},"releases page")," to experience it."))}u.isMDXComponent=!0},3539:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/animate1-dbd822744dbd0fe1f6889daa7a980b0e.gif"},1192:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/animate2-f3d76bae8015d20cf42452fc509cdec0.gif"},5554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/animate3-f7aa597993b2b557ba16e2551d5efe64.gif"},2971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-425748ac187589df63f342b881e6f028.jpg"},6378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/examples-3176fb6a357e32d589e7b3eb13b21ace.jpg"},5408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/performance-e78c5567d2d303b78c2e7b7ac9d3d9f4.gif"},3515:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/principle-40b62cc09f12dee58ca5dffe28733a63.webp"},875:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-00bb1a17b9d5bf43e26b384f6deff8c0.jpg"}}]);