(function(_ds){var window=this;'use strict';var tO=function(){_ds.dC.apply(this,arguments);this.o=null},uO=function(a){return _ds.Q(a,function c(){var d=this,e;return _ds.D(c,function(g){if(1==g.h)return _ds.y(g,_ds.fC(d),2);if(3!=g.h)return d.o?g.return(d.o):_ds.y(g,d.Za(),3);e=g.j;d.o=new _ds.nA(e);return g.return(d.o)})})},vO=function(a){var b=a.pb;a=_ds.T;var c=b[0].imageUrl,d=b[0].url,e=b[0].servePath,g=b[0].nextPlaylistUrl,h=b[0].redeemAnotherBtn,k=b[0].hideButtons,l=b[0].shareTitle,m=b[0].shareDescription;b=(0,_ds.T)('<div class="devsite-badger-award"><div class="devsite-badger-award-inner"><devsite-badge-awarded badge-name="'+
_ds.X(b[0].title)+'" badge-icon-url="'+_ds.X(_ds.Sj(c))+'" badge-url="'+_ds.X(_ds.Sj(d))+'"'+(e?' badge-path="'+_ds.X(e)+'"':"")+(l?' badge-share-title="'+_ds.X(l)+'"':"")+(m?' badge-share-description="'+_ds.X(m)+'"':"")+(g?' next-playlist-url="'+_ds.X(_ds.Sj(g))+'"':"")+(h?" redeem-another":"")+(k?" hide-buttons":"")+" dismiss></devsite-badge-awarded></div></div>");return a(b)},xO=function(){var a=_ds.FE.call(this,["devsite-badge-awarded"])||this;a.eventHandler=new _ds.Gl(a);a.j=new _ds.Rl;a.Ga=
null;a.pb=[];a.m=new _ds.Ln(function(){return void wO(a)},250);return a},yO=function(a){null===a||void 0===a?void 0:a.setAttribute("show","")},zO=function(a){return _ds.Q(a,function c(){var d=this;return _ds.D(c,function(e){if(1==e.h){if(!d.Ga)return e.return();d.j.remove("temp_badge");d.Ga.removeAttribute("show");return _ds.y(e,_ds.Im(200),2)}if(3!=e.h)return _ds.Kk(d.Ga),d.Ga=null,_ds.y(e,_ds.Im(250),3);d.m.Aa();_ds.z(e)})})},wO=function(a){return _ds.Q(a,function c(){var d=this,e,g,h,k;return _ds.D(c,
function(l){switch(l.h){case 1:e=d;if(d.Ga||0===d.pb.length||"error"===document.body.getAttribute("type")||AO.exec(document.location.pathname))return l.return();_ds.A(l,2);return _ds.y(l,window.customElements.whenDefined("devsite-badge-awarded"),4);case 4:_ds.B(l,3);break;case 2:_ds.C(l);case 3:g=d.pb.splice(0,1);h=_ds.vl(vO,{pb:g});if(!h)return l.return();d.eventHandler.listen(h,"click",function(m){(m=m.target)&&m.matches("button.dismiss")&&zO(e)});d.Ga=h;(k=h.querySelector("devsite-badge-awarded"))?
(_ds.Kl(d.eventHandler,k,"running",function(){yO(e.Ga)}),document.body.appendChild(d.Ga)):(document.body.appendChild(d.Ga),yO(d.Ga));_ds.z(l)}})})},BO=function(a){a.eventHandler.listen(document.body,"devsite-before-page-change",function(){return void zO(a)});a.eventHandler.listen(document.body,"devsite-award-granted",function(b){(b=b.ma)&&b.detail&&(a.pb.push(b.detail.award),a.m.Aa())});a.eventHandler.listen(document.body,["devsite-page-loaded","devsite-page-changed"],function(){a.Dd();a:if(_ds.Ql(a.j)){var b=
a.j.get("temp_badge");if(b){var c=null;try{c=JSON.parse(b)}catch(e){a.j.remove("temp_badge");break a}if(c)if(3>c.displayCount){a.j.set("temp_badge",JSON.stringify(c));b=new URL(c.awardedBy,document.location.origin);var d=_ds.lm();if(!c.awardedBy||b.origin===d.origin&&b.pathname===d.pathname)a.pb.push(c),a.m.Aa()}else a.j.remove("temp_badge")}}})};_ds.w(tO,_ds.dC);_ds.f=tO.prototype;
_ds.f.qc=function(){return _ds.Q(this,function b(){var c=this,d;return _ds.D(b,function(e){if(1==e.h)return _ds.y(e,uO(c),2);d=e.j;return e.return(d.qc())})})};
_ds.f.vd=function(a){a=void 0===a?!1:a;return _ds.Q(this,function c(){var d=this,e,g,h,k,l;return _ds.D(c,function(m){switch(m.h){case 1:return _ds.y(m,uO(d),2);case 2:return e=m.j,g=_ds.mC(d,"getWalletId",a),h=_ds.nC(d,g),h||(h=e.vd(a),_ds.pC(d,g,h)),k=null,_ds.A(m,3,4),_ds.y(m,h,6);case 6:k=m.j;case 4:_ds.Oa(m);_ds.oC(d,g);_ds.Pa(m,5);break;case 3:throw l=_ds.C(m),l;case 5:return m.return(k)}})})};
_ds.f.me=function(){return _ds.Q(this,function b(){var c=this,d;return _ds.D(b,function(e){if(1==e.h)return _ds.y(e,uO(c),2);d=e.j;return e.return(d.me())})})};_ds.f.Dd=function(){return _ds.Q(this,function b(){var c=this,d,e,g,h;return _ds.D(b,function(k){switch(k.h){case 1:return _ds.y(k,uO(c),2);case 2:return d=k.j,e=_ds.mC(c,"syncWallet"),g=_ds.nC(c,e),g||(g=d.Dd(),_ds.pC(c,e,g)),_ds.A(k,3,4),_ds.y(k,g,4);case 4:_ds.Oa(k);_ds.oC(c,e);_ds.Pa(k,0);break;case 3:throw h=_ds.C(k),h;}})})};
_ds.f.Yd=function(){return _ds.Q(this,function b(){var c=this,d;return _ds.D(b,function(e){if(1==e.h)return _ds.y(e,uO(c),2);d=e.j;d.Yd();_ds.z(e)})})};var AO=/\/redeem.*|\/u[\/]?.*|\/settings[\/]?.*?/;_ds.w(xO,_ds.FE);xO.prototype.connectedCallback=function(){BO(this)};xO.prototype.disconnectedCallback=function(){_ds.Ml(this.eventHandler);zO(this)};
xO.prototype.Dd=function(){return _ds.Q(this,function b(){var c,d,e,g,h;return _ds.D(b,function(k){switch(k.h){case 1:return _ds.y(k,DevsiteApp.whenReady(),2);case 2:return _ds.y(k,window.customElements.whenDefined("devsite-user"),3);case 3:c=document.querySelector("devsite-user#devsite-user");if(!c)return k.return();d=!1;_ds.A(k,4);return _ds.y(k,c.isSignedIn(),6);case 6:d=k.j;_ds.B(k,5);break;case 4:_ds.C(k);case 5:if(!d)return k.return();e=new tO;return _ds.y(k,e.qc(),7);case 7:g=k.j;if(!g)return k.return();
h=new _ds.yC;_ds.A(k,8);return _ds.y(k,h.Ba(),10);case 10:_ds.B(k,0);break;case 8:_ds.C(k),_ds.z(k)}})})};try{window.customElements.define("devsite-badger",xO)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBadger",a)};})(_ds_www);
