(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),r=n.n(a),s=(n(13),n(6)),o=n(2),l=(n(14),n(15),n(0)),u=function(e){return Object(l.jsx)("div",{className:"title_container",children:Object(l.jsx)("h1",{id:"title",children:e.title})})},j=(n(17),function(e){return Object(l.jsxs)("div",{className:"scoresContainer",children:[Object(l.jsxs)("div",{className:"score",children:["High Score: ",e.highScore]}),Object(l.jsxs)("div",{className:"score",children:["Score: ",e.currentScore]})]})}),h=(n(18),function(e){return Object(l.jsx)("img",{className:"image",src:e.path+e.id+".png",alt:"Image"+e.id,onClick:function(){e.onTileClick(e.id)}})}),d=n(8),m=n.n(d),b=(n(20),function(e){return Object(l.jsx)("div",{className:"tileContainer",children:e.tileOrder.map((function(t){return Object(l.jsx)(h,{path:e.path,onTileClick:e.onTileClick,id:t},m()())}))})}),O=function(){var e=[{path:"/assets/images/level_1/",length:4},{path:"/assets/images/level_2/",length:6},{path:"/assets/images/level_3/",length:9}],t=Object(c.useState)(Object(s.a)(Array(4).keys()).map((function(e){return e++}))),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(0),h=Object(o.a)(r,2),d=h[0],m=h[1],O=Object(c.useState)(0),f=Object(o.a)(O,2),g=f[0],p=f[1],v=Object(c.useState)([]),x=Object(o.a)(v,2),S=x[0],C=x[1],y=Object(c.useState)(0),k=Object(o.a)(y,2),N=k[0],T=k[1],M=Object(c.useState)("Chord Memory"),_=Object(o.a)(M,2),w=_[0],A=_[1];function E(){for(var t,n,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=Object(s.a)(Array(e[N+c].length).keys()).map((function(e){return e++})),r=i.length;r;)n=Math.floor(Math.random()*r--),t=i[r],i[r]=i[n],i[n]=t;a(i)}function I(e){var t=document.getElementById("title");A(e),t.className="title_animation",setTimeout((function(){t.className="",A("Chord Memory")}),4e3)}function B(t){S.includes(t)?d>g?(p(d),H(),I("New High Score!")):(H(),I("Oops. Keep Trying.")):(m(d+1),C(S.concat([t])),function(){if(S.length+1===e[N].length)return void(N+1===e.length?(I("Congratulations! Perfect Game!"),p(d+1),H()):(I("Completed Level "+(N+1)+"!"),T(N+1),C([]),E(1)));E()}())}function H(){T(0),m(0),C([]),E(-N)}return Object(c.useEffect)((function(){E(),I("Click a chord to begin!")}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{title:w}),Object(l.jsx)(j,{highScore:g,currentScore:d}),Object(l.jsx)(b,{path:e[N].path,tileOrder:i,onTileClick:function(e){B(e)}})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.69af3c52.chunk.js.map