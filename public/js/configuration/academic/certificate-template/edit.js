webpackJsonp([217],{"/22h":function(e,t,a){var i=a("VU/8")(a("MkBq"),a("aRkt"),!1,null,null,null);e.exports=i.exports},"9niw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=a("/22h"),c=(i=s)&&i.__esModule?i:{default:i};t.default={components:{certificateTemplateForm:c.default},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}}},BLgH:function(e,t,a){var i=a("VU/8")(a("9niw"),a("gINA"),!1,null,null,null);e.exports=i.exports},MkBq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{certificateTemplateForm:new Form({name:"",type:"",body:"",custom_fields:[]}),student_custom_fields:[],employee_custom_fields:[]}},props:["id"],mounted:function(){this.id&&this.get(),this.getPreRequisite()},methods:{getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/academic/certificate/template/pre-requisite").then(function(a){e.student_custom_fields=a.student_custom_fields,e.employee_custom_fields=a.employee_custom_fields,t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},addRow:function(){this.certificateTemplateForm.custom_fields.push({name:""})},getCustomFieldName:function(e){return e+"_custom_field_name"},confirmDeleteCustomField:function(e){var t=this;return function(a){return t.deleteCustomField(e)}},deleteCustomField:function(e){this.certificateTemplateForm.custom_fields.splice(e,1)},proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.certificateTemplateForm.post("/api/academic/certificate/template").then(function(a){toastr.success(a.message),e.certificateTemplateForm.custom_fields=[],e.$emit("completed"),t.hide()}).catch(function(e){t.hide(),helper.showErrorMsg(e)})},get:function(){var e=this,t=this.$loading.show();axios.get("/api/academic/certificate/template/"+this.id).then(function(a){e.certificateTemplateForm.name=a.name,e.certificateTemplateForm.type=a.type,e.certificateTemplateForm.body=a.body,a.options.custom_fields.forEach(function(t){e.certificateTemplateForm.custom_fields.push({name:t})}),t.hide()}).catch(function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/configuration/academic/certificate/template")})},update:function(){var e=this,t=this.$loading.show();this.certificateTemplateForm.patch("/api/academic/certificate/template/"+this.id).then(function(a){toastr.success(a.message),t.hide(),e.$router.push("/configuration/academic/certificate/template")}).catch(function(e){t.hide(),helper.showErrorMsg(e)})}}}},aRkt:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){e.certificateTemplateForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.certificate_template_name")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.certificateTemplateForm.name,expression:"certificateTemplateForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("academic.certificate_template_name")},domProps:{value:e.certificateTemplateForm.name},on:{input:function(t){t.target.composing||e.$set(e.certificateTemplateForm,"name",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.certificateTemplateForm,"prop-name":"name"}})],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"radio radio-success"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.certificateTemplateForm.type,expression:"certificateTemplateForm.type"}],attrs:{type:"radio",value:"student",id:"student",name:"type"},domProps:{checked:e.certificateTemplateForm.type,checked:e._q(e.certificateTemplateForm.type,"student")},on:{click:function(t){e.certificateTemplateForm.errors.clear("type")},change:function(t){e.$set(e.certificateTemplateForm,"type","student")}}}),e._v(" "),a("label",{attrs:{for:"student"}},[e._v(e._s(e.trans("student.student")))])]),e._v(" "),a("div",{staticClass:"radio radio-success"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.certificateTemplateForm.type,expression:"certificateTemplateForm.type"}],attrs:{type:"radio",value:"employee",id:"employee",name:"type"},domProps:{checked:!e.certificateTemplateForm.type,checked:e._q(e.certificateTemplateForm.type,"employee")},on:{click:function(t){e.certificateTemplateForm.errors.clear("type")},change:function(t){e.$set(e.certificateTemplateForm,"type","employee")}}}),e._v(" "),a("label",{attrs:{for:"employee"}},[e._v(e._s(e.trans("employee.employee")))])]),e._v(" "),a("show-error",{attrs:{"form-name":e.certificateTemplateForm,"prop-name":"type"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light pull-right",attrs:{type:"button"},on:{click:e.addRow}},[e._v(e._s(e.trans("academic.add_new_certificate_template_custom_field")))])])])])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},e._l(e.certificateTemplateForm.custom_fields,function(t,i){return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.certificate_template_custom_field"))+" "+e._s(i+1))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"custom_field.name"}],staticClass:"form-control",attrs:{type:"text",name:e.getCustomFieldName(i),placeholder:e.trans("academic.certificate_template_custom_field_name")},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.certificateTemplateForm,"prop-name":e.getCustomFieldName(i)}})],1),e._v(" "),a("div",{staticClass:"col-12 col-sm-1"},[a("label",{attrs:{for:""}},[a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDeleteCustomField(i)},expression:"{ok: confirmDeleteCustomField(index)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("academic.delete_certificate_template_custom_field"),expression:"trans('academic.delete_certificate_template_custom_field')"}],key:i+"_delete_custom_field",staticClass:"btn btn-xs btn-danger",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-times"})])])])])])})),e._v(" "),a("div",{staticClass:"col-12"},[e.certificateTemplateForm.type?a("p",[e._v(e._s(e.trans("academic.certificate_template_available_variables"))+": \n\t            \t\t"),"student"==e.certificateTemplateForm.type?a("span",[e._v(e._s(e.student_custom_fields.join(", ")))]):e._e(),e._v(" "),"employee"==e.certificateTemplateForm.type?a("span",[e._v(e._s(e.employee_custom_fields.join(", ")))]):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("html-editor",{attrs:{name:"body",model:e.certificateTemplateForm.body,height:"300",isUpdate:!!e.id},on:{"update:model":function(t){e.$set(e.certificateTemplateForm,"body",t)},clearErrors:function(t){e.certificateTemplateForm.errors.clear("body")}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.certificateTemplateForm,"prop-name":"body"}})],1)])]),e._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/academic/certificate/type"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?a("span",[e._v(e._s(e.trans("general.update")))]):a("span",[e._v(e._s(e.trans("general.save")))])])],1)])])},staticRenderFns:[]}},gINA:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.edit_certificate_template")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.$router.push("/configuration/academic/certificate/template")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.certificate_template")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body p-t-20"},[a("certificate-template-form",{attrs:{id:e.id}})],1)])])])},staticRenderFns:[]}}});
//# sourceMappingURL=edit.js.map