(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{cquL:function(t,e,r){"use strict";var s={data:function(){return{circleForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.circleForm.post("/api/transport/circle").then((function(r){toastr.success(r.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/transport/circle/"+this.id).then((function(r){t.circleForm.name=r.name,t.circleForm.description=r.description,e.hide()})).catch((function(r){e.hide(),helper.showErrorMsg(r),t.$router.push("/transport/circle")}))},update:function(){var t=this,e=this.$loading.show();this.circleForm.patch("/api/transport/circle/"+this.id).then((function(r){toastr.success(r.message),e.hide(),t.$router.push("/transport/circle")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},a=r("KHd+"),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.circleForm.errors.clear(e.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.circle_name")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.circleForm.name,expression:"circleForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.circle_name")},domProps:{value:t.circleForm.name},on:{input:function(e){e.target.composing||t.$set(t.circleForm,"name",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.circleForm,"prop-name":"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.circle_description")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.circleForm.description,expression:"circleForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("transport.circle_description")},domProps:{value:t.circleForm.description},on:{input:function(e){e.target.composing||t.$set(t.circleForm,"description",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.circleForm,"prop-name":"description"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/circle"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?r("span",[t._v(t._s(t.trans("general.update")))]):r("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=n.exports},zSLc:function(t,e,r){"use strict";r.r(e);var s={components:{circleForm:r("cquL").a},data:function(){return{circles:{total:0,data:[]},filter:{sort_by:"name",order:"asc",name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.transport.circle_name},{value:"created_at",translation:i18n.general.created_at}],showCreatePanel:!1,showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("list-transport-circle")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getCircles(),helper.showDemoNotification(["transport"])},methods:{getConfig:function(t){return helper.getConfig(t)},hasPermission:function(t){return helper.hasPermission(t)},getCircles:function(t){var e=this,r=this.$loading.show();"number"!=typeof t&&(t=1);var s=helper.getFilterURL(this.filter);axios.get("/api/transport/circle?page="+t+s).then((function(t){e.circles=t,r.hide()})).catch((function(t){r.hide(),helper.showErrorMsg(t)}))},editCircle:function(t){this.$router.push("/transport/circle/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(r){return e.deleteCircle(t)}},deleteCircle:function(t){var e=this,r=this.$loading.show();axios.delete("/api/transport/circle/"+t.id).then((function(t){toastr.success(t.message),e.getCircles(),r.hide()})).catch((function(t){r.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/transport/circle/print",{filter:this.filter}).then((function(e){var r=window.open("/print");t.hide(),r.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/transport/circle/pdf",{filter:this.filter}).then((function(r){e.hide(),window.open("/download/report/"+r+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getCircles()},"filter.order":function(t){this.getCircles()},"filter.page_length":function(t){this.getCircles()}},computed:{authToken:function(){return helper.getAuthToken()}}},a=r("KHd+"),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("transport.circle"))+"\n                    "),t.circles.total?r("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.circles.total,from:t.circles.from,to:t.circles.to})))]):r("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[t.circles.total&&!t.showCreatePanel&&t.hasPermission("create-transport-circle")?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[r("i",{staticClass:"fas fa-plus"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("transport.add_new_circle")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[r("i",{staticClass:"fas fa-filter"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),r("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),r("div",{staticClass:"btn-group"},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),r("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[r("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[r("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))]),t._v(" "),t.hasPermission("list-transport-fee")?r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(e){return t.$router.push("/transport/fee")}}},[r("i",{staticClass:"fas fa-truck"}),t._v(" "+t._s(t.trans("transport.fee")))]):t._e()])]),t._v(" "),r("help-button",{on:{clicked:function(e){t.help_topic="transport.circle"}}})],1)])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("transition",{attrs:{name:"fade"}},[t.showFilterPanel?r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.circle_name")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.name,expression:"filter.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.circle_name")},domProps:{value:t.filter.name},on:{input:function(e){e.target.composing||t.$set(t.filter,"name",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getCircles}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.showCreatePanel&&t.hasPermission("create-transport-circle")?r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("transport.add_new_circle")))]),t._v(" "),r("circle-form",{on:{completed:t.getCircles,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t.circles.total?r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-sm"},[r("thead",[r("tr",[r("th",[t._v(t._s(t.trans("transport.circle_name")))]),t._v(" "),r("th",[t._v(t._s(t.trans("transport.circle_description")))]),t._v(" "),r("th",[t._v(t._s(t.trans("general.created_at")))]),t._v(" "),r("th",[t._v(t._s(t.trans("general.updated_at")))]),t._v(" "),r("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),r("tbody",t._l(t.circles.data,(function(e){return r("tr",[r("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),r("td",{domProps:{textContent:t._s(e.description)}}),t._v(" "),r("td",[t._v(t._s(t._f("momentDateTime")(e.created_at)))]),t._v(" "),r("td",[t._v(t._s(t._f("momentDateTime")(e.updated_at)))]),t._v(" "),r("td",{staticClass:"table-option"},[r("div",{staticClass:"btn-group"},[t.hasPermission("edit-transport-circle")?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("transport.edit_circle"),expression:"trans('transport.edit_circle')"}],staticClass:"btn btn-info btn-sm",on:{click:function(r){return r.preventDefault(),t.editCircle(e)}}},[r("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-transport-circle")?r("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(circle)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("transport.delete_circle"),expression:"trans('transport.delete_circle')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[r("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.circles.total?t._e():r("module-info",{attrs:{module:"transport",title:"circle_module_title",description:"circle_module_description",icon:"list"}},[r("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():r("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[r("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),r("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.circles},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getCircles},nativeOn:{change:function(e){return t.getCircles(e)}}})],1)])],1),t._v(" "),r("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=a935bd44833c5ccd7d9c