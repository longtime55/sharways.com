webpackJsonp([196],{NVW2:function(t,a,e){var o=e("VU/8")(e("snD9"),e("bQn8"),!1,null,null,null);t.exports=o.exports},VBLD:function(t,a,e){var o=e("VU/8")(e("rQdv"),e("g8op"),!1,null,null,null);t.exports=o.exports},bQn8:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.proceed(a)},keydown:function(a){t.bookLanguageForm.errors.clear(a.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("library.book_language_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bookLanguageForm.name,expression:"bookLanguageForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("library.book_language_name")},domProps:{value:t.bookLanguageForm.name},on:{input:function(a){a.target.composing||t.$set(t.bookLanguageForm,"name",a.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.bookLanguageForm,"prop-name":"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("library.book_language_description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bookLanguageForm.description,expression:"bookLanguageForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("library.book_language_description")},domProps:{value:t.bookLanguageForm.description},on:{input:function(a){a.target.composing||t.$set(t.bookLanguageForm,"description",a.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.bookLanguageForm,"prop-name":"description"}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer text-right"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/library/book/language"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():e("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(a){t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?e("span",[t._v(t._s(t.trans("general.update")))]):e("span",[t._v(t._s(t.trans("general.save")))])])],1)])},staticRenderFns:[]}},g8op:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("library.edit_book_language")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(a){t.$router.push("/configuration/library/book/language")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("library.book_language")))])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body p-t-20"},[e("book-language-form",{attrs:{id:t.id}})],1)])])])},staticRenderFns:[]}},rQdv:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o,s=e("NVW2"),n=(o=s)&&o.__esModule?o:{default:o};a.default={components:{bookLanguageForm:n.default},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}}},snD9:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{bookLanguageForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,a=this.$loading.show();this.bookLanguageForm.post("/api/library/book/language").then(function(e){toastr.success(e.message),t.$emit("completed"),a.hide()}).catch(function(t){a.hide(),helper.showErrorMsg(t)})},get:function(){var t=this,a=this.$loading.show();axios.get("/api/library/book/language/"+this.id).then(function(e){t.bookLanguageForm.name=e.name,t.bookLanguageForm.description=e.description,a.hide()}).catch(function(e){a.hide(),helper.showErrorMsg(e),t.$router.push("/configuration/library/book/language")})},update:function(){var t=this,a=this.$loading.show();this.bookLanguageForm.patch("/api/library/book/language/"+this.id).then(function(e){toastr.success(e.message),a.hide(),t.$router.push("/configuration/library/book/language")}).catch(function(t){a.hide(),helper.showErrorMsg(t)})}}}}});
//# sourceMappingURL=edit.js.map