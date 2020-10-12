(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{Jr6T:function(t,e,s){"use strict";s.r(e);var n={components:{},props:["uuid","url"],mounted:function(){this.uuid&&this.get()},data:function(){return{assignment:[],attachments:[]}},methods:{get:function(){var t=this,e=this.$loading.show();axios.get("/api/assignment/"+this.uuid).then((function(s){t.assignment=s.assignment,t.attachments=s.attachments,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignation:function(t,e){return helper.getEmployeeDesignation(t,e)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[t.assignment.id?s("div",{staticClass:"modal-header"},[t._t("header",[s("span",[t._v(t._s(t.assignment.title))]),t._v(" "),s("span",{staticClass:"float-right pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("x")])])],2):t._e(),t._v(" "),t.assignment.id?s("div",{staticClass:"modal-body"},[t._t("body",[s("h6",{staticClass:"card-title"},[s("strong",[t._v(t._s(t.trans("academic.subject"))+":")]),t._v(" "+t._s(t.assignment.subject.name+" ("+t.assignment.subject.code+")")+" \n                            "),s("br"),t._v(" "),s("strong",[t._v(t._s(t.trans("academic.batch"))+":")]),t._v(" "+t._s(t.assignment.subject.batch.course.name+" "+t.assignment.subject.batch.name)+" \n                            "),s("br"),t._v(" "),s("strong",[t._v(t._s(t.trans("resource.date_of_assignment"))+":")]),t._v(" "+t._s(t._f("moment")(t.assignment.date_of_assignment))+" \n                            "),s("br"),t._v(" "),s("strong",[t._v(t._s(t.trans("resource.due_date_of_assignment"))+":")]),t._v(" "+t._s(t._f("moment")(t.assignment.due_date))+" \n                            "),t.assignment.employee?s("p",{staticClass:"pull-right"},[s("strong",[t._v(t._s(t.trans("resource.assignment_posted_by"))+":")]),t._v(" "+t._s(t.getEmployeeName(t.assignment.employee))+" "+t._s(t.getEmployeeDesignation(t.assignment.employee,t.assignment.date_of_assignment))+"\n                            ")]):t._e()]),t._v(" "),s("div",{staticClass:"m-t-20",domProps:{innerHTML:t._s(t.assignment.description)}}),t._v(" "),t.attachments.length?s("div",[s("ul",{staticClass:"m-t-10 upload-file-list"},t._l(t.attachments,(function(e){return s("li",{staticClass:"upload-file-list-item"},[s("a",{staticClass:"no-link-color",attrs:{href:"/resource/assignment/"+t.assignment.uuid+"/attachment/"+e.uuid+"/download?token="+t.authToken}},[s("i",{class:["file-icon","fas","fa-lg",e.file_info.icon]}),t._v(" "),s("span",{staticClass:"upload-file-list-item-size"},[t._v(t._s(e.file_info.size))]),t._v(" "+t._s(e.user_filename))])])})),0)]):t._e(),t._v(" "),s("hr"),t._v(" "),s("p",[s("i",{staticClass:"far fa-clock"}),t._v(" "),s("small",[t._v(t._s(t.trans("general.created_at"))+" "+t._s(t._f("momentDateTime")(t.assignment.created_at)))]),t._v(" "),s("span",{staticClass:"pull-right"},[s("i",{staticClass:"far fa-clock"}),t._v(" "),s("small",[t._v(t._s(t.trans("general.updated_at"))+" "+t._s(t._f("momentDateTime")(t.assignment.updated_at)))])])])])],2):t._e()])])])])}),[],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=show.js.map?id=fdb8423fae7cf425c0ee