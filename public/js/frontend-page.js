webpackJsonp([52],{"+Y2K":function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("footer",{staticClass:"frontend-footer"},[e("div",{staticClass:"fix-width fix-width-mobile"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("span",[o._v(o._s(o.trans("frontend.footer_copyright"))+" © "+o._s(o.getYear())+" "),e("router-link",{attrs:{to:"/"}},[o._v(o._s(o.getConfig("institute_name")))])],1),e("br"),e("br"),o._v(" "),e("span",[o._v(o._s(o.trans("frontend.footer_all_rights_reserved")))])]),o._v(" "),e("div",{staticClass:"col-12 col-md-6 text-right"},[e("ul",{staticClass:"list-inline"},o._l(o.menus,function(t){return e("li",{staticClass:"list-inline-item"},[e("router-link",{key:t.slug,staticClass:"footer-nav-link",attrs:{to:"/page/"+t.slug,exact:""}},[o._v(o._s(t.name))])],1)})),o._v(" "),e("ul",{staticClass:"footer-link list-inline"},[o.getConfig("facebook_link")?e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{target:"_blank",href:o.getConfig("facebook_link")}},[e("i",{staticClass:"fab fa-facebook"})])]):o._e(),o._v(" "),o.getConfig("twitter_link")?e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{target:"_blank",href:o.getConfig("twitter_link")}},[e("i",{staticClass:"fab fa-twitter"})])]):o._e(),o._v(" "),o.getConfig("google_plus_link")?e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{target:"_blank",href:o.getConfig("google_plus_link")}},[e("i",{staticClass:"fab fa-google-plus"})])]):o._e(),o._v(" "),o.getConfig("youtube_link")?e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{target:"_blank",href:o.getConfig("youtube_link")}},[e("i",{staticClass:"fab fa-youtube"})])]):o._e(),o._v(" "),o.getConfig("linkedin_link")?e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{target:"_blank",href:o.getConfig("linkedin_link")}},[e("i",{staticClass:"fab fa-linkedin"})])]):o._e()])])])])])},staticRenderFns:[]}},"8B36":function(o,t,e){var n=e("VU/8")(e("JLHU"),e("lreJ"),!1,null,null,null);o.exports=n.exports},BzUx:function(o,t,e){var n=e("VU/8")(e("IPLu"),e("Lkvr"),!1,function(o){e("zeo9")},null,null);o.exports=n.exports},IPLu:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(e("8B36")),r=a(e("reSY"));function a(o){return o&&o.__esModule?o:{default:o}}t.default={data:function(){return{menus:[]}},mounted:function(){this.getData()},methods:{getData:function(){var o=this,t=this.$loading.show();axios.get("/api/frontend/menu/list").then(function(e){o.menus=e.menus,t.hide()}).catch(function(o){t.hide(),helper.showErrorMsg(o)})}},components:{FrontendHeader:n.default,FrontendFooter:r.default},computed:{headerMenu:function(){return this.menus.filter(function(o){return"header"==o.type})},footerMenu:function(){return this.menus.filter(function(o){return"footer"==o.type})}}}},JLHU:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["menus"],mounted:function(){},methods:{logout:function(){var o=this;helper.logout().then(function(){o.$router.push("/")})},getConfig:function(o){return helper.getConfig(o)},isAuth:function(){return helper.isAuth()}},computed:{getLogo:function(){return helper.getLogo()}}}},Lkvr:function(o,t){o.exports={render:function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"frontend-pages",attrs:{id:"main-wrapper"}},[t("tour-notification",{staticClass:"d-none d-sm-inline"}),this._v(" "),t("frontend-header",{attrs:{menus:this.headerMenu}}),this._v(" "),t("div",{staticClass:"page-wrapper"},[t("router-view")],1),this._v(" "),t("frontend-footer",{attrs:{menus:this.footerMenu}})],1)},staticRenderFns:[]}},bMHd:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["menus"],mounted:function(){},methods:{getConfig:function(o){return helper.getConfig(o)},getYear:function(){return moment().format("Y")}},computed:{}}},lreJ:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("header",{staticClass:"topheader"},[e("div",{staticClass:"fix-width"},[e("nav",{staticClass:"navbar navbar-expand-md navbar-light"},[o._m(0),o._v(" "),e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{attrs:{src:o.getLogo,alt:o.getConfig("institute_name")}})]),o._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav ml-auto stylish-nav"},[o._l(o.menus,function(t){return t.page&&!t.page.is_draft?[t.hasOwnProperty("children")&&t.children.length?e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[o._v(o._s(t.name))]),o._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},o._l(t.children,function(t){return e("router-link",{key:t.slug,staticClass:"dropdown-item",attrs:{to:"/page/"+t.slug,exact:""}},[o._v(o._s(t.name))])}))]):e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:t.options.is_default?"/"+t.slug:"/page/"+t.slug,exact:""}},[o._v(o._s(t.name))])],1)]:o._e()}),o._v(" "),o.isAuth()?e("li",{staticClass:"nav-item dropdown"},[e("router-link",{staticClass:"nav-link dropdown-toggle btn nav-btn success",attrs:{to:"/dashboard",id:"authDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-home"}),o._v(" "+o._s(o.trans("general.dashboard")))]),o._v(" "),e("div",{staticClass:"dropdown-menu border-0 bg-transparent",attrs:{"aria-labelledby":"authDropdownMenuLink"}},[e("a",{staticClass:"dropdown-item btn nav-btn danger",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),o.logout(t)}}},[e("i",{staticClass:"fas fa-power-off"}),o._v(" "+o._s(o.trans("auth.logout")))])])],1):e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link btn nav-btn info",attrs:{to:"/login"}},[o._v(o._s(o.trans("auth.sign_in")))])],1)],2)])],1)])])},staticRenderFns:[function(){var o=this.$createElement,t=this._self._c||o;return t("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}]}},piiI:function(o,t,e){(o.exports=e("FZ+f")(!1)).push([o.i,"",""])},reSY:function(o,t,e){var n=e("VU/8")(e("bMHd"),e("+Y2K"),!1,function(o){e("y3HY")},null,null);o.exports=n.exports},trcV:function(o,t,e){(o.exports=e("FZ+f")(!1)).push([o.i,".preloader{width:100%;height:100%;top:0;position:fixed;z-index:99999;background:#fff}.preloader .cssload-speeding-wheel{position:absolute;top:calc(50% - 3.5px);left:calc(50% - 3.5px)}*{outline:none}body{font-family:Rubik,sans-serif;margin:0;overflow-x:hidden;color:#54667a;font-weight:300}body,html{background:#fff}html{position:relative;min-height:100%}a:focus,a:hover{text-decoration:none}a.link{color:#54667a}a.link:focus,a.link:hover{color:#009efb}.img-responsive{width:100%;height:auto}.img-rounded{border-radius:4px}h1,h2,h3,h4,h5,h6{color:#2c2b2e;font-family:Rubik,sans-serif;font-weight:400}h1{line-height:48px;font-size:36px}h2{line-height:36px;font-size:24px}h3{line-height:30px;font-size:21px}h4{line-height:22px;font-size:18px}h5{line-height:18px;font-size:16px}h5,h6{font-weight:400}h6{line-height:16px;font-size:14px}.display-5{font-size:3rem}.display-6{font-size:36px}.box{border-radius:4px;padding:10px}html body .dl{display:inline-block}html body .db{display:block}.no-wrap td,.no-wrap th{white-space:nowrap}blockquote{border:1px solid hsla(210,8%,51%,.13);border-left:5px solid #009efb;padding:15px}.clear{clear:both}ol li{margin:5px 0}html body .p-0{padding:0}html body .p-10{padding:10px}html body .p-20{padding:20px}html body body .p-30{padding:30px}html body .p-l-0{padding-left:0}html body .p-l-10{padding-left:10px}html body .p-l-20{padding-left:20px}html body .p-r-0{padding-right:0}html body .p-r-10{padding-right:10px}html body .p-r-20{padding-right:20px}html body .p-r-30{padding-right:30px}html body .p-r-40{padding-right:40px}html body .p-t-0{padding-top:0}html body .p-t-10{padding-top:10px}html body .p-t-20{padding-top:20px}html body .p-t-30{padding-top:30px}html body .p-b-0{padding-bottom:0}html body .p-b-5{padding-bottom:5px}html body .p-b-10{padding-bottom:10px}html body .p-b-20{padding-bottom:20px}html body .p-b-30{padding-bottom:30px}html body .p-b-40{padding-bottom:40px}html body .m-0{margin:0}html body .m-l-5{margin-left:5px}html body .m-l-10{margin-left:10px}html body .m-l-15{margin-left:15px}html body .m-l-20{margin-left:20px}html body .m-l-30{margin-left:30px}html body .m-l-40{margin-left:40px}html body .m-r-5{margin-right:5px}html body .m-r-10{margin-right:10px}html body .m-r-15{margin-right:15px}html body .m-r-20{margin-right:20px}html body .m-r-30{margin-right:30px}html body .m-r-40{margin-right:40px}html body .m-t-0{margin-top:0}html body .m-t-5{margin-top:5px}html body .m-t-10{margin-top:10px}html body .m-t-15{margin-top:15px}html body .m-t-20{margin-top:20px}html body .m-t-30{margin-top:30px}html body .m-t-40{margin-top:40px}html body .m-b-0{margin-bottom:0}html body .m-b-5{margin-bottom:5px}html body .m-b-10{margin-bottom:10px}html body .m-b-15{margin-bottom:15px}html body .m-b-20{margin-bottom:20px}html body .m-b-30{margin-bottom:30px}html body .m-b-40{margin-bottom:40px}html body .vt{vertical-align:top}html body .vm{vertical-align:middle}html body .vb{vertical-align:bottom}html body .font-bold{font-weight:700}html body .font-normal{font-weight:400}html body .font-light{font-weight:300}html body .font-medium{font-weight:400}html body .font-16{font-size:16px}html body .font-14{font-size:14px}html body .font-18{font-size:18px}html body .font-20{font-size:20px}html body .b-0{border:none}html body .b-r{border-right:1px solid hsla(210,8%,51%,.13)}html body .b-l{border-left:1px solid hsla(210,8%,51%,.13)}html body .b-b{border-bottom:1px solid hsla(210,8%,51%,.13)}html body .b-t{border-top:1px solid hsla(210,8%,51%,.13)}html body .b-all{border:1px solid hsla(210,8%,51%,.13)}.thumb-sm{height:32px;width:32px}.thumb-md{height:48px;width:48px}.thumb-lg{height:88px;width:88px}.hide{display:none}.img-circle{border-radius:100%}.radius{border-radius:4px}html body .text-muted{color:#90a4ae}html body .bg-primary{background-color:#7460ee}html body .bg-success{background-color:#55ce63}html body .bg-info{background-color:#009efb!important}html body .bg-warning{background-color:#ffbc34}html body .bg-danger{background-color:#f62d51}html body .bg-megna{background-color:#01c0c8}html body .bg-theme{background-color:#009efb}html body .bg-inverse{background-color:#2f3d4a}html body .bg-purple{background-color:#7460ee}html body .bg-light-primary{background-color:#f1effd}html body .bg-light-success{background-color:#e8fdeb}html body .bg-light-info{background-color:#cfecfe}html body .bg-light-extra{background-color:#ebf3f5}html body .bg-light-warning{background-color:#fff8ec}html body .bg-light-danger{background-color:#f9e7eb}html body .bg-light-inverse{background-color:#f6f6f6}html body .bg-light{background-color:#f2f7f8}html body .bg-white{background-color:#fff}.round{line-height:45px;color:#fff;width:45px;height:45px;display:inline-block;font-weight:400;text-align:center;background:#009efb}.round,.round img{border-radius:100%}.round.round-info{background:#009efb}.round.round-warning{background:#ffbc34}.round.round-danger{background:#f62d51}.round.round-success{background:#55ce63}.round.round-primary{background:#7460ee}.label{padding:2px 10px;line-height:13px;color:#fff;font-weight:400;border-radius:4px;font-size:75%}.label-rounded{border-radius:60px}.label-custom{background-color:#01c0c8}.label-success{background-color:#55ce63}.label-info{background-color:#009efb}.label-warning{background-color:#ffbc34}.label-danger{background-color:#f62d51}.label-megna{background-color:#01c0c8}.label-primary,.label-purple{background-color:#7460ee}.label-red{background-color:#fb3a3a}.label-inverse{background-color:#2f3d4a}.label-default{background-color:#f2f7f8}.label-white{background-color:#fff}.label-light-success{background-color:#e8fdeb;color:#55ce63}.label-light-info{background-color:#cfecfe;color:#009efb}.label-light-warning{background-color:#fff8ec;color:#ffbc34}.label-light-danger{background-color:#f9e7eb;color:#f62d51}.label-light-megna{background-color:#e0f2f4;color:#01c0c8}.label-light-primary{background-color:#f1effd;color:#7460ee}.label-light-inverse{background-color:#f6f6f6;color:#2f3d4a}.pagination>li:first-child>a,.pagination>li:first-child>span{border-bottom-left-radius:4px;border-top-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:4px;border-top-right-radius:4px}.pagination>li>a,.pagination>li>span{color:#263238}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{background-color:#f2f7f8}.pagination-split li{margin-left:5px;display:inline-block;float:left}.pagination-split li:first-child{margin-left:0}.pagination-split li a{border-radius:4px}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{background-color:#009efb;border-color:#009efb}.pager li>a,.pager li>span{border-radius:4px;color:#263238}.table-box{display:table;width:100%}.table.no-border tbody td{border:0}.cell{display:table-cell;vertical-align:middle}.table td,.table th{border-color:#f3f1f1}.table th,.table thead th{font-weight:500}.table-hover tbody tr:hover{background:#f2f7f8}html body .jqstooltip{width:auto;height:auto}.v-middle td,.v-middle th,.waves-effect{vertical-align:middle}.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;z-index:1;will-change:opacity,transform;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,.2);-webkit-transition:all .7s ease-out;transition:all .7s ease-out;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:hsla(0,0%,100%,.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,.7)}html body .waves-notransition{-webkit-transition:none;transition:none}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-input-wrapper{border-radius:.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-block{display:block}.badge{font-weight:400}.badge-xs{font-size:9px}.badge-sm,.badge-xs{-webkit-transform:translateY(-2px);transform:translateY(-2px)}.badge-success{background-color:#55ce63}.badge-info{background-color:#009efb}.badge-primary{background-color:#7460ee}.badge-warning{background-color:#ffbc34}.badge-danger{background-color:#f62d51}.badge-purple{background-color:#7460ee}.badge-red{background-color:#fb3a3a}.badge-inverse{background-color:#2f3d4a}.text-white{color:#fff}.text-danger{color:#f62d51!important}.text-muted{color:#90a4ae!important}.text-warning{color:#ffbc34!important}.text-success{color:#55ce63!important}.text-info{color:#009efb!important}.text-inverse{color:#2f3d4a!important}.text-blue{color:#02bec9}.text-purple{color:#7460ee}.text-primary{color:#7460ee!important}.text-megna{color:#01c0c8}.text-dark{color:#54667a}.text-themecolor{color:#009efb}.btn{padding:7px 12px;font-size:14px;cursor:pointer}.btn-group label{color:#fff!important;margin-bottom:0}.btn-group label.btn-secondary{color:#54667a!important}.btn-lg{padding:.75rem 1.5rem;font-size:1.25rem}.btn-circle{border-radius:100%;width:40px;height:40px;padding:10px}.btn-circle.btn-sm{width:35px;height:35px;padding:8px 10px;font-size:14px}.btn-circle.btn-lg{width:50px;height:50px;padding:14px 15px;font-size:18px}.btn-circle.btn-xl{width:70px;height:70px;padding:14px 15px;font-size:24px}.btn-sm{font-size:12px}.btn-sm,.btn-xs{padding:.25rem .5rem}.btn-xs{font-size:10px}.button-list a,.button-list button{margin:5px 12px 5px 0}.btn-outline{color:inherit;background-color:transparent;-webkit-transition:all .5s;transition:all .5s}.btn-rounded{border-radius:60px;padding:7px 18px}.btn-rounded.btn-lg{padding:.75rem 1.5rem}.btn-rounded.btn-sm{padding:.25rem .5rem;font-size:12px}.btn-rounded.btn-xs{padding:.25rem .5rem;font-size:10px}.btn-custom,.btn-custom.disabled,.btn-custom.disabled:hover,.btn-custom:hover{background:#009efb;border:1px solid #009efb;color:#fff}.btn-custom.disabled:hover,.btn-custom:hover{opacity:.8}.btn-primary,.btn-primary.disabled{background:#7460ee;border:1px solid #7460ee}.btn-primary.disabled:hover,.btn-primary:hover{background:#7460ee;opacity:.7;border:1px solid #7460ee}.btn-primary.active,.btn-primary.disabled.active,.btn-primary.disabled:focus,.btn-primary:focus{background:#6352ce}.btn-themecolor,.btn-themecolor.disabled{background:#009efb;color:#fff;border:1px solid #009efb}.btn-themecolor.disabled:hover,.btn-themecolor:hover{background:#009efb;opacity:.7;border:1px solid #009efb}.btn-themecolor.active,.btn-themecolor.disabled.active,.btn-themecolor.disabled:focus,.btn-themecolor:focus{background:#028ee1}.btn-success,.btn-success.disabled{background:#55ce63;border:1px solid #55ce63}.btn-success.disabled:hover,.btn-success:hover{background:#55ce63;opacity:.7;border:1px solid #55ce63}.btn-success.active,.btn-success.disabled.active,.btn-success.disabled:focus,.btn-success:focus{background:#4ab657}.btn-info,.btn-info.disabled,.btn-info.disabled:hover,.btn-info:hover{background:#009efb;border:1px solid #009efb}.btn-info.disabled:hover,.btn-info:hover{opacity:.7}.btn-info.active,.btn-info.disabled.active,.btn-info.disabled:focus,.btn-info:focus{background:#028ee1}.btn-warning,.btn-warning.disabled{background:#ffbc34;border:1px solid #ffbc34}.btn-warning.disabled:hover,.btn-warning:hover{background:#ffbc34;opacity:.7;border:1px solid #ffbc34}.btn-warning.active,.btn-warning.disabled.active,.btn-warning.disabled:focus,.btn-warning:focus{background:#e9ab2e}.btn-danger,.btn-danger.disabled{background:#f62d51;border:1px solid #f62d51}.btn-danger.disabled:hover,.btn-danger:hover{background:#f62d51;opacity:.7;border:1px solid #f62d51}.btn-danger.active,.btn-danger.disabled.active,.btn-danger.disabled:focus,.btn-danger:focus{background:#e6294b}.btn-inverse,.btn-inverse.disabled,.btn-inverse.disabled:hover,.btn-inverse:hover{background:#2f3d4a;border:1px solid #2f3d4a;color:#fff}.btn-inverse.disabled:hover,.btn-inverse:hover{opacity:.7}.btn-inverse.active,.btn-inverse.disabled.active,.btn-inverse.disabled:focus,.btn-inverse:focus{background:#232a37;color:#fff}.btn-red,.btn-red.disabled{background:#fb3a3a;border:1px solid #fb3a3a;color:#fff}.btn-red.disabled:hover,.btn-red:hover{opacity:.7;border:1px solid #fb3a3a;background:#fb3a3a}.btn-red.active,.btn-red.disabled.active,.btn-red.disabled:focus,.btn-red:focus{background:#e6294b}.btn-outline-default{background-color:#fff}.btn-outline-default.focus,.btn-outline-default:focus,.btn-outline-default:hover{background:#f2f7f8}.btn-outline-primary{color:#7460ee;background-color:#fff;border-color:#7460ee}.btn-outline-primary.focus,.btn-outline-primary:focus,.btn-outline-primary:hover{background:#7460ee;color:#fff;border-color:#7460ee}.btn-outline-success{color:#55ce63;background-color:transparent;border-color:#55ce63}.btn-outline-success.focus,.btn-outline-success:focus,.btn-outline-success:hover{background:#55ce63;border-color:#55ce63;color:#fff}.btn-outline-info{color:#009efb;background-color:transparent;border-color:#009efb}.btn-outline-info.focus,.btn-outline-info:focus,.btn-outline-info:hover{background:#009efb;border-color:#009efb;color:#fff}.btn-outline-warning{color:#ffbc34;background-color:transparent;border-color:#ffbc34}.btn-outline-warning.focus,.btn-outline-warning:focus,.btn-outline-warning:hover{background:#ffbc34;border-color:#ffbc34;color:#fff}.btn-outline-danger{color:#f62d51;background-color:transparent;border-color:#f62d51}.btn-outline-danger.focus,.btn-outline-danger:focus,.btn-outline-danger:hover{background:#f62d51;border-color:#f62d51;color:#fff}.btn-outline-red{color:#fb3a3a;background-color:transparent;border-color:#fb3a3a}.btn-outline-red.focus,.btn-outline-red:focus,.btn-outline-red:hover{background:#fb3a3a;border-color:#fb3a3a;color:#fff}.btn-outline-inverse{color:#2f3d4a;background-color:transparent;border-color:#2f3d4a}.btn-outline-inverse.focus,.btn-outline-inverse:focus,.btn-outline-inverse:hover{background:#2f3d4a;border-color:#2f3d4a;color:#fff}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary.focus,.btn-primary.focus:active,.btn-primary:active:focus,.btn-primary:active:hover,.btn-primary:focus,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{background-color:#6352ce;border:1px solid #6352ce}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success.focus,.btn-success.focus:active,.btn-success:active:focus,.btn-success:active:hover,.btn-success:focus,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{background-color:#4ab657;border:1px solid #4ab657}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info.focus,.btn-info.focus:active,.btn-info:active:focus,.btn-info:active:hover,.btn-info:focus,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{background-color:#028ee1;border:1px solid #028ee1}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning.focus,.btn-warning.focus:active,.btn-warning:active:focus,.btn-warning:active:hover,.btn-warning:focus,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{background-color:#e9ab2e;border:1px solid #e9ab2e}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger.focus,.btn-danger.focus:active,.btn-danger:active:focus,.btn-danger:active:hover,.btn-danger:focus,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{background-color:#e6294b;border:1px solid #e6294b}.btn-inverse.active,.btn-inverse.focus,.btn-inverse:active,.btn-inverse:focus,.btn-inverse:hover,.open>.dropdown-toggle.btn-inverse{background-color:#232a37;border:1px solid #232a37}.btn-red.active,.btn-red.focus,.btn-red:active,.btn-red:focus,.btn-red:hover,.open>.dropdown-toggle.btn-red{background-color:#d61f1f;border:1px solid #d61f1f;color:#fff}.button-box .btn{margin:0 8px 8px 0}.btn-label{background:rgba(0,0,0,.05);display:inline-block;margin:-6px 12px -6px -14px;padding:7px 15px}.btn-facebook{color:#fff;background-color:#3b5998}.btn-twitter{color:#fff;background-color:#55acee}.btn-linkedin{color:#fff;background-color:#007bb6}.btn-dribbble{color:#fff;background-color:#ea4c89}.btn-googleplus{color:#fff;background-color:#dd4b39}.btn-instagram{color:#fff;background-color:#3f729b}.btn-pinterest{color:#fff;background-color:#cb2027}.btn-dropbox{color:#fff;background-color:#007ee5}.btn-flickr{color:#fff;background-color:#ff0084}.btn-tumblr{color:#fff;background-color:#32506d}.btn-skype{color:#fff;background-color:#00aff0}.btn-youtube{color:#fff;background-color:#b00}.btn-github{color:#fff;background-color:#171515}.notify{position:relative;top:-25px;right:-7px}.notify .heartbit{position:absolute;top:-20px;right:-4px;height:25px;width:25px;z-index:10;border:5px solid #f62d51;border-radius:70px;-moz-animation:heartbit 1s ease-out;-moz-animation-iteration-count:infinite;-o-animation:heartbit 1s ease-out;-o-animation-iteration-count:infinite;-webkit-animation:heartbit 1s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.notify .point{width:6px;height:6px;border-radius:30px;background-color:#f62d51;position:absolute;right:6px;top:-10px}@-webkit-keyframes heartbit{0%{-webkit-transform:scale(0);opacity:0}25%{-webkit-transform:scale(.1);opacity:.1}50%{-webkit-transform:scale(.5);opacity:.3}75%{-webkit-transform:scale(.8);opacity:.5}to{-webkit-transform:scale(1);opacity:0}}.mega-dropdown{position:static;width:100%}.mega-dropdown .dropdown-menu{width:100%;padding:30px;margin-top:0}.mega-dropdown ul{padding:0}.mega-dropdown ul li{list-style:none}.mega-dropdown .carousel-item .container{padding:0}.mega-dropdown .nav-accordion .card{margin-bottom:1px}.mega-dropdown .nav-accordion .card-header{background:#fff}.mega-dropdown .nav-accordion .card-header h5{margin:0}.mega-dropdown .nav-accordion .card-header h5 a{text-decoration:none;color:#54667a}ul.list-style-none{margin:0;padding:0}ul.list-style-none li{list-style:none}ul.list-style-none li a{color:#54667a;padding:8px 0;display:block;text-decoration:none}ul.list-style-none li a:hover{color:#009efb}.dropdown-item{padding:8px 1rem;color:#54667a}textarea{resize:none}.form-control{color:#54667a;min-height:38px;display:initial}.form-control-sm{min-height:20px}.form-control:disabled,.form-control[readonly]{opacity:.7}.custom-control-input:focus~.custom-control-indicator{-webkit-box-shadow:none;box-shadow:none}.custom-control-input:checked~.custom-control-indicator{background-color:#55ce63}form label{font-weight:400}.form-group{margin-bottom:25px}.form-horizontal label{margin-bottom:0}.form-control-static{padding-top:0}.form-bordered .form-group{border-bottom:1px solid hsla(210,8%,51%,.13);padding-bottom:20px}.card-no-border .card{border:0}.card-no-border .sidebar-footer{background:#fff}.card-no-border .page-wrapper{background:#f2f7f8}.card-no-border .left-sidebar{-webkit-box-shadow:1px 0 20px rgba(0,0,0,.08);box-shadow:1px 0 20px rgba(0,0,0,.08)}.card-no-border .left-sidebar,.card-no-border .sidebar-nav{background:#fff}.card-no-border .sidebar-nav>ul>li>a.active{background:#f2f7f8}.card-no-border .shadow-none{-webkit-box-shadow:none;box-shadow:none}.card-outline-danger,.card-outline-info,.card-outline-primary,.card-outline-success,.card-outline-warning{background:#fff}.card-no-border .card-group .card{border:1px solid hsla(210,8%,51%,.13)}.card-header{background-color:#dae6e8}.css-bar:after{z-index:1}.css-bar>i{z-index:10}.single-column .left-sidebar{display:none}.single-column .page-wrapper{margin-left:0}.fix-width{width:100%;max-width:1140px;margin:0 auto}ul.common li{display:inline-block;line-height:40px;list-style:outside none none;width:48%}.frontend-pages #main-wrapper{width:100%}.frontend-pages .page-wrapper{background:#fff;margin-left:0}.frontend-pages .container-fluid{padding:25px 15px 0}.frontend-pages .display-7{font-size:30px;font-weight:500}.frontend-pages .m-t-80{margin-top:80px}.frontend-pages .m-b-80{margin-bottom:80px}.frontend-pages .p-t-80{padding-top:80px}.frontend-pages .p-b-80{padding-bottom:80px}.frontend-pages .p-y-80{padding-top:80px;padding-bottom:80px}.frontend-pages .p-t-60{padding-top:60px}.frontend-pages .p-b-60{padding-bottom:60px}.frontend-pages .p-y-60{padding-top:60px;padding-bottom:60px}.frontend-pages .light-grey{background:#eaebec}.topheader{padding:15px 0;background:#fff}.topheader .navbar-brand{max-width:150px}.topheader .navbar-brand img{height:auto;max-height:100px;max-width:100%}.topheader .stylish-nav .nav-link{padding:.5rem 10px}.topheader .stylish-nav .nav-link.router-link-active{color:#009efb}.topheader .stylish-nav .nav-btn{color:#fff;font-size:1rem;padding:.5rem 1rem;margin-left:10px;border-radius:20px;cursor:pointer}.topheader .stylish-nav .nav-btn.success{background:#55ce63}.topheader .stylish-nav .nav-btn.info{background:#009efb}.topheader .stylish-nav .nav-btn.danger{background:#f62d51}.topheader .stylish-nav .nav-btn:hover{color:#fff}.topheader .stylish-nav .nav-btn:hover.success{background:#4ab657}.topheader .stylish-nav .nav-btn:hover.info{background:#028ee1}.topheader .stylish-nav .nav-btn:hover.danger{background:#e6294b}.fix-header .topheader{position:fixed;width:100%;top:0;left:0;z-index:1;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.15);box-shadow:0 2px 10px 0 rgba(0,0,0,.15)}.page-title{margin-top:100px;padding:80px 0;background:#2e3c4a;-webkit-box-shadow:inset 0 2px 20px 0 rgba(0,0,0,.2);box-shadow:inset 0 2px 20px 0 rgba(0,0,0,.2)}.page-title h2{font-size:2.2rem;font-weight:400;letter-spacing:1.5px;color:#fff}.main-banner .carousel-caption h2{color:#fff;font-size:34px;font-weight:400;line-height:44px}.main-banner .carousel-caption p{font-size:20px;line-height:30px;margin:10px 0 30px}.featured-block .featured{background:rgba(0,0,0,.2);text-align:center;width:100%;overflow:hidden;max-height:300px}.featured-block .featured i{font-size:100px;padding-top:50px;padding-bottom:50px}.featured-block .featured img{width:100%}.page-body{text-align:justify}.light-blue{background:#ebf3f5;padding:80px 0}.white-space{background:#fff;padding:80px 0}.image-box{position:relative}.image-box .image-overly{position:absolute;height:100%;width:100%;top:0;display:none;padding-top:30%;background:hsla(0,0%,100%,.8)}.image-box:hover .image-overly{display:block}.icon-section h4{margin-top:30px;margin-bottom:15px}.dual-bg{padding:80px 0 0}.testimonial-text{margin:0 auto;margin-top:30px;margin-bottom:30px;font-size:17px;line-height:34px}.call-to-action{padding:28px 0;overflow:hidden}.call-to-action span{color:#fff;font-weight:500;font-size:24px;padding-top:5px}.call-to-action .buy-btn,.call-to-action .suggest-btn{background:none;border:2px solid #fff;padding:12px 30px;color:#fff;margin-left:10px}.call-to-action .buy-btn:hover,.call-to-action .suggest-btn:hover{color:#54667a;background:#fff;opacity:1}ul.list-icons{margin:0;padding:0}ul.list-icons li{list-style:none;line-height:40px}ul.list-icons li a{color:#8f9aa5}ul.list-icons li a:hover{color:#fff}ul.list-icons li a i{font-size:12px;margin-right:5px}.frontend-footer{padding:50px 0 40px;background:#2f3d4a;color:#8f9aa5}.frontend-footer .sub-footer{margin-top:60px;border-top:1px solid hsla(210,8%,51%,.13);padding:30px 0 0}.frontend-footer a{color:#d1dce6}.dropdown:hover .dropdown-menu{display:block}@media (min-width:768px){.topheader .navbar-brand{max-width:250px}}",""])},y3HY:function(o,t,e){var n=e("piiI");"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);e("rjj0")("4b2ac697",n,!0,{})},zeo9:function(o,t,e){var n=e("trcV");"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);e("rjj0")("1c1e2ee9",n,!0,{})}});
//# sourceMappingURL=frontend-page.js.map