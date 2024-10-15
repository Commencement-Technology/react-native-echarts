"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),h=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=h(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var h=2;h<i;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},s="Create a adaptive-sized chart",o={unversionedId:"getting-started/write-a-adaptive-height-chart",id:"getting-started/write-a-adaptive-height-chart",title:"Create a adaptive-sized chart",description:"During the coding process, sometimes we don't want to directly define fixed-sized charts but rather let ECharts charts automatically adapt to the container size. Here, we'll provide a simple example to demonstrate how to finish this.",source:"@site/docs/getting-started/write-a-adaptive-height-chart.md",sourceDirName:"getting-started",slug:"/getting-started/write-a-adaptive-height-chart",permalink:"/react-native-echarts/docs/getting-started/write-a-adaptive-height-chart",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/docs/getting-started/write-a-adaptive-height-chart.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Write a dynamic data chart",permalink:"/react-native-echarts/docs/getting-started/write-a-dynamic-data-chart"},next:{title:"Introduction",permalink:"/react-native-echarts/docs/expo-snacks/intro"}},c={},h=[],l={toc:h},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-adaptive-sized-chart"},"Create a adaptive-sized chart"),(0,r.kt)("p",null,"During the coding process, sometimes we don't want to directly define fixed-sized charts but rather let ECharts charts automatically adapt to the container size. Here, we'll provide a simple example to demonstrate how to finish this."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, as in the previous example, import the chart dependencies. Here, we are using LineChart, so we only import it. In practice, you should import the chart based on your specific use case.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useRef, useEffect } from "react";\nimport { StyleSheet, View, Dimensions } from "react-native";\nimport * as echarts from "echarts/core";\nimport { LineChart } from "echarts/charts";\nimport { GridComponent } from "echarts/components";\nimport { SkiaRenderer, SkiaChart } from "@wuba/react-native-echarts";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Use echarts.use to register renderers and charts.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"echarts.use([SkiaRenderer, LineChart, GridComponent]);\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a Ref for the SkiaChart component and use a View container to wrap it. Use onLayout to obtain the container's width and height for later assignment to the ECharts chart.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function App() {\n  const skiaRef = useRef<any>(null);\n  const chartRef = useRef<any>(null);\n  const [chartWidth, setChartWidth] = useState<number>(0);\n  const [chartHeight, setChartHeight] = useState<number>(0);\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Write the chart options.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const option = {\n  xAxis: {\n    type: "category",\n    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],\n    splitLine: {\n      show: true,\n      lineStyle: {\n        type: "dashed",\n      },\n    },\n  },\n  yAxis: {\n    type: "value",\n    min: "dataMin",\n    splitLine: {\n      show: true,\n      lineStyle: {\n        type: "dashed",\n      },\n    },\n  },\n  series: [\n    {\n      data: [150, 230, 224, 218, 135, 147, 260],\n      type: "line",\n      areaStyle: {\n        color: "rgba(230, 231, 231,0.8)",\n      },\n      lineStyle: {\n        color: "#d6d6d7",\n      },\n      symbol: "circle",\n      symbolSize: 8,\n      itemStyle: {\n        color: "#24262a",\n      },\n    },\n  ],\n};\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a chart instance and set the options.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'let chart = echarts.init(skiaRef.current, "light", {\n  renderer: "skia",\n  width: chartWidth,\n  height: chartHeight,\n});\nchart.setOption(option);\n')),(0,r.kt)("p",null,"After following the above steps, we have an initial chart that matches the size of the parent container. If we also need the chart to adapt its size based on external conditions, there are a few more steps to take. Here, we will demonstrate how to make the chart responsive to changes in mobile screen dimensions as an example."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Register the 'Dimensions' change event to listen for changes in screen size.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const handleDimensionsChange = (e) => {\n  const { width, height } = e.screen;\n};\n\nuseEffect(() => {\n  Dimensions.addEventListener("change", handleDimensionsChange);\n  return () => {\n    Dimensions.removeEventListener("change", handleDimensionsChange);\n  };\n}, []);\n')),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Upon detecting a change in screen size, reset the chart's dimensions.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleDimensionsChange = (e) => {\n  const { width, height } = e.screen;\n  setChartWidth(width);\n  setChartHeight(height);\n};\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Redraw the chart.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  chartRef.current.resize({\n    width: chartWidth,\n    height: chartHeight,\n  });\n}, [chartWidth, chartHeight]);\n")),(0,r.kt)("p",null,"The complete code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useRef, useEffect } from "react";\nimport { StyleSheet, View, Dimensions } from "react-native";\nimport * as echarts from "echarts/core";\nimport { LineChart } from "echarts/charts";\nimport { GridComponent } from "echarts/components";\nimport { SkiaRenderer, SkiaChart } from "@wuba/react-native-echarts";\n\necharts.use([SkiaRenderer, LineChart, GridComponent]);\n\nexport default function App() {\n  const skiaRef = useRef<any>(null);\n  const chartRef = useRef<any>(null);\n  const [chartWidth, setChartWidth] = useState<number>(0);\n  const [chartHeight, setChartHeight] = useState<number>(0);\n\n  useEffect(() => {\n    Dimensions.addEventListener("change", handleDimensionsChange);\n    return () => {\n      Dimensions.removeEventListener("change", handleDimensionsChange);\n    };\n  }, []);\n\n  useEffect(() => {\n    const option = {\n      xAxis: {\n        type: "category",\n        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],\n        splitLine: {\n          show: true,\n          lineStyle: {\n            type: "dashed",\n          },\n        },\n      },\n      yAxis: {\n        type: "value",\n        min: "dataMin",\n        splitLine: {\n          show: true,\n          lineStyle: {\n            type: "dashed",\n          },\n        },\n      },\n      series: [\n        {\n          data: [150, 230, 224, 218, 135, 147, 260],\n          type: "line",\n          areaStyle: {\n            color: "rgba(230, 231, 231,0.8)",\n          },\n          lineStyle: {\n            color: "#d6d6d7",\n          },\n          symbol: "circle",\n          symbolSize: 8,\n          itemStyle: {\n            color: "#24262a",\n          },\n        },\n      ],\n    };\n    let chart: any;\n    if (skiaRef.current) {\n      chart = echarts.init(skiaRef.current, "light", {\n        renderer: "skia",\n        width: chartWidth,\n        height: chartHeight,\n      });\n      chart.setOption(option);\n      chartRef.current = chart;\n    }\n    return () => chart?.dispose();\n  }, []);\n\n\n  // watching for size changes, redraw the chart.\n  useEffect(() => {\n    chartRef.current.resize({\n      width: chartWidth,\n      height: chartHeight,\n    });\n  }, [chartWidth, chartHeight]);\n\n  // Get the width and height of the container\n  const handleLayout = (e) => {\n    const { width, height } = e.nativeEvent.layout;\n    setChartWidth(width);\n    setChartHeight(height);\n  };\n\n  // Screen orientation change event\n  const handleDimensionsChange = (e) => {\n    const { width, height } = e.screen;\n    setChartWidth(width);\n    setChartHeight(height);\n  };\n\n  // The parent container box must have width and height in order to inherit\n  return (\n    <View style={styles.container} onLayout={handleLayout}>\n      <SkiaChart ref={skiaRef} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        alignItems: \'center\',\n        justifyContent: \'center\',\n    },\n}\n')),(0,r.kt)("p",null,"You should see the following screen:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"ios",src:n(8881).Z,width:"640",height:"1386"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"android",src:n(5296).Z,width:"592",height:"1280"}))))),(0,r.kt)("p",null,"If you want to use the react-native-svg\uff0cjust replace the SkiaChart with SvgChart and use 'svg' as renderer."),(0,r.kt)("p",null,"For more chart configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/en/option.html#title"},"echarts documentation"),"."))}p.isMDXComponent=!0},5296:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android_rotate-68672e6332e583279cdbfe55a0fcd679.gif"},8881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ios_rotate-dae1ebd268aa2b369b1349ccef6ab60d.gif"}}]);