(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(e,t,r){},206:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(86),c=r(24);const i={logo:"ZklAu_"};c.a.bind(null,i);var l=i,u=e=>{var t=e.image,r=e.onSelect,n=void 0===r?()=>{}:r;return a.a.createElement("b",{className:l.logo,onClick:()=>n("home")},a.a.createElement("img",{src:t}))},s=r(113),p=r(51);const d={item:"_2P0i27",is_selected:"_3CoIBE",sub_menu:"_3VnD6A"};c.a.bind(null,d);var f=d,m=e=>{var t=e.isSubItem,r=e.view,n=e.isSelected;return a.a.createElement(p.b,{className:"".concat(f.item," ").concat(n?f.is_selected:""," ").concat(t?f.sub_menu:""),label:r.name||r.path,to:"home"==r.path?"":"/".concat(r.path)})};const h={container:"_251g1f",wrapper:"_2rIB7G"};c.a.bind(null,h);var b=h;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var j=e=>{var t=e.isOpen,r=e.items,n=e.selectedView,o=e.onSelect,c=e.colors,i=t?{opacity:1,x:0}:{opacity:0,x:20},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(s.b)(e.length,{config:{mass:1,tension:230,friction:26},x:i.x,opacity:i.opacity,from:i,to:i,delay:t})};return console.log(n),a.a.createElement("b",{className:b.container,style:{transform:"".concat(t?"translate3d(-1vh,0,0)":"translate3d(100%,0,0)"),transition:"transform 0.5s ease-in-out"}},a.a.createElement("b",{className:b.wrapper},a.a.createElement("style",null,".".concat(b.container," {\n\t\t\t\t--data_color_primary: ").concat(c.primary,";\n\t\t\t\t--data_color_accent: ").concat(c.accent,";\n\t\t\t}")),l(r).map((e,t)=>{var c=e.x,i=e.opacity,u=O(e,["x","opacity"]),p=r[t];return a.a.createElement(s.a.div,{key:p.path,style:v({},u,{transform:c.interpolate(e=>"translate3d(".concat(e,"vw,0,0)")),opacity:i})},a.a.createElement(m,{isSelected:p.path==n,view:p,onSelect:e=>o(e)}),p.submenu?l(p.submenu,200*t).map((e,t)=>{var r=e.x,c=e.opacity,i=O(e,["x","opacity"]),l=p.submenu[t];return a.a.createElement(s.a.div,{key:l.path,style:v({},i,{transform:r.interpolate(e=>"translate3d(".concat(e,"vw,0,0)")),opacity:c})},a.a.createElement(m,{isSubItem:!0,isSelected:l.path==n,view:l,onSelect:e=>o(e)}))}):null)})))};const w={header:"hkUTQC",heading:"_1rqxxf",description:"_2yQ60k"};c.a.bind(null,w);var E=w,P=e=>{var t=e.heading,r=e.description;return a.a.createElement("b",{className:E.header},a.a.createElement("b",{className:E.heading},t),r?a.a.createElement("b",{className:E.description},r):null)};const x={gradient:"_3UE9Oi"};c.a.bind(null,x);var S=x,k=e=>a.a.createElement("b",{className:S.gradient,style:{background:"linear-gradient(122deg, ".concat(e.first," 30%, ").concat(e.last,")")}},e.children);const _={container:"_3MXyvE"};c.a.bind(null,_);var C=_,D=e=>{var t=e.data,r=void 0===t?{}:t,n=e.email,o=void 0===n?null:n,c=e.phone,i=void 0===c?null:c;return a.a.createElement("b",{className:C.container},r.email?a.a.createElement("b",null,a.a.createElement("a",{href:"mailto:".concat(o)},o)):null,r.phone?a.a.createElement("b",null,a.a.createElement("a",{href:"tel:".concat(i)},i)):null)},N=r(149),T=r.n(N),A=a.a.createElement("b",null,"gallery view"),q=e=>{var t=e.data,r=e.view,n=e.constants,o=e.colors;return a.a.createElement("b",{className:T.a.container},"View is ",r,a.a.createElement(P,{heading:t.heading||null,description:t.description||null}),"error"==r?a.a.createElement("b",{className:T.a.gallery},"page not found"):"contact"==r?a.a.createElement(D,{data:t,email:n.email,phone:n.phone}):"gallery"==r?A:o.gradients.map((e,t)=>a.a.createElement(k,{key:t,first:o.palette[e.first],last:o.palette[e.last]},a.a.createElement("b",{style:{color:o.palette[e.text],fontSize:"2rem",fontWeight:"bold"}},"testing"))))};const M={container:"ZhTl0Q",content:"_1fG4Nc",menu:"_3soQ4a",is_opened:"EDc94x"};c.a.bind(null,M);var I=M;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=e=>{var t=e.data,r=Object(n.useContext)(o.a),c=Object(n.useContext)(o.b),i=c.isMenuOpened,l=c.view,s=c.nav,p=c.constants,d=c.colors,f="home"==l?L({},t.home,{categories:t.categories}):Object.keys(t.categories).indexOf(l)>-1?t.categories[l]:L({},t[l])||L({},t.home,{categories:t.categories}),m=t[l]?l:Object.keys(t.categories).indexOf(l)>-1?"gallery":"error",h="".concat(I.menu," ion-navicon ").concat(i?I.is_opened:""),b={primary:d.palette[d.menu.primary],accent:d.palette[d.menu.accent]};return t?a.a.createElement("b",{className:I.container},a.a.createElement("b",{className:I.content,style:i?{opacity:.5,transform:"translateX(-100%)",overflow:"hidden",height:"100%"}:{opacity:1,transform:"translateX(0%)"}},a.a.createElement(u,{image:t.logo,onSelect:e=>r({type:"selectView",view:e})}),a.a.createElement(q,{data:f,view:m,constants:p,colors:d})),a.a.createElement("b",{className:h,style:{color:i?b.primary:b.accent},onClick:()=>r({type:"toggleMenu"})}),a.a.createElement(j,{isOpen:i,items:s||null,colors:b,selectedView:l,onSelect:e=>r({type:"selectView",view:e})})):null}},207:function(e,t,r){r(208),e.exports=r(576)},51:function(e,t,r){"use strict";var n=r(202),a=r(1),o=r.n(a),c=r(3);function i(){for(var e=[],t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var a of r)a&&e.push(...a.split("/"));var o=[];for(var c of e)c&&"."!==c&&(".."===c&&o.pop(),o.push(c));var i=o.join("/");return""===e[0]&&(i="/"+i),i}function l(e){if("@"===e[0]){var t=e.slice(0,e.indexOf("/")>>>0),r=e.slice(t.length);e=i(this[t],r)}return 0===this.path.indexOf(e)}function u(e,t,r){return t?Object(a.isValidElement)(t)?t:Object(a.createElement)(t,{scope:r}):"function"===typeof e?e({scope:r}):e}function s(e,t,r){var n=Object.create(e);return"/"===t[0]?n.route=i(e.root,t):n.route=i(e.route,t),r&&(d["@".concat(r)]=n.route),n.matched=[],n.includes=l,n}function p(e){var t=e.children,r=e.render,n=e.match,c=e.exact,l=e.name,p=Object(a.useContext)(m);if(!p)throw new Error('<Scope match="'.concat(n,'"> was rendered outsite of a <Scope.Root>'));var d=s(p,function(e,t){if(!t)return e.route;if("@"===t[0]){var r=t.slice(0,t.indexOf("/")>>>0),n=t.slice(r.length);return i(e[r],n).toLowerCase()}return t.toLowerCase()}(p,n),l);return function(e,t,r){var n=r?e.path===t.route:0===e.path.indexOf(t.route);return n&&e.matched.push(t.route),n}(p,d,c)?o.a.createElement(m.Provider,{value:d},u(t,r,d)):null}var d={},f=o.a.createRef(null),m=o.a.createContext(null);function h(){return Object(a.useContext)(m)}p.Root=function(e){var t=e.children,r=e.root,n=void 0===r?"/":r,a=e.path,c={root:n,path:void 0===a?"/":a,aliases:d},i=s(c,n);return f.current=c,o.a.createElement(m.Provider,{value:i},t)},p.Protected=function(e){var t=e.children,r=e.render,n=e.guard;if(!Object(c.g)(n))throw Error("<Scope.Protected> requires a guard attribute (a function)");var o=Object(a.useContext)(m);return o.matched.length?null:n()?u(t,r,o):null},p.NotMatched=function(e){var t=e.children,r=e.render,n=Object(a.useContext)(m);return n.matched.length?null:u(t,r,n)};var b=p,y=r(148),v=r(110),g=r(39);var O=r(204);var j=r(30),w=r(112),E=Object(w.b)();E.push=(e,t)=>{j.a.history.pushState(t,"",e)},E.replace=(e,t)=>{j.a.history.replaceState(t,"",e)},E.back=()=>{j.a.history.go(-1)},E.forward=()=>{j.a.history.go(1)},j.a.addEventListener("popstate",e=>{E.emit("popstate",e)}),j.a.addEventListener("hashchange",e=>{location.hash&&document.querySelector(location.hash).scrollIntoView({behavior:"smooth"})});var P=E;function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){var r=t.type,n=t.data;if("reset"===r)return n;if("change"===r)return Object(y.a)(e,n);if("navigate"===r){var a=n.replace,o=n.root,i=a?"replace":"push",l=function(e){if(!e)throw Error("toURL() expects a string or an object");if(Object(c.m)(e)){var t=Object(O.a)(e);return{path:t.pathname,query:t.query?g.a.parse(t.query):{},hash:t.hash||""}}return{path:e.path||"/",query:e.query||{},hash:e.hash||""}}(n.to);return(e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)).root=o||e.root,e.url=l,P[i](function(e){var t="";return Object(v.a)(e.query).length&&(t="?"+g.a.stringify(e.query)),e.path+t+e.hash}(l),e),e}throw Error('Action "'.concat(r,'" not available'))}var _={root:"/",url:{path:"/",query:{},hash:""}};_.url.path=location.pathname,location.search&&(_.url.query=g.a.parse(location.search.slice(1))),location.hash&&(_.url.hash=location.hash);var C=_;function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=o.a.createRef(null),T=o.a.createContext(null),A=o.a.createContext(null);function q(e){var t=D(Object(a.useReducer)(k,C),2),r=t[0],n=t[1];return N.current=n,o.a.createElement(A.Provider,{value:n},o.a.createElement(T.Provider,{value:r},e.children))}function M(e){N.current(e)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=o.a.createContext(null),B=o.a.createContext(null),H={};function J(e,t){var r=t.type,n=t.name,a=t.ref,o=L({},e);switch(r){case"add":(o[n]||(o[n]=[])).push(a);break;case"remove":o[n].splice(o[n].indexOf(a)>>>0,1);break;default:throw Error("Slot: action not found.")}return o}function K(e){var t=e.children,r=e.render,n=e.name,o=e.overwrite,c=e.order,i=void 0===c?1:c,l=Object(a.useContext)(G)[n],u=(e,t)=>e.order>=t.order?1:-1,s=l?l.map(e=>e.current):[];if(r){return s.sort(u).map((e,t)=>Object(a.createElement)(r,L({},e.options,{key:t})))}return null==t||o&&s.length||s.push({order:i,content:t}),s.sort(u).map(e=>e.content)}K.Root=function(e){var t=I(Object(a.useReducer)(J,H),2),r=t[0],n=t[1];return o.a.createElement(B.Provider,{value:n},o.a.createElement(G.Provider,{value:r},e.children))},K.Fill=function(e){var t=e.children,r=e.slot,n=e.options,o=e.order,c=void 0===o?1:o,i=Object(a.useContext)(B),l=Object(a.useRef)(null);return Object(a.useEffect)(()=>(l.current={order:c,options:n,content:t},i({ref:l,type:"add",name:r}),()=>i({ref:l,type:"remove",name:r})),[r,n,c]),null};var Q=K;function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(e){var t=U([Object(a.useContext)(T),Object(a.useContext)(A)],2),r=t[0],n=t[1];return Object(a.useEffect)(()=>{function t(e){e.state&&n({type:"reset",data:e.state})}return n({type:"navigate",data:{root:e.root,to:r.url,replace:!0}}),P.on("popstate",t),()=>P.off("popstate",t)},[]),o.a.createElement(b.Root,{root:r.root,path:r.url.path},o.a.createElement(Q.Root,null,e.children))}function X(e){return h()?e.children:o.a.createElement(q,null,o.a.createElement(W,e))}function Z(e){var t=e.protocol,r=e.hostname,n=e.port;return t+"//"+r+(n?":"+n:"")}function z(e,t,r){var n,a=t.onClick,o=t.target,l=t.newtab,u=t.native,s=t.delay;if(("function"===typeof a&&a(e,t,r),!(u||o||l))&&(n=e.currentTarget,Z(j.a.location)===Z(n)&&"#"!==r.charAt(0)&&0===e.button&&!(e.altKey||e.metaKey||e.ctrlKey||e.shiftKey)))return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c.m)(e)&&(e={to:e});var t=e,r=t.to,n=t.delay,a=t.resolved;if(r.includes("://"))return window.location=r;if(!0!==a){if("."===r[0])throw Error("navigate() can't resolve relative paths");if("@"===r[0]){var o=r.slice(0,r.indexOf("/")>>>0),l=r.slice(o.length);e.to=i(f.current.root,d[o],l)}}if(Object(c.j)(n))return setTimeout(()=>M({type:"navigate",data:e}),n);M({type:"navigate",data:e})}({to:r,delay:s,resolved:!0}),function(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}(e)}function F(e){var t=e.id,r=e.className,n=e.style,o=e.target,c=e.to,l=e.newtab,u=e.label,s=e.children,p=e.native,d=h(),f=p?c:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("/"===e[0])return e;if("@"===e[0]){var r=e.slice(0,e.indexOf("/")>>>0),n=e.slice(r.length);return i(t.aliases[r],n)}return e.includes("://")?e:i(t.route,e)}(c,d);return Object(a.createElement)("a",{id:t,className:r,style:n,href:f,target:o||l&&"_blank",children:s||u,onClick:t=>z(t,e,f)})}var Y={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},$={};for(ee=97;ee<123;ee++)Y[String.fromCharCode(ee)]=ee-32;for(var ee=48;ee<58;ee++)Y[ee-48]=ee;for(ee=1;ee<13;ee++)Y["f"+ee]=ee+111;for(ee=0;ee<10;ee++)Y["numpad "+ee]=ee+96;for(name in Y)$[Y[name]]=name;var te=r(205);function re(e){return e.json().then(t=>({message:e.statusText,code:e.status,body:t})).catch(e=>({message:"HTTP response error",code:400,body:e.message}))}function ne(e){var t=e.url,r=e.method,n=void 0===r?"GET":r,a=e.data,o=void 0===a?null:a,c=e.headers,i={method:n,headers:void 0===c?{}:c,credentials:"include"};return o&&(i.body=JSON.stringify(o),i.headers["content-type"]="application/json"),Object(te.a)(t,i).then(re).then(e=>{if(e.code>=500)throw e;if(e.code>=400)throw e;return e})}var ae={request:ne,get:(e,t)=>(t&&(e+="?"+g.a.stringify(t)),ne({url:e,method:"GET"})),post(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.data,n=t.query,a=t.headers;return n&&(e+="?"+g.a.stringify(n)),ne({url:e,data:r,headers:a,method:"POST"})},put(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.data,n=t.query,a=t.headers;return n&&(e+="?"+g.a.stringify(n)),ne({url:e,data:r,headers:a,method:"PUT"})},patch(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.data,n=t.query,a=t.headers;return n&&(e+="?"+g.a.stringify(n)),ne({url:e,data:r,headers:a,method:"PATCH"})},delete:(e,t)=>(t&&(e+="?"+g.a.stringify(t)),ne({url:e,method:"DELETE"}))};r.d(t,"a",(function(){return X})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return F})),r.d(t,"d",(function(){return ae})),r.d(t,"e",(function(){return n.a}))},576:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(147),c=r.n(o),i=r(51),l=r(86),u=document.getElementById("application"),s=a.a.createElement(i.a,{root:"/photography"},l.c);!function(){var e=s;c.a.render(e,u,()=>{u.classList.replace("is_loading","is_loaded")})}()},86:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(111),c=(r(147),r(51));r(148);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=t.type,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(r){case"selectView":var a=t.view;n.view=a,n.isMenuOpened=!1;break;case"toggleMenu":n.isMenuOpened=!n.isMenuOpened;break;case"set":(function(e){throw new Error('"'+e+'" is read-only')})("state"),n=t.initialState;break;default:throw Error("Website: action not found.")}return n}var s=r(206),p=r(24);const d={container:"_1bGzLC"};p.a.bind(null,d);var f=d,m=(e,t)=>{var r=e.data,n=void 0===r?null:r;e.isLandscape,e.isPortrait;return t?{children:t}:a.a.createElement("b",{className:f.container},a.a.createElement(s.default,{data:n}))},h=m=Object(o.withOrientationChange)(m);const b={application:"o3wYPq",opened_menu:"_26EPln",wrapper:"_1nhpao",container:"_1HWPZi",containerMobile:"_2kJeAW"};p.a.bind(null,b);var y=b;function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"b",(function(){return O})),r.d(t,"a",(function(){return j}));var g=Object(c.e)(()=>Promise.resolve().then(r.bind(null,206))),O=a.a.createContext(null),j=a.a.createContext(null),w={standard:g};var E=e=>{var t=e.data,r=e.layout,c=e.name,i=e.colors,l={logo:t.logo,nav:t.menu,view:c,isMenuOpened:!1,constants:t.constants,colors:i},s=v(Object(n.useReducer)(u,l),2),p=s[0],d=s[1],f=p.isMenuOpened,m=t?Object(n.createElement)(r,{data:t}):null;return a.a.createElement(j.Provider,{value:d},a.a.createElement(O.Provider,{value:p},o.isMobile?a.a.createElement(h,null,a.a.createElement("b",{className:y.container_mobile},m)):a.a.createElement("b",{className:"".concat(y.application," ").concat(f?y.opened_menu:""),style:{background:"linear-gradient(122deg, ".concat(i.palette.filter(e=>e+", "),")")}},a.a.createElement("b",{className:y.wrapper,style:{backgroundImage:"url(".concat(t.staticBackground||null,")")}},a.a.createElement("b",{className:y.container},m)))))};t.c=a.a.createElement(()=>{var e=v(Object(n.useState)(null),2),t=e[0],r=e[1];Object(n.useEffect)(()=>{c.d.get("data.json",{}).then(e=>{r(e.body)}).catch(e=>{console.log("HTTP Error",e)})},[]);var o,i=t?t.constants.colors[(o=t.constants.colors.length,Math.floor(Math.random()*Math.floor(o)))]:null;return t&&t.menu.map(e=>a.a.createElement(a.a.Fragment,null,e.submenu?e.submenu.map(e=>a.a.createElement(c.c,{exact:!e.path,match:"/".concat("home"==e.path?"":e.path),render:()=>a.a.createElement(E,{colors:i,data:t,path:e.path,name:e.name?e.name:e.path,layout:w[e.layoutType]}),key:e.path})):null,a.a.createElement(c.c,{exact:!e.path,match:"/".concat("home"==e.path?"":e.path),render:()=>a.a.createElement(E,{colors:i,data:t,name:e.name?e.name:e.path,layout:w[e.layoutType]}),key:e.path})))},null)}},[[207,2,0]]]);