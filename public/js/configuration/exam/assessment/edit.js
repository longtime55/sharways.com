(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{NC9t:function(s,e,t){"use strict";t.r(e);var a={components:{assessmentForm:t("rAbj").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},n=t("KHd+"),r=Object(n.a)(a,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("div",{staticClass:"page-titles"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("h3",{staticClass:"text-themecolor"},[s._v(s._s(s.trans("exam.edit_assessment")))])]),s._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"action-buttons pull-right"},[t("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return s.$router.push("/configuration/exam/assessment")}}},[t("i",{staticClass:"fas fa-list"}),s._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[s._v(s._s(s.trans("exam.assessment")))])])])])])]),s._v(" "),t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card card-form"},[t("div",{staticClass:"card-body p-t-20"},[t("assessment-form",{attrs:{id:s.id}})],1)])])])}),[],!1,null,null,null);e.default=r.exports},rAbj:function(s,e,t){"use strict";var a={components:{},data:function(){return{assessmentForm:new Form({name:"",description:"",details:[]})}},props:["id"],mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.id?this.get():this.addRow()},methods:{hasPermission:function(s){return helper.hasPermission(s)},addRow:function(){this.assessmentForm.details.push({name:"",code:"",max_mark:"",pass_percentage:"",description:""})},confirmDeleteDetail:function(s){var e=this;return function(t){return e.deleteDetail(s)}},deleteDetail:function(s){this.assessmentForm.details.splice(s,1)},getDetailName:function(s){return s+"_detail_name"},getDetailCode:function(s){return s+"_detail_code"},getDetailMaxMarkName:function(s){return s+"_detail_max_mark"},getDetailPassPercentageName:function(s){return s+"_detail_pass_percentage"},getDetailDescriptionName:function(s){return s+"_detail_description"},proceed:function(){this.id?this.update():this.store()},store:function(){var s=this,e=this.$loading.show();this.assessmentForm.post("/api/exam/assessment").then((function(t){toastr.success(t.message),s.assessmentForm.details=[],s.addRow(),s.$emit("completed"),e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s)}))},get:function(){var s=this,e=this.$loading.show();axios.get("/api/exam/assessment/"+this.id).then((function(t){s.assessmentForm.name=t.name,s.assessmentForm.description=t.description,t.details.forEach((function(e){s.assessmentForm.details.push({name:e.name,code:e.code,max_mark:e.max_mark,pass_percentage:e.pass_percentage,description:e.description})})),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t),s.$router.push("/configuration/exam/assessment")}))},update:function(){var s=this,e=this.$loading.show();this.assessmentForm.patch("/api/exam/assessment/"+this.id).then((function(t){toastr.success(t.message),e.hide(),s.$router.push("/configuration/exam/assessment")})).catch((function(s){e.hide(),helper.showErrorMsg(s)}))}}},n=t("KHd+"),r=Object(n.a)(a,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("form",{on:{submit:function(e){return e.preventDefault(),s.proceed(e)},keydown:function(e){return s.assessmentForm.errors.clear(e.target.name)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_name")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.assessmentForm.name,expression:"assessmentForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:s.trans("exam.assessment_name")},domProps:{value:s.assessmentForm.name},on:{input:function(e){e.target.composing||s.$set(s.assessmentForm,"name",e.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":"name"}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_description")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.assessmentForm.description,expression:"assessmentForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:s.trans("exam.assessment_description")},domProps:{value:s.assessmentForm.description},on:{input:function(e){e.target.composing||s.$set(s.assessmentForm,"description",e.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":"description"}})],1)])]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("h6",{staticClass:"card-title"},[s._v(s._s(s.trans("exam.assessment_type")))]),s._v(" "),s._l(s.assessmentForm.details,(function(e,a){return[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_detail_name"))+" \n                                "),t("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:s.confirmDeleteDetail(a)},expression:"{ok: confirmDeleteDetail(index)}"},{name:"tooltip",rawName:"v-tooltip",value:s.trans("general.delete"),expression:"trans('general.delete')"}],key:a+"_delete_detail",staticClass:"btn btn-xs btn-danger m-l-20",attrs:{type:"button"}},[t("i",{staticClass:"fas fa-times"})])]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"detail.name"}],staticClass:"form-control",attrs:{type:"text",name:s.getDetailName(a),placeholder:s.trans("exam.assessment_detail_name")},domProps:{value:e.name},on:{input:function(t){t.target.composing||s.$set(e,"name",t.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":s.getDetailName(a)}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-1"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_detail_code")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"detail.code"}],staticClass:"form-control",attrs:{type:"text",name:s.getDetailCode(a),placeholder:s.trans("exam.assessment_detail_code")},domProps:{value:e.code},on:{input:function(t){t.target.composing||s.$set(e,"code",t.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":s.getDetailCode(a)}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_detail_max_mark")))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.max_mark,expression:"detail.max_mark"}],staticClass:"form-control",attrs:{type:"number",name:s.getDetailMaxMarkName(a),placeholder:s.trans("exam.assessment_detail_max_mark")},domProps:{value:e.max_mark},on:{input:function(t){t.target.composing||s.$set(e,"max_mark",t.target.value)}}}),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":s.getDetailMaxMarkName(a)}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_detail_pass_percentage")))]),s._v(" "),t("div",{staticClass:"input-group mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.pass_percentage,expression:"detail.pass_percentage"}],staticClass:"form-control",attrs:{type:"number",name:s.getDetailPassPercentageName(a),placeholder:s.trans("exam.assessment_detail_pass_percentage")},domProps:{value:e.pass_percentage},on:{input:function(t){t.target.composing||s.$set(e,"pass_percentage",t.target.value)}}}),s._v(" "),s._m(0,!0)]),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":s.getDetailPassPercentageName(a)}})],1)]),s._v(" "),t("div",{staticClass:"col-12 col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[s._v(s._s(s.trans("exam.assessment_detail_description")))]),s._v(" "),t("autosize-textarea",{attrs:{rows:"2",name:s.getDetailDescriptionName(a),placeholder:s.trans("resource.assessment_detail_description")},model:{value:e.description,callback:function(t){s.$set(e,"description",t)},expression:"detail.description"}}),s._v(" "),t("show-error",{attrs:{"form-name":s.assessmentForm,"prop-name":s.getDetailDescriptionName(a)}})],1)])])]})),s._v(" "),t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light",attrs:{type:"button"},on:{click:s.addRow}},[s._v(s._s(s.trans("exam.add_new_assessment_detail")))])])],2)]),s._v(" "),t("div",{staticClass:"card-footer text-right"},[t("router-link",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/exam/assessment"}},[s._v(s._s(s.trans("general.cancel")))]),s._v(" "),t("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[s.id?t("span",[s._v(s._s(s.trans("general.update")))]):t("span",[s._v(s._s(s.trans("general.save")))])])],1)])])}),[function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("%")])])}],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=edit.js.map?id=2126bcef8c07d7343baf