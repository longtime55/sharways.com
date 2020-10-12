(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{"4RgY":function(t,e,i){"use strict";var s={components:{},props:["id"],data:function(){return{instituteDocumentForm:new Form({title:"",tags:[],date_of_expiry:"",description:"",upload_token:""}),tag_options:[],clearAttachment:!1,module_id:""}},mounted:function(){this.instituteDocumentForm.upload_token=this.$uuid.v4(),this.getPreRequisite(),this.id&&this.getDocument()},methods:{proceed:function(){this.id?this.updateDocument():this.storeDocument()},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/institute/document/pre-requisite").then((function(i){t.tag_options=i.tags,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},storeDocument:function(){var t=this,e=this.$loading.show();this.instituteDocumentForm.date_of_expiry=helper.toDate(this.instituteDocumentForm.date_of_expiry),this.instituteDocumentForm.post("/api/institute/document").then((function(i){toastr.success(i.message),t.clearAttachment=!t.clearAttachment,t.$emit("completed"),t.instituteDocumentForm.upload_token=t.$uuid.v4(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getDocument:function(){var t=this,e=this.$loading.show();axios.get("/api/institute/document/"+this.id).then((function(i){t.instituteDocumentForm.title=i.institute_document.title,t.instituteDocumentForm.date_of_expiry=i.institute_document.date_of_expiry,i.institute_document.tags.forEach((function(e){t.instituteDocumentForm.tags.push({name:e.name,slug:e.slug})})),t.instituteDocumentForm.description=i.institute_document.description,t.instituteDocumentForm.upload_token=i.institute_document.upload_token,t.module_id=i.institute_document.id,e.hide()})).catch((function(i){e.hide(),t.$router.push("/institute/document")}))},updateDocument:function(){var t=this,e=this.$loading.show();this.instituteDocumentForm.date_of_expiry=helper.toDate(this.instituteDocumentForm.date_of_expiry),this.instituteDocumentForm.patch("/api/institute/document/"+this.id).then((function(i){toastr.success(i.message),t.$emit("completed"),e.hide(),t.$router.push("/institute/document")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},addTag:function(t){var e={name:t,slug:t.substring(0,2)+Math.floor(1e7*Math.random())};this.tag_options.push(e),this.instituteDocumentForm.tags.push(e)}},watch:{}},n=i("KHd+"),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.instituteDocumentForm.errors.clear(e.target.name)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("institute.document_title")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.instituteDocumentForm.title,expression:"instituteDocumentForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("institute.document_title")},domProps:{value:t.instituteDocumentForm.title},on:{input:function(e){e.target.composing||t.$set(t.instituteDocumentForm,"title",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.instituteDocumentForm,"prop-name":"title"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("general.tags")))]),t._v(" "),i("v-select",{attrs:{"tag-placeholder":t.trans("general.add_this_as_new_tag"),placeholder:t.trans("general.search_or_add_a_tag"),label:"name","track-by":"slug",options:t.tag_options,name:"tag",multiple:!0,taggable:!0},on:{tag:t.addTag},model:{value:t.instituteDocumentForm.tags,callback:function(e){t.$set(t.instituteDocumentForm,"tags",e)},expression:"instituteDocumentForm.tags"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.instituteDocumentForm,"prop-name":"tag"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("institute.document_date_of_expiry")))]),t._v(" "),i("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("institute.document_date_of_expiry")},on:{selected:function(e){return t.instituteDocumentForm.errors.clear("date_of_expiry")}},model:{value:t.instituteDocumentForm.date_of_expiry,callback:function(e){t.$set(t.instituteDocumentForm,"date_of_expiry",e)},expression:"instituteDocumentForm.date_of_expiry"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.instituteDocumentForm,"prop-name":"date_of_expiry"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("institute.document_description")))]),t._v(" "),i("autosize-textarea",{attrs:{rows:"2",name:"description",placeholder:t.trans("institute.document_description")},model:{value:t.instituteDocumentForm.description,callback:function(e){t.$set(t.instituteDocumentForm,"description",e)},expression:"instituteDocumentForm.description"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.instituteDocumentForm,"prop-name":"description"}})],1)])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("label",[t._v(" ")]),t._v(" "),i("div",{staticClass:"form-group"},[i("file-upload-input",{attrs:{"button-text":t.trans("general.upload_document"),token:t.instituteDocumentForm.upload_token,module:"institute_document","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)])]),t._v(" "),i("div",{staticClass:"card-footer text-right"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/institute/document"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():i("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?i("span",[t._v(t._s(t.trans("general.update")))]):i("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null);e.a=o.exports},"B/kf":function(t,e,i){"use strict";i.r(e);var s={components:{instituteDocumentForm:i("4RgY").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-institute-document")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},n=i("KHd+"),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("institute.edit_document")))])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[i("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/institute/document")}}},[i("i",{staticClass:"fas fa-list"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("institute.document")))])])])])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body p-t-20"},[i("institute-document-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=9d0022c2b1b35b6ca415