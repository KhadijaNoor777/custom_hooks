(this.webpackJsonpcustom_hooks=this.webpackJsonpcustom_hooks||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(21),o=n.n(s),i=(n(35),n(8));var u=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),c=Object(i.a)(n,2),r=c[0],s=c[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;s(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]};var l=function(){var e=u("theme",""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=document.getElementsByClassName("Posts");console.log("initial theme",n),"dark"==n&&e[0]&&e[0].classList.add(n)}),[]),[n,c]},j=n(51),h=n(18),b=n(2);var d=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(a.useState)(null),h=Object(i.a)(j,2),b=h[0],d=h[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Archive"}),Object(c.jsx)("h1",{children:"Login"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({username:n,password:u}),r(""),l("")},children:[Object(c.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return r(e.target.value)},value:n}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:u}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Login"})]}),b&&Object(c.jsxs)("div",{children:[b.username," ",Object(c.jsx)("br",{})," ",b.password," "]})]})};n(36);var O=function(){var e=u("stored string",""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=l(),o=Object(i.a)(s,2),O=o[0],g=o[1],x=Object(j.a)(),f=Object(i.a)(x,2),v=f[0],p=f[1],m=function(){g("dark"!==O?"dark":"light")},k={background:"dark"==O?"black":"white",color:"dark"==O?"white":"black"},S=function(e){p.changeLanguage(e)};return Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{style:k,className:"Posts",children:[Object(c.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)("h1",{children:v("headers.about")}),Object(c.jsx)(h.b,{to:"/archive",children:Object(c.jsx)("h1",{children:v("headers.archive")})}),Object(c.jsx)("h1",{children:v("headers.saveValue")}),Object(c.jsx)("input",{type:"text",placeholder:"Enter string...",value:n,onChange:function(e){return a(e.target.value)}}),Object(c.jsx)("h1",{children:v("headers.themeChanger")}),Object(c.jsx)("button",{onClick:m,children:"Toggle Theme"}),Object(c.jsx)("h1",{children:v("headers.languageChanger")}),Object(c.jsx)("button",{onClick:function(){return S("en")},children:"English"}),Object(c.jsx)("button",{onClick:function(){return S("es")},children:"Spanish"})]})}}),Object(c.jsx)(b.a,{exact:!0,path:"/archive",component:d})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},x=n(28),f=n(26),v=n(27),p=n(13);x.a.use(f.a).use(v.a).use(p.e).init({fallbackLng:"en",debug:!0,backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1},react:{useSuspense:!1}}),o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.68608f22.chunk.js.map