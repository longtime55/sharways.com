webpackJsonp([91],{"6Alt":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.edit_attendance_type")))])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.$router.push("/configuration/employee/attendance/type")}}},[r("i",{staticClass:"fas fa-list"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.attendance_type")))])])])])])]),e._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body p-t-20"},[r("attendance-type-form",{attrs:{id:e.id}})],1)])])])},staticRenderFns:[]}},"7iP4":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,c=r("Ru4H"),a=(o=c)&&o.__esModule?o:{default:o};t.default={components:{attendanceTypeForm:a.default},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}}},DA2i:function(e,t,r){var o=r("VU/8")(r("7iP4"),r("6Alt"),!1,null,null,null);e.exports=o.exports},DZer:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(e){this.$emit("input",e.target.checked)}},computed:{classObject:function(){var e,t=this.color,r=this.value,c=this.theme,a=this.typeBold,i=this.disabled;return o(e={"vue-switcher":!0},"vue-switcher--unchecked",!r),o(e,"vue-switcher--disabled",i),o(e,"vue-switcher--bold",a),o(e,"vue-switcher--bold--unchecked",a&&!r),o(e,"vue-switcher-theme--"+c,t),o(e,"vue-switcher-color--"+t,t),e},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}}},NXYG:function(e,t,r){var o=r("ppLY");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("40f7c41e",o,!0,{})},Ru4H:function(e,t,r){var o=r("VU/8")(r("gqmB"),r("v8dR"),!1,null,null,null);e.exports=o.exports},gqmB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,c=r("lqen"),a=(o=c)&&o.__esModule?o:{default:o};t.default={components:{switches:a.default},data:function(){return{attendanceTypeForm:new Form({type:null,name:"",alias:"",unit:"",is_active:0,description:""}),types:[{text:i18n.employee.attendance_type_present,value:"present"},{text:i18n.employee.attendance_type_holiday,value:"holiday"},{text:i18n.employee.attendance_type_absent,value:"absent"},{text:i18n.employee.attendance_type_half_day,value:"half_day"},{text:i18n.employee.attendance_type_production_based_earning,value:"production_based_earning"},{text:i18n.employee.attendance_type_production_based_deduction,value:"production_based_deduction"}]}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.attendanceTypeForm.post("/api/employee/attendance/type").then(function(r){toastr.success(r.message),e.attendanceTypeForm.type=null,e.$emit("completed"),t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/attendance/type/"+this.id).then(function(r){e.attendanceTypeForm.type=r.type,e.attendanceTypeForm.name=r.name,e.attendanceTypeForm.alias=r.alias,e.attendanceTypeForm.unit=r.unit,e.attendanceTypeForm.is_active=r.is_active,e.attendanceTypeForm.description=r.description,t.hide()}).catch(function(r){t.hide(),helper.showErrorMsg(r),e.$router.push("/configuration/employee/attendance/type")})},update:function(){var e=this,t=this.$loading.show();this.attendanceTypeForm.patch("/api/employee/attendance/type/"+this.id).then(function(r){toastr.success(r.message),t.hide(),e.$router.push("/configuration/employee/attendance/type")}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}}}},lqen:function(e,t,r){var o=r("VU/8")(r("DZer"),r("ta96"),!1,function(e){r("NXYG")},null,null);e.exports=o.exports},ppLY:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,'.vue-switcher{position:relative;display:inline-block}.vue-switcher__label{display:block;font-size:10px;margin-bottom:5px}.vue-switcher input{opacity:0;width:100%;height:100%;position:absolute;z-index:1;cursor:pointer}.vue-switcher div{height:15px;width:36px;position:relative;border-radius:30px;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;-webkit-transition:.2s linear,background-color .2s linear;transition:.2s linear,background-color .2s linear}.vue-switcher div:after{content:"";height:20px;width:20px;border-radius:100px;display:block;-webkit-transition:.15s linear,background-color .15s linear;transition:.15s linear,background-color .15s linear;position:absolute;left:100%;margin-left:-18px;cursor:pointer;top:-3px;-webkit-box-shadow:0 1px 5px 0 rgba(0,0,0,.1);box-shadow:0 1px 5px 0 rgba(0,0,0,.1)}.vue-switcher--unchecked div{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vue-switcher--unchecked div:after{left:15px}.vue-switcher--disabled div{opacity:.3}.vue-switcher--disabled input{cursor:not-allowed}.vue-switcher--bold div{top:-8px;height:26px;width:51px}.vue-switcher--bold div:after{margin-left:-24px;top:3px}.vue-switcher--bold--unchecked div:after{left:28px}.vue-switcher--bold .vue-switcher__label span{padding-bottom:7px;display:inline-block}.vue-switcher-theme--default.vue-switcher-color--default div{background-color:#b7b7b7}.vue-switcher-theme--default.vue-switcher-color--default div:after{background-color:#9d9d9d}.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#aaa}.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#c4c4c4}.vue-switcher-theme--default.vue-switcher-color--blue div{background-color:#77b0c8}.vue-switcher-theme--default.vue-switcher-color--blue div:after{background-color:#539bb9}.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#c0dae5}.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#77b0c8}.vue-switcher-theme--default.vue-switcher-color--red div{background-color:#c87777}.vue-switcher-theme--default.vue-switcher-color--red div:after{background-color:#b95353}.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#e5c0c0}.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#c87777}.vue-switcher-theme--default.vue-switcher-color--yellow div{background-color:#c9c377}.vue-switcher-theme--default.vue-switcher-color--yellow div:after{background-color:#bab353}.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#e6e3c0}.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#c9c377}.vue-switcher-theme--default.vue-switcher-color--orange div{background-color:#c89577}.vue-switcher-theme--default.vue-switcher-color--orange div:after{background-color:#b97953}.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div{background-color:#e5cec0}.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after{background-color:#c89577}.vue-switcher-theme--default.vue-switcher-color--green div{background-color:#77c88d}.vue-switcher-theme--default.vue-switcher-color--green div:after{background-color:#53b96e}.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#c0e5ca}.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#77c88d}.vue-switcher-theme--bulma.vue-switcher-color--default div{background-color:#dcdcdc}.vue-switcher-theme--bulma.vue-switcher-color--default div:after{background-color:#f5f5f5}.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#e8e8e8}.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f5f5f5}.vue-switcher-theme--bulma.vue-switcher-color--primary div{background-color:#05ffda}.vue-switcher-theme--bulma.vue-switcher-color--primary div:after{background-color:#00d1b2}.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#6bffe9}.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#05ffda}.vue-switcher-theme--bulma.vue-switcher-color--blue div{background-color:#5e91e3}.vue-switcher-theme--bulma.vue-switcher-color--blue div:after{background-color:#3273dc}.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#b5ccf2}.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#5e91e3}.vue-switcher-theme--bulma.vue-switcher-color--red div{background-color:#ff6b89}.vue-switcher-theme--bulma.vue-switcher-color--red div:after{background-color:#ff3860}.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#ffd1da}.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#ff6b89}.vue-switcher-theme--bulma.vue-switcher-color--yellow div{background-color:#ffe78a}.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after{background-color:#ffdd57}.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#fffcf0}.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#ffe78a}.vue-switcher-theme--bulma.vue-switcher-color--green div{background-color:#3dde75}.vue-switcher-theme--bulma.vue-switcher-color--green div:after{background-color:#22c65b}.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#94edb3}.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#3dde75}.vue-switcher-theme--bootstrap.vue-switcher-color--default div{background-color:#e6e6e6}.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after{background-color:#f0f0f0}.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#f5f5f5}.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f0f0f0}.vue-switcher-theme--bootstrap.vue-switcher-color--primary div{background-color:#4f93ce}.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after{background-color:#337ab7}.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#9fc4e4}.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#4f93ce}.vue-switcher-theme--bootstrap.vue-switcher-color--success div{background-color:#80c780}.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after{background-color:#5cb85c}.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div{background-color:#c7e6c7}.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after{background-color:#80c780}.vue-switcher-theme--bootstrap.vue-switcher-color--info div{background-color:#85d0e7}.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after{background-color:#5bc0de}.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div{background-color:#daf1f8}.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after{background-color:#85d0e7}.vue-switcher-theme--bootstrap.vue-switcher-color--warning div{background-color:#f4c37d}.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after{background-color:#f0ad4e}.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div{background-color:#fceedb}.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after{background-color:#f4c37d}.vue-switcher-theme--bootstrap.vue-switcher-color--danger div{background-color:#d9534f}.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after{background-color:#c9302c}.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div{background-color:#eba5a3}.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after{background-color:#d9534f}',""])},ta96:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{class:e.classObject},[e.shouldShowLabel?r("span",{staticClass:"vue-switcher__label"},[e.label?r("span",{domProps:{textContent:e._s(e.label)}}):e._e(),e._v(" "),!e.label&&e.value?r("span",{domProps:{textContent:e._s(e.textEnabled)}}):e._e(),e._v(" "),e.label||e.value?e._e():r("span",{domProps:{textContent:e._s(e.textDisabled)}})]):e._e(),e._v(" "),r("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value},on:{change:e.trigger}}),e._v(" "),r("div")])},staticRenderFns:[]}},v8dR:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){e.attendanceTypeForm.errors.clear(t.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.attendance_type_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attendanceTypeForm.name,expression:"attendanceTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.attendance_type_name")},domProps:{value:e.attendanceTypeForm.name},on:{input:function(t){t.target.composing||e.$set(e.attendanceTypeForm,"name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.attendanceTypeForm,"prop-name":"name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.attendance_type_alias")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attendanceTypeForm.alias,expression:"attendanceTypeForm.alias"}],staticClass:"form-control",attrs:{type:"text",name:"alias",placeholder:e.trans("employee.attendance_type_alias")},domProps:{value:e.attendanceTypeForm.alias},on:{input:function(t){t.target.composing||e.$set(e.attendanceTypeForm,"alias",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.attendanceTypeForm,"prop-name":"alias"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.attendance_type")))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.attendanceTypeForm.type,expression:"attendanceTypeForm.type"}],staticClass:"custom-select col-12",attrs:{name:"type"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.attendanceTypeForm,"type",t.target.multiple?r:r[0])},function(t){e.attendanceTypeForm.errors.clear("type")}]}},[r("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.types,function(t){return r("option",{domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])})],2),e._v(" "),r("show-error",{attrs:{"form-name":e.attendanceTypeForm,"prop-name":"type"}})],1)]),e._v(" "),"production_based_earning"==e.attendanceTypeForm.type||"production_based_deduction"==e.attendanceTypeForm.type?r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.attendance_type_unit")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attendanceTypeForm.unit,expression:"attendanceTypeForm.unit"}],staticClass:"form-control",attrs:{type:"text",name:"unit",placeholder:e.trans("employee.attendance_type_unit")},domProps:{value:e.attendanceTypeForm.unit},on:{input:function(t){t.target.composing||e.$set(e.attendanceTypeForm,"unit",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.attendanceTypeForm,"prop-name":"unit"}})],1)]):e._e(),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.attendance_type_is_active")))]),e._v(" "),r("br"),e._v(" "),r("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:e.attendanceTypeForm.is_active,callback:function(t){e.$set(e.attendanceTypeForm,"is_active",t)},expression:"attendanceTypeForm.is_active"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.attendance_type_description")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attendanceTypeForm.description,expression:"attendanceTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.attendance_type_description")},domProps:{value:e.attendanceTypeForm.description},on:{input:function(t){t.target.composing||e.$set(e.attendanceTypeForm,"description",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.attendanceTypeForm,"prop-name":"description"}})],1)])]),e._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/employee/attendance/type"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?r("span",[e._v(e._s(e.trans("general.update")))]):r("span",[e._v(e._s(e.trans("general.save")))])])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=edit.js.map