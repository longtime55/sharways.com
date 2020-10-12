webpackJsonp([195],{FyQa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=a("NVW2"),s=(o=n)&&o.__esModule?o:{default:o};e.default={components:{bookLanguageForm:s.default},data:function(){return{book_languages:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.library.book_language_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getBookLanguages()},methods:{getConfig:function(t){return helper.getConfig(t)},getBookLanguages:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var o=helper.getFilterURL(this.filter);axios.get("/api/library/book/language?page="+t+o).then(function(t){e.book_languages=t,a.hide()}).catch(function(t){a.hide(),helper.showErrorMsg(t)})},editBookLanguage:function(t){this.$router.push("/configuration/library/book/language/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(a){return e.deleteBookLanguage(t)}},deleteBookLanguage:function(t){var e=this,a=this.$loading.show();axios.delete("/api/library/book/language/"+t.id).then(function(t){toastr.success(t.message),e.getBookLanguages(),a.hide()}).catch(function(t){a.hide(),helper.showErrorMsg(t)})},print:function(){var t=this.$loading.show();axios.post("/api/library/book/language/print",{filter:this.filter}).then(function(e){var a=window.open("/print");t.hide(),a.document.write(e)}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/library/book/language/pdf",{filter:this.filter}).then(function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)}).catch(function(t){e.hide(),helper.showErrorMsg(t)})}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getBookLanguages()},"filter.order":function(t){this.getBookLanguages()},"filter.page_length":function(t){this.getBookLanguages()}},computed:{authToken:function(){return helper.getAuthToken()}}}},NVW2:function(t,e,a){var o=a("VU/8")(a("snD9"),a("bQn8"),!1,null,null,null);t.exports=o.exports},"W15+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("library.book_language"))+" \n                    "),t.book_languages.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.book_languages.total,from:t.book_languages.from,to:t.book_languages.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[t.book_languages.total&&!t.showCreatePanel?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("library.add_new_book_language")))])]):t._e(),t._v(" "),a("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),a("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[a("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),a("help-button",{on:{clicked:function(e){t.help_topic="configuration.library.book-language"}}})],1)])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[t.showCreatePanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("library.add_new_book_language")))]),t._v(" "),a("book-language-form",{on:{completed:t.getBookLanguages,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.book_languages.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.trans("library.book_language_name")))]),t._v(" "),a("th",[t._v(t._s(t.trans("library.book_language_description")))]),t._v(" "),a("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),a("tbody",t._l(t.book_languages.data,function(e){return a("tr",[a("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.description)}}),t._v(" "),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("library.edit_book_language"),expression:"trans('library.edit_book_language')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){a.preventDefault(),t.editBookLanguage(e)}}},[a("i",{staticClass:"fas fa-edit"})]),t._v(" "),a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(book_language)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("library.delete_book_language"),expression:"trans('library.delete_book_language')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})])])])])}))])]):t._e(),t._v(" "),t.book_languages.total?t._e():a("module-info",{attrs:{module:"library",title:"book_language_module_title",description:"book_language_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():a("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.book_languages},on:{"update:pageLength":function(e){t.$set(t.filter,"page_length",e)},updateRecords:t.getBookLanguages},nativeOn:{change:function(e){return t.getBookLanguages(e)}}})],1)])],1),t._v(" "),a("right-panel",{attrs:{topic:t.help_topic}})],1)},staticRenderFns:[]}},Wf7C:function(t,e,a){var o=a("VU/8")(a("FyQa"),a("W15+"),!1,null,null,null);t.exports=o.exports},bQn8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){t.bookLanguageForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("library.book_language_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookLanguageForm.name,expression:"bookLanguageForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("library.book_language_name")},domProps:{value:t.bookLanguageForm.name},on:{input:function(e){e.target.composing||t.$set(t.bookLanguageForm,"name",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.bookLanguageForm,"prop-name":"name"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("library.book_language_description")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookLanguageForm.description,expression:"bookLanguageForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("library.book_language_description")},domProps:{value:t.bookLanguageForm.description},on:{input:function(e){e.target.composing||t.$set(t.bookLanguageForm,"description",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.bookLanguageForm,"prop-name":"description"}})],1)])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/library/book/language"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)])},staticRenderFns:[]}},snD9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{bookLanguageForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.bookLanguageForm.post("/api/library/book/language").then(function(a){toastr.success(a.message),t.$emit("completed"),e.hide()}).catch(function(t){e.hide(),helper.showErrorMsg(t)})},get:function(){var t=this,e=this.$loading.show();axios.get("/api/library/book/language/"+this.id).then(function(a){t.bookLanguageForm.name=a.name,t.bookLanguageForm.description=a.description,e.hide()}).catch(function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/configuration/library/book/language")})},update:function(){var t=this,e=this.$loading.show();this.bookLanguageForm.patch("/api/library/book/language/"+this.id).then(function(a){toastr.success(a.message),e.hide(),t.$router.push("/configuration/library/book/language")}).catch(function(t){e.hide(),helper.showErrorMsg(t)})}}}}});
//# sourceMappingURL=index.js.map