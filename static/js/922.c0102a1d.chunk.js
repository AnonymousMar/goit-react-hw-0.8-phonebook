"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{4554:function(t,n,e){e.d(n,{Z:function(){return b}});var o=e(9439),r=e(3433),a=e(2791),i=(e(1605),e(8834),e(4304),e(3739),e(5671)),c=e(3144),u=e(136),f=e(7277),l=(a.Component,e(4937)),s={subtree:!0,childList:!0,attributeFilter:["style","class"]};var v=e(1694),d=e.n(v),m=e(6875),h=e(7114);function g(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=document.createElement("canvas"),r=o.getContext("2d"),a=t*e,i=n*e;return o.setAttribute("width","".concat(a,"px")),o.setAttribute("height","".concat(i,"px")),r.save(),[r,o,a,i]}function p(){return function(t,n,e,r,a,i,c,u){var f=g(r,a,e),l=(0,o.Z)(f,4),s=l[0],v=l[1],d=l[2],m=l[3];if(t instanceof HTMLImageElement)s.drawImage(t,0,0,d,m);else{var h=i.color,p=i.fontSize,x=i.fontStyle,y=i.fontWeight,w=i.fontFamily,M=Number(p)*e;s.font="".concat(x," normal ").concat(y," ").concat(M,"px/").concat(a,"px ").concat(w),s.fillStyle=h,s.textAlign="center",s.textBaseline="top";var b=Array.isArray(t)?t:[t];null===b||void 0===b||b.forEach((function(t,n){s.fillText(null!==t&&void 0!==t?t:"",d/2,n*(M+3*e))}))}var Z=Math.PI/180*Number(n),S=Math.max(r,a),A=g(S,S,e),E=(0,o.Z)(A,3),z=E[0],k=E[1],I=E[2];z.translate(I/2,I/2),z.rotate(Z),d>0&&m>0&&z.drawImage(v,-d/2,-m/2);var C=0,N=0,O=0,B=0,L=d/2,R=m/2;[[0-L,0-R],[0+L,0-R],[0+L,0+R],[0-L,0+R]].forEach((function(t){var n=(0,o.Z)(t,2),e=function(t,n){return[t*Math.cos(Z)-n*Math.sin(Z),t*Math.sin(Z)+n*Math.cos(Z)]}(n[0],n[1]),r=(0,o.Z)(e,2),a=r[0],i=r[1];C=Math.min(C,a),N=Math.max(N,a),O=Math.min(O,i),B=Math.max(B,i)}));var j=C+I/2,F=O+I/2,P=N-C,_=B-O,T=c*e,W=u*e,D=2*(P+T),H=_+W,G=g(D,H),U=(0,o.Z)(G,2),V=U[0],X=U[1];function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;V.drawImage(k,j,F,P,_,t,n,P,_)}return $(),$(P+T,-_/2-W/2),$(P+T,+_/2+W/2),[X.toDataURL(),D/e,H/e]}}var x=e(5314),y=e(7750);function w(t){var n=a.useState((function(){return new Map})),e=(0,o.Z)(n,1)[0];return[function(n,o,r){if(r){if(!e.get(r)){var a=document.createElement("div");e.set(r,a)}var i=e.get(r);i.setAttribute("style",(c=Object.assign(Object.assign({},t),{backgroundImage:"url('".concat(n,"')"),backgroundSize:"".concat(Math.floor(o),"px")}),Object.keys(c).map((function(t){return"".concat(function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}(t),": ").concat(c[t],";")})).join(" "))),r.append(i)}var c},function(t){var n=e.get(t);n&&t&&t.removeChild(n),e.delete(t)},function(t){return Array.from(e.values()).includes(t)}]}function M(t,n){return t.size===n.size?t:n}var b=function(t){var n,e,i=t.zIndex,c=void 0===i?9:i,u=t.rotate,f=void 0===u?-22:u,v=t.width,g=t.height,b=t.image,Z=t.content,S=t.font,A=void 0===S?{}:S,E=t.style,z=t.className,k=t.rootClassName,I=t.gap,C=void 0===I?[100,100]:I,N=t.offset,O=t.children,B=(0,m.Z)(),L=(0,o.Z)(B,2)[1],R=A.color,j=void 0===R?L.colorFill:R,F=A.fontSize,P=void 0===F?L.fontSizeLG:F,_=A.fontWeight,T=void 0===_?"normal":_,W=A.fontStyle,D=void 0===W?"normal":W,H=A.fontFamily,G=void 0===H?"sans-serif":H,U=(0,o.Z)(C,2),V=U[0],X=U[1],$=V/2,q=X/2,J=null!==(n=null===N||void 0===N?void 0:N[0])&&void 0!==n?n:$,K=null!==(e=null===N||void 0===N?void 0:N[1])&&void 0!==e?e:q,Q=a.useMemo((function(){var t={zIndex:c,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"},n=J-$,e=K-q;return n>0&&(t.left="".concat(n,"px"),t.width="calc(100% - ".concat(n,"px)"),n=0),e>0&&(t.top="".concat(e,"px"),t.height="calc(100% - ".concat(e,"px)"),e=0),t.backgroundPosition="".concat(n,"px ").concat(e,"px"),t}),[c,J,$,K,q]),Y=a.useState(),tt=(0,o.Z)(Y,2),nt=tt[0],et=tt[1],ot=a.useState(new Set),rt=(0,o.Z)(ot,2),at=rt[0],it=rt[1],ct=a.useMemo((function(){return[].concat(nt?[nt]:[],(0,r.Z)(Array.from(at)))}),[nt,at]),ut=p(),ft=a.useState(null),lt=(0,o.Z)(ft,2),st=lt[0],vt=lt[1],dt=function(t){var n=a.useRef(!1),e=a.useRef(),o=(0,y.zX)(t);return function(){n.current||(n.current=!0,o(),e.current=(0,x.Z)((function(){n.current=!1})))}}((function(){var t=document.createElement("canvas").getContext("2d");if(t){var n=window.devicePixelRatio||1,e=function(t){var n=120,e=64;if(!b&&t.measureText){t.font="".concat(Number(P),"px ").concat(G);var o=Array.isArray(Z)?Z:[Z],a=o.map((function(n){var e=t.measureText(n);return[e.width,e.fontBoundingBoxAscent+e.fontBoundingBoxDescent]}));n=Math.ceil(Math.max.apply(Math,(0,r.Z)(a.map((function(t){return t[0]}))))),e=Math.ceil(Math.max.apply(Math,(0,r.Z)(a.map((function(t){return t[1]})))))*o.length+3*(o.length-1)}return[null!==v&&void 0!==v?v:n,null!==g&&void 0!==g?g:e]}(t),a=(0,o.Z)(e,2),i=a[0],c=a[1],u=function(t){var e=ut(t||"",f,n,i,c,{color:j,fontSize:P,fontStyle:D,fontWeight:T,fontFamily:G},V,X),r=(0,o.Z)(e,2),a=r[0],u=r[1];vt([a,u])};if(b){var l=new Image;l.onload=function(){u(l)},l.onerror=function(){u(Z)},l.crossOrigin="anonymous",l.referrerPolicy="no-referrer",l.src=b}else u(Z)}})),mt=w(Q),ht=(0,o.Z)(mt,3),gt=ht[0],pt=ht[1],xt=ht[2];(0,a.useEffect)((function(){st&&ct.forEach((function(t){gt(st[0],st[1],t)}))}),[st,ct]);!function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;a.useEffect((function(){if((0,l.Z)()&&t){var o,r=Array.isArray(t)?t:[t];return"MutationObserver"in window&&(o=new MutationObserver(n),r.forEach((function(t){o.observe(t,e)}))),function(){var t,n;null===(t=o)||void 0===t||t.takeRecords(),null===(n=o)||void 0===n||n.disconnect()}}}),[e,t])}(ct,(function(t){t.forEach((function(t){(function(t,n){var e=!1;return t.removedNodes.length&&(e=Array.from(t.removedNodes).some((function(t){return n(t)}))),"attributes"===t.type&&n(t.target)&&(e=!0),e})(t,xt)&&dt()}))})),(0,a.useEffect)(dt,[f,c,v,g,b,Z,j,P,T,D,G,V,X,J,K]);var yt=a.useMemo((function(){return{add:function(t){it((function(n){var e=new Set(n);return e.add(t),M(n,e)}))},remove:function(t){pt(t),it((function(n){var e=new Set(n);return e.delete(t),M(n,e)}))}}}),[]);return a.createElement("div",{ref:et,className:d()(z,k),style:Object.assign({position:"relative"},E)},a.createElement(h.Z.Provider,{value:yt},O))}},7692:function(t,n,e){e.d(n,{y4V:function(){return r}});var o=e(9983);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"}}]})(t)}}}]);
//# sourceMappingURL=922.c0102a1d.chunk.js.map