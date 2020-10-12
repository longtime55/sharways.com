(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{"+xVU":function(e,t,s){"use strict";var a={props:["studentRecord"],data:function(){return{student_record:{}}},mounted:function(){},methods:{getStudentName:function(e){return helper.getStudentName(e)},getAdmissionNumber:function(e){return helper.getAdmissionNumber(e)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},computed:{getImage:function(){return this.student_record.student.student_photo?"/"+this.student_record.student.student_photo:"female"==this.student_record.student.gender?"/images/female.png":"/images/male.png"}},watch:{studentRecord:function(e){this.student_record=e}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.student_record.student?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group text-center"},[s("img",{staticClass:"img-fluid",staticStyle:{"max-width":"200px"},attrs:{src:e.getImage}})])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-borderless custom-show-table"},[s("tbody",[s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.name")))]),e._v(" "),s("td",[e._v(e._s(e.getStudentName(e.student_record.student)))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.admission_number")))]),e._v(" "),s("td",[e._v(e._s(e.getAdmissionNumber(e.student_record.admission)))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.date_of_admission")))]),e._v(" "),s("td",[e._v(e._s(e._f("moment")(e.student_record.admission.date_of_admission)))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("academic.course")))]),e._v(" "),s("td",[e._v(e._s(e.student_record.batch.course.name+" ("+e.student_record.batch.course.course_group.name+")"))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),s("td",[e._v(e._s(e.student_record.batch.name))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.date_of_birth")))]),e._v(" "),s("td",[e._v(e._s(e._f("moment")(e.student_record.student.date_of_birth)))])])])])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-borderless custom-show-table"},[s("tbody",[s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.father_name")))]),e._v(" "),s("td",[e._v(e._s(e.student_record.student.parent?e.student_record.student.parent.father_name:""))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.mother_name")))]),e._v(" "),s("td",[e._v(e._s(e.student_record.student.parent?e.student_record.student.parent.mother_name:""))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.contact_number")))]),e._v(" "),s("td",[e._v(e._s(e.student_record.student.contact_number))])]),e._v(" "),s("tr",[s("td",{staticClass:"font-weight-bold"},[e._v(e._s(e.trans("student.present_address")))]),e._v(" "),s("td",[e._v("\n\t                            "+e._s(e.student_record.student.present_address_line_1)+"\n\t                            "),e.student_record.student.present_address_line_2?s("span",[e._v(", "+e._s(e.student_record.student.present_address_line_2))]):e._e(),e._v(" "),e.student_record.student.present_city?s("span",[s("br"),e._v(" "+e._s(e.student_record.student.present_city))]):e._e(),e._v(" "),e.student_record.student.present_state?s("span",[e._v(", "+e._s(e.student_record.student.present_state))]):e._e(),e._v(" "),e.student_record.student.present_zipcode?s("span",[e._v(", "+e._s(e.student_record.student.present_zipcode))]):e._e(),e._v(" "),e.student_record.student.present_country?s("span",[s("br"),e._v(" "+e._s(e.student_record.student.present_country))]):e._e()])])])])])])]):e._e()}),[],!1,null,null,null);t.a=r.exports},W9HA:function(e,t,s){"use strict";s.r(t);var a={components:{studentSummary:s("+xVU").a},data:function(){return{uuid:this.$route.params.uuid,record_id:this.$route.params.record_id,student_record:{fee_allocation:{fee_allocation_groups:[]}},transport_circles:[],fee_concessions:[],late_fee_frequencies:[],studentFeeRecordForm:new Form({fee_groups:[]},!1)}},mounted:function(){helper.hasPermission("set-fee")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getRecord()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getConfig:function(e){return helper.getConfig(e)},getStudentName:function(e){return helper.getStudentName(e)},getRecord:function(){var e=this,t=this.$loading.show();axios.get("/api/student/"+this.uuid+"/fee/"+this.record_id).then((function(s){e.student_record=s.student_record,e.transport_circles=s.transport_circles,e.fee_concessions=s.fee_concessions,e.late_fee_frequencies=s.late_fee_frequencies,e.student_record.fee_allocation.fee_allocation_groups.forEach((function(t){var s=[];t.fee_installments.forEach((function(t){var a=e.student_record.student_fee_records.find((function(e){return e.fee_installment_id==t.id})),n=[],r=e.student_record.student_fee_records.find((function(e){return e.fee_installment_id==t.id}));t.fee_installment_details.forEach((function(e){var t=r.student_optional_fee_records.findIndex((function(t){return t.fee_head_id==e.fee_head_id}));n.push({id:e.fee_head_id,name:e.fee_head.name,is_optional:e.is_optional,value:!(t>=0)})})),s.push({fee_installment:t,id:t.id,title:t.title,due_date:r.due_date||t.due_date,late_fee_applicable:null!=r.late_fee_applicable?r.late_fee_applicable:t.late_fee_applicable,late_fee_frequency:r.late_fee_frequency||(t.late_fee_applicable?t.late_fee_frequency:""),late_fee:r.late_fee||(t.late_fee_applicable?t.late_fee:""),fee_installment_id:a.fee_installment_id,transport_circle_id:a.transport_circle_id,transport_fee:e.getTransportFee(t,a.transport_circle_id),fee_concession_id:a.fee_concession_id,status:a.status,remarks:a.remarks,heads:n})})),e.studentFeeRecordForm.fee_groups.push({name:t.fee_group.name,has_transport:!!t.fee_group.options.has_transport,installments:s})})),t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s),e.$router.push("/student/"+e.uuid+"/fee/"+e.record_id+"/create")}))},getTransportFieldName:function(e){return"transport_circle_"+e.id},getFeeConcessionFieldName:function(e){return"fee_concession_"+e.id},getRemarkFieldName:function(e){return"remark_"+e.id},getDueDateFieldName:function(e){return"due_date_"+e.id},getLateFeeFrequencyFieldName:function(e){return"late_fee_frequency_"+e.id},getLateFeeFieldName:function(e){return"late_fee_"+e.id},formatCurrency:function(e){return helper.formatCurrency(e)},isInstallmentOverdue:function(e){var t=this.student_record.student_fee_records.find((function(t){return t.fee_installment_id==e.id}));return helper.today()>e.due_date&&"paid"!=t.status},getTransportCircleName:function(e){var t=this.student_record.student_fee_records.find((function(t){return t.fee_installment_id==e.id}));return t.transport_circle?t.transport_circle.name:"-"},getTransportFee:function(e,t){return Number.isInteger(t)&&e.transport_fee_id?e.transport_fee.transport_fee_details.find((function(e){return e.transport_circle_id==t})).amount:null},getTransportFeeAmount:function(e){var t=this.getTransportFee(e);return Number.isInteger(t)?helper.formatCurrency(t):"-"},updateTransportFee:function(e){var t=this.getTransportFee(e.fee_installment,e.transport_circle_id);e.transport_fee=t},submit:function(){var e=this.$loading.show();this.studentFeeRecordForm.patch("/api/student/"+this.uuid+"/fee/"+this.record_id).then((function(t){toastr.success(t.message),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("student.set_fee"))+" "),e.student_record.student?s("small",[e._v(e._s(e.getStudentName(e.student_record.student))+" ("+e._s(e.student_record.academic_session.name)+")")]):e._e()])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/student"}},[s("i",{staticClass:"fas fa-list"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("student.student")))])]),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),s("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(t){return e.$router.push("/student/"+e.student_record.student.uuid)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"}),e._v(" "+e._s(e.trans("student.view_detail")))]),e._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(t){return e.$router.push("/student/"+e.student_record.student.uuid+"/fee/"+e.student_record.id)}}},[s("i",{staticClass:"fas fa-file"}),e._v(" "+e._s(e.trans("finance.view_fee_allocation")))])])])],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body py-4"},[s("student-summary",{staticClass:"border-bottom",attrs:{"student-record":e.student_record}})],1),e._v(" "),s("div",{staticClass:"card-body px-4"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.studentFeeRecordForm.errors.clear(t.target.name)}}},[e._l(e.studentFeeRecordForm.fee_groups,(function(t){return[s("h4",{staticClass:"card-title"},[e._v(e._s(t.name))]),e._v(" "),s("div",{staticClass:"row m-b-20"},[s("div",{staticClass:"col-12 col-sm-2 text-strong"},[e._v("\n                                "+e._s(e.trans("finance.fee_installment_title"))+"\n                            ")]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2 text-strong"},[e._v("\n                                "+e._s(e.trans("finance.fee_installment_due_date"))+"\n                            ")]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2 text-strong"},[e._v("\n                                "+e._s(e.trans("finance.fee_status"))+"\n                            ")]),e._v(" "),t.has_transport?s("div",{staticClass:"col-12 col-sm-2 text-strong"},[e._v("\n                                "+e._s(e.trans("transport.transport_circle"))+"\n                            ")]):e._e(),e._v(" "),s("div",{staticClass:"col-12 col-sm-2 text-strong"},[e._v("\n                                "+e._s(e.trans("finance.fee_concession"))+"\n                            ")]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2 text-strong"},[e._v("\n                                "+e._s(e.trans("finance.optional_fee"))+"\n                            ")])]),e._v(" "),e._l(t.installments,(function(a){return[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-2"},[e._v("\n                                    "+e._s(a.title)+" "),s("br"),e.isInstallmentOverdue(a)?s("span",{staticClass:"label label-danger"},[e._v(e._s(e.trans("finance.fee_overdue")))]):e._e()]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("finance.fee_installment_due_date"),name:e.getDueDateFieldName(a),disabled:"unpaid"!=a.status},on:{selected:function(t){e.studentFeeRecordForm.errors.clear(e.getDueDateFieldName(a))}},model:{value:a.due_date,callback:function(t){e.$set(a,"due_date",t)},expression:"installment.due_date"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.studentFeeRecordForm,"prop-name":e.getDueDateFieldName(a)}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},["paid"==a.status?s("span",{staticClass:"label label-success"},[e._v(e._s(e.trans("student.fee_status_paid")))]):s("span",{staticClass:"label label-danger"},[e._v(e._s(e.trans("student.fee_status_unpaid")))])]),e._v(" "),t.has_transport?s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:a.transport_circle_id,expression:"installment.transport_circle_id"}],staticClass:"custom-select col-12",attrs:{name:e.getTransportFieldName(a),disabled:"unpaid"!=a.status},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"transport_circle_id",t.target.multiple?s:s[0])},function(t){return e.updateTransportFee(a)}]}},[s("option",{domProps:{value:null}},[e._v(e._s(e.trans("transport.no_transport")))]),e._v(" "),e._l(e.transport_circles,(function(t){return s("option",{domProps:{value:t.id}},[e._v("\n                                                "+e._s(t.name)+"\n                                            ")])}))],2),e._v(" "),s("span",{staticClass:"help-block"},[e._v(e._s(e.trans("transport.fee")+": "+e.formatCurrency(a.transport_fee)))]),e._v(" "),s("show-error",{attrs:{"form-name":e.studentFeeRecordForm,"prop-name":e.getTransportFieldName(a)}})],1)]):e._e(),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:a.fee_concession_id,expression:"installment.fee_concession_id"}],staticClass:"custom-select col-12",attrs:{name:e.getFeeConcessionFieldName(a),disabled:"unpaid"!=a.status},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"fee_concession_id",t.target.multiple?s:s[0])},function(e){}]}},[s("option",{domProps:{value:null}},[e._v(e._s(e.trans("finance.no_fee_concession")))]),e._v(" "),e._l(e.fee_concessions,(function(t){return s("option",{domProps:{value:t.id}},[e._v("\n                                                "+e._s(t.name)+"\n                                            ")])}))],2),e._v(" "),s("show-error",{attrs:{"form-name":e.studentFeeRecordForm,"prop-name":e.getFeeConcessionFieldName(a)}})],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},e._l(a.heads,(function(t){return t.is_optional?s("div",{staticClass:"form-group"},[s("label",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.value?e.trans("finance.uncheck_to_make_it_optional"):e.trans("finance.check_to_make_it_mandatory"),expression:"fee_head.value ? trans('finance.uncheck_to_make_it_optional') : trans('finance.check_to_make_it_mandatory')"}],staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"fee_head.value"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",disabled:"unpaid"!=a.status},domProps:{checked:Array.isArray(t.value)?e._i(t.value,"1")>-1:t.value},on:{change:function(s){var a=t.value,n=s.target,r=!!n.checked;if(Array.isArray(a)){var o=e._i(a,"1");n.checked?o<0&&e.$set(t,"value",a.concat(["1"])):o>-1&&e.$set(t,"value",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(t,"value",r)}}}),e._v(" "),s("span",{staticClass:"custom-control-label",domProps:{textContent:e._s(t.name)}})])]):e._e()})),0)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.late_fee_applicable,expression:"installment.late_fee_applicable"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1",disabled:"unpaid"!=a.status},domProps:{checked:Array.isArray(a.late_fee_applicable)?e._i(a.late_fee_applicable,"1")>-1:a.late_fee_applicable},on:{change:function(t){var s=a.late_fee_applicable,n=t.target,r=!!n.checked;if(Array.isArray(s)){var o=e._i(s,"1");n.checked?o<0&&e.$set(a,"late_fee_applicable",s.concat(["1"])):o>-1&&e.$set(a,"late_fee_applicable",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(a,"late_fee_applicable",r)}}}),e._v(" "),s("span",{staticClass:"custom-control-label"},[e._v(e._s(e.trans("finance.late_fee")))])])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[a.late_fee_applicable?s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:a.late_fee_frequency,expression:"installment.late_fee_frequency"}],staticClass:"custom-select col-12",attrs:{name:e.getLateFeeFrequencyFieldName(a),disabled:"unpaid"!=a.status},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"late_fee_frequency",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.late_fee_frequencies,(function(t){return s("option",{domProps:{value:t.value}},[e._v("\n                                            "+e._s(t.text)+"\n                                          ")])}))],2),e._v(" "),s("show-error",{attrs:{"form-name":e.studentFeeRecordForm,"prop-name":e.getLateFeeFrequencyFieldName(a)}})],1):e._e()]),e._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[a.late_fee_applicable?s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.late_fee,expression:"installment.late_fee"}],staticClass:"form-control",attrs:{type:"text",name:e.getLateFeeFieldName(a),placeholder:e.trans("finance.late_fee"),disabled:"unpaid"!=a.status},domProps:{value:a.late_fee},on:{input:function(t){t.target.composing||e.$set(a,"late_fee",t.target.value)}}}),e._v(" "),s("show-error",{attrs:{"form-name":e.studentFeeRecordForm,"prop-name":e.getLateFeeFieldName(a)}})],1):e._e()]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("autosize-textarea",{attrs:{rows:"1",name:e.getRemarkFieldName(a),placeholder:e.trans("general.remarks"),disabled:"unpaid"!=a.status},model:{value:a.remarks,callback:function(t){e.$set(a,"remarks",t)},expression:"installment.remarks"}}),e._v(" "),s("show-error",{attrs:{"form-name":e.studentFeeRecordForm,"prop-name":e.getRemarkFieldName(a)}})],1)])])]}))]})),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light pull-right",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])],2)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=set.js.map?id=0e92747fadf9ed5c1432