"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3091],{23091:function(e,n,t){t.d(n,{Tz:function(){return ee}});var r=t(52322),o=t(2784),i=t(45103),a=t(60507),c=t(21849),u=t(72779),s=t.n(u),l=t(72282),f=t.n(l),m=t(3411),h=t(64846),d=t.n(h),p=t(18788),b=t(65818),v=t(6107),y=t(12110),j=t(71045),k=t(12185),w="?ref_=",g="ext_shr_em",O="ext_shr_fb",x="ext_shr_tw",P="ext_shr_lnk",N=function(e,n,t,r){return{shareLabelText:e,shareLinkUrl:n,shareIconName:t,shareLinkTarget:r}};function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(){var e,n,t=(e=["\n    cursor: pointer;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return I=function(){return t},t}var L={email:"share-em",facebook:"share-fb",twitter:"share-tw",link:"share-lnk"},C={email:"share_em",facebook:"share_fb",twitter:"share_tw",link:"share_lnk"},S={name:"nm_",title:"tt_"},M="link",T="extra-contribute-action-",Z="contribute-extra-action-",U=m.default.div.withConfig({componentId:"sc-8daf0af2-0"})(I()),B=function(e){var n=(0,b.Vu)(),t=(0,i.useSnackbar)().sendSnack,o=(0,c.N)({id:"common_linkCopied",defaultMessage:"Link copied"});if(a.UG)return null;var u=function(r){return function(i){i.stopPropagation(),(0,p.P6)(L[r.shareIconName]),n.type&&(0,p.K8)(S[n.type]+C[r.shareIconName],n,L[r.shareIconName],p.qB.ACTION_ONLY),e.interactionHandler(r.shareLinkUrl)&&i.preventDefault(),r.shareIconName==M&&t({primaryText:o})}},l=function(e){e.stopPropagation()},m=function(e,n){var t=encodeURIComponent((0,k.ZZ)(n.emailSubject)),r=encodeURIComponent((0,k.ZZ)(n.shareBody)),o=encodeURIComponent(e+w+O),i=encodeURIComponent(e+w+x),a=encodeURIComponent(e+w+g),c="".concat("https://www.facebook.com/sharer.php","?u=").concat(o),u="".concat("https://twitter.com/intent/tweet","?text=").concat(r," - ").concat(i),s="mailto:?subject=".concat(t,"&body=").concat(r," - ").concat(a);return[N("Facebook",c,"facebook","_blank"),N("Twitter",u,"twitter","_blank"),N(k.Vr,s,"email","_blank"),N(k.Rq,e+w+P,"link","_copy")]}(function(e){if(a.UG)throw new Error("not supported from node");e=null!==e&&void 0!==e?e:window.location.href;var n=new(d())(e,window.location,!0);return delete n.query.ref_,n.set("query",n.query),n.host||n.set("host",window.location.host),n.toString()}(e.url),e.shareProps).map((function(e){return"_copy"===e.shareLinkTarget?function(e){return(0,r.jsx)(f(),{text:e.shareLinkUrl,options:{format:"text/plain"},children:(0,r.jsx)(i.ListItem,{className:s()(["sharemenu-listitem","sharemenu-copylink"]),preIconName:M,onClick:u(e),children:(0,k.ZZ)(e.shareLabelText)})},"copy-to-clipboard")}(e):function(e){return(0,r.jsx)(i.ListItem,{preIconName:e.shareIconName,href:e.shareLinkUrl,target:e.shareLinkTarget,className:"sharemenu-listitem",onClick:u(e),children:(0,k.ZZ)(e.shareLabelText)},e.shareIconName)}(e)})),h=function(e,n,t){var o=e.linkUrl,a={contributeButton:(0,r.jsx)(U,{onMouseLeave:l,"data-testid":T+n,children:(0,r.jsx)(i.ListItem,{className:s()([e.className,"sharemenu-listitem"]),preIconName:e.iconName,postIconName:e.postIconName,children:(0,k.ZZ)(e.label)},e.iconName+"-"+t)}),contributeUrl:(0,v.oq)(o,j.$R,!0),iframeClassName:Z+n,smallBreakpointAction:function(e){window.open((0,v.oq)(o,window.location.href,!0),"_self")}};return(0,r.jsx)(y.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){_(e,n,t[n])}))}return e}({},a))};if(e.shareProps.extraActions){m.push((0,r.jsx)(i.ListDivider,{},"divider"));var I=0;e.shareProps.extraActions.forEach((function(n,t){n.isContributionAction?(I+=1,m.push(h(n,I,t))):m.push(function(n,t){var o=n.linkUrl;return(0,r.jsx)(i.ListItem,{className:s()([n.className,"sharemenu-listitem"]),preIconName:n.iconName,postIconName:n.postIconName,href:o,target:n.linkTarget,onClick:function(t){t.stopPropagation();var r=!1;n.handler&&n.handler(o)&&(r=!0),e.interactionHandler(o)&&(r=!0),r&&t.preventDefault()},children:(0,k.ZZ)(n.label)},n.iconName+"-"+t)}(n,t))}))}return(0,r.jsx)(i.List,{className:"sharemenu-list",children:m})};function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){E(e,n,t[n])}))}return e}var V=function(e){return(0,r.jsx)(i.BottomSheet,{isOpen:e.menuVisibility,onCloseClicked:function(){return e.interactionHandler()},"data-testid":"share-bottom-sheet",closePromptLabel:(0,c.N)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"}),children:(0,r.jsx)(B,D({},e))})};function q(){var e,n,t=(e=["\n    position: relative;\n    right: 0;\n    top: 0;\n    text-align: left;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return q=function(){return t},t}var A=m.default.div.withConfig({componentId:"sc-f60b4868-0"})(q());function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){R(e,n,t[n])}))}return e}var z=function(e){var n=function(){return e.interactionHandler()};return(0,o.useEffect)((function(){return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}),[]),(0,r.jsx)(A,{onMouseLeave:n,"data-testid":"share-container",children:(0,r.jsx)(i.SetPalette,{palette:"dark",children:(0,r.jsx)(i.Menu,{menuID:"media-details-share-button",isVisible:e.menuVisibility,mode:"anchored",children:(0,r.jsx)(B,H({},e))})})})};function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var G=function(e){if(!a.jU)return null;var n=(0,i.useBreakpointsAsConfig)(),t=n.s||n.xs,o=e.forceBottomSheet||t?V:z;return(0,r.jsx)(o,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}({},e))},K=t(27018),W=t(34806);function Y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Y(e,n,t[n])}))}return e}var J,Q,X;var ee=function(e){var n,t=(0,o.useState)(!1),a=t[0],c=t[1],u=(0,W.B)().context,s=u.pageType,l=u.pageConst,f={type:s,subType:u.subPageType,id:l},m=function(e){return{shareBody:null!==(J=null===e||void 0===e?void 0:e.shareBody)&&void 0!==J?J:k.wM,emailSubject:null!==(Q=null===e||void 0===e?void 0:e.emailSubject)&&void 0!==Q?Q:k.VN,label:null!==(X=null===e||void 0===e?void 0:e.label)&&void 0!==X?X:k.Pj,extraActions:null===e||void 0===e?void 0:e.extraActions}}(e.shareProps),h=(0,k.ZZ)(m.label),d={shareProps:m,url:e.url,forceBottomSheet:e.forceBottomSheet,interactionHandler:function(n){return c(!1),!(!n||!e.shareHandler)&&e.shareHandler(n)},menuVisibility:a};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.IconButton,{name:null!==(n=e.iconButtonName)&&void 0!==n?n:"share",label:h,onClick:function(n){n.stopPropagation();var t=!a;!function(e,n){var t="".concat(n).concat("-menu-open");(0,K.ar)(e,t,K.qB.POP_UP)}(f,e.pageActionPrefix),c(t)},className:"sharemenu-iconbutton",onColor:e.onColor}),(0,r.jsx)(G,$({},d))]})}},12185:function(e,n,t){t.d(n,{Pj:function(){return o},wM:function(){return i},VN:function(){return a},Rq:function(){return c},Vr:function(){return u},ZZ:function(){return s}});var r=t(21849),o={id:"shareMenu_ariaLabel_shareOnSocialMedia",defaultMessage:"Share on social media"},i={id:"shareMenu_shareText_checkoutThisLink",defaultMessage:"Check out this link on IMDb!"},a=i,c={id:"shareMenu_copyLink",defaultMessage:"Copy Link"},u={id:"shareMenu_emailLink",defaultMessage:"Email Link"},s=function(e){return"string"===typeof e?e:(0,r.N)(e)}},65818:function(e,n,t){t.d(n,{mW:function(){return a},Vu:function(){return c}});var r=t(52322),o=t(2784),i=o.createContext({type:void 0,subType:void 0,id:void 0}),a=function(e){var n=e.value,t=e.children;return(0,r.jsx)(i.Provider,{value:n,children:t})},c=function(){return o.useContext(i)}}}]);