(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{BfF7:function(e,o,a){"use strict";a.r(o);var t={components:{},data:function(){return{configForm:new Form({employee_code_prefix:"",employee_code_digit:"",leave_holiday_calculation_mode:"",per_day_salary_calculation_basis:"",user_defined_per_day_salary_calculation_basis:"",allow_employee_date_of_joining_out_of_session:"",config_type:""},!1),leave_holiday_calculation_modes:[{text:i18n.employee.leave_holiday_calculation_mode_ignore,value:"ignore"},{text:i18n.employee.leave_holiday_calculation_mode_include,value:"include"},{text:i18n.employee.leave_holiday_calculation_mode_include_if_enclosed,value:"include_if_enclosed"}],per_day_salary_calculation_basis_options:[{text:i18n.employee.salary_structure_calendar_period,value:"calendar_period"},{text:i18n.employee.salary_structure_user_defined,value:"user_defined"}]}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getConfiguration()},methods:{getConfiguration:function(){var e=this,o=this.$loading.show();axios.get("/api/configuration").then((function(a){e.configForm=helper.formAssign(e.configForm,a),o.hide()})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))},submit:function(){var e=this,o=this.$loading.show();this.configForm.config_type="employee",this.configForm.post("/api/configuration").then((function(a){e.$store.dispatch("setConfig",{loaded:!1}),toastr.success(a.message),o.hide()})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))}}},i=a("KHd+"),s=Object(i.a)(t,(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("div",{staticClass:"page-titles"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.employee_configuration")))])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(o){return o.preventDefault(),e.submit(o)},keydown:function(o){return e.configForm.errors.clear(o.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_code_prefix")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.employee_code_prefix,expression:"configForm.employee_code_prefix"}],staticClass:"form-control",attrs:{type:"text",name:"employee_code_prefix",placeholder:e.trans("employee.employee_code_prefix")},domProps:{value:e.configForm.employee_code_prefix},on:{input:function(o){o.target.composing||e.$set(e.configForm,"employee_code_prefix",o.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"employee_code_prefix"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_code_digit")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.employee_code_digit,expression:"configForm.employee_code_digit"}],staticClass:"form-control",attrs:{type:"number",name:"employee_code_digit",placeholder:e.trans("employee.employee_code_digit")},domProps:{value:e.configForm.employee_code_digit},on:{input:function(o){o.target.composing||e.$set(e.configForm,"employee_code_digit",o.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"employee_code_digit"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"custom-control custom-checkbox m-t-20"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.allow_employee_date_of_joining_out_of_session,expression:"configForm.allow_employee_date_of_joining_out_of_session"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",name:"allow_employee_date_of_joining_out_of_session"},domProps:{checked:Array.isArray(e.configForm.allow_employee_date_of_joining_out_of_session)?e._i(e.configForm.allow_employee_date_of_joining_out_of_session,"1")>-1:e.configForm.allow_employee_date_of_joining_out_of_session},on:{change:function(o){var a=e.configForm.allow_employee_date_of_joining_out_of_session,t=o.target,i=!!t.checked;if(Array.isArray(a)){var s=e._i(a,"1");t.checked?s<0&&e.$set(e.configForm,"allow_employee_date_of_joining_out_of_session",a.concat(["1"])):s>-1&&e.$set(e.configForm,"allow_employee_date_of_joining_out_of_session",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.configForm,"allow_employee_date_of_joining_out_of_session",i)}}}),e._v(" "),a("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("employee.allow_employee_date_of_joining_out_of_session")))])]),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"allow_employee_date_of_joining_out_of_session"}})],1)])]),e._v(" "),a("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.leave_configuration")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.leave_holiday_calculation_mode")))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.configForm.leave_holiday_calculation_mode,expression:"configForm.leave_holiday_calculation_mode"}],staticClass:"custom-select col-12",attrs:{name:"leave_holiday_calculation_mode"},on:{change:[function(o){var a=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.configForm,"leave_holiday_calculation_mode",o.target.multiple?a:a[0])},function(o){return e.configForm.errors.clear("leave_holiday_calculation_mode")}]}},e._l(e.leave_holiday_calculation_modes,(function(o){return a("option",{domProps:{value:o.value}},[e._v("\n                                    "+e._s(o.text)+"\n                                  ")])})),0),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"leave_holiday_calculation_mode"}})],1)])]),e._v(" "),a("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.payroll_configuration")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.per_day_salary_calculation_basis")))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.configForm.per_day_salary_calculation_basis,expression:"configForm.per_day_salary_calculation_basis"}],staticClass:"custom-select col-12",attrs:{name:"per_day_salary_calculation_basis"},on:{change:[function(o){var a=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.configForm,"per_day_salary_calculation_basis",o.target.multiple?a:a[0])},function(o){return e.configForm.errors.clear("per_day_salary_calculation_basis")}]}},e._l(e.per_day_salary_calculation_basis_options,(function(o){return a("option",{domProps:{value:o.value}},[e._v("\n                                    "+e._s(o.text)+"\n                                  ")])})),0),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"per_day_salary_calculation_basis"}})],1)]),e._v(" "),"user_defined"==e.configForm.per_day_salary_calculation_basis?a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.user_defined_per_day_salary_calculation_basis")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.configForm.user_defined_per_day_salary_calculation_basis,expression:"configForm.user_defined_per_day_salary_calculation_basis"}],staticClass:"form-control",attrs:{type:"number",name:"user_defined_per_day_salary_calculation_basis",placeholder:e.trans("employee.user_defined_per_day_salary_calculation_basis")},domProps:{value:e.configForm.user_defined_per_day_salary_calculation_basis},on:{input:function(o){o.target.composing||e.$set(e.configForm,"user_defined_per_day_salary_calculation_basis",o.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.configForm,"prop-name":"user_defined_per_day_salary_calculation_basis"}})],1)]):e._e()]),e._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light pull-right m-t-10",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])])])])])}),[],!1,null,null,null);o.default=s.exports}}]);
//# sourceMappingURL=index.js.map?id=d70b011c4330acd8c964