webpackJsonp([205],{"/Glb":function(e,t,n){var o=n("VU/8")(n("UQYo"),n("GUJZ"),!1,null,null,null);e.exports=o.exports},GUJZ:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.document_type"))+" \n                    "),e.document_types.total?n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.document_types.total,from:e.document_types.from,to:e.document_types.to})))]):n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[e.document_types.total&&!e.showCreatePanel?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.add_new_document_type")))])]):e._e(),e._v(" "),n("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),n("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[n("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[n("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),n("help-button",{on:{clicked:function(t){e.help_topic="configuration.employee.document-type"}}})],1)])])]),e._v(" "),n("div",{staticClass:"container-fluid"},[n("transition",{attrs:{name:"fade"}},[e.showCreatePanel?n("div",{staticClass:"card card-form"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.add_new_document_type")))]),e._v(" "),n("document-type-form",{on:{completed:e.getDocumentTypes,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[e.document_types.total?n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[n("th",[e._v(e._s(e.trans("employee.document_type_name")))]),e._v(" "),n("th",[e._v(e._s(e.trans("employee.document_type_description")))]),e._v(" "),n("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),n("tbody",e._l(e.document_types.data,function(t){return n("tr",[n("td",{domProps:{textContent:e._s(t.name)}}),e._v(" "),n("td",{domProps:{textContent:e._s(t.description)}}),e._v(" "),n("td",{staticClass:"table-option"},[n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.edit_document_type"),expression:"trans('employee.edit_document_type')"}],staticClass:"btn btn-info btn-sm",on:{click:function(n){n.preventDefault(),e.editDocumentType(t)}}},[n("i",{staticClass:"fas fa-edit"})]),e._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(document_type)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.delete_document_type"),expression:"trans('employee.delete_document_type')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[n("i",{staticClass:"fas fa-trash"})])])])])}))])]):e._e(),e._v(" "),e.document_types.total?e._e():n("module-info",{attrs:{module:"employee",title:"document_type_module_title",description:"document_type_module_description",icon:"list"}},[n("div",{attrs:{slot:"btn"},slot:"btn"},[e.showCreatePanel?e._e():n("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),n("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.document_types},on:{"update:pageLength":function(t){e.$set(e.filter,"page_length",t)},updateRecords:e.getDocumentTypes},nativeOn:{change:function(t){return e.getDocumentTypes(t)}}})],1)])],1),e._v(" "),n("right-panel",{attrs:{topic:e.help_topic}})],1)},staticRenderFns:[]}},U1BI:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){e.documentTypeForm.errors.clear(t.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.document_type_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.documentTypeForm.name,expression:"documentTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.document_type_name")},domProps:{value:e.documentTypeForm.name},on:{input:function(t){t.target.composing||e.$set(e.documentTypeForm,"name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.documentTypeForm,"prop-name":"name"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.document_type_description")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.documentTypeForm.description,expression:"documentTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.document_type_description")},domProps:{value:e.documentTypeForm.description},on:{input:function(t){t.target.composing||e.$set(e.documentTypeForm,"description",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.documentTypeForm,"prop-name":"description"}})],1)])]),e._v(" "),n("div",{staticClass:"card-footer text-right"},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/employee/document/type"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():n("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?n("span",[e._v(e._s(e.trans("general.update")))]):n("span",[e._v(e._s(e.trans("general.save")))])])],1)])},staticRenderFns:[]}},UQYo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=n("aZMM"),a=(o=s)&&o.__esModule?o:{default:o};t.default={components:{documentTypeForm:a.default},data:function(){return{document_types:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.employee.document_type_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getDocumentTypes()},methods:{getConfig:function(e){return helper.getConfig(e)},getDocumentTypes:function(e){var t=this,n=this.$loading.show();"number"!=typeof e&&(e=1);var o=helper.getFilterURL(this.filter);axios.get("/api/employee/document/type?page="+e+o).then(function(e){t.document_types=e,n.hide()}).catch(function(e){n.hide(),helper.showErrorMsg(e)})},editDocumentType:function(e){this.$router.push("/configuration/employee/document/type/"+e.id+"/edit")},confirmDelete:function(e){var t=this;return function(n){return t.deleteDocumentType(e)}},deleteDocumentType:function(e){var t=this,n=this.$loading.show();axios.delete("/api/employee/document/type/"+e.id).then(function(e){toastr.success(e.message),t.getDocumentTypes(),n.hide()}).catch(function(e){n.hide(),helper.showErrorMsg(e)})},print:function(){var e=this.$loading.show();axios.post("/api/employee/document/type/print",{filter:this.filter}).then(function(t){var n=window.open("/print");e.hide(),n.document.write(t)}).catch(function(t){e.hide(),helper.showErrorMsg(t)})},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/document/type/pdf",{filter:this.filter}).then(function(n){t.hide(),window.open("/download/report/"+n+"?token="+e.authToken)}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getDocumentTypes()},"filter.order":function(e){this.getDocumentTypes()},"filter.page_length":function(e){this.getDocumentTypes()}},computed:{authToken:function(){return helper.getAuthToken()}}}},aHI4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{documentTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.documentTypeForm.post("/api/employee/document/type").then(function(n){toastr.success(n.message),e.$emit("completed"),t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/document/type/"+this.id).then(function(n){e.documentTypeForm.name=n.name,e.documentTypeForm.description=n.description,t.hide()}).catch(function(n){t.hide(),helper.showErrorMsg(n),e.$router.push("/configuration/employee/document/type")})},update:function(){var e=this,t=this.$loading.show();this.documentTypeForm.patch("/api/employee/document/type/"+this.id).then(function(n){toastr.success(n.message),t.hide(),e.$router.push("/configuration/employee/document/type")}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}}}},aZMM:function(e,t,n){var o=n("VU/8")(n("aHI4"),n("U1BI"),!1,null,null,null);e.exports=o.exports}});
//# sourceMappingURL=index.js.map