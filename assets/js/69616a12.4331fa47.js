"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1756],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64275:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},c=void 0,l={unversionedId:"glossary-of-terms",id:"version-1.x/glossary-of-terms",isDocsHomePage:!1,title:"Glossary of terms",description:"This is a new section of the documentation and it's missing a lot of terms! Please submit a pull request or an issue with a term that you think should be explained here.",source:"@site/versioned_docs/version-1.x/glossary-of-terms.md",sourceDirName:".",slug:"/glossary-of-terms",permalink:"/docs/1.x/glossary-of-terms",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/glossary-of-terms.md",tags:[],version:"1.x",frontMatter:{id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},sidebar:"version-1.x/docs",previous:{title:"Next steps",permalink:"/docs/1.x/next-steps"},next:{title:"Tab navigation",permalink:"/docs/1.x/tab-based-navigation"}},p=[{value:"Header",id:"header",children:[]},{value:"Screen component",id:"screen-component",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is a new section of the documentation and it's missing a lot of terms! Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/website"},"submit a pull request or an issue")," with a term that you think should be explained here.")),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("p",null,"Also known as navigation header, navigation bar, navbar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation."),(0,a.kt)("h2",{id:"screen-component"},"Screen component"),(0,a.kt)("p",null,"A screen component is a component that we use in our route configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const RootStack = StackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,    // <----\n    },\n    Details: {\n      screen: DetailsScreen, // <----\n    },\n  },\n  {\n    initialRouteName: 'Home',\n  }\n);\n")),(0,a.kt)("p",null,"The suffix ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen")," in the component name is entirely optional, but a frequently used convention; we could call it ",(0,a.kt)("inlineCode",{parentName:"p"},"CasaPantalla")," and this would work just the same."),(0,a.kt)("p",null,"We saw earlier that our screen components are provided with the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigator")," prop. It's important to note that ",(0,a.kt)("em",{parentName:"p"},"this only happens if the screen is rendered as a route by React Navigation")," (for example, in response to ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"). For example, if we render ",(0,a.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," as a child of ",(0,a.kt)("inlineCode",{parentName:"p"},"HomeScreen"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," won't be provided with the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation"),' prop, and when you press the "Go to Details... again" button on the Home screen, the app will throw one of the quintessential JavaScript exceptions "undefined is not an object".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n        <DetailsScreen />\n      </View>\n    );\n  }\n}\n")),(0,a.kt)("a",{href:"https://snack.expo.io/@react-navigation/screen-components",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.x/navigation-prop"},'"Navigation prop reference"')," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props.navigation"),"."))}m.isMDXComponent=!0}}]);