webpackJsonp([204],{"0weN":function(e,t,o){var s=o("VU/8")(o("W6qi"),o("WK+9"),!1,null,null,null);e.exports=s.exports},JGp4:function(e,t,o){var s=o("VU/8")(o("z0W+"),o("SOip"),!1,null,null,null);e.exports=s.exports},SOip:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){e.employeeGroupForm.errors.clear(t.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.name,expression:"employeeGroupForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.employee_group_name")},domProps:{value:e.employeeGroupForm.name},on:{input:function(t){t.target.composing||e.$set(e.employeeGroupForm,"name",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"name"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group_description")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.description,expression:"employeeGroupForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.employee_group_description")},domProps:{value:e.employeeGroupForm.description},on:{input:function(t){t.target.composing||e.$set(e.employeeGroupForm,"description",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"description"}})],1)])]),e._v(" "),o("div",{staticClass:"card-footer text-right"},[o("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/employee/group"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():o("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?o("span",[e._v(e._s(e.trans("general.update")))]):o("span",[e._v(e._s(e.trans("general.save")))])])],1)])},staticRenderFns:[]}},W6qi:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,r=o("JGp4"),n=(s=r)&&s.__esModule?s:{default:s};t.default={components:{employeeGroupForm:n.default},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}}},"WK+9":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.edit_employee_group")))])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.$router.push("/configuration/employee/group")}}},[o("i",{staticClass:"fas fa-list"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.employee_group")))])])])])])]),e._v(" "),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body p-4"},[o("employee-group-form",{attrs:{id:e.id}})],1)])])])},staticRenderFns:[]}},"z0W+":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{employeeGroupForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.employeeGroupForm.post("/api/employee/group").then(function(o){toastr.success(o.message),e.$emit("completed"),t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/group/"+this.id).then(function(o){e.employeeGroupForm.name=o.name,e.employeeGroupForm.description=o.description,t.hide()}).catch(function(o){t.hide(),helper.showErrorMsg(o),e.$router.push("/configuration/employee/group")})},update:function(){var e=this,t=this.$loading.show();this.employeeGroupForm.patch("/api/employee/group/"+this.id).then(function(o){toastr.success(o.message),t.hide(),e.$router.push("/configuration/employee/group")}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}}}}});
//# sourceMappingURL=edit.js.map