(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{i7Hq:function(s,t,e){"use strict";e.r(t);var i={data:function(){return{module:this.$route.params.module,roles:[],permissions:[],modules:[],assigned_permissions:[],permissionForm:new Form({module:"",roles:[]},!1),help_topic:""}},mounted:function(){helper.hasRole("admin")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{getPreRequisite:function(){var s=this,t=this.$loading.show();this.permissionForm.roles=[],this.permissionForm.module=this.module,axios.get("/api/permission/"+this.module+"/pre-requisite").then((function(e){s.roles=e.roles,s.permissions=e.permissions,s.assigned_permissions=e.assigned_permissions,s.modules=e.modules,s.roles.forEach((function(t){var e=s.assigned_permissions.find((function(s){return s.role==t.name}));s.permissionForm.roles.push({name:t.name,permissions:"undefined"!=e?e.permissions:[]})})),t.hide()})).catch((function(s){t.hide(),helper.showErrorMsg(s)}))},getConfig:function(s){return helper.getConfig(s)},toWord:function(s){return helper.toWord(s)},submit:function(){var s=this.$loading.show();this.permissionForm.module=this.module,this.permissionForm.post("/api/permission/module").then((function(t){toastr.success(t.message),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getDefaultRole:function(s){return helper.getDefaultRole(s)}},watch:{"$route.params.module":function(s){this.module=s,this.getPreRequisite()}}},o=e("KHd+"),n=Object(o.a)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[s._v(s._s(s.trans("configuration.assign_permission_module",{module:s.trans(s.module+"."+s.module)})))])]),s._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm d-none d-sm-inline ",on:{click:function(t){return s.$router.push("/configuration/permission")}}},[e("i",{staticClass:"fas fa-list"}),s._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[s._v(s._s(s.trans("configuration.permission")))])]),s._v(" "),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moduleLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-boxes"}),s._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[s._v(s._s(s.trans("configuration.locale_module"))+" "),e("span",[s._v("("+s._s(s.toWord(s.module))+")")]),s._v(" "),e("i",{staticClass:"fas fa-chevron-down"})])]),s._v(" "),e("div",{class:["dropdown-menu","ltr"==s.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moduleLink"}},s._l(s.modules,(function(t){return e("button",{staticClass:"dropdown-item",staticStyle:{cursor:"pointer"},on:{click:function(e){return s.$router.push("/configuration/permission/"+t)}}},[s._v("\n                                "+s._s(s.trans(t+"."+t))+"  "),t==s.module?e("span",{staticClass:"pull-right"},[e("i",{staticClass:"fas fa-check"})]):s._e()])})),0)]),s._v(" "),e("help-button",{on:{clicked:function(t){s.help_topic="configuration.permission"}}})],1)])])]),s._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-4"},[e("div",{staticClass:"table-responsive m-b-20"},[e("form",{on:{submit:function(t){return t.preventDefault(),s.proceed(t)},keydown:function(t){return s.permissionForm.errors.clear(t.target.name)}}},[e("table",{staticClass:"table table-hover"},[e("thead",[e("tr",[e("th",[s._v(s._s(s.trans("configuration.permission")))]),s._v(" "),s._l(s.permissionForm.roles,(function(t){return e("th",[s._v(s._s(s.toWord(t.name)))])}))],2)]),s._v(" "),e("tbody",s._l(s.permissions,(function(t){return e("tr",[e("td",[s._v(s._s(s.toWord(t)))]),s._v(" "),s._l(s.permissionForm.roles,(function(i){return e("td",[e("label",{staticClass:"custom-control custom-checkbox",staticStyle:{cursor:"pointer"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.permissions,expression:"role_permission.permissions"}],staticClass:"custom-control-input",attrs:{type:"checkbox",disabled:i.name==s.getDefaultRole("admin")},domProps:{value:t,checked:Array.isArray(i.permissions)?s._i(i.permissions,t)>-1:i.permissions},on:{change:function(e){var o=i.permissions,n=e.target,r=!!n.checked;if(Array.isArray(o)){var a=t,l=s._i(o,a);n.checked?l<0&&s.$set(i,"permissions",o.concat([a])):l>-1&&s.$set(i,"permissions",o.slice(0,l).concat(o.slice(l+1)))}else s.$set(i,"permissions",r)}}}),s._v(" "),e("span",{staticClass:"custom-control-label"})])])}))],2)})),0)]),s._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light pull-right ",attrs:{type:"button"},on:{click:s.submit}},[s._v(s._s(s.trans("general.save")))])])])])])]),s._v(" "),e("right-panel",{attrs:{topic:s.help_topic}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=module.js.map?id=bfb96455867bb74c2d81