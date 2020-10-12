(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{AQF0:function(t,a,e){var n=e("EBdb");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,s);n.locals&&(t.exports=n.locals)},EBdb:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".payroll-table {\n  width: 100%;\n  font-size: 13px;\n}\n.payroll-table th, .payroll-table td {\n  width: 50%;\n  padding: 5px 10px;\n}\n.payroll-table tr + tr {\n  border-top: 1px solid #f3f1f1;\n}\n.payroll-table .borderless-input {\n  text-align: right;\n  border: 0;\n  height: auto;\n  width: 100%;\n  color: #54667a;\n}",""])},XhPi:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{uuid:this.$route.params.uuid,payroll:{},employee_salary:{},attendance_summary:[]}},mounted:function(){this.get()},methods:{getEmployeeNameWithCode:function(t){return helper.getEmployeeNameWithCode(t)},getEmployeeDesignationOnDate:function(t,a){return helper.getEmployeeDesignationOnDate(t,a)},get:function(){var t=this,a=this.$loading.show();axios.get("/api/employee/payroll/"+this.uuid).then((function(e){t.payroll=e.payroll,t.employee_salary=e.salary,t.attendance_summary=e.attendance_types,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},formatCurrency:function(t){return helper.formatCurrency(t)},getVoucherNumber:function(t){return helper.getVoucherNumber(t)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},computed:{getTotalEarningSalary:function(){var t=0;return this.payroll.payroll_details.forEach((function(a){t+=parseInt("earning"==a.pay_head.type&&a.amount||0)})),t},getTotalDeductionSalary:function(){var t=0;return this.payroll.payroll_details.forEach((function(a){t+=parseInt("deduction"==a.pay_head.type&&a.amount||0)})),t},getNetSalary:function(){return this.getTotalEarningSalary-this.getTotalDeductionSalary},getPayrollStatus:function(){return helper.getPayrollStatus(this.payroll)},getPayrollNumber:function(){return helper.getPayrollNumber(this.payroll)},authToken:function(){return helper.getAuthToken()}}},s=(e("czlR"),e("KHd+")),r=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("employee.payroll"))+" "),t.payroll.id?e("span",[t._v(t._s("#"+t.getPayrollNumber))]):t._e()])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(a){return t.$router.push("/employee/payroll/list")}}},[e("i",{staticClass:"fas fa-list"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("employee.list_payroll")))])]),t._v(" "),e("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.print"),expression:"trans('general.print')"}],staticClass:"btn btn-info btn-sm",attrs:{href:"/employee/payroll/"+t.payroll.uuid+"/print?token="+t.authToken,target:"_blank"}},[e("i",{staticClass:"fas fa-print"})])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t.employee_salary.payroll_template?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm custom-show-table"},[e("tbody",[t._l(t.attendance_summary,(function(a){return e("tr",[e("td",[t._v(t._s(a.name+" ("+a.alias+")"))]),t._v(" "),e("td",[t._v("\n\t\t\t                                    "+t._s(a.count)+"\n\t\t\t                                    "),"production_based_earning"!=a.type&&"production_based_deduction"!=a.type||!a.count?t._e():e("span",[t._v("\n\t\t\t                                        ("+t._s(a.value+" "+a.unit)+")\n\t\t\t                                    ")])])])})),t._v(" "),e("tr",[e("td",[t._v(t._s(t.trans("general.created_at")))]),t._v(" "),e("td",[t._v(t._s(t._f("momentDateTime")(t.payroll.created_at)))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.trans("general.updated_at")))]),t._v(" "),e("td",[t._v(t._s(t._f("momentDateTime")(t.payroll.updated_at)))])])],2)])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-8 border-left"},[e("div",{staticClass:"card widget"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row border-bottom"},[e("div",{staticClass:"col p-4 b-r"},[t._v("\n\t\t\t                                "+t._s(t.getEmployeeNameWithCode(t.employee_salary.employee))),e("br"),t._v(" "),e("span",{staticClass:"font-90pc"},[t._v(t._s(t.getEmployeeDesignationOnDate(t.employee_salary.employee,t.employee_salary.start_date)))])]),t._v(" "),e("div",{staticClass:"col p-4 b-r"},[t._v("\n\t\t\t                                "+t._s(t._f("moment")(t.payroll.start_date))+" "+t._s(t.trans("general.to"))+" "+t._s(t._f("moment")(t.payroll.end_date))+"\n\t\t\t                                "),e("br"),t._v(" "),t._l(t.getPayrollStatus,(function(a){return e("span",{class:["label","label-"+a.color,"m-r-5"]},[t._v(t._s(a.label))])}))],2)])])]),t._v(" "),e("table",{staticClass:"payroll-table"},[e("tr",[e("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.trans("employee.pay_head_type_earning")))]),t._v(" "),e("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.trans("employee.pay_head_type_deduction")))])]),t._v(" "),e("tr",[e("td",{staticClass:"border-right",attrs:{valign:"top"}},[e("table",{staticClass:"payroll-table"},t._l(t.payroll.payroll_details,(function(a){return"earning"==a.pay_head.type?e("tr",[e("td",[t._v(t._s(a.pay_head.name))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v("\n\t\t\t                                        "+t._s(t.formatCurrency(a.amount))+"\n\t\t\t                                    ")])]):t._e()})),0)]),t._v(" "),e("td",{attrs:{valign:"top"}},[e("table",{staticClass:"payroll-table"},t._l(t.payroll.payroll_details,(function(a){return"deduction"==a.pay_head.type?e("tr",[e("td",[t._v(t._s(a.pay_head.name))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v("\n\t\t\t                                        "+t._s(t.formatCurrency(a.amount))+"\n\t\t\t                                    ")])]):t._e()})),0)])]),t._v(" "),e("tr",[e("td",[e("table",{staticClass:"payroll-table"},[e("tr",[e("td",[t._v(t._s(t.trans("employee.earning_salary")))]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v(t._s(t.formatCurrency(t.getTotalEarningSalary)))])])])]),t._v(" "),e("td",{attrs:{valign:"top"}},[e("table",{staticClass:"payroll-table"},[e("tr",[e("td",[t._v(t._s(t.trans("employee.deduction_salary")))]),t._v(" "),e("td",{attrs:{align:"right"}},[t._v(t._s(t.formatCurrency(t.getTotalDeductionSalary)))])])])])]),t._v(" "),e("tr",[e("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.trans("employee.net_salary")))]),t._v(" "),e("td",{staticClass:"font-weight-bold",attrs:{align:"right"}},[t._v(t._s(t.formatCurrency(t.getNetSalary)))])])]),t._v(" "),t.payroll.transactions.length?[e("h5",{staticClass:"card-title m-t-10 m-b-10"},[t._v(t._s(t.trans("employee.payroll_transaction")))]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm custom-show-table"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.trans("finance.voucher_number")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.amount")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.account")))]),t._v(" "),e("th",[t._v(t._s(t.trans("finance.payment_method")))]),t._v(" "),e("th",{staticClass:"table-option"},[t._v(t._s(t.trans("finance.date_of_transaction")))])])]),t._v(" "),e("tbody",t._l(t.payroll.transactions,(function(a){return e("tr",[e("td",{domProps:{textContent:t._s(t.getVoucherNumber(a))}}),t._v(" "),e("td",[t._v(t._s(t.formatCurrency(a.amount)))]),t._v(" "),e("td",{domProps:{textContent:t._s(a.account.name)}}),t._v(" "),e("td",[e("span",{domProps:{textContent:t._s(a.payment_method.name)}}),t._v(" "),a.instrument_number?e("span",[e("br"),t._v(" "+t._s(t.trans("finance.instrument_number"))+" "),e("u",[t._v(t._s(a.instrument_number)+" ")])]):t._e(),t._v(" "),a.instrument_date?e("span",[e("br"),t._v(" "+t._s(t.trans("finance.instrument_date"))+" "),e("u",[t._v(t._s(t._f("moment")(a.instrument_date))+" ")])]):t._e(),t._v(" "),a.instrument_bank_detail?e("span",[e("br"),t._v(" "+t._s(t.trans("finance.instrument_bank_detail"))+" "),e("u",[t._v(t._s(a.instrument_bank_detail)+" ")])]):t._e(),t._v(" "),a.instrument_clearing_date?e("span",[e("br"),t._v(" "+t._s(t.trans("finance.instrument_clearing_date"))+" "),e("u",[t._v(t._s(t._f("moment")(a.instrument_clearing_date))+" ")])]):t._e(),t._v(" "),a.reference_number?e("span",[e("br"),t._v(" "+t._s(t.trans("finance.reference_number"))+" "),e("u",[t._v(t._s(a.reference_number))])]):t._e()]),t._v(" "),e("td",{staticClass:"table-option"},[t._v(t._s(t._f("moment")(a.date)))])])})),0)])])]:t._e()],2)]):t._e()])])])])}),[],!1,null,null,null);a.default=r.exports},czlR:function(t,a,e){"use strict";var n=e("AQF0");e.n(n).a}}]);
//# sourceMappingURL=show.js.map?id=63adc430020f65845ca7