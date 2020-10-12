(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{uieU:function(t,e,n){"use strict";n.r(e);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r={data:function(){return{uuid:this.$route.params.uuid,id:this.$route.params.id,online_exam:{batch:{course:{}},subject:{}},online_exam_record:{student_record:{student:{parent:{}},batch:{course:{}}}},onlineExamForm:new Form({answers:[]},!1),exam_started:!1,questions:[],countdown:0}},mounted:function(){this.getOnlineExam(),this.hasAnyRole(["student","parent"])&&this.$router.push("/online-exam")},methods:{hasAnyRole:function(t){return helper.hasAnyRole(t)},getStudentName:function(t){return helper.getStudentName(t)},getRollNumber:function(t){return helper.getRollNumber(t)},getOnlineExam:function(){var t=this,e=this.$loading.show();this.onlineExamForm.answers=[],axios.get("/api/online-exam/"+this.uuid+"/exam/"+this.id).then((function(n){t.online_exam=n.online_exam,t.questions=n.questions,t.online_exam_record=n.online_exam_record,t.questions.forEach((function(e){var n="";if(t.online_exam_record){var r=t.online_exam_record.answers.find((function(t){return t.question_id==e.id}));void 0!==i(r)&&(n=r.answer)}t.onlineExamForm.answers.push(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{answer:n}))})),e.hide()})).catch((function(n){helper.showErrorMsg(Error),e.hide(),t.$router.push("/online-exam")}))},getAnswerName:function(t){return"answer_"+t}},filters:{moment:function(t){return helper.formatDate(t)},momentTime:function(t){return helper.formatTime(t)},momentDateTime:function(t){return helper.formatDateTime(t)}}},o=n("KHd+"),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("exam.online_exam"))+"\n                        "),t.online_exam?n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.online_exam.name)+" ("+t._s(t.trans("exam.online_exam_type_"+t.online_exam.exam_type))+")")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[n("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/online-exam/"+t.uuid+"/records"}},[n("i",{staticClass:"fas fa-list"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("exam.online_exam")))])])],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t.online_exam?n("div",{staticClass:"card-boy"},[n("h4",{staticClass:"card-title m-3 text-center"},[t._v("\n\t\t\t                    "+t._s(t.online_exam.batch.course.name+" "+t.online_exam.batch.name)+"\n\t\t\t                    "+t._s(t.online_exam.subject.name+" ("+t.online_exam.subject.code+")")+"\n\t\t\t                ")]),t._v(" "),n("h4",{staticClass:"card-title m-3 text-center"},[n("small",[t._v(t._s(t._f("moment")(t.online_exam.date))+" "+t._s(t._f("momentTime")(t.online_exam.start_time))+" "+t._s(t.trans("general.to"))+" "+t._s(t._f("momentTime")(t.online_exam.end_time))+" ")]),t._v(" "),n("br")]),t._v(" "),n("div",{staticClass:"row px-4 pb-4 text-center"},[n("div",{staticClass:"col-6"},[n("strong",[t._v(t._s(t.trans("student.student"))+":")]),t._v(" "+t._s(t.getStudentName(t.online_exam_record.student_record.student))+"\n\t\t                    \t")]),t._v(" "),n("div",{staticClass:"col-6"},[n("strong",[t._v(t._s(t.trans("student.roll_number"))+":")]),t._v(" "+t._s(t.getRollNumber(t.online_exam_record.student_record))+"\n\t\t                    \t")]),t._v(" "),n("div",{staticClass:"col-6"},[n("strong",[t._v(t._s(t.trans("academic.batch"))+":")]),t._v(" "+t._s(t.online_exam_record.student_record.batch.course.name+" "+t.online_exam_record.student_record.batch.name)+"\n\t\t                    \t")]),t._v(" "),n("div",{staticClass:"col-6"},[n("strong",[t._v(t._s(t.trans("exam.online_exam_start_time"))+":")]),t._v(" "+t._s(t._f("momentDateTime")(t.online_exam_record.start))+"\n\t\t                    \t")]),t._v(" "),n("div",{staticClass:"col-6"},[n("strong",[t._v(t._s(t.trans("exam.online_exam_end_time"))+":")]),t._v(" "+t._s(t._f("momentDateTime")(t.online_exam_record.end))+"\n\t\t                    \t")]),t._v(" "),n("div",{staticClass:"col-6"},[n("strong",[t._v(t._s(t.trans("exam.obtained_mark"))+":")]),t._v(" "+t._s(t.online_exam_record.obtained_mark)+"\n\t\t\t                    ")])]),t._v(" "),n("div",{staticClass:"border-top"},[n("h4",{staticClass:"card-title m-3 text-center"},[n("small",[t._v(t._s(t.trans("exam.online_exam_instructions")))])]),t._v(" "),n("div",{staticClass:"p-4",staticStyle:{"font-size":"90%"},domProps:{innerHTML:t._s(t.online_exam.instructions)}})]),t._v(" "),n("hr"),t._v(" "),n("h4",{staticClass:"card-title m-3"},[t._v(t._s(t.trans("exam.online_exam_questions")))]),t._v(" "),n("div",{staticClass:"p-4"},t._l(t.onlineExamForm.answers,(function(e,s){return n("div",{staticClass:"border-bottom my-2",staticStyle:{"font-size":"90%",padding:"10px","background-color":"rgb(241, 243, 244)","border-radius":"5px",color:"#000"}},[n("p",[t._v("\n\t\t\t                            ("+t._s(s+1)+") "+t._s(e.question)+" \n\t\t\t                            "),n("span",{staticClass:"pull-right"},[t._v("("+t._s(e.mark)+")")])]),t._v(" "),e.image?n("div",{staticStyle:{padding:"10px"}},[n("center",[n("img",{staticStyle:{"max-width":"250px"},attrs:{src:"/"+e.image}})])],1):t._e(),t._v(" "),"mcq"==e.question_type?n("div",{staticClass:"row",staticStyle:{"padding-left":"20px"}},t._l(e.answers,(function(a,i){return n("div",{staticClass:"col-6"},[n("div",{staticClass:"radio radio-info"},[n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"question.answer"}],staticClass:"form-check-input",attrs:{disabled:!0,type:"radio",id:e.id+"_option_"+a.title,name:t.getAnswerName(s)},domProps:{value:a.title,checked:e.answer==a.title,checked:t._q(e.answer,a.title)},on:{click:function(t){},change:function(n){return t.$set(e,"answer",a.title)}}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:e.id+"_option_"+a.title}},[t._v(" ("+t._s(i+1)+") "+t._s(a.title))]),t._v(" "),"expired"==t.online_exam.status&&a.is_correct_answer?n("span",{staticStyle:{"margin-left":"10px"}},[n("i",{staticClass:"fas fa-check-circle text-success"})]):t._e()])]),t._v(" "),a.image?n("div",{staticStyle:{padding:"10px"}},[n("center",[n("img",{staticStyle:{"max-width":"150px"},attrs:{src:"/"+a.image}})])],1):t._e()])})),0):t._e(),t._v(" "),"single_line"==e.question_type?n("div",{staticClass:"row",staticStyle:{"padding-left":"20px"}},[n("div",{staticClass:"col-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"question.answer"}],staticClass:"form-control",attrs:{type:"text",disabled:!0,name:t.getAnswerName(s),placeholder:t.trans("exam.online_exam_answer")},domProps:{value:e.answer},on:{input:function(n){n.target.composing||t.$set(e,"answer",n.target.value)}}})])]):t._e(),t._v(" "),"multiple_line"==e.question_type?n("div",{staticClass:"row",staticStyle:{"padding-left":"20px"}},[n("div",{staticClass:"col-12"},[n("autosize-textarea",{attrs:{disabled:!0,rows:"2",name:t.getAnswerName(s),placeholder:t.trans("exam.online_exam_answer")},model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"question.answer"}})],1)]):t._e(),t._v(" "),n("div",{staticClass:"clearfix"})])})),0)]):t._e()])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=report.js.map?id=1141b0633323961e4fd8