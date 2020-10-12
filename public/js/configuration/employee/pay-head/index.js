webpackJsonp([86],{"6uuF":function(e,t,a){var r=a("VU/8")(a("DdEp"),a("dSCY"),!1,null,null,null);e.exports=r.exports},"7v3c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=a("lqen"),s=(r=o)&&r.__esModule?r:{default:r};t.default={components:{switches:s.default},data:function(){return{payHeadForm:new Form({name:"",alias:"",type:null,is_active:0,description:""}),types:[{text:i18n.employee.pay_head_type_earning,value:"earning"},{text:i18n.employee.pay_head_type_deduction,value:"deduction"}]}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.payHeadForm.post("/api/employee/pay/head").then(function(a){toastr.success(a.message),e.$emit("completed"),e.payHeadForm.type=null,t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/pay/head/"+this.id).then(function(a){e.payHeadForm.name=a.name,e.payHeadForm.alias=a.alias,e.payHeadForm.type=a.type,e.payHeadForm.is_active=a.is_active,e.payHeadForm.description=a.description,t.hide()}).catch(function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/configuration/employee/pay/head")})},update:function(){var e=this,t=this.$loading.show();this.payHeadForm.patch("/api/employee/pay/head/"+this.id).then(function(a){toastr.success(a.message),t.hide(),e.$router.push("/configuration/employee/pay/head")}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}}}},BN2V:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){e.payHeadForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.pay_head_name")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.payHeadForm.name,expression:"payHeadForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.pay_head_name")},domProps:{value:e.payHeadForm.name},on:{input:function(t){t.target.composing||e.$set(e.payHeadForm,"name",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payHeadForm,"prop-name":"name"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.pay_head_alias")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.payHeadForm.alias,expression:"payHeadForm.alias"}],staticClass:"form-control",attrs:{type:"text",name:"alias",placeholder:e.trans("employee.pay_head_alias")},domProps:{value:e.payHeadForm.alias},on:{input:function(t){t.target.composing||e.$set(e.payHeadForm,"alias",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payHeadForm,"prop-name":"alias"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.pay_head_type")))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.payHeadForm.type,expression:"payHeadForm.type"}],staticClass:"custom-select col-12",attrs:{name:"type"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.payHeadForm,"type",t.target.multiple?a:a[0])},function(t){e.payHeadForm.errors.clear("type")}]}},[a("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.types,function(t){return a("option",{domProps:{value:t.value}},[e._v("\n                    "+e._s(t.text)+"\n                  ")])})],2),e._v(" "),a("show-error",{attrs:{"form-name":e.payHeadForm,"prop-name":"type"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.payHeadForm.is_active,callback:function(t){e.$set(e.payHeadForm,"is_active",t)},expression:"payHeadForm.is_active"}}),e._v(" "+e._s(e.trans("employee.pay_head_is_active"))+"\n            ")],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.pay_head_description")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.payHeadForm.description,expression:"payHeadForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.pay_head_description")},domProps:{value:e.payHeadForm.description},on:{input:function(t){t.target.composing||e.$set(e.payHeadForm,"description",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payHeadForm,"prop-name":"description"}})],1)])]),e._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/employee/pay/head"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?a("span",[e._v(e._s(e.trans("general.update")))]):a("span",[e._v(e._s(e.trans("general.save")))])])],1)])},staticRenderFns:[]}},DZer:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(e){this.$emit("input",e.target.checked)}},computed:{classObject:function(){var e,t=this.color,a=this.value,o=this.theme,s=this.typeBold,i=this.disabled;return r(e={"vue-switcher":!0},"vue-switcher--unchecked",!a),r(e,"vue-switcher--disabled",i),r(e,"vue-switcher--bold",s),r(e,"vue-switcher--bold--unchecked",s&&!a),r(e,"vue-switcher-theme--"+o,t),r(e,"vue-switcher-color--"+t,t),e},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}}},DdEp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=a("ehOy"),s=(r=o)&&r.__esModule?r:{default:r};t.default={components:{payHeadForm:s.default},data:function(){return{pay_heads:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.employee.pay_head_name},{value:"alias",translation:i18n.employee.pay_head_alias},{value:"type",translation:i18n.employee.pay_head_type}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPayHeads()},methods:{getConfig:function(e){return helper.getConfig(e)},getPayHeads:function(e){var t=this,a=this.$loading.show();"number"!=typeof e&&(e=1);var r=helper.getFilterURL(this.filter);axios.get("/api/employee/pay/head?page="+e+r).then(function(e){t.pay_heads=e,a.hide()}).catch(function(e){a.hide(),helper.showErrorMsg(e)})},editPayHead:function(e){this.$router.push("/configuration/employee/pay/head/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(a){return t.deletePayHead(e)}},deletePayHead:function(e){var t=this,a=this.$loading.show();axios.delete("/api/employee/pay/head/"+e.id).then(function(e){toastr.success(e.message),t.getPayHeads(),a.hide()}).catch(function(e){a.hide(),helper.showErrorMsg(e)})},print:function(){var e=this.$loading.show();axios.post("/api/employee/pay/head/print",{filter:this.filter}).then(function(t){var a=window.open("/print");e.hide(),a.document.write(t)}).catch(function(t){e.hide(),helper.showErrorMsg(t)})},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/pay/head/pdf",{filter:this.filter}).then(function(a){t.hide(),window.open("/download/report/"+a+"?token="+e.authToken)}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},getStatus:function(e){return e.is_active?'<span class="label label-success">'+i18n.employee.pay_head_status_active+"</span>":'<span class="label label-danger">'+i18n.employee.pay_head_status_inactive+"</span>"}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getPayHeads()},"filter.order":function(e){this.getPayHeads()},"filter.page_length":function(e){this.getPayHeads()}},computed:{authToken:function(){return helper.getAuthToken()}}}},NXYG:function(e,t,a){var r=a("ppLY");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("40f7c41e",r,!0,{})},dSCY:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.pay_head"))+" \n                    "),e.pay_heads.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.pay_heads.total,from:e.pay_heads.from,to:e.pay_heads.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[e.pay_heads.total&&!e.showCreatePanel?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.add_new_pay_head")))])]):e._e(),e._v(" "),a("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),a("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[a("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),a("help-button",{on:{clicked:function(t){e.help_topic="configuration.employee.pay-head"}}})],1)])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[e.showCreatePanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.add_new_pay_head")))]),e._v(" "),a("pay-head-form",{on:{completed:e.getPayHeads,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[e.pay_heads.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[e._v(e._s(e.trans("employee.pay_head_name")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.pay_head_alias")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.pay_head_type")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.pay_head_status")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.pay_head_description")))]),e._v(" "),a("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),a("tbody",e._l(e.pay_heads.data,function(t){return a("tr",[a("td",{domProps:{textContent:e._s(t.name)}}),e._v(" "),a("td",{domProps:{textContent:e._s(t.alias)}}),e._v(" "),a("td",{domProps:{textContent:e._s(e.trans("employee.pay_head_type_"+t.type))}}),e._v(" "),a("td",{domProps:{innerHTML:e._s(e.getStatus(t))}}),e._v(" "),a("td",{domProps:{textContent:e._s(t.description)}}),e._v(" "),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.edit_pay_head"),expression:"trans('employee.edit_pay_head')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){a.preventDefault(),e.editPayHead(t)}}},[a("i",{staticClass:"fas fa-edit"})]),e._v(" "),a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(pay_head)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.delete_pay_head"),expression:"trans('employee.delete_pay_head')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})])])])])}))])]):e._e(),e._v(" "),e.pay_heads.total?e._e():a("module-info",{attrs:{module:"employee",title:"pay_head_module_title",description:"pay_head_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[e.showCreatePanel?e._e():a("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),a("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.pay_heads},on:{"update:pageLength":function(t){e.$set(e.filter,"page_length",t)},updateRecords:e.getPayHeads},nativeOn:{change:function(t){return e.getPayHeads(t)}}})],1)])],1),e._v(" "),a("right-panel",{attrs:{topic:e.help_topic}})],1)},staticRenderFns:[]}},ehOy:function(e,t,a){var r=a("VU/8")(a("7v3c"),a("BN2V"),!1,null,null,null);e.exports=r.exports},lqen:function(e,t,a){var r=a("VU/8")(a("DZer"),a("ta96"),!1,function(e){a("NXYG")},null,null);e.exports=r.exports},ppLY:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'.vue-switcher{position:relative;display:inline-block}.vue-switcher__label{display:block;font-size:10px;margin-bottom:5px}.vue-switcher input{opacity:0;width:100%;height:100%;position:absolute;z-index:1;cursor:pointer}.vue-switcher div{height:15px;width:36px;position:relative;border-radius:30px;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;-webkit-transition:.2s linear,background-color .2s linear;transition:.2s linear,background-color .2s linear}.vue-switcher div:after{content:"";height:20px;width:20px;border-radius:100px;display:block;-webkit-transition:.15s linear,background-color .15s linear;transition:.15s linear,background-color .15s linear;position:absolute;left:100%;margin-left:-18px;cursor:pointer;top:-3px;-webkit-box-shadow:0 1px 5px 0 rgba(0,0,0,.1);box-shadow:0 1px 5px 0 rgba(0,0,0,.1)}.vue-switcher--unchecked div{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vue-switcher--unchecked div:after{left:15px}.vue-switcher--disabled div{opacity:.3}.vue-switcher--disabled input{cursor:not-allowed}.vue-switcher--bold div{top:-8px;height:26px;width:51px}.vue-switcher--bold div:after{margin-left:-24px;top:3px}.vue-switcher--bold--unchecked div:after{left:28px}.vue-switcher--bold .vue-switcher__label span{padding-bottom:7px;display:inline-block}.vue-switcher-theme--default.vue-switcher-color--default div{background-color:#b7b7b7}.vue-switcher-theme--default.vue-switcher-color--default div:after{background-color:#9d9d9d}.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#aaa}.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#c4c4c4}.vue-switcher-theme--default.vue-switcher-color--blue div{background-color:#77b0c8}.vue-switcher-theme--default.vue-switcher-color--blue div:after{background-color:#539bb9}.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#c0dae5}.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#77b0c8}.vue-switcher-theme--default.vue-switcher-color--red div{background-color:#c87777}.vue-switcher-theme--default.vue-switcher-color--red div:after{background-color:#b95353}.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#e5c0c0}.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#c87777}.vue-switcher-theme--default.vue-switcher-color--yellow div{background-color:#c9c377}.vue-switcher-theme--default.vue-switcher-color--yellow div:after{background-color:#bab353}.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#e6e3c0}.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#c9c377}.vue-switcher-theme--default.vue-switcher-color--orange div{background-color:#c89577}.vue-switcher-theme--default.vue-switcher-color--orange div:after{background-color:#b97953}.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div{background-color:#e5cec0}.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after{background-color:#c89577}.vue-switcher-theme--default.vue-switcher-color--green div{background-color:#77c88d}.vue-switcher-theme--default.vue-switcher-color--green div:after{background-color:#53b96e}.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#c0e5ca}.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#77c88d}.vue-switcher-theme--bulma.vue-switcher-color--default div{background-color:#dcdcdc}.vue-switcher-theme--bulma.vue-switcher-color--default div:after{background-color:#f5f5f5}.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#e8e8e8}.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f5f5f5}.vue-switcher-theme--bulma.vue-switcher-color--primary div{background-color:#05ffda}.vue-switcher-theme--bulma.vue-switcher-color--primary div:after{background-color:#00d1b2}.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#6bffe9}.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#05ffda}.vue-switcher-theme--bulma.vue-switcher-color--blue div{background-color:#5e91e3}.vue-switcher-theme--bulma.vue-switcher-color--blue div:after{background-color:#3273dc}.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#b5ccf2}.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#5e91e3}.vue-switcher-theme--bulma.vue-switcher-color--red div{background-color:#ff6b89}.vue-switcher-theme--bulma.vue-switcher-color--red div:after{background-color:#ff3860}.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#ffd1da}.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#ff6b89}.vue-switcher-theme--bulma.vue-switcher-color--yellow div{background-color:#ffe78a}.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after{background-color:#ffdd57}.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#fffcf0}.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#ffe78a}.vue-switcher-theme--bulma.vue-switcher-color--green div{background-color:#3dde75}.vue-switcher-theme--bulma.vue-switcher-color--green div:after{background-color:#22c65b}.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#94edb3}.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#3dde75}.vue-switcher-theme--bootstrap.vue-switcher-color--default div{background-color:#e6e6e6}.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after{background-color:#f0f0f0}.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#f5f5f5}.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f0f0f0}.vue-switcher-theme--bootstrap.vue-switcher-color--primary div{background-color:#4f93ce}.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after{background-color:#337ab7}.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#9fc4e4}.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#4f93ce}.vue-switcher-theme--bootstrap.vue-switcher-color--success div{background-color:#80c780}.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after{background-color:#5cb85c}.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div{background-color:#c7e6c7}.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after{background-color:#80c780}.vue-switcher-theme--bootstrap.vue-switcher-color--info div{background-color:#85d0e7}.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after{background-color:#5bc0de}.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div{background-color:#daf1f8}.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after{background-color:#85d0e7}.vue-switcher-theme--bootstrap.vue-switcher-color--warning div{background-color:#f4c37d}.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after{background-color:#f0ad4e}.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div{background-color:#fceedb}.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after{background-color:#f4c37d}.vue-switcher-theme--bootstrap.vue-switcher-color--danger div{background-color:#d9534f}.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after{background-color:#c9302c}.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div{background-color:#eba5a3}.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after{background-color:#d9534f}',""])},ta96:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{class:e.classObject},[e.shouldShowLabel?a("span",{staticClass:"vue-switcher__label"},[e.label?a("span",{domProps:{textContent:e._s(e.label)}}):e._e(),e._v(" "),!e.label&&e.value?a("span",{domProps:{textContent:e._s(e.textEnabled)}}):e._e(),e._v(" "),e.label||e.value?e._e():a("span",{domProps:{textContent:e._s(e.textDisabled)}})]):e._e(),e._v(" "),a("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value},on:{change:e.trigger}}),e._v(" "),a("div")])},staticRenderFns:[]}}});
//# sourceMappingURL=index.js.map