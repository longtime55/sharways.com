(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{"3h6m":function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},EI1p:function(t,e,r){"use strict";r.r(e);var i={components:{articleForm:r("O/e0").a},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-article")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},a=r("KHd+"),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("post.edit_article")))])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/post/article")}}},[r("i",{staticClass:"fas fa-list"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("post.article")))])])])])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body p-t-20"},[r("article-form",{attrs:{uuid:t.uuid}})],1)])])])}),[],!1,null,null,null);e.default=s.exports},"O/e0":function(t,e,r){"use strict";var i={components:{articleTypeForm:r("t1P2").a},data:function(){return{articleForm:new Form({article_type_id:"",title:"",is_public:0,date_of_article:"",description:"",upload_token:""}),article_types:[],selected_article_type:null,module_id:"",clearAttachment:!0,showArticleTypeModal:!1}},props:["uuid"],mounted:function(){helper.hasPermission("create-article")||helper.hasPermission("edit-article")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():this.articleForm.upload_token=this.$uuid.v4(),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getPreRequisite:function(){var t=this,e=this.$loading.show();this.showArticleTypeModal=!1,axios.get("/api/article/pre-requisite").then((function(r){t.article_types=r.article_types,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.articleForm.post("/api/article").then((function(r){toastr.success(r.message),t.clearAttachment=!t.clearAttachment,t.articleForm.upload_token=t.$uuid.v4(),t.selected_article_type=null,t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/article/"+this.uuid).then((function(r){t.articleForm.title=r.article.title,t.articleForm.date_of_article=r.article.date_of_article,t.articleForm.description=r.article.description,t.articleForm.article_type_id=r.article.article_type_id,t.selected_article_type=r.article.article_type_id?{id:r.article.article_type_id,name:r.article.article_type.name}:null,t.articleForm.is_public=r.article.is_public,t.articleForm.upload_token=r.article.upload_token,t.module_id=r.article.id,r.is_editable||(toastr.error(i18n.user.permission_denied),e.hide(),t.$router.push("/post/article")),e.hide()})).catch((function(r){e.hide(),helper.showErrorMsg(r),t.$router.push("/post/article")}))},update:function(){var t=this,e=this.$loading.show();this.articleForm.patch("/api/article/"+this.uuid).then((function(r){toastr.success(r.message),e.hide(),t.$router.push("/post/article")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onArticleTypeSelect:function(t){this.articleForm.article_type_id=t.id}}},a=(r("o/Aw"),r("KHd+")),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.articleForm.errors.clear(e.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type"))+" ")]),t._v(" "),t.hasPermission("access-configuration")?r("button",{staticClass:"btn btn-xs btn-info pull-right",attrs:{type:"button"},on:{click:function(e){t.showArticleTypeModal=!0}}},[t._v(t._s(t.trans("general.add_new")))]):t._e(),t._v(" "),r("v-select",{attrs:{label:"name",name:"article_type_id",id:"article_type_id",options:t.article_types,placeholder:t.trans("post.select_article_type")},on:{select:t.onArticleTypeSelect,close:function(e){return t.articleForm.errors.clear("article_type_id")},remove:function(e){t.articleForm.article_type_id=""}},model:{value:t.selected_article_type,callback:function(e){t.selected_article_type=e},expression:"selected_article_type"}},[t.article_types.length?t._e():r("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),r("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"article_type_id"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_title")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleForm.title,expression:"articleForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("post.article_title")},domProps:{value:t.articleForm.title},on:{input:function(e){e.target.composing||t.$set(t.articleForm,"title",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"title"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.date_of_article")))]),t._v(" "),r("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("post.date_of_article")},on:{selected:function(e){return t.articleForm.errors.clear("date_of_article")}},model:{value:t.articleForm.date_of_article,callback:function(e){t.$set(t.articleForm,"date_of_article",e)},expression:"articleForm.date_of_article"}}),t._v(" "),r("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"date_of_article"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleForm.is_public,expression:"articleForm.is_public"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.articleForm.is_public)?t._i(t.articleForm.is_public,"1")>-1:t.articleForm.is_public},on:{change:function(e){var r=t.articleForm.is_public,i=e.target,a=!!i.checked;if(Array.isArray(r)){var s=t._i(r,"1");i.checked?s<0&&t.$set(t.articleForm,"is_public",r.concat(["1"])):s>-1&&t.$set(t.articleForm,"is_public",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.articleForm,"is_public",a)}}}),t._v(" "),r("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("post.article_is_public")))])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("file-upload-input",{attrs:{"button-text":t.trans("general.upload_document"),token:t.articleForm.upload_token,module:"article","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("html-editor",{attrs:{name:"description",model:t.articleForm.description,height:"300",isUpdate:!!t.uuid},on:{"update:model":function(e){return t.$set(t.articleForm,"description",e)},clearErrors:function(e){return t.articleForm.errors.clear("description")}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"description"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/post/article"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?r("span",[t._v(t._s(t.trans("general.update")))]):r("span",[t._v(t._s(t.trans("general.save")))])])],1)]),t._v(" "),t.showArticleTypeModal?r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container modal-lg"},[r("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n                            "+t._s(t.trans("post.add_new_article_type"))+"\n                            "),r("span",{staticClass:"float-right pointer",on:{click:function(e){t.showArticleTypeModal=!1}}},[t._v("x")])])],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body",[r("article-type-form",{on:{completed:t.getPreRequisite,cancel:function(e){t.showArticleTypeModal=!1}}}),t._v(" "),r("div",{staticClass:"clearfix"})])],2)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},m8MU:function(t,e,r){var i=r("3h6m");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(i,a);i.locals&&(t.exports=i.locals)},"o/Aw":function(t,e,r){"use strict";var i=r("m8MU");r.n(i).a},t1P2:function(t,e,r){"use strict";var i={data:function(){return{articleTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.articleTypeForm.post("/api/post/article/type").then((function(r){toastr.success(r.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/post/article/type/"+this.id).then((function(r){t.articleTypeForm.name=r.name,t.articleTypeForm.description=r.description,e.hide()})).catch((function(r){e.hide(),helper.showErrorMsg(r),t.$router.push("/configuration/post/article/type")}))},update:function(){var t=this,e=this.$loading.show();this.articleTypeForm.patch("/api/post/article/type/"+this.id).then((function(r){toastr.success(r.message),e.hide(),t.$router.push("/configuration/post/article/type")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},a=r("KHd+"),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.articleTypeForm.errors.clear(e.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type_name")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleTypeForm.name,expression:"articleTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("post.article_type_name")},domProps:{value:t.articleTypeForm.name},on:{input:function(e){e.target.composing||t.$set(t.articleTypeForm,"name",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.articleTypeForm,"prop-name":"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type_description")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleTypeForm.description,expression:"articleTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("post.article_type_description")},domProps:{value:t.articleTypeForm.description},on:{input:function(e){e.target.composing||t.$set(t.articleTypeForm,"description",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.articleTypeForm,"prop-name":"description"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/post/article/type"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?r("span",[t._v(t._s(t.trans("general.update")))]):r("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=s.exports}}]);
//# sourceMappingURL=edit.js.map?id=cba4f3ddf772196c06d2