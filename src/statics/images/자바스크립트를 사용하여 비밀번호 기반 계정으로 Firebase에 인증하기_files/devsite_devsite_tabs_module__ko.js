(function(_ds){var window=this;'use strict';var f2=function(a){var b=a.Xi;a=a.kp;for(var c='<div class="dropdown-tabbed-menu"><ul class="dropdown-tabbed-menu-list">',d=a.length,e=0;e<d;e++){var g=a[e];c+='<li class="dropdown-tabbed-menu-list-item"><a href="#" column-id="'+_ds.X(g.jp)+'" tabindex="0" track-type="nav" track-name="'+_ds.X(g.text)+'" track-metadata-eventdetail="#" track-metadata-position="nav - '+_ds.X(b)+'" track-metadata-module="secondary nav">'+_ds.U(g.text)+"</a></li>"}return(0,_ds.T)(c+"</ul></div>")},g2=function(a){var b=
a.Xi,c=a.href;a=a.text;return(0,_ds.T)('<div class="dropdown-tabbed-menu-button"><a href="'+_ds.X(_ds.Sj(c))+'" track-type="nav" track-name="'+_ds.X(a)+'" track-metadata-eventdetail="'+_ds.X(c)+'" track-metadata-position="nav - '+_ds.X(b)+'" track-metadata-module="secondary nav">'+_ds.U(a)+"</a></div>")},y2=function(){var a=_ds.R.call(this)||this;a.V=20;a.eventHandler=new _ds.Gl;a.m=new _ds.Gl;a.K=new _ds.Ln(function(){h2(a)},a.V);a.L=null;a.D=null;a.J=!1;a.G=0;a.j=null;a.F=null;a.N=0;a.o=[];a.C=
null;a.O(a.h(i2),a.h(j2),a.h(k2),a.h(l2),a.h(m2),a.h(n2),a.h(o2),a.h(p2),a.h(q2),a.h(r2),a.h(s2),a.h(t2),a.h(u2),a.h(v2),a.h(w2),a.h(x2));return a},H2=function(a){a.eventHandler.listen(document.body,"devsite-sticky-resize",function(){return a.K.Aa()});a.eventHandler.listen(a,"click",function(e){if(!(e.shiftKey||e.ctrlKey||e.metaKey||e.altKey)){var g=e.target,h=z2(a,g);if(h)if(a.D&&a.D(e))e.preventDefault(),e.stopPropagation();else if(h===a.j)A2(a,e);else if(B2(a),g.classList.contains("devsite-tabs-dropdown-toggle"))e.preventDefault(),
e.stopPropagation(),h.hasAttribute("dropdown--open")?C2(a):D2(a,h);else{var k;"A"===g.tagName?k=g:k=_ds.ml(g,"A");var l=h.querySelector(".devsite-tabs-dropdown");if(l&&l.contains(g))k&&k.hasAttribute("href")||(e.preventDefault(),e.stopPropagation());else{if(e=a.L||a.querySelector("[active]"))e.removeAttribute("active"),_ds.ai(a,"aria-selected","false",e);_ds.ai(a,"active","",h);_ds.ai(a,"aria-selected","true",h);a.L=h;k&&k&&"#"!==k.href||a.K.Aa()}}}});if(a.querySelector("tab[dropdown]")||a.querySelector("tab[overflow-tab]")){var b=
"onpointermove"in window?"pointerover":"mouseover",c="onpointermove"in window?"pointerleave":"mouseleave",d=a.querySelectorAll("tab[clickable]");if(d.length){b=_ds.r(d);for(c=b.next();!c.done;c=b.next())a.eventHandler.listen(c.value,"click",function(e){var g,h=e.target,k=z2(a,h),l=null===k||void 0===k?void 0:k.querySelector(".devsite-tabs-dropdown");!l||(null===(g=a.j)||void 0===g?0:g.contains(h))||l.contains(h)||(e.preventDefault(),e.stopPropagation(),(null===k||void 0===k?0:k.hasAttribute("dropdown--open"))?
C2(a):E2(a,e))});a.eventHandler.listen(document.body,"click",function(e){a.C&&!a.C.contains(e.target)&&C2(a)})}else a.eventHandler.listen(a,b,function(e){return void F2(a,e)}),a.eventHandler.listen(a,c,function(){return void G2(a)})}b=[].concat(_ds.ya(a.querySelectorAll(".devsite-tabs-close-button")));b=_ds.r(b);for(c=b.next();!c.done;c=b.next())a.eventHandler.listen(c.value,"click",function(){return C2(a)})},G2=function(a){return _ds.Q(a,function c(){var d,e=this;return _ds.D(c,function(g){if(1==
g.h)return _ds.y(g,(0,_ds.Dp)(),2);d=g.j;if(d.isTouchEnabled())return g.return();C2(e,300);_ds.z(g)})})},F2=function(a,b){return _ds.Q(a,function d(){var e,g=this;return _ds.D(d,function(h){if(1==h.h)return _ds.y(h,(0,_ds.Dp)(),2);e=h.j;if(e.isTouchEnabled())return h.return();E2(g,b);_ds.z(h)})})},E2=function(a,b){var c,d=b.target,e=z2(a,d);e&&(e===a.j||(null===(c=a.j)||void 0===c?0:c.contains(d))?A2(a,b):D2(a,e))},C2=function(a,b){b=void 0===b?0:b;_ds.Ml(a.m);window.clearTimeout(a.G);var c=a.querySelector("tab[dropdown--open]");
if(c){var d=c.querySelector(".devsite-tabs-dropdown");_ds.ai(a,"dropdown-transition","",d);_ds.Kl(a.m,d,_ds.cm,function(){null===d||void 0===d?void 0:d.removeAttribute("dropdown-transition");a.removeAttribute("dropdown--open");_ds.ai(a,"hidden","",d)});a.G=window.setTimeout(function(){c.removeAttribute("dropdown--open");I2(a,c)},b)}else a.removeAttribute("dropdown--open");B2(a)},D2=function(a,b){_ds.Q(a,function d(){var e=this,g,h,k,l,m,p,q,t,u,v,x,G;return _ds.D(d,function(H){if(1==H.h){g=e;B2(e);
if(!b.hasAttribute("dropdown"))return C2(e),H.return();_ds.Ml(e.m);window.clearTimeout(e.G);return b.hasAttribute("dropdown--open")?H.return():_ds.y(H,(0,_ds.Dp)(),2)}h=H.j;h.isTouchEnabled()&&_ds.Kl(e.m,document.body,"click",function(M){g.contains(M.target)||C2(g)});k=e.querySelector("tab[dropdown--open]");l=b.querySelector(".devsite-tabs-dropdown");if(!l)return k&&(k.removeAttribute("dropdown--open"),I2(e,k)),H.return();l.removeAttribute("hidden");_ds.Rn(l,"left","");m=_ds.uk(window||window);p=
Array.from(l.querySelectorAll(".devsite-tabs-dropdown-column"));!b.hasAttribute("dropdown-full")&&1<p.length&&(q=[],p.forEach(function(M){q.push(M.scrollWidth)}),t=Math.max.apply(null,q),u=t*p.length,u<m.width?p.forEach(function(M){_ds.Rn(M,"width",t+"px")}):_ds.ai(e,"dropdown-full","",b));v=l.getBoundingClientRect();b.hasAttribute("dropdown-full")?_ds.Rn(l,"left","-"+v.left+"px"):(x=Math.min(v.left,v.left+v.width-m.width),0<x&&_ds.Rn(l,"left","-"+x+"px"));k?(k.removeAttribute("dropdown--open"),I2(e,
k),G=k.querySelector(".devsite-tabs-dropdown"),null===G||void 0===G?void 0:G.removeAttribute("dropdown-transition"),_ds.ai(e,"hidden","",G)):(_ds.ai(e,"dropdown-transition","",l),_ds.Kl(e.m,l,_ds.cm,function(){return l.removeAttribute("dropdown-transition")}));window.requestAnimationFrame(function(){_ds.ai(g,"dropdown--open","");_ds.ai(g,"dropdown--open","",b);I2(g,b)});_ds.z(H)})})},z2=function(a,b){for(;b&&b!==a;){if("TAB"===b.tagName.toUpperCase())return b;b=b.parentElement}return null},A2=function(a,
b){var c;_ds.Q(a,function e(){var g=this,h,k,l;return _ds.D(e,function(m){switch(m.h){case 1:return h=g,b.preventDefault(),b.stopPropagation(),document.body.dispatchEvent(new CustomEvent("devsite-close-overflow-tabs")),_ds.y(m,_ds.Em(),2);case 2:return g.hasAttribute("overflow-menu--open")?m.return():_ds.y(m,(0,_ds.Dp)(),3);case 3:return k=m.j,_ds.y(m,k.whenReady(),4);case 4:k.isTouchEnabled()&&(l=function(p){h.contains(p.target)||B2(h);_ds.Ll(h.m,document.body,["devsite-close-overflow-tabs","click"],
l)},g.m.listen(document.body,["devsite-close-overflow-tabs","click"],l)),null===(c=g.F)||void 0===c?void 0:c.removeAttribute("hidden"),_ds.ai(g,"overflow-menu--open",""),_ds.z(m)}})})},B2=function(a){_ds.ai(a,"hidden","",a.F);a.removeAttribute("overflow-menu--open")},h2=function(a){var b,c,d;_ds.ai(a,"hidden","",a.j);if(!(a.o&&3>a.o.length)){var e=J2(a,a);if(0!==e){var g=(null===(b=a.o)||void 0===b?void 0:b.slice())||[],h=0,k;g.forEach(function(t){t.parentNode!==a.C&&(k?_ds.Ik(t,k):_ds.Jk(a.C,t,0));
k=t;h+=J2(a,t)});if(!(h<=e)){var l=a.N;null===(c=a.j)||void 0===c?void 0:c.removeAttribute("hidden");var m=a.querySelector("[active]");for(m&&(l+=J2(a,m));null===g||void 0===g?0:g.length;){var p=g.shift();if(p!==m){var q=J2(a,p||null);l+q<=e?l+=q:null===(d=a.F)||void 0===d?void 0:d.appendChild(p)}}}}}},K2=function(a){var b;a.o=Array.from(a.querySelectorAll("tab"));var c=a.querySelector(".devsite-tabs-wrapper");c||(c=a.ownerDocument.createElement("div"),c.classList.add("devsite-tabs-wrapper"),a.appendChild(c),
null===(b=a.o)||void 0===b?void 0:b.forEach(function(g){return null===c||void 0===c?void 0:c.appendChild(g)}));a.C=c;a.appendChild(c);if(!a.hasAttribute("no-overflow")){var d=a.ownerDocument.createElement("tab");_ds.ai(a,"overflow-tab","",d);var e=a.ownerDocument.createElement("a");_ds.Id(e,"#");e.textContent="\ub354\ubcf4\uae30";e.classList.add("devsite-icon");e.classList.add("devsite-icon-arrow-drop-down");d.appendChild(e);a.j=d;e=a.ownerDocument.createElement("div");e.classList.add("devsite-tabs-overflow-menu");
_ds.ai(a,"scrollbars","",e);_ds.ai(a,"hidden","",e);a.F=e;d.appendChild(e);c.appendChild(d)}},J2=function(a,b){if(!b)return 0;for(var c=[],d=b;d.parentElement&&0===d.offsetWidth;)c.push(d),_ds.ai(a,"render-hidden","",d),d=d.parentElement;a=_ds.bo(b).width;c=_ds.r(c);for(b=c.next();!b.done;b=c.next())b.value.removeAttribute("render-hidden");return a},I2=function(a,b){_ds.ai(a,"aria-expanded",""+b.hasAttribute("dropdown--open"),b.querySelector(".devsite-tabs-dropdown-toggle"))},L2=function(a,b){return _ds.Q(a,
function d(){var e;return _ds.D(d,function(g){if(1==g.h)return _ds.y(g,(0,_ds.Dp)(),2);e=g.j;return e.isTouchEnabled()||!b.hasAttribute("generated-tab-menu")?g.return(!1):g.return(!0)})})},O2=function(a){var b;null===(b=a.o)||void 0===b?void 0:b.forEach(function(c,d){return _ds.Q(a,function g(){var h=this,k,l,m,p,q,t,u,v,x;return _ds.D(g,function(G){if(1==G.h)return k=h,_ds.y(G,L2(h,c),2);l=G.j;if(!l)return G.return();m=Array.from(c.querySelectorAll(".devsite-tabs-dropdown-column"));p=c.querySelector(".devsite-tabs-dropdown");
q=c.querySelector("a");m.forEach(function(H,M){_ds.ai(k,"column-id","tab-"+d+"-column-"+M,H)});t=m.map(function(H){var M=H.querySelector(".devsite-nav-title")||H.querySelector(".devsite-nav-item-title");return{jp:H.getAttribute("column-id"),text:null===M||void 0===M?void 0:M.textContent}});q&&(u=_ds.vl(f2,{Xi:(q.textContent||"").toLowerCase().trim(),kp:t}),p&&(v=c.querySelector(".devsite-tabs-dropdown-content")))&&(p.insertBefore(u,v),x=c.querySelector(".dropdown-tabbed-menu a"),M2(c),h.eventHandler.listen(u,
"click",function(H){H.preventDefault();var M=c.querySelector(".dropdown-tabbed-menu-button");H=H.target;M&&H.tagName&&"a"===H.tagName.toLowerCase()&&!M.contains(H)&&N2(k,c,(null===H||void 0===H?void 0:H.getAttribute("column-id"))||"")}),x&&N2(h,c,x.getAttribute("column-id")||""));_ds.z(G)})})})},N2=function(a,b,c){var d=Array.from(b.querySelectorAll(".devsite-tabs-dropdown-column"));b=Array.from(b.querySelectorAll(".dropdown-tabbed-menu a"));b.forEach(function(e){return e.removeAttribute("active")});
d.forEach(function(e){return _ds.ai(a,"hidden","",e)});b=b.find(function(e){return e.getAttribute("column-id")===c});d=d.find(function(e){return e.getAttribute("column-id")===c});b&&d&&(_ds.ai(a,"active","",b),d.removeAttribute("hidden"))},M2=function(a){var b=a.querySelector(".dropdown-tabbed-menu-button-target");if(!a.querySelector(".dropdown-tabbed-menu-button")&&b){var c=a.querySelector("a");c&&(c=c.textContent,b=b.querySelector(".devsite-nav-item a"),a=a.querySelector(".dropdown-tabbed-menu"),
b&&(c=_ds.vl(g2,{Xi:(c||"").toLowerCase().trim(),href:b.getAttribute("href")||"",text:b.textContent||""}),null===a||void 0===a?void 0:a.appendChild(c)))}};var i2=_ds.xa(["active"]),j2=_ds.xa(["aria-expanded"]),k2=_ds.xa(["aria-selected"]),l2=_ds.xa(["collapsed"]),m2=_ds.xa(["column-id"]),n2=_ds.xa(["connected"]),o2=_ds.xa(["dropdown"]),p2=_ds.xa(["dropdown-full"]),q2=_ds.xa(["dropdown--open"]),r2=_ds.xa(["dropdown-transition"]),s2=_ds.xa(["hidden"]),t2=_ds.xa(["no-overflow"]),u2=_ds.xa(["overflow-menu--open"]),v2=_ds.xa(["overflow-tab"]),w2=_ds.xa(["render-hidden"]),x2=_ds.xa(["scrollbars"]);_ds.w(y2,_ds.R);
y2.prototype.disconnectedCallback=function(){_ds.Ml(this.eventHandler);_ds.Ml(this.m)};y2.prototype.connectedCallback=function(){this.J||(K2(this),this.J=!0);_ds.ai(this,"connected","");var a;this.hasAttribute("no-overflow")||(_ds.ai(this,"collapsed","",this.j),this.N=J2(this,this.j),null===(a=this.j)||void 0===a?void 0:a.removeAttribute("collapsed"),H2(this),h2(this));O2(this)};y2.prototype.R=function(a){this.D=a};y2.prototype.Y=function(){this.D=null};y2.prototype.connectedCallback=y2.prototype.connectedCallback;
y2.prototype.disconnectedCallback=y2.prototype.disconnectedCallback;try{window.customElements.define("devsite-tabs",y2)}catch(a){console.warn("devsite.app.customElement.DevsiteTabs",a)};})(_ds_www);
