"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2763],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,m=g["".concat(s,".").concat(f)]||g[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return g}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},s=void 0,u={unversionedId:"screen-tracking",id:"version-4.x/screen-tracking",isDocsHomePage:!1,title:"Screen tracking for analytics",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK.",source:"@site/versioned_docs/version-4.x/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/docs/4.x/screen-tracking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/screen-tracking.md",tags:[],version:"4.x",frontMatter:{id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},sidebar:"version-4.x-docs",previous:{title:"Deep linking",permalink:"/docs/4.x/deep-linking"},next:{title:"Themes",permalink:"/docs/4.x/themes"}},l=[{value:"Listening to State Changes",id:"listening-to-state-changes",children:[]}],p={toc:l};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK."),(0,o.kt)("h2",{id:"listening-to-state-changes"},"Listening to State Changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createAppContainer, createStackNavigator } from 'react-navigation';\nimport analytics from '@react-native-firebase/analytics';\n\n// gets the current screen from navigation state\nfunction getActiveRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getActiveRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = createStackNavigator(AppRouteConfigs);\nconst AppContainer = createAppContainer(AppNavigator);\n\nexport default () => (\n  <AppContainer\n    onNavigationStateChange={async (prevState, currentState) => {\n      const currentRouteName = getActiveRouteName(currentState);\n      const previousRouteName = getActiveRouteName(prevState);\n\n      if (previousRouteName !== currentRouteName) {\n        // the line below uses the @react-native-firebase/analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        await analytics().logScreenView({\n          screen_name: currentRouteName,\n          screen_class: currentRouteName\n        });\n      }\n    }}\n  />\n);\n")))}g.isMDXComponent=!0}}]);