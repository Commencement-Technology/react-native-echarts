"use strict";(self.webpackChunkreact_native_echarts=self.webpackChunkreact_native_echarts||[]).push([[7807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),h=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=h(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||l[u]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var h=2;h<i;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6776:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const r=["@wuba/react-native-echarts@2.0.0-all.1","react-native-svg","react-native-reanimated","@shopify/react-native-skia","react-native-gesture-handler"];function i(e){const t=e.name?decodeURIComponent(e.name):"Example",n=e.description?decodeURIComponent(e.description):"Example usage",i=`App.${e.ext?decodeURIComponent(e.ext):"tsx"}`,s=encodeURIComponent(JSON.stringify({[i]:{type:"CODE",contents:e.children}})),c=e.dependencies||r.join(","),o=e.platform||"web",h=e.supportedPlatforms||"ios,android,web",d=e.theme||"light",p=e.preview||"true",l=e.loading||"lazy";return a.createElement("div",{className:"snack-player","data-snack-name":t,"data-snack-description":n,"data-snack-files":s,"data-snack-dependencies":c,"data-snack-platform":o,"data-snack-supported-platforms":h,"data-snack-theme":d,"data-snack-preview":p,"data-snack-loading":l})}},2187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(6776);const s='// Original example: https://echarts.apache.org/examples/en/editor.html?c=area-simple\n// The following code is modified from\n// https://github.com/apache/echarts-examples/blob/gh-pages/public/examples/ts/area-simple.ts\n// under Apache License 2.0.\n\nimport { useState, useRef, useEffect } from "react";\nimport { StyleSheet, View, Dimensions } from "react-native";\nimport { SkiaRenderer, SkiaChart, echarts } from "@wuba/react-native-echarts";\n\necharts.use([SkiaRenderer]);\n\nexport default function App() {\n    const skiaRef = useRef<any>(null);\n    const chartRef = useRef<any>(null);\n    const [chartWidth, setChartWidth] = useState<number>(0);\n    const [chartHeight, setChartHeight] = useState<number>(0);\n  \n    useEffect(() => {\n      Dimensions.addEventListener("change", handleDimensionsChange);\n      return () => {\n        Dimensions.removeEventListener("change", handleDimensionsChange);\n      };\n    }, []);\n  \n    useEffect(() => {\n      const option = {\n        xAxis: {\n          type: "category",\n          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],\n          splitLine: {\n            show: true,\n            lineStyle: {\n              type: "dashed",\n            },\n          },\n        },\n        yAxis: {\n          type: "value",\n          min: "dataMin",\n          splitLine: {\n            show: true,\n            lineStyle: {\n              type: "dashed",\n            },\n          },\n        },\n        series: [\n          {\n            data: [150, 230, 224, 218, 135, 147, 260],\n            type: "line",\n            areaStyle: {\n              color: "rgba(230, 231, 231,0.8)",\n            },\n            lineStyle: {\n              color: "#d6d6d7",\n            },\n            symbol: "circle",\n            symbolSize: 8,\n            itemStyle: {\n              color: "#24262a",\n            },\n          },\n        ],\n      };\n      let chart: any;\n      if (skiaRef.current) {\n        chart = echarts.init(skiaRef.current, "light", {\n          renderer: "skia",\n          width: chartWidth,\n          height: chartHeight,\n        });\n        chart.setOption(option);\n        chartRef.current = chart;\n      }\n      return () => chart?.dispose();\n    }, []);\n\n    // watching for size changes, redraw the chart.\n    useEffect(() => {\n      chartRef.current.resize({\n        width: chartWidth,\n        height: chartHeight,\n      });\n    }, [chartWidth, chartHeight])\n\n    // Get the width and height of the container\n    const handleLayout = (e) => {\n      const { width, height } = e.nativeEvent.layout;\n      setChartWidth(width);\n      setChartHeight(height);\n    };\n\n    // Screen orientation change event\n    const handleDimensionsChange = (e) => {\n      const { width, height } = e.screen;\n      setChartWidth(width);\n      setChartHeight(height);\n    };\n\n    // The parent container box must have width and height in order to inherit\n    return (\n      <View style={styles.container} onLayout={handleLayout}>\n        <SkiaChart ref={skiaRef} />\n      </View>\n    );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: \'center\',\n    justifyContent: \'center\',\n  },\n});',c={sidebar_position:5},o="Adaptive Size Chart",h={unversionedId:"expo-snacks/adaptive-size-chart",id:"expo-snacks/adaptive-size-chart",title:"Adaptive Size Chart",description:"",source:"@site/docs/expo-snacks/adaptive-size-chart.md",sourceDirName:"expo-snacks",slug:"/expo-snacks/adaptive-size-chart",permalink:"/react-native-echarts/docs/expo-snacks/adaptive-size-chart",draft:!1,editUrl:"https://github.com/wuba/react-native-echarts/tree/docs/docs/expo-snacks/adaptive-size-chart.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Custom gestures using React Native Gesture Handler",permalink:"/react-native-echarts/docs/expo-snacks/custom-gesture-use-rngh"},next:{title:"Import individually",permalink:"/react-native-echarts/docs/advanced-guides/import-individually"}},d={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adaptive-size-chart"},"Adaptive Size Chart"),(0,r.kt)(i.Z,{name:"Adaptive Size Chart",mdxType:"SnackPlayer"},s))}m.isMDXComponent=!0}}]);