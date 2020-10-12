(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{"/4lQ":function(t,s,e){"use strict";var r={props:{product:{required:!0},update:{required:!1,default:0}},computed:{checkSupportValidity:function(){return helper.today()<=this.product.date_of_support_expiry}},filters:{moment:function(t){return helper.formatDate(t)}}},o=e("KHd+"),a=Object(o.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table-responsive"},[t.product.name?e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",[t._v("Product Name")]),t._v(" "),e("td",[t._v(t._s(t.product.name))])]),t._v(" "),e("tr",[e("th",[t._v("Current Version")]),t._v(" "),e("td",[t._v(t._s(t.product.current_version))])]),t._v(" "),e("tr",[e("th",[t._v("Latest Version")]),t._v(" "),e("td",[t._v("\n                        "+t._s(t.product.latest_version)+"\n                        "),t.product.current_version==t.product.latest_version||t.update?t._e():e("span",[e("br"),e("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/update"}},[t._v("Update Available")])],1),t._v(" "),t.product.current_version==t.product.latest_version?e("span",{staticClass:"btn btn-success btn-sm"},[t._v("Up-to-date")]):t._e()])]),t._v(" "),e("tr",[e("th",[t._v("Latest Version Release")]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(t.product.latest_version_release)))])]),t._v(" "),e("tr",[e("th",[t._v("Purchase Code")]),t._v(" "),e("td",[t._v(t._s(t.product.purchase_code))])]),t._v(" "),e("tr",[e("th",[t._v("Registered Email Id")]),t._v(" "),e("td",[t._v(t._s(t.product.email))])]),t._v(" "),e("tr",[e("th",[t._v("License Type")]),t._v(" "),e("td",[t._v(t._s(t.product.license_type))])]),t._v(" "),e("tr",[e("th",[t._v("Date of Purchase")]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(t.product.date_of_purchase)))])]),t._v(" "),e("tr",[e("th",[t._v("Support Validity "),e("br"),t._v(" "),e("a",{staticClass:"btn btn-info btn-sm",attrs:{href:"http://codecanyon.net/item/x/"+t.product.envato_code+"?=ScriptMint",target:"_blank"}},[t._v("Renew Support")])]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(t.product.date_of_support_expiry))+" "),e("br"),t._v(" "),t.checkSupportValidity?e("span",{staticClass:"label label-success"},[t._v("Supported")]):e("span",{staticClass:"label label-danger"},[t._v("Expired")])])]),t._v(" "),e("tr",[e("th",[t._v("Access Code")]),t._v(" "),e("td",[t._v(t._s(t.product.access_code))])]),t._v(" "),e("tr",[e("th",[t._v("Checksum")]),t._v(" "),e("td",[t._v(t._s(t.product.checksum))])])])]):t._e()])}),[],!1,null,null,null);s.a=a.exports},K5Qt:function(t,s,e){"use strict";e.r(s);var r={components:{product:e("/4lQ").a},data:function(){return{support_tips:"",product:{},supportForm:new Form({help_topic:"",body:"",purchase_code:"",product_name:"",date_of_support_expiry:"",subject:""})}},mounted:function(){helper.hasRole("admin")&&helper.getConfig("pb")||this.$router.push("/"),this.getPreRequisite()},methods:{getPreRequisite:function(){var t=this,s=this.$loading.show();axios.get("/api/support").then((function(e){t.support_tips=e.support_tips,t.product=e.product,t.supportForm.purchase_code=t.product.purchase_code,t.supportForm.product_name=t.product.name,t.supportForm.date_of_support_expiry=t.product.date_of_support_expiry,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},submit:function(){var t=this.$loading.show();this.supportForm.post("/api/support").then((function(s){toastr.success(s.message),t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))}},filters:{moment:function(t){return helper.formatDate(t)}},computed:{checkSupportValidity:function(){return helper.today()<=this.product.date_of_support_expiry}}},o=e("KHd+"),a=Object(o.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("general.support")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(s){return t.$router.push("/dashboard")}}},[e("i",{staticClass:"fas fa-home"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.home")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid p-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.support")))]),t._v(" "),t.product.name&&!t.checkSupportValidity?e("div",{staticClass:"alert alert-danger"},[t._v("Your support is expired. Please renew your support.")]):e("div",[e("div",{domProps:{innerHTML:t._s(t.support_tips)}}),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)},keydown:function(s){return t.supportForm.errors.clear(s.target.name)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.supportForm.subject,expression:"supportForm.subject"}],staticClass:"form-control",attrs:{type:"text",name:"subject",placeholder:"Subject"},domProps:{value:t.supportForm.subject},on:{input:function(s){s.target.composing||t.$set(t.supportForm,"subject",s.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.supportForm,"prop-name":"subject"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("autosize-textarea",{staticClass:"form-control",attrs:{rows:"5",placeholder:"Body",name:"body"},model:{value:t.supportForm.body,callback:function(s){t.$set(t.supportForm,"body",s)},expression:"supportForm.body"}}),t._v(" "),e("show-error",{attrs:{"form-name":t.supportForm,"prop-name":"body"}})],1),t._v(" "),t._m(0)])])])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.product_information")))]),t._v(" "),e("product",{attrs:{product:t.product}})],1)])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-info waves-effect waves-light m-t-10",attrs:{type:"submit"}},[this._v("Submit")])])}],!1,null,null,null);s.default=a.exports}}]);
//# sourceMappingURL=support.js.map?id=057cffb4f7c448bf4df3