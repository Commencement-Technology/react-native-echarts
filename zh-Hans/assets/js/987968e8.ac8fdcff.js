"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[8012],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,s(s({ref:e},p),{},{components:t})):a.createElement(h,s({ref:e},p))}));function h(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[d]="string"==typeof n?n:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3908:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:4},s="\u5199\u4e00\u4e2a\u52a8\u6001\u53d8\u5316\u7684\u56fe\u8868",i={unversionedId:"getting-started/write-a-dynamic-data-chart",id:"getting-started/write-a-dynamic-data-chart",title:"\u5199\u4e00\u4e2a\u52a8\u6001\u53d8\u5316\u7684\u56fe\u8868",description:"\u6211\u4eec\u5c1d\u8bd5\u7528 Svg \u6a21\u5f0f\u753b\u4e00\u4e2a\u5c55\u793a\u52a8\u6001\u6570\u636e\u53d8\u5316\u7684\u56fe\u8868\uff0c\u5305\u542b\u67f1\u72b6\u56fe\u548c\u6298\u7ebf\u56fe\u3002\u5b83\u5728\u6d4f\u89c8\u5668\u7aef\u7684\u6548\u679c\u5728\u8fd9\u91cc\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/write-a-dynamic-data-chart.md",sourceDirName:"getting-started",slug:"/getting-started/write-a-dynamic-data-chart",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/write-a-dynamic-data-chart",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/write-a-dynamic-data-chart.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/write-a-simple-line-chart"},next:{title:"\u5199\u4e00\u4e2a\u81ea\u9002\u5e94\u5c3a\u5bf8\u7684\u56fe\u8868",permalink:"/react-native-echarts/zh-Hans/docs/getting-started/write-a-adaptive-height-chart"}},l={},c=[],p={toc:c},d="wrapper";function u(n){let{components:e,...o}=n;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5199\u4e00\u4e2a\u52a8\u6001\u53d8\u5316\u7684\u56fe\u8868"},"\u5199\u4e00\u4e2a\u52a8\u6001\u53d8\u5316\u7684\u56fe\u8868"),(0,r.kt)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u7528 Svg \u6a21\u5f0f\u753b\u4e00\u4e2a\u5c55\u793a\u52a8\u6001\u6570\u636e\u53d8\u5316\u7684\u56fe\u8868\uff0c\u5305\u542b\u67f1\u72b6\u56fe\u548c\u6298\u7ebf\u56fe\u3002\u5b83\u5728\u6d4f\u89c8\u5668\u7aef\u7684\u6548\u679c\u5728",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/examples/zh/editor.html?c=dynamic-data"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u50cf\u4e4b\u524d\u7684\u6848\u4f8b\u4e00\u6837\uff0c\u5bfc\u5165\u56fe\u8868\u4f9d\u8d56\u3002"),(0,r.kt)("p",{parentName:"li"},"\u67f1\u72b6\u56fe\u9700\u8981\u5f15\u5165 BarChart, \u5176\u4f59\u7528\u5230\u7684\u7ec4\u4ef6\u6709 ToolboxComponent, TooltipComponent, LegendComponent, DataZoomComponent\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BarChart } from 'echarts/charts';\nimport {\n  ToolboxComponent,\n  LegendComponent,\n  TooltipComponent,\n  DataZoomComponent,\n} from 'echarts/components';\nimport { SVGRenderer, SvgChart } from '@wuba/react-native-echarts';\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u77e5\u9053\u8be5\u5f15\u5165\u4ec0\u4e48\u7ec4\u4ef6\uff0c\u9047\u5230\u62a5\u9519\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/trouble-shooting/troubleshooting/#error-echarts-component-xxx-is-used-but-not-imported"},"\u8fd9\u91cc")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 echarts.use \u6765\u6ce8\u518c\u6e32\u67d3\u5668\u548c\u56fe\u8868\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"echarts.use([\n  SVGRenderer,\n  BarChart,\n  ToolboxComponent,\n  TooltipComponent,\n  LegendComponent,\n  DataZoomComponent,\n]);\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4e3a SvgChart \u7ec4\u4ef6\u521b\u5efa\u4e00\u4e2a Ref\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function App() {\n  const svgRef = useRef<any>(null);\n  return <SvgChart ref={svgRef} />;\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907 option \u53ca\u6570\u636e\u5207\u6362\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const categories = (function () {\n  let now = new Date();\n  let res = [];\n  let len = 10;\n  while (len--) {\n    res.unshift(now.toLocaleTimeString().replace(/^\\D*/, ''));\n    now = new Date(+now - 2000);\n  }\n  return res;\n})();\nconst categories2 = (function () {\n  let res = [];\n  let len = 10;\n  while (len--) {\n    res.push(10 - len - 1);\n  }\n  return res;\n})();\nconst data = (function () {\n  let res = [];\n  let len = 10;\n  while (len--) {\n    res.push(Math.round(Math.random() * 1000));\n  }\n  return res;\n})();\nconst data2 = (function () {\n  let res = [];\n  let len = 0;\n  while (len < 10) {\n    res.push(+(Math.random() * 10 + 5).toFixed(1));\n    len++;\n  }\n  return res;\n})();\nconst option = {\n  tooltip: {\n    trigger: 'axis',\n    axisPointer: {\n      type: 'cross',\n      label: {\n        backgroundColor: '#283b56',\n      },\n    },\n  },\n  legend: {},\n  toolbox: {\n    show: true,\n    feature: {\n      dataView: { show: false, readOnly: false },\n      restore: {},\n    },\n  },\n  dataZoom: {\n    show: false,\n    start: 0,\n    end: 100,\n  },\n  xAxis: [\n    {\n      type: 'category',\n      boundaryGap: true,\n      data: categories,\n    },\n    {\n      type: 'category',\n      boundaryGap: true,\n      data: categories2,\n    },\n  ],\n  yAxis: [\n    {\n      type: 'value',\n      scale: true,\n      name: 'Price',\n      max: 30,\n      min: 0,\n      boundaryGap: [0.2, 0.2],\n    },\n    {\n      type: 'value',\n      scale: true,\n      name: 'Order',\n      max: 1200,\n      min: 0,\n      boundaryGap: [0.2, 0.2],\n    },\n  ],\n  series: [\n    {\n      name: 'Dynamic Bar',\n      type: 'bar',\n      xAxisIndex: 1,\n      yAxisIndex: 1,\n      data: data,\n    },\n    {\n      name: 'Dynamic Line',\n      type: 'line',\n      data: data2,\n    },\n  ],\n};\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u56fe\u8868\u5b9e\u4f8b\u5e76\u8bbe\u7f6e\u9009\u9879\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let chart = echarts.init(svgRef.current, 'light', {\n  renderer: 'svg',\n  width: E_WIDTH,\n  height: E_HEIGHT,\n});\nchart.setOption(option);\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u521b\u5efa\u540e\uff0c\u5468\u671f\u66f4\u65b0\u6570\u636e\uff0c\u5b9e\u73b0\u52a8\u753b\u6548\u679c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let count = 11;\ninter = setInterval(function () {\n  let axisData = new Date().toLocaleTimeString().replace(/^\\D*/, '');\n\n  data.shift();\n  data.push(Math.round(Math.random() * 1000));\n  data2.shift();\n  data2.push(+(Math.random() * 10 + 5).toFixed(1));\n\n  categories.shift();\n  categories.push(axisData);\n  categories2.shift();\n  categories2.push(count++);\n\n  chart.setOption({\n    xAxis: [\n      {\n        data: categories,\n      },\n      {\n        data: categories2,\n      },\n    ],\n    series: [\n      {\n        data: data,\n      },\n      {\n        data: data2,\n      },\n    ],\n  });\n}, 2100);\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 useEffect \u6765\u786e\u4fdd\u56fe\u8868\u53ea\u88ab\u521d\u59cb\u5316\u4e00\u6b21\u3002\u5e76\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u91ca\u653e\u56fe\u8868\u548c\u5b9a\u65f6\u5668\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  return () => {\n    chart?.dispose();\n    clearInterval(inter);\n  };\n}, []);\n")),(0,r.kt)("p",null,"\u8fd9\u5c31\u662f\u4e86! \u8fd9\u91cc\u662f\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef, useEffect } from 'react';\nimport * as echarts from 'echarts/core';\nimport { Dimensions, StyleSheet, View } from 'react-native';\nimport { BarChart } from 'echarts/charts';\nimport {\n  ToolboxComponent,\n  LegendComponent,\n  TooltipComponent,\n  DataZoomComponent,\n} from 'echarts/components';\nimport { SVGRenderer, SvgChart } from '@wuba/react-native-echarts';\n\necharts.use([\n  SVGRenderer,\n  BarChart,\n  ToolboxComponent,\n  TooltipComponent,\n  LegendComponent,\n  DataZoomComponent,\n]);\n\nconst E_HEIGHT = 400;\nconst E_WIDTH = Dimensions.get('screen').width;\n\nconst categories = (function () {\n  let now = new Date();\n  let res = [];\n  let len = 10;\n  while (len--) {\n    res.unshift(now.toLocaleTimeString().replace(/^\\D*/, ''));\n    now = new Date(+now - 2000);\n  }\n  return res;\n})();\nconst categories2 = (function () {\n  let res = [];\n  let len = 10;\n  while (len--) {\n    res.push(10 - len - 1);\n  }\n  return res;\n})();\nconst data = (function () {\n  let res = [];\n  let len = 10;\n  while (len--) {\n    res.push(Math.round(Math.random() * 1000));\n  }\n  return res;\n})();\nconst data2 = (function () {\n  let res = [];\n  let len = 0;\n  while (len < 10) {\n    res.push(+(Math.random() * 10 + 5).toFixed(1));\n    len++;\n  }\n  return res;\n})();\nconst option = {\n  tooltip: {\n    trigger: 'axis',\n    axisPointer: {\n      type: 'cross',\n      label: {\n        backgroundColor: '#283b56',\n      },\n    },\n  },\n  legend: {},\n  toolbox: {\n    show: true,\n    feature: {\n      dataView: { show: false, readOnly: false },\n      restore: {},\n    },\n  },\n  dataZoom: {\n    show: false,\n    start: 0,\n    end: 100,\n  },\n  xAxis: [\n    {\n      type: 'category',\n      boundaryGap: true,\n      data: categories,\n    },\n    {\n      type: 'category',\n      boundaryGap: true,\n      data: categories2,\n    },\n  ],\n  yAxis: [\n    {\n      type: 'value',\n      scale: true,\n      name: 'Price',\n      max: 30,\n      min: 0,\n      boundaryGap: [0.2, 0.2],\n    },\n    {\n      type: 'value',\n      scale: true,\n      name: 'Order',\n      max: 1200,\n      min: 0,\n      boundaryGap: [0.2, 0.2],\n    },\n  ],\n  series: [\n    {\n      name: 'Dynamic Bar',\n      type: 'bar',\n      xAxisIndex: 1,\n      yAxisIndex: 1,\n      data: data,\n    },\n    {\n      name: 'Dynamic Line',\n      type: 'line',\n      data: data2,\n    },\n  ],\n};\n\nexport default () => {\n  const svgRef = useRef(null);\n\n  useEffect(() => {\n    let chart;\n    let inter;\n    if (svgRef.current) {\n      chart = echarts.init(svgRef.current, 'light', {\n        renderer: 'svg',\n        width: E_WIDTH,\n        height: E_HEIGHT,\n      });\n      chart.setOption(option);\n\n      let count = 11;\n      inter = setInterval(function () {\n        let axisData = new Date().toLocaleTimeString().replace(/^\\D*/, '');\n\n        data.shift();\n        data.push(Math.round(Math.random() * 1000));\n        data2.shift();\n        data2.push(+(Math.random() * 10 + 5).toFixed(1));\n\n        categories.shift();\n        categories.push(axisData);\n        categories2.shift();\n        categories2.push(count++);\n\n        chart.setOption({\n          xAxis: [\n            {\n              data: categories,\n            },\n            {\n              data: categories2,\n            },\n          ],\n          series: [\n            {\n              data: data,\n            },\n            {\n              data: data2,\n            },\n          ],\n        });\n      }, 2100);\n    }\n    return () => {\n      chart?.dispose();\n      clearInterval(inter);\n    };\n  }, []);\n  return (\n    <View style={styles.container}>\n      <SvgChart ref={svgRef} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u6700\u7ec8\u7684\u6548\u679c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"ios",src:t(5895).Z,width:"640",height:"1385"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"android",src:t(6731).Z,width:"590",height:"1280"}))))),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 react-native-skia\uff0c\u53ea\u9700\u5c06 SvgChart \u66ff\u6362\u4e3a SkiaChart\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u56fe\u8868\u914d\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/zh/option.html#title"},"echarts \u6587\u6863"),"\u3002"))}u.isMDXComponent=!0},6731:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/dynamic-data-android-a3a87f304ce4b02b5f552ea83bbd15a5.gif"},5895:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/dynamic-data-ios-a48f027a0a497a7eef3ff6ba4c47c2f4.gif"}}]);