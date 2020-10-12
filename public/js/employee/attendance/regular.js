(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{UYrS:function(e,t,a){"use strict";a.r(t);var n={components:{},data:function(){return{attendanceForm:new Form({department_id:[],designation_id:[],employee_category_id:[],date_of_attendance:"",employees:[],category:"regular"},!1),disabled:{dates:[]},payroll_generated:[],is_holiday:!1,leaves:[],global_attendance:null,departments:[],designations:[],employee_categories:[],selected_designations:null,selected_departments:null,selected_employee_categories:null,regular_attendance_types:[],production_attendance_types:[]}},mounted:function(){helper.hasPermission("mark-employee-attendance")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.attendanceForm.date_of_attendance=helper.today(),this.getPreRequisite()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getRemarksName:function(e){return"remarks_"+e},getEmployeeNameWithCode:function(e){return helper.getEmployeeNameWithCode(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/attendance/regular/pre-requisite").then((function(a){e.departments=a.departments,e.designations=a.designations,e.employee_categories=a.employee_categories,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},fetch:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/attendance/regular/fetch",{department_id:this.attendanceForm.department_id,employee_category_id:this.attendanceForm.employee_category_id,designation_id:this.attendanceForm.designation_id,date:this.attendanceForm.date_of_attendance}).then((function(a){e.regular_attendance_types=a.regular_attendance_types,e.production_attendance_types=a.production_attendance_types,e.leaves=a.leaves,e.is_holiday=a.is_holiday,e.payroll_generated=a.payroll_generated,e.attendanceForm.employees=[],a.employees.forEach((function(t){var n=a.leaves.findIndex((function(e){return e==t.id}))>=0?1:0,s=a.attendances.find((function(e){return e.employee_id==t.id}));e.attendanceForm.employees.push({id:t.id,name:e.getEmployeeNameWithCode(t),designation:e.getEmployeeDesignationOnDate(t,e.attendanceForm.date_of_attendance),attendance:void 0!==s?s.employee_attendance_type_id:null,is_on_leave:n,remarks:void 0!==s?s.remarks:""})})),t.hide()})).catch((function(e){t.hide()}))},setAllAttendance:function(){var e=this;this.attendanceForm.employees.forEach((function(t){t.is_on_leave||e.isPayrollGenerated(t)||(t.attendance=e.global_attendance)}))},onDepartmentSelect:function(e){this.attendanceForm.department_id.push(e.id),this.fetch()},onDepartmentRemove:function(e){this.attendanceForm.department_id.splice(this.attendanceForm.department_id.indexOf(e.id),1),this.fetch()},onDesignationSelect:function(e){this.attendanceForm.designation_id.push(e.id),this.fetch()},onDesignationRemove:function(e){this.attendanceForm.designation_id.splice(this.attendanceForm.designation_id.indexOf(e.id),1),this.fetch()},onEmployeeCategorySelect:function(e){this.attendanceForm.employee_category_id.push(e.id),this.fetch()},onEmployeeCategoryRemove:function(e){this.attendanceForm.employee_category_id.splice(this.attendanceForm.employee_category_id.indexOf(e.id),1),this.fetch()},submit:function(){var e=this,t=this.$loading.show();this.attendanceForm.post("/api/employee/attendance/regular").then((function(a){t.hide(),e.global_attendance=null,toastr.success(a.message)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},formatDate:function(e){return helper.formatDate(e)},isPayrollGenerated:function(e){return this.payroll_generated.indexOf(e.id)>-1}},watch:{"attendanceForm.date_of_attendance":function(e){this.fetch()}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}}},s=a("KHd+"),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.mark_attendance")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/attendance")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.list_attendance")))])]),e._v(" "),a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/attendance/production")}}},[a("i",{staticClass:"fas fa-clock"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.mark_production_attendance")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.attendanceForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.department")))]),e._v(" "),a("v-select",{attrs:{label:"name","track-by":"id",name:"department_id",id:"department_id",options:e.departments,placeholder:e.trans("employee.select_department"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_departments},on:{select:e.onDepartmentSelect,remove:e.onDepartmentRemove},model:{value:e.selected_departments,callback:function(t){e.selected_departments=t},expression:"selected_departments"}},[e.departments.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),a("v-select",{attrs:{label:"name","track-by":"id",name:"designation_id",id:"designation_id",options:e.designations,placeholder:e.trans("employee.select_designation"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_designations},on:{select:e.onDesignationSelect,remove:e.onDesignationRemove},model:{value:e.selected_designations,callback:function(t){e.selected_designations=t},expression:"selected_designations"}},[e.designations.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.date_of_attendance")))]),e._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,disabledDates:e.disabled,placeholder:e.trans("employee.date_of_attendance")},on:{selected:function(e){}},model:{value:e.attendanceForm.date_of_attendance,callback:function(t){e.$set(e.attendanceForm,"date_of_attendance",t)},expression:"attendanceForm.date_of_attendance"}}),e._v(" "),a("show-error",{attrs:{"form-name":e.attendanceForm,"prop-name":"date_of_attendance"}})],1)])]),e._v(" "),e.is_holiday?a("p",{staticClass:"alert alert-info"},[e._v(e._s(e.trans("calendar.date_is_holiday",{date:e.formatDate(e.attendanceForm.date_of_attendance)})))]):e._e(),e._v(" "),e.attendanceForm.employees.length?a("div",{staticClass:"row m-t-40"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"table-responsive p-2"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{width:"30%"}},[e._v("\n                                                "+e._s(e.trans("employee.name"))+"\n                                            ")]),e._v(" "),a("th",{attrs:{width:"30%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.global_attendance,expression:"global_attendance"}],staticClass:"custom-select",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.global_attendance=t.target.multiple?a:a[0]},e.setAllAttendance]}},[a("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.regular_attendance_types,(function(t){return a("option",{domProps:{value:t.value}},[e._v("\n                                                    "+e._s(t.text)+"\n                                                  ")])}))],2)]),e._v(" "),a("th",{attrs:{width:"40%"}})])]),e._v(" "),a("tbody",e._l(e.attendanceForm.employees,(function(t,n){return a("tr",[a("td",[e._v("\n                                                "+e._s(t.name)+" "),a("br"),e._v(" "),a("span",{staticClass:"font-80pc"},[e._v(e._s(t.designation))]),e._v(" "),e.isPayrollGenerated(t)?a("span",{staticClass:"text-success font-80pc"},[a("br"),e._v("("+e._s(e.trans("employee.payroll_is_generated"))+")")]):e._e()]),e._v(" "),a("td",[t.is_on_leave?[a("p",{staticClass:"font-90pc text-danger font-weight-bold"},[e._v("("+e._s(e.trans("employee.leave_approved"))+")")])]:[t.is_on_leave?e._e():a("select",{directives:[{name:"model",rawName:"v-model",value:t.attendance,expression:"employee.attendance"}],staticClass:"custom-select col-12",attrs:{disabled:!!e.isPayrollGenerated(t)},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"attendance",a.target.multiple?n:n[0])}}},[a("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.regular_attendance_types,(function(t){return a("option",{domProps:{value:t.value}},[e._v("\n                                                        "+e._s(t.text)+"\n                                                      ")])}))],2)]],2),e._v(" "),a("td",[t.is_on_leave?e._e():[t.is_on_leave?e._e():a("autosize-textarea",{attrs:{rows:"1",name:e.getRemarksName(n),placeholder:e.trans("employee.attendance_remarks")},model:{value:t.remarks,callback:function(a){e.$set(t,"remarks",a)},expression:"employee.remarks"}})]],2)])})),0)])])])]):e._e(),e._v(" "),a("button",{staticClass:"btn btn-info pull-right",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=regular.js.map?id=cc284b2f424e9e4fe470