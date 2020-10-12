webpackJsonp([192],{"9ZsX":function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("library.edit_book_topic")))])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[i("button",{staticClass:"btn btn-info btn-sm",on:{click:function(o){t.$router.push("/configuration/library/book/topic")}}},[i("i",{staticClass:"fas fa-list"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("library.book_topic")))])])])])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body p-t-20"},[i("book-topic-form",{attrs:{id:t.id}})],1)])])])},staticRenderFns:[]}},JYg3:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s,e=i("yppH"),r=(s=e)&&s.__esModule?s:{default:s};o.default={components:{bookTopicForm:r.default},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}}},"kJ/r":function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{bookTopicForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,o=this.$loading.show();this.bookTopicForm.post("/api/library/book/topic").then(function(i){toastr.success(i.message),t.$emit("completed"),o.hide()}).catch(function(t){o.hide(),helper.showErrorMsg(t)})},get:function(){var t=this,o=this.$loading.show();axios.get("/api/library/book/topic/"+this.id).then(function(i){t.bookTopicForm.name=i.name,t.bookTopicForm.description=i.description,o.hide()}).catch(function(i){o.hide(),helper.showErrorMsg(i),t.$router.push("/configuration/library/book/topic")})},update:function(){var t=this,o=this.$loading.show();this.bookTopicForm.patch("/api/library/book/topic/"+this.id).then(function(i){toastr.success(i.message),o.hide(),t.$router.push("/configuration/library/book/topic")}).catch(function(t){o.hide(),helper.showErrorMsg(t)})}}}},qv9z:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("form",{on:{submit:function(o){return o.preventDefault(),t.proceed(o)},keydown:function(o){t.bookTopicForm.errors.clear(o.target.name)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("library.book_topic_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bookTopicForm.name,expression:"bookTopicForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("library.book_topic_name")},domProps:{value:t.bookTopicForm.name},on:{input:function(o){o.target.composing||t.$set(t.bookTopicForm,"name",o.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.bookTopicForm,"prop-name":"name"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("library.book_topic_description")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bookTopicForm.description,expression:"bookTopicForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("library.book_topic_description")},domProps:{value:t.bookTopicForm.description},on:{input:function(o){o.target.composing||t.$set(t.bookTopicForm,"description",o.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.bookTopicForm,"prop-name":"description"}})],1)])]),t._v(" "),i("div",{staticClass:"card-footer text-right"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/library/book/topic"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():i("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(o){t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?i("span",[t._v(t._s(t.trans("general.update")))]):i("span",[t._v(t._s(t.trans("general.save")))])])],1)])},staticRenderFns:[]}},x9JZ:function(t,o,i){var s=i("VU/8")(i("JYg3"),i("9ZsX"),!1,null,null,null);t.exports=s.exports},yppH:function(t,o,i){var s=i("VU/8")(i("kJ/r"),i("qv9z"),!1,null,null,null);t.exports=s.exports}});
//# sourceMappingURL=edit.js.map