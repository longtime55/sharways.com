webpackJsonp([50],{"3Ulh":function(e,t,r){var s=r("VU/8")(r("8nPX"),r("oyUl"),!1,null,null,null);e.exports=s.exports},"8hZQ":function(e,t,r){var s=r("VU/8")(r("uVHw"),r("rdqf"),!1,null,null,null);e.exports=s.exports},"8nPX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,o=r("8hZQ"),i=(s=o)&&s.__esModule?s:{default:s};t.default={components:{classTimingForm:i.default}}},DZer:function(e,t,r){"use strict";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(e){this.$emit("input",e.target.checked)}},computed:{classObject:function(){var e,t=this.color,r=this.value,o=this.theme,i=this.typeBold,c=this.disabled;return s(e={"vue-switcher":!0},"vue-switcher--unchecked",!r),s(e,"vue-switcher--disabled",c),s(e,"vue-switcher--bold",i),s(e,"vue-switcher--bold--unchecked",i&&!r),s(e,"vue-switcher-theme--"+o,t),s(e,"vue-switcher-color--"+t,t),e},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}}},DtRx:function(e,t,r){var s=r("i4uy"),o=r("MAlW");e.exports=function(e,t,r){var i=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var c=(e=e||{}).random||(e.rng||s)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t)for(var a=0;a<16;++a)t[i+a]=c[a];return t||o(c)}},MAlW:function(e,t){for(var r=[],s=0;s<256;++s)r[s]=(s+256).toString(16).substr(1);e.exports=function(e,t){var s=t||0,o=r;return[o[e[s++]],o[e[s++]],o[e[s++]],o[e[s++]],"-",o[e[s++]],o[e[s++]],"-",o[e[s++]],o[e[s++]],"-",o[e[s++]],o[e[s++]],"-",o[e[s++]],o[e[s++]],o[e[s++]],o[e[s++]],o[e[s++]],o[e[s++]]].join("")}},NXYG:function(e,t,r){var s=r("ppLY");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("40f7c41e",s,!0,{})},i4uy:function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var s=new Uint8Array(16);e.exports=function(){return r(s),s}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},lqen:function(e,t,r){var s=r("VU/8")(r("DZer"),r("ta96"),!1,function(e){r("NXYG")},null,null);e.exports=s.exports},oyUl:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.add_new_class_timing")))])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.$router.push("/academic/class/timing")}}},[r("i",{staticClass:"fas fa-list"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.class_timing")))])])])])])]),e._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body"},[r("class-timing-form")],1)])])])},staticRenderFns:[]}},ppLY:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,'.vue-switcher{position:relative;display:inline-block}.vue-switcher__label{display:block;font-size:10px;margin-bottom:5px}.vue-switcher input{opacity:0;width:100%;height:100%;position:absolute;z-index:1;cursor:pointer}.vue-switcher div{height:15px;width:36px;position:relative;border-radius:30px;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;-webkit-transition:.2s linear,background-color .2s linear;transition:.2s linear,background-color .2s linear}.vue-switcher div:after{content:"";height:20px;width:20px;border-radius:100px;display:block;-webkit-transition:.15s linear,background-color .15s linear;transition:.15s linear,background-color .15s linear;position:absolute;left:100%;margin-left:-18px;cursor:pointer;top:-3px;-webkit-box-shadow:0 1px 5px 0 rgba(0,0,0,.1);box-shadow:0 1px 5px 0 rgba(0,0,0,.1)}.vue-switcher--unchecked div{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vue-switcher--unchecked div:after{left:15px}.vue-switcher--disabled div{opacity:.3}.vue-switcher--disabled input{cursor:not-allowed}.vue-switcher--bold div{top:-8px;height:26px;width:51px}.vue-switcher--bold div:after{margin-left:-24px;top:3px}.vue-switcher--bold--unchecked div:after{left:28px}.vue-switcher--bold .vue-switcher__label span{padding-bottom:7px;display:inline-block}.vue-switcher-theme--default.vue-switcher-color--default div{background-color:#b7b7b7}.vue-switcher-theme--default.vue-switcher-color--default div:after{background-color:#9d9d9d}.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#aaa}.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#c4c4c4}.vue-switcher-theme--default.vue-switcher-color--blue div{background-color:#77b0c8}.vue-switcher-theme--default.vue-switcher-color--blue div:after{background-color:#539bb9}.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#c0dae5}.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#77b0c8}.vue-switcher-theme--default.vue-switcher-color--red div{background-color:#c87777}.vue-switcher-theme--default.vue-switcher-color--red div:after{background-color:#b95353}.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#e5c0c0}.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#c87777}.vue-switcher-theme--default.vue-switcher-color--yellow div{background-color:#c9c377}.vue-switcher-theme--default.vue-switcher-color--yellow div:after{background-color:#bab353}.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#e6e3c0}.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#c9c377}.vue-switcher-theme--default.vue-switcher-color--orange div{background-color:#c89577}.vue-switcher-theme--default.vue-switcher-color--orange div:after{background-color:#b97953}.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div{background-color:#e5cec0}.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after{background-color:#c89577}.vue-switcher-theme--default.vue-switcher-color--green div{background-color:#77c88d}.vue-switcher-theme--default.vue-switcher-color--green div:after{background-color:#53b96e}.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#c0e5ca}.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#77c88d}.vue-switcher-theme--bulma.vue-switcher-color--default div{background-color:#dcdcdc}.vue-switcher-theme--bulma.vue-switcher-color--default div:after{background-color:#f5f5f5}.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#e8e8e8}.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f5f5f5}.vue-switcher-theme--bulma.vue-switcher-color--primary div{background-color:#05ffda}.vue-switcher-theme--bulma.vue-switcher-color--primary div:after{background-color:#00d1b2}.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#6bffe9}.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#05ffda}.vue-switcher-theme--bulma.vue-switcher-color--blue div{background-color:#5e91e3}.vue-switcher-theme--bulma.vue-switcher-color--blue div:after{background-color:#3273dc}.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#b5ccf2}.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#5e91e3}.vue-switcher-theme--bulma.vue-switcher-color--red div{background-color:#ff6b89}.vue-switcher-theme--bulma.vue-switcher-color--red div:after{background-color:#ff3860}.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#ffd1da}.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#ff6b89}.vue-switcher-theme--bulma.vue-switcher-color--yellow div{background-color:#ffe78a}.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after{background-color:#ffdd57}.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#fffcf0}.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#ffe78a}.vue-switcher-theme--bulma.vue-switcher-color--green div{background-color:#3dde75}.vue-switcher-theme--bulma.vue-switcher-color--green div:after{background-color:#22c65b}.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#94edb3}.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#3dde75}.vue-switcher-theme--bootstrap.vue-switcher-color--default div{background-color:#e6e6e6}.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after{background-color:#f0f0f0}.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#f5f5f5}.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f0f0f0}.vue-switcher-theme--bootstrap.vue-switcher-color--primary div{background-color:#4f93ce}.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after{background-color:#337ab7}.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#9fc4e4}.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#4f93ce}.vue-switcher-theme--bootstrap.vue-switcher-color--success div{background-color:#80c780}.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after{background-color:#5cb85c}.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div{background-color:#c7e6c7}.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after{background-color:#80c780}.vue-switcher-theme--bootstrap.vue-switcher-color--info div{background-color:#85d0e7}.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after{background-color:#5bc0de}.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div{background-color:#daf1f8}.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after{background-color:#85d0e7}.vue-switcher-theme--bootstrap.vue-switcher-color--warning div{background-color:#f4c37d}.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after{background-color:#f0ad4e}.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div{background-color:#fceedb}.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after{background-color:#f4c37d}.vue-switcher-theme--bootstrap.vue-switcher-color--danger div{background-color:#d9534f}.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after{background-color:#c9302c}.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div{background-color:#eba5a3}.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after{background-color:#d9534f}',""])},rdqf:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-t-20"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){e.classTimingForm.errors.clear(t.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.class_timing_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.classTimingForm.name,expression:"classTimingForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.class_timing_name")},domProps:{value:e.classTimingForm.name},on:{input:function(t){t.target.composing||e.$set(e.classTimingForm,"name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":"name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-9"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.class_timing_description")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.classTimingForm.description,expression:"classTimingForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("academic.class_timing_description")},domProps:{value:e.classTimingForm.description},on:{input:function(t){t.target.composing||e.$set(e.classTimingForm,"description",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":"description"}})],1)])]),e._v(" "),e._l(e.classTimingForm.sessions,function(t,s){return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("\n                            "+e._s(e.trans("academic.class_timing_session_name"))+"\n                            "),r("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(s)},expression:"{ok: confirmDelete(index)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.delete_class_timing_session"),expression:"trans('academic.delete_class_timing_session')"}],key:s+"_delete_session",staticClass:"btn btn-xs btn-danger",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-times"})])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"session.name"}],staticClass:"form-control",attrs:{type:"text",name:e.getSessionName(s),placeholder:e.trans("academic.class_timing_session_name")},domProps:{value:t.name},on:{input:function(r){r.target.composing||e.$set(t,"name",r.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":e.getSessionName}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.start_time")))]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.start_hour,expression:"session.start_hour"}],staticClass:"custom-select col-12",attrs:{name:e.getSessionStartHourName(s)},on:{change:[function(r){var s=Array.prototype.filter.call(r.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"start_hour",r.target.multiple?s:s[0])},function(t){e.classTimingForm.errors.clear(e.getSessionStartHourName(s))}]}},[r("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("academic.select_hour")))]),e._v(" "),e._l(e.hours,function(t){return r("option",{domProps:{value:t}},[e._v("\n                                    "+e._s(e.timePadding(t))+"\n                                  ")])})],2),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":e.getSessionStartHourName(s)}})],1),e._v(" "),r("div",{staticClass:"col-6"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.start_min,expression:"session.start_min"}],staticClass:"custom-select col-12",attrs:{name:e.getSessionStartHourName(s)},on:{change:[function(r){var s=Array.prototype.filter.call(r.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"start_min",r.target.multiple?s:s[0])},function(t){e.classTimingForm.errors.clear(e.getSessionStartHourName(s))}]}},[r("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("academic.select_min")))]),e._v(" "),e._l(e.mins,function(t){return r("option",{domProps:{value:t}},[e._v("\n                                    "+e._s(e.timePadding(t))+"\n                                  ")])})],2),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":e.getSessionStartMinName(s)}})],1)])])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.end_time")))]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.end_hour,expression:"session.end_hour"}],staticClass:"custom-select col-12",attrs:{name:e.getSessionEndHourName(s)},on:{change:[function(r){var s=Array.prototype.filter.call(r.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"end_hour",r.target.multiple?s:s[0])},function(r){e.setNextStartHour(t,s)}]}},[r("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("academic.select_hour")))]),e._v(" "),e._l(e.hours,function(t){return r("option",{domProps:{value:t}},[e._v("\n                                    "+e._s(e.timePadding(t))+"\n                                  ")])})],2),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":e.getSessionEndHourName(s)}})],1),e._v(" "),r("div",{staticClass:"col-6"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.end_min,expression:"session.end_min"}],staticClass:"custom-select col-12",attrs:{name:e.getSessionEndMinName(s)},on:{change:[function(r){var s=Array.prototype.filter.call(r.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(t,"end_min",r.target.multiple?s:s[0])},function(r){e.setNextStartMin(t,s)}]}},[r("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("academic.select_min")))]),e._v(" "),e._l(e.mins,function(t){return r("option",{domProps:{value:t}},[e._v("\n                                    "+e._s(e.timePadding(t))+"\n                                  ")])})],2),e._v(" "),r("show-error",{attrs:{"form-name":e.classTimingForm,"prop-name":e.getSessionEndMinName(s)}})],1)])])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-2"},[r("div",{staticClass:"form-group"},[r("div",[e._v(e._s(e.trans("academic.is_a_break")))]),e._v(" "),r("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:t.is_a_break,callback:function(r){e.$set(t,"is_a_break",r)},expression:"session.is_a_break"}})],1)]),e._v(" "),e._m(0,!0)])}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:e.addRow}},[e._v(e._s(e.trans("academic.add_class_timing_session")))])])])]),e._v(" "),r("div",{staticClass:"card-footer text-right"},[r("button",{staticClass:"btn btn-danger ",attrs:{type:"button"},on:{click:function(t){e.$router.push("/academic/class/timing")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit",disabled:e.is_disabled_editing}},[e.is_disabled_editing?r("i",{staticClass:"fas fa-lock"}):e._e(),e._v(" "+e._s(e.trans("general.save")))])])],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 col-sm-1"},[t("div",{staticClass:"form-group"})])}]}},ta96:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{class:e.classObject},[e.shouldShowLabel?r("span",{staticClass:"vue-switcher__label"},[e.label?r("span",{domProps:{textContent:e._s(e.label)}}):e._e(),e._v(" "),!e.label&&e.value?r("span",{domProps:{textContent:e._s(e.textEnabled)}}):e._e(),e._v(" "),e.label||e.value?e._e():r("span",{domProps:{textContent:e._s(e.textDisabled)}})]):e._e(),e._v(" "),r("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value},on:{change:e.trigger}}),e._v(" "),r("div")])},staticRenderFns:[]}},uVHw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(r("lqen")),o=i(r("DtRx"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{switches:s.default},props:["uuid"],data:function(){return{classTimingForm:new Form({name:"",description:"",sessions:[]}),hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],mins:[0,5,10,15,20,25,30,35,40,45,50,55],is_disabled_editing:!1}},mounted:function(){this.uuid||this.addRow(),this.uuid&&this.get()},methods:{proceed:function(){this.uuid?this.update():this.store()},get:function(){var e=this,t=this.$loading.show();axios.get("/api/class/timing/"+this.uuid).then(function(r){e.classTimingForm.name=r.name,e.classTimingForm.description=r.description,r.class_timing_sessions.forEach(function(t){e.classTimingForm.sessions.push({uuid:t.uuid,name:t.name,start_hour:Number(t.start.split(":")[0]),start_min:Number(t.start.split(":")[1]),end_hour:Number(t.end.split(":")[0]),end_min:Number(t.end.split(":")[1]),is_a_break:t.is_a_break})}),e.is_disabled_editing=!!r.timetable_allocations.length,t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},addRow:function(){this.classTimingForm.sessions.push({uuid:(0,o.default)(),name:"",start_hour:"",start_min:"",end_hour:"",end_min:"",is_a_break:!1})},timePadding:function(e){return helper.formatWithPadding(e,2)},getSessionName:function(e){return e+"_name"},getSessionStartHourName:function(e){return e+"_start_hour"},getSessionStartMinName:function(e){return e+"_start_min"},getSessionEndHourName:function(e){return e+"_end_hour"},getSessionEndMinName:function(e){return e+"_end_min"},setNextStartHour:function(e,t){(this.classTimingForm.errors.clear(this.getSessionEndHourName(t)),void 0!==this.classTimingForm.sessions[t+1])&&(this.classTimingForm.sessions[t+1].start_hour=e.end_hour)},setNextStartMin:function(e,t){(this.classTimingForm.errors.clear(this.getSessionEndMinName(t)),void 0!==this.classTimingForm.sessions[t+1])&&(this.classTimingForm.sessions[t+1].start_min=e.end_min)},confirmDelete:function(e){var t=this;return function(r){return t.deleteSession(e)}},deleteSession:function(e){this.classTimingForm.sessions.splice(e,1)},store:function(){var e=this,t=this.$loading.show();this.classTimingForm.post("/api/class/timing").then(function(r){toastr.success(r.message),e.classTimingForm.sessions=[],e.addRow(),e.$router.push("/academic/class/timing"),t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},update:function(){var e=this,t=this.$loading.show();this.classTimingForm.patch("/api/class/timing/"+this.uuid).then(function(r){toastr.success(r.message),t.hide(),e.$router.push("/academic/class/timing")}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}}}}});
//# sourceMappingURL=create.js.map