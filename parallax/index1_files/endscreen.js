(function(g){var window=this;var JAa=function(a,b,c,d){var e=b.Yb();g.U(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.fd(c,d?d:"mqdefault.jpg");var k=b instanceof g.oO?g.GV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.mQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.oO?b.za:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.Yk||g.V("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Cl(c),is_live:m,
is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.oQ&&(c.playlist_length=b.getLength());a.update(c)},f6=function(a,b){g.wH.call(this,{G:"div",
da:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.l=a;this.created=!1},g6=function(a){g.W.call(this,{G:"div",
L:"ytp-upnext",P:{"aria-label":"{{aria_label}}"},N:[{G:"div",L:"ytp-cued-thumbnail-overlay-image",P:{style:"{{background}}"}},{G:"span",L:"ytp-upnext-top",N:[{G:"span",L:"ytp-upnext-header",aa:"Up Next"},{G:"span",L:"ytp-upnext-title",aa:"{{title}}"},{G:"span",L:"ytp-upnext-author",aa:"{{author}}"}]},{G:"a",L:"ytp-upnext-autoplay-icon",P:{role:"button",href:"{{url}}","aria-label":"Play next video"},N:[{G:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},N:[{G:"circle",L:"ytp-svg-autoplay-circle",
P:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",L:"ytp-svg-autoplay-ring",P:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",L:"ytp-svg-fill",P:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",L:"ytp-upnext-bottom",N:[{G:"span",L:"ytp-upnext-cancel"},{G:"span",L:"ytp-upnext-paused",aa:"Autoplay is paused"}]}]});this.B=null;
var b=this.g["ytp-upnext-cancel"];this.B=new g.W({G:"button",da:["ytp-upnext-cancel-button","ytp-button"],P:{tabindex:"0","aria-label":"Cancel autoplay"},aa:"Cancel"});g.N(this,this.B);this.B.U("click",this.YQ,this);this.B.sa(b);this.l=a;this.J=this.g["ytp-svg-autoplay-ring"];this.F=this.D=this.A=this.C=null;this.H=new g.Yt(this.Nn,5E3,this);g.N(this,this.H);this.I=0;this.O(this.g["ytp-upnext-autoplay-icon"],"click",this.jT);this.EC();this.O(a,"autonavvisibility",this.EC);this.O(a,"mdxnowautoplaying",
this.xS);this.O(a,"mdxautoplaycanceled",this.yS);this.O(a,"mdxautoplayupnext",this.oF);3==this.l.Oa()&&(a=(a=g.NU(g.IU(this.l)))?a.VJ():null)&&this.oF(a)},KAa=function(a,b){a.C=b;
JAa(a,b,g.Y(a.l),"hqdefault.jpg")},h6=function(a,b){if(!a.A){g.YF("a11y-announce","Up Next "+a.C.title);
a.I=g.iG();a.A=new g.Yt((0,g.z)(a.jr,a,b),25);a.jr(b);var c=b||g.Y(a.l).experiments.l("autoplay_time")||1E4;a.l.va("onAutonavCoundownStarted",c)}g.mq(a.element,"ytp-upnext-autoplay-paused")},j6=function(a){i6(a);
a.I=g.iG();a.jr();g.S(a.element,"ytp-upnext-autoplay-paused")},i6=function(a){a.A&&(a.A.dispose(),a.A=null)},k6=function(a,b){b=void 0===b?!1:b;
var c=g.Y(a.l);if(c.experiments.g("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.C.Yb(),a.Nn(),a.D=new window.Notification("Up Next",{body:d.title,icon:d.fd(c)}),a.F=a.O(a.D,"click",a.ZS),a.H.start())}i6(a);a.l.mk(!1,b)},LAa=function(a){f6.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.A=new g.W({G:"div",L:"ytp-subscribe-card",N:[{G:"img",L:"ytp-author-image",P:{src:b.profilePicture}},{G:"div",L:"ytp-subscribe-card-right",N:[{G:"div",L:"ytp-author-name",aa:b.author},{G:"div",L:"html5-subscribe-button-container"}]}]});g.N(this,this.A);this.A.sa(this.element);this.B=new g.v_("Subscribe",null,"Unsubscribe",null,!0,!1,b.Hf,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.B);this.B.sa(this.A.g["html5-subscribe-button-container"]);this.hide()},l6=
function(a){var b=g.Y(a),c=g.FI||g.df?{style:"will-change: opacity"}:void 0,d=b.g,e=["ytp-videowall-still"];
b.l&&e.push("ytp-videowall-show-text");g.W.call(this,{G:"a",da:e,P:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},N:[{G:"div",L:"ytp-videowall-still-image",P:{style:"{{background}}"}},{G:"span",L:"ytp-videowall-still-info",N:[{G:"span",L:"ytp-videowall-still-info-bg",N:[{G:"span",L:"ytp-videowall-still-info-content",P:c,N:[{G:"span",L:"ytp-videowall-still-info-title",aa:"{{title}}"},{G:"span",
L:"ytp-videowall-still-info-author",aa:"{{author_and_views}}"},{G:"span",L:"ytp-videowall-still-info-live",aa:"Live"},{G:"span",L:"ytp-videowall-still-info-duration",aa:"{{duration}}"}]}]}]},{G:"span",da:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],N:[{G:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",L:"ytp-videowall-still-listlabel-length",N:[" (",{G:"span",aa:"{{playlist_length}}"},")"]}]},{G:"span",da:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
N:[{G:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",L:"ytp-videowall-still-listlabel-length",aa:" (50+)"}]}]});this.C=d;this.l=a;this.A=null;this.B=new g.GF(this);g.N(this,this.B);this.U("click",this.F);this.U("keypress",this.H);this.B.O(a,"videodatachange",this.D);g.Y(a).X&&(a=a.app.ha,b=this.element,g.Qa(a.g,b),g.Ta(a.g,b),c=String(a.F++),b.setAttribute("data-visual-id",c),g.Ze(this,(0,g.z)(a.D,a,b)));this.D()},m6=function(a){f6.call(this,a,"videowall-endscreen");
this.K=a;this.F=0;this.B=[];this.H=this.D=this.C=null;this.I=this.T=!1;this.W=new g.GF(this);g.N(this,this.W);this.J=new g.Yt(g.Ga(g.S,this.element,"ytp-show-tiles"),0);g.N(this,this.J);var b=new g.W({G:"button",da:["ytp-button","ytp-endscreen-previous"],P:{"aria-label":"Previous"},N:[g.BV()]});g.N(this,b);b.sa(this.element);b.U("click",this.TO,this);this.M=new g.qH({G:"div",L:"ytp-endscreen-content"});g.N(this,this.M);this.M.sa(this.element);b=new g.W({G:"button",da:["ytp-button","ytp-endscreen-next"],
P:{"aria-label":"Next"},N:[g.CV()]});g.N(this,b);b.sa(this.element);b.U("click",this.SO,this);this.A=new g6(a);g.N(this,this.A);g.hV(this.l,this.A.element,4);this.hide()},n6=function(a){return g.jV(a.l)&&a.Jx()&&!a.H},MAa=function(a,b){return(0,g.G)(b.suggestions,function(b){b=g.lY(b);
g.N(a,b);return b})},o6=function(a){var b=a.vu();
b!=a.T&&(a.T=b,a.l.R("autonavvisibility"))},p6=function(a){g.oV.call(this,a);
this.l=null;this.o=new g.GF(this);g.N(this,this.o);this.A=g.Y(a);NAa(a)?this.l=new m6(this.g):this.A.Ga?this.l=new LAa(this.g):this.l=new f6(this.g);g.N(this,this.l);g.hV(this.g,this.l.element,4);this.XD();this.o.O(a,"videodatachange",this.XD,this);this.o.O(a,"crn_endscreen",this.SM,this);this.o.O(a,"crx_endscreen",this.TM,this)},NAa=function(a){a=g.Y(a);
return a.Nc&&!a.Ga};
g.q(f6,g.wH);f6.prototype.create=function(){this.created=!0};
f6.prototype.destroy=function(){this.created=!1};
f6.prototype.Jx=function(){return!1};
f6.prototype.vu=function(){return!1};g.q(g6,g.W);g.h=g6.prototype;g.h.Nn=function(){this.D&&(this.H.stop(),this.Ea(this.F),this.F=null,this.D.close(),this.D=null)};
g.h.EC=function(){g.vH(this,g.JU(this.l))};
g.h.ZS=function(){window.focus();this.Nn()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.jr=function(a){a=a||g.Y(this.l).experiments.l("autoplay_time")||1E4;var b=Math.min(g.iG()-this.I,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.l.Oa()?k6(this,!0):this.A&&this.A.start()};
g.h.jT=function(a){!g.Qd(this.B.element,g.uF(a))&&g.lX(a,this.l)&&k6(this)};
g.h.YQ=function(){g.LU(this.l,!0)};
g.h.xS=function(a){this.l.Oa();this.show();h6(this,a)};
g.h.oF=function(a){this.l.Oa();this.C&&this.C.Yb().videoId==a.Yb().videoId||KAa(this,a)};
g.h.yS=function(){this.l.Oa();i6(this);this.hide()};
g.h.V=function(){i6(this);this.Nn();g.W.prototype.V.call(this)};g.q(LAa,f6);g.q(l6,g.W);l6.prototype.Ek=function(){g.mV(this.l,this.element);var a=this.A.Yb().videoId,b=this.A.getPlaylistId();g.F0(this.l.app,a,this.A.Rd,b,void 0,void 0,void 0)};
l6.prototype.F=function(a){g.lX(a,this.l,this.C,this.A.Rd||void 0)&&this.Ek()};
l6.prototype.H=function(a){switch(a.keyCode){case 13:case 32:g.zF(a)||(this.Ek(),g.yF(a))}};
l6.prototype.D=function(){var a=this.l.getVideoData(),b=g.Y(this.l);this.C=a.isDni?!1:b.g};g.q(m6,f6);g.h=m6.prototype;g.h.create=function(){f6.prototype.create.call(this);var a=this.l.getVideoData();a&&(this.C=MAa(this,a),this.D=a);this.Jg();this.W.O(this.l,"appresize",this.Jg);this.W.O(this.l,"onVideoAreaChange",this.Jg);this.W.O(this.l,"videodatachange",this.UO);this.W.O(this.l,"autonavchange",this.DB);this.W.O(this.l,"autonavcancel",this.RO);this.W.O(this.element,"transitionend",this.CU)};
g.h.destroy=function(){g.IF(this.W);g.af(this.B);this.B=[];this.C=null;f6.prototype.destroy.call(this);g.mq(this.element,"ytp-show-tiles");this.J.stop()};
g.h.Jx=function(){return 1!=this.D.autonavState};
g.h.show=function(){f6.prototype.show.call(this);g.mq(this.element,"ytp-show-tiles");g.Y(this.l).l?g.$t(this.J):this.J.start();(this.I||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.LU(this.l,!1);n6(this)?(o6(this),2==this.D.autonavState?g.Y(this.l).experiments.g("fast_autonav_in_background")&&3==this.l.Ni()?k6(this.A,!0):h6(this.A):3==this.D.autonavState&&j6(this.A)):(g.LU(this.l,!0),o6(this))};
g.h.hide=function(){f6.prototype.hide.call(this);j6(this.A);o6(this)};
g.h.CU=function(a){g.uF(a)==this.element&&this.Jg()};
g.h.Jg=function(){if(this.C&&this.C.length){g.S(this.element,"ytp-endscreen-paginate");var a=g.$U(this.K,!0),b=g.KH(this.K);b&&(b=b.sd()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,v=b<=f-2&&n>=r*m,D=e<=k-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&D)n-=p*m,e+=2;else if(v)n-=r*m,b+=2;else if(D)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.dd(a.width/m||1,1,1.21);n*=g.dd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.M.element;g.Jh(a,m,n);g.ph(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});KAa(this.A,this.C[0]);g.U(this.element,"ytp-endscreen-takeover",n6(this));o6(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&
2>f?0==k&&0==f&&(r=2):r=2),p=g.ed(p+this.F,l),0!=r){v=this.B[c];v||(v=new l6(this.l),this.B[c]=v,a.appendChild(v.element));D=Math.floor(n*k/e);var H=Math.floor(m*f/b),L=Math.floor(n*(k+r)/e)-D-4,T=Math.floor(m*(f+r)/b)-H-4;g.wh(v.element,H,D);g.Jh(v.element,T,L);g.ph(v.element,"transitionDelay",(k+f)/20+"s");g.U(v.element,"ytp-videowall-still-mini",1==r);g.U(v.element,"ytp-videowall-still-large",2<r);r=v;p=this.C[p];r.A!=p&&(r.A=p,JAa(r,p,g.Y(r.l),g.kq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),v=(p=p.Rd)&&p.itct)&&(p=r.l,g.Y(p).X&&(p=p.app.ha,r=r.element,D=r.getAttribute("data-visual-id"),g.Qa(p.g,r),g.kV(p,"onLogServerVeCreated",{id:D,tracking_params:v})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.B.length-1;b>=c;b--)e=this.B[b],g.Kd(e.element),g.$e(e);this.B.length=c}};
g.h.UO=function(){var a=this.l.getVideoData();this.D!=a&&(this.F=0,this.C=MAa(this,a),this.D=a,this.Jg())};
g.h.SO=function(){this.F+=this.B.length;this.Jg()};
g.h.TO=function(){this.F-=this.B.length;this.Jg()};
g.h.YL=function(){return!!this.A.A};
g.h.DB=function(a){1==a?(this.I=!1,this.H=this.D.clientPlaybackNonce,i6(this.A),this.o&&this.Jg()):(this.I=!0,this.o&&n6(this)&&(2==a?h6(this.A):3==a&&j6(this.A)))};
g.h.RO=function(a){if(a){for(a=0;a<this.B.length;a++)g.nV(this.K,this.B[a].element,!0);this.DB(1)}else this.H=null,this.I=!1;this.Jg()};
g.h.vu=function(){return this.o&&n6(this)};g.q(p6,g.oV);g.h=p6.prototype;g.h.cB=function(){var a=this.g.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!NAa(this.g)||b;a=g.LO(a,"ypc_module");var c=g.G0(this.g.app);return b&&!a&&!c};
g.h.bB=function(){return this.l.vu()};
g.h.UL=function(){return this.bB()?this.l.YL():!1};
g.h.V=function(){g.fV(this.g,"endscreen");g.oV.prototype.V.call(this)};
g.h.load=function(){g.oV.prototype.load.call(this);this.l.show()};
g.h.unload=function(){g.oV.prototype.unload.call(this);this.l.hide();this.l.destroy()};
g.h.SM=function(a){this.cB()&&(this.l.created||this.l.create(),"load"==a.getId()&&this.load())};
g.h.TM=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.XD=function(){g.fV(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0);a=new g.jQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.jQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.cV(this.g,[a,b])};g.fY.endscreen=p6;})(_yt_player);