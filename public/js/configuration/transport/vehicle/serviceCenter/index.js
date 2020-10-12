(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{NXoP:function(e,t,r){"use strict";var s={data:function(){return{serviceCenterForm:new Form({name:"",phone:"",email:"",contact_person:"",contact_person_phone:"",contact_person_email:"",address_line_1:"",address_line_2:"",city:"",state:"",zipcode:"",country:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.serviceCenterForm.post("/api/transport/vehicle/service/center").then((function(r){toastr.success(r.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/transport/vehicle/service/center/"+this.id).then((function(r){e.serviceCenterForm.name=r.name,e.serviceCenterForm.phone=r.phone,e.serviceCenterForm.email=r.email,e.serviceCenterForm.contact_person=r.contact_person,e.serviceCenterForm.contact_person_phone=r.contact_person_phone,e.serviceCenterForm.contact_person_email=r.contact_person_email,e.serviceCenterForm.address_line_1=r.address_line_1,e.serviceCenterForm.address_line_2=r.address_line_2,e.serviceCenterForm.city=r.city,e.serviceCenterForm.state=r.state,e.serviceCenterForm.zipcode=r.zipcode,e.serviceCenterForm.country=r.country,t.hide()})).catch((function(r){t.hide(),helper.showErrorMsg(r),e.$router.push("/configuration/transport/vehicle/service/center")}))},update:function(){var e=this,t=this.$loading.show();this.serviceCenterForm.patch("/api/transport/vehicle/service/center/"+this.id).then((function(r){toastr.success(r.message),t.hide(),e.$router.push("/configuration/transport/vehicle/service/center")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}},n=r("KHd+"),o=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.serviceCenterForm.errors.clear(t.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_name")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.name,expression:"serviceCenterForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("transport.vehicle_service_center_name")},domProps:{value:e.serviceCenterForm.name},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"name",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"name"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_phone")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.phone,expression:"serviceCenterForm.phone"}],staticClass:"form-control",attrs:{type:"text",name:"phone",placeholder:e.trans("transport.vehicle_service_center_phone")},domProps:{value:e.serviceCenterForm.phone},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"phone",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"phone"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_email")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.email,expression:"serviceCenterForm.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:e.trans("transport.vehicle_service_center_email")},domProps:{value:e.serviceCenterForm.email},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"email",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"email"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_contact_person")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.contact_person,expression:"serviceCenterForm.contact_person"}],staticClass:"form-control",attrs:{type:"text",name:"contact_person",placeholder:e.trans("transport.vehicle_service_center_contact_person")},domProps:{value:e.serviceCenterForm.contact_person},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"contact_person",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"contact_person"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_contact_person_phone")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.contact_person_phone,expression:"serviceCenterForm.contact_person_phone"}],staticClass:"form-control",attrs:{type:"text",name:"contact_person_phone",placeholder:e.trans("transport.vehicle_service_center_contact_person_phone")},domProps:{value:e.serviceCenterForm.contact_person_phone},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"contact_person_phone",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"contact_person_phone"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_contact_person_email")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.contact_person_email,expression:"serviceCenterForm.contact_person_email"}],staticClass:"form-control",attrs:{type:"text",name:"contact_person_email",placeholder:e.trans("transport.vehicle_service_center_contact_person_email")},domProps:{value:e.serviceCenterForm.contact_person_email},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"contact_person_email",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"contact_person_email"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_address_line_1")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.address_line_1,expression:"serviceCenterForm.address_line_1"}],staticClass:"form-control",attrs:{type:"text",name:"address_line_1",placeholder:e.trans("transport.vehicle_service_center_address_line_1")},domProps:{value:e.serviceCenterForm.address_line_1},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"address_line_1",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"address_line_1"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_address_line_2")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.address_line_2,expression:"serviceCenterForm.address_line_2"}],staticClass:"form-control",attrs:{type:"text",name:"address_line_2",placeholder:e.trans("transport.vehicle_service_center_address_line_2")},domProps:{value:e.serviceCenterForm.address_line_2},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"address_line_2",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"address_line_2"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_city")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.city,expression:"serviceCenterForm.city"}],staticClass:"form-control",attrs:{type:"text",name:"city",placeholder:e.trans("transport.vehicle_service_center_city")},domProps:{value:e.serviceCenterForm.city},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"city",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"city"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_state")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.state,expression:"serviceCenterForm.state"}],staticClass:"form-control",attrs:{type:"text",name:"state",placeholder:e.trans("transport.vehicle_service_center_state")},domProps:{value:e.serviceCenterForm.state},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"state",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"state"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_zipcode")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.zipcode,expression:"serviceCenterForm.zipcode"}],staticClass:"form-control",attrs:{type:"text",name:"zipcode",placeholder:e.trans("transport.vehicle_service_center_zipcode")},domProps:{value:e.serviceCenterForm.zipcode},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"zipcode",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"zipcode"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center_country")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceCenterForm.country,expression:"serviceCenterForm.country"}],staticClass:"form-control",attrs:{type:"text",name:"country",placeholder:e.trans("transport.vehicle_service_center_country")},domProps:{value:e.serviceCenterForm.country},on:{input:function(t){t.target.composing||e.$set(e.serviceCenterForm,"country",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.serviceCenterForm,"prop-name":"country"}})],1)])]),e._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/transport/vehicle/service/center"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?r("span",[e._v(e._s(e.trans("general.update")))]):r("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=o.exports},Nr7c:function(e,t,r){"use strict";r.r(t);var s={components:{serviceCenterForm:r("NXoP").a},data:function(){return{service_centers:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.transport.vehicle_service_center_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getServiceCenters()},methods:{getConfig:function(e){return helper.getConfig(e)},getServiceCenters:function(e){var t=this,r=this.$loading.show();"number"!=typeof e&&(e=1);var s=helper.getFilterURL(this.filter);axios.get("/api/transport/vehicle/service/center?page="+e+s).then((function(e){t.service_centers=e,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},editServiceCenter:function(e){this.$router.push("/configuration/transport/vehicle/service/center/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(r){return t.deleteServiceCenter(e)}},deleteServiceCenter:function(e){var t=this,r=this.$loading.show();axios.delete("/api/transport/vehicle/service/center/"+e.id).then((function(e){toastr.success(e.message),t.getServiceCenters(),r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},print:function(){var e=this.$loading.show();axios.post("/api/transport/vehicle/service/center/print",{filter:this.filter}).then((function(t){var r=window.open("/print");e.hide(),r.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/transport/vehicle/service/center/pdf",{filter:this.filter}).then((function(r){t.hide(),window.open("/download/report/"+r+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getServiceCenters()},"filter.order":function(e){this.getServiceCenters()},"filter.page_length":function(e){this.getServiceCenters()}},computed:{authToken:function(){return helper.getAuthToken()}}},n=r("KHd+"),o=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.vehicle_service_center"))+" \n                    "),e.service_centers.total?r("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.service_centers.total,from:e.service_centers.from,to:e.service_centers.to})))]):r("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[e.service_centers.total&&!e.showCreatePanel?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[r("i",{staticClass:"fas fa-plus"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("transport.add_new_vehicle_service_center")))])]):e._e(),e._v(" "),r("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),r("div",{staticClass:"btn-group"},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),r("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[r("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[r("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),r("help-button",{on:{clicked:function(t){e.help_topic="configuration.transport.vehicle.service-center"}}})],1)])])]),e._v(" "),r("div",{staticClass:"container-fluid"},[r("transition",{attrs:{name:"fade"}},[e.showCreatePanel?r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("transport.add_new_vehicle_service_center")))]),e._v(" "),r("service-center-form",{on:{completed:e.getServiceCenters,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[e.service_centers.total?r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-sm"},[r("thead",[r("tr",[r("th",[e._v(e._s(e.trans("transport.vehicle_service_center_name")))]),e._v(" "),r("th",[e._v(e._s(e.trans("transport.vehicle_service_center_phone")))]),e._v(" "),r("th",[e._v(e._s(e.trans("transport.vehicle_service_center_contact_person")))]),e._v(" "),r("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),r("tbody",e._l(e.service_centers.data,(function(t){return r("tr",[r("td",{domProps:{textContent:e._s(t.name)}}),e._v(" "),r("td",{domProps:{textContent:e._s(t.phone)}}),e._v(" "),r("td",{domProps:{textContent:e._s(t.contact_person)}}),e._v(" "),r("td",{staticClass:"table-option"},[r("div",{staticClass:"btn-group"},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.edit_vehicle_service_center"),expression:"trans('transport.edit_vehicle_service_center')"}],staticClass:"btn btn-info btn-sm",on:{click:function(r){return r.preventDefault(),e.editServiceCenter(t)}}},[r("i",{staticClass:"fas fa-edit"})]),e._v(" "),r("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(service_center)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("transport.delete_vehicle_service_center"),expression:"trans('transport.delete_vehicle_service_center')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[r("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):e._e(),e._v(" "),e.service_centers.total?e._e():r("module-info",{attrs:{module:"transport",title:"vehicle_service_center_module_title",description:"vehicle_service_center_module_description",icon:"list"}},[r("div",{attrs:{slot:"btn"},slot:"btn"},[e.showCreatePanel?e._e():r("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[r("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),r("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.service_centers},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getServiceCenters},nativeOn:{change:function(t){return e.getServiceCenters(t)}}})],1)])],1),e._v(" "),r("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=index.js.map?id=2428c47afb642969c63b