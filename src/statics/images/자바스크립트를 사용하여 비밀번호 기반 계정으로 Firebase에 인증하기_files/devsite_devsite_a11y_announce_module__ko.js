(function(_ds){var window=this;'use strict';var DL=function(){var a=_ds.R.call(this)||this;a.eventHandler=new _ds.Gl;return a},EL=function(){return"devsite-a11y-announce"},FL=function(a,b){_ds.Q(a,function d(){var e=this;return _ds.D(d,function(g){if(1==g.h){if(_ds.il(e)!==b)return g.H(2);_ds.bl(e,"");return _ds.y(g,_ds.Em(),3)}if(2!=g.h)return _ds.y(g,_ds.Em(),2);_ds.bl(e,b);_ds.z(g)})})};_ds.w(DL,_ds.R);
DL.prototype.connectedCallback=function(){var a=this;this.setAttribute("aria-live","assertive");this.setAttribute("aria-atomic","true");this.eventHandler.listen(document.body,"devsite-a11y-announce",function(b){b=b.ma;(b=b.detail&&b.detail.message)&&FL(a,b)})};DL.prototype.disconnectedCallback=function(){_ds.Ml(this.eventHandler)};DL.prototype.connectedCallback=DL.prototype.connectedCallback;DL.getTagName=EL;try{window.customElements.define(EL(),DL)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteA11yAnnounce",a)};})(_ds_www);
