!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2446de24-d94d-49b1-9508-11fd90832bdd",e._sentryDebugIdIdentifier="sentry-dbid-2446de24-d94d-49b1-9508-11fd90832bdd")}catch(e){}}(),(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[327],{44689:(e,t,n)=>{n.r(t),n.d(t,{SignIn:()=>_,default:()=>B});var a=n(67294),r=n(89250),o=n(17563),i=n(54851),c=n(40543),l=n(83953),d=n(95450),u=n(95006),s=n(60677),g=s.default.a.withConfig({displayName:"linkButton__LinkButton",componentId:"sc-9kv26a-0"})(["color:",";text-decoration:none;background-color:transparent;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;height:",";background:",";border:1px solid ",";border-radius:2px;max-width:320px;width:100%;",";&:hover{text-decoration:none;color:unset;}"],(0,i.getColor)("background"),(0,i.getSizeBy)(5.5),(0,i.getColor)("mainBackground"),(0,i.getColor)("mainBackground"),(function(e){var t=e.disabled;return"\n    opacity: ".concat(t?.4:1,";\n    pointer-events: ").concat(t?"none":"auto",";\n  ")})),f=function(e){return(0,s.default)(g).withConfig({displayName:"linkButton",componentId:"sc-9kv26a-1"})(["box-shadow:0px 0px 1px rgba(0,0,0,0.12);border-radius:2px;background:",";border:1px solid ",";span{flex:1;display:flex;align-items:center;justify-content:center;padding:0 ",";color:",";}"],e,e,(0,i.getSizeBy)(1),(0,i.getColor)("bright"))};var m=f("#445260"),p=f("#4285f4"),b=n(29439),h=n(41483);const v=function(e){var t=e.onSubmit,n=e.disabled,r=e.initialValue,o=e.buttonLabel,c=e.tagging,l=(0,i.useInputValue)({value:r||""}),d=(0,b.Z)(l,4),u=d[0],s=d[1],g=d[3],f=(0,i.useTouchedState)({}),m=(0,b.Z)(f,2),p=m[0],v=m[1],w=(0,a.useState)(!1),y=(0,b.Z)(w,2),E=y[0],x=y[1],k=(0,a.useCallback)((function(e){e.preventDefault(),t(u)}),[t,u]);return a.createElement(i.Flex,{as:"form",column:!0,gap:4,width:"100%","data-testid":"emailField"},a.createElement(h.U5,{value:u,onChange:s,isValid:E,setIsValid:x,instantFeedback:"positiveFirst",isDirty:g,success:E&&"Valid E-mail",onBlur:v,touched:p,"data-testid":"emailField-input"}),a.createElement(h.Sn,{type:"submit",disabled:n||!g,width:"100%",label:o,onClick:k,"data-ga":"signinup::click-email::".concat(c),"data-testid":"emailField-submitButton"}))};var w=n(10320),y=n(16293);const E=function(){return a.createElement(i.Flex,{height:"1px",width:"100%",background:"disabled"})};var x=n(4942),k=n(55354),C=n(28317);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var j=k.Z.demoSlug;const O=function(e){return a.createElement(i.Text,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({textAlign:"center"},e),"Discover the power and simplicity of Netdata in our live infrastructure monitoring"," ",a.createElement(h.Fg,{onClick:function(){(0,C.L)("signinup","click-demo","sni-view")},href:"/spaces/".concat(j),target:"_blank"},"demo")," ")};var S=function(e){var t=e.to;return a.createElement(i.Box,{position:"fixed"},a.createElement(i.Button,{as:"a",href:t,flavour:"borderless",label:"Go back to ".concat(t.replace(/#.*/,"")),icon:"arrow_left",rel:"noopener noreferrer"}))},_=function(){var e=(0,r.TH)().search,t=window.location.hash,n=(0,l.iM)(),c=o.parse(e).redirect_uri,s=(0,a.useCallback)((function(a){var r=encodeURIComponent((0,d.$)("/sign-in".concat(e),t)),o=encodeURIComponent((0,d.$)("/sign-up/verify".concat(e),t));n({email:a,redirectURI:r,registerURI:o})}),[]);return(0,a.useEffect)((function(){if(/app\.netdata\.cloud/.test(location.hostname)){var e=document.createElement("script");return e.src="https://zsvdrp94yfxr.statuspage.io/embed/script.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}}),[]),a.createElement(a.Fragment,null,!!c&&a.createElement(S,{to:c}),a.createElement(y.Z,{"data-testid":"signIn"},a.createElement(i.H1,{textAlign:"center"},"Welcome!"),a.createElement(i.TextBig,{textAlign:"center"},"Sign in and let\u2019s get you started:"),a.createElement(h.Yb,null,a.createElement(i.Flex,{column:!0,gap:4},a.createElement(p,{href:(0,d.G)("google"),disabled:!1,"data-ga":"signinup::click-google::sni-view","data-testid":"signIn-googleButton"},a.createElement(h.xG,null,a.createElement(u.av,null)),a.createElement(i.Text,{textAlign:"center"},"Continue with Google")),a.createElement(m,{href:(0,d.G)("github"),disabled:!1,"data-ga":"signinup::click-github::sni-view","data-testid":"signIn-githubButton"},a.createElement(h.xG,null,a.createElement(u.bY,null)),a.createElement(i.Text,null,"Continue with GitHub"))),a.createElement(i.Flex,{gap:2,alignItems:"center"},a.createElement(E,null),a.createElement(i.H4,null,"or"),a.createElement(E,null)),a.createElement(v,{onSubmit:s,buttonLabel:"Sign in by email",tagging:"sni-view"})),a.createElement(i.Flex,{column:!0,gap:2,alignSelf:"center",width:{max:"480px"}},a.createElement(i.TextBig,{textAlign:"center"},"Don't have a Netdata Cloud account yet? Relax! Sign-in and we will create one for you!"),a.createElement(O,{margin:[4,0,0]}),a.createElement(w.Z,null))))};const B=(0,c.k)(_,"light")},95450:(e,t,n)=>{n.d(t,{$:()=>r,G:()=>o});var a=n(16812),r=function(e,t){var n=(0,a.kG)(["expires_at",t]),r=t.includes("join-callback")?decodeURIComponent(n):n;return"".concat(window.location.origin).concat(e,"#").concat(r)},o=function(e,t){var n=window.location,a=n.search,o=n.hash,i=encodeURIComponent(r("/sign-in".concat(a).concat(a.length?"&":"?","oauth=").concat(e,"&"),o)),c=encodeURIComponent(r("/sign-up/verify".concat(a).concat(a.length?"&":"?","oauth=").concat(e,"&"),o));return"/api/v2/auth/account/".concat(e,"?redirect_uri=").concat(i,"&register_uri=").concat(c).concat(t?"&is_unverified_registration=true":"")}},76362:(e,t,n)=>{n.d(t,{S1:()=>o,ZT:()=>a,ae:()=>c,jU:()=>i,on:()=>r});var a=function(){};function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var i="undefined"!==typeof window,c="undefined"!==typeof navigator},94829:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(76362);const o=function(e,t){var n=(0,a.useState)(function(e,t){return void 0!==t?t:!!r.jU&&window.matchMedia(e).matches}(e,t)),o=n[0],i=n[1];return(0,a.useEffect)((function(){var t=!0,n=window.matchMedia(e),a=function(){t&&i(!!n.matches)};return n.addListener(a),i(n.matches),function(){t=!1,n.removeListener(a)}}),[e]),o}}}]);