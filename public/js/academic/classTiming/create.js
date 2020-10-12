(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Qa9v:function(s,t,e){"use strict";var i={components:{},props:["uuid"],data:function(){return{classTimingForm:new Form({name:"",description:"",sessions:[]}),hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],mins:[0,5,10,15,20,25,30,35,40,45,50,55],is_disabled_editing:!1}},mounted:function(){this.uuid||this.addRow(),this.uuid&&this.get()},methods:{proceed:function(){this.uuid?this.update():this.store()},get:function(){var s=this,t=this.$loading.show();axios.get("/api/class/timing/"+this.uuid).then((function(e){s.classTimingForm.name=e.name,s.classTimingForm.description=e.description,e.class_timing_sessions.forEach((function(t){s.classTimingForm.sessions.push({uuid:t.uuid,name:t.name,start_hour:Number(t.start.split(":")[0]),start_min:Number(t.start.split(":")[1]),end_hour:Number(t.end.split(":")[0]),end_min:Number(t.end.split(":")[1]),is_a_break:t.is_a_break})})),s.is_disabled_editing=!!e.timetable_allocations.length,t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))},addRow:function(){this.classTimingForm.sessions.push({uuid:this.$uuid.v4(),name:"",start_hour:"",start_min:"",end_hour:"",end_min:"",is_a_break:!1})},timePadding:function(s){return helper.formatWithPadding(s,2)},getSessionName:function(s){return s+"_name"},getSessionStartHourName:function(s){return s+"_start_hour"},getSessionStartMinName:function(s){return s+"_start_min"},getSessionEndHourName:function(s){return s+"_end_hour"},getSessionEndMinName:function(s){return s+"_end_min"},setNextStartHour:function(s,t){(this.classTimingForm.errors.clear(this.getSessionEndHourName(t)),void 0!==this.classTimingForm.sessions[t+1])&&(this.classTimingForm.sessions[t+1].start_hour=s.end_hour)},setNextStartMin:function(s,t){(this.classTimingForm.errors.clear(this.getSessionEndMinName(t)),void 0!==this.classTimingForm.sessions[t+1])&&(this.classTimingForm.sessions[t+1].start_min=s.end_min)},confirmDelete:function(s){var t=this;return function(e){return t.deleteSession(s)}},deleteSession:function(s){this.classTimingForm.sessions.splice(s,1)},store:function(){var s=this,t=this.$loading.show();this.classTimingForm.post("/api/class/timing").then((function(e){toastr.success(e.message),s.classTimingForm.sessions=[],s.addRow(),s.$router.push("/academic/class/timing"),t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))},update:function(){var s=this,t=this.$loading.show();this.classTimingForm.patch("/api/class/timing/"+this.uuid).then((function(e){toastr.success(e.message),t.hide(),s.$router.push("/academic/class/timing")})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))}}},a=e("KHd+"),n=Object(a.a)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"p-t-20"},[e("form",{on:{submit:function(t){return t.preventDefault(),s.proceed(t)},keydown:function(t){return s.classTimingForm.errors.clear(t.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.class_timing_name")))]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.classTimingForm.name,expression:"classTimingForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:s.trans("academic.class_timing_name")},domProps:{value:s.classTimingForm.name},on:{input:function(t){t.target.composing||s.$set(s.classTimingForm,"name",t.target.value)}}}),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":"name"}})],1)]),s._v(" "),e("div",{staticClass:"col-12 col-sm-9"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.class_timing_description")))]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.classTimingForm.description,expression:"classTimingForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:s.trans("academic.class_timing_description")},domProps:{value:s.classTimingForm.description},on:{input:function(t){t.target.composing||s.$set(s.classTimingForm,"description",t.target.value)}}}),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":"description"}})],1)])]),s._v(" "),s._l(s.classTimingForm.sessions,(function(t,i){return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[s._v("\n                            "+s._s(s.trans("academic.class_timing_session_name"))+"\n                            "),e("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:s.confirmDelete(i)},expression:"{ok: confirmDelete(index)}"},{name:"tooltip",rawName:"v-tooltip",value:s.trans("academic.delete_class_timing_session"),expression:"trans('academic.delete_class_timing_session')"}],key:i+"_delete_session",staticClass:"btn btn-xs btn-danger",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-times"})])]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"session.name"}],staticClass:"form-control",attrs:{type:"text",name:s.getSessionName(i),placeholder:s.trans("academic.class_timing_session_name")},domProps:{value:t.name},on:{input:function(e){e.target.composing||s.$set(t,"name",e.target.value)}}}),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionName}})],1)]),s._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.start_time")))]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.start_hour,expression:"session.start_hour"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionStartHourName(i)},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(t,"start_hour",e.target.multiple?i:i[0])},function(t){s.classTimingForm.errors.clear(s.getSessionStartHourName(i))}]}},[e("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_hour")))]),s._v(" "),s._l(s.hours,(function(t){return e("option",{domProps:{value:t}},[s._v("\n                                    "+s._s(s.timePadding(t))+"\n                                  ")])}))],2),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionStartHourName(i)}})],1),s._v(" "),e("div",{staticClass:"col-6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.start_min,expression:"session.start_min"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionStartHourName(i)},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(t,"start_min",e.target.multiple?i:i[0])},function(t){s.classTimingForm.errors.clear(s.getSessionStartHourName(i))}]}},[e("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_min")))]),s._v(" "),s._l(s.mins,(function(t){return e("option",{domProps:{value:t}},[s._v("\n                                    "+s._s(s.timePadding(t))+"\n                                  ")])}))],2),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionStartMinName(i)}})],1)])])]),s._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[s._v(s._s(s.trans("academic.end_time")))]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.end_hour,expression:"session.end_hour"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionEndHourName(i)},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(t,"end_hour",e.target.multiple?i:i[0])},function(e){return s.setNextStartHour(t,i)}]}},[e("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_hour")))]),s._v(" "),s._l(s.hours,(function(t){return e("option",{domProps:{value:t}},[s._v("\n                                    "+s._s(s.timePadding(t))+"\n                                  ")])}))],2),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionEndHourName(i)}})],1),s._v(" "),e("div",{staticClass:"col-6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.end_min,expression:"session.end_min"}],staticClass:"custom-select col-12",attrs:{name:s.getSessionEndMinName(i)},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(t,"end_min",e.target.multiple?i:i[0])},function(e){return s.setNextStartMin(t,i)}]}},[e("option",{attrs:{value:"null",selected:""}},[s._v(s._s(s.trans("academic.select_min")))]),s._v(" "),s._l(s.mins,(function(t){return e("option",{domProps:{value:t}},[s._v("\n                                    "+s._s(s.timePadding(t))+"\n                                  ")])}))],2),s._v(" "),e("show-error",{attrs:{"form-name":s.classTimingForm,"prop-name":s.getSessionEndMinName(i)}})],1)])])]),s._v(" "),e("div",{staticClass:"col-12 col-sm-2"},[e("div",{staticClass:"form-group"},[e("div",[s._v(s._s(s.trans("academic.is_a_break")))]),s._v(" "),e("switches",{staticClass:"m-t-20",attrs:{theme:"bootstrap",color:"success"},model:{value:t.is_a_break,callback:function(e){s.$set(t,"is_a_break",e)},expression:"session.is_a_break"}})],1)]),s._v(" "),s._m(0,!0)])})),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:s.addRow}},[s._v(s._s(s.trans("academic.add_class_timing_session")))])])])]),s._v(" "),e("div",{staticClass:"card-footer text-right"},[e("button",{staticClass:"btn btn-danger ",attrs:{type:"button"},on:{click:function(t){return s.$router.push("/academic/class/timing")}}},[s._v(s._s(s.trans("general.cancel")))]),s._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit",disabled:s.is_disabled_editing}},[s.is_disabled_editing?e("i",{staticClass:"fas fa-lock"}):s._e(),s._v(" "+s._s(s.trans("general.save")))])])],2)])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"col-12 col-sm-1"},[t("div",{staticClass:"form-group"})])}],!1,null,null,null);t.a=n.exports},rXCM:function(s,t,e){"use strict";e.r(t);var i={components:{classTimingForm:e("Qa9v").a}},a=e("KHd+"),n=Object(a.a)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[s._v(s._s(s.trans("academic.add_new_class_timing")))])]),s._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return s.$router.push("/academic/class/timing")}}},[e("i",{staticClass:"fas fa-list"}),s._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[s._v(s._s(s.trans("academic.class_timing")))])])])])])]),s._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card card-form"},[e("div",{staticClass:"card-body"},[e("class-timing-form")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=create.js.map?id=808c8ef6afaa056575f6