(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ZuF2:function(t,o,e){"use strict";var r={methods:{getConfig:function(t){return helper.getConfig(t)}}},s=e("KHd+"),a=Object(s.a)(r,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("p",{staticClass:"text-center"},[o("small",[this._v(this._s(this.getConfig("footer_credit"))+" "+this._s(this.trans("general.version")+" "+this.getConfig("v")))])])])}),[],!1,null,null,null);o.a=a.exports},q7bP:function(t,o,e){"use strict";e.r(o);var r={components:{guestFooter:e("ZuF2").a},data:function(){return{twoFactorForm:new Form({two_factor_code:""})}},mounted:function(){helper.getConfig("two_factor_security")||this.$router.push("/dashboard"),helper.getConfig("mode")||(this.twoFactorForm.two_factor_code=helper.getAuthUser("two_factor_code"))},methods:{logout:function(){var t=this;helper.logout().then((function(){t.$store.dispatch("resetAuthUserDetail"),t.$router.push("/login")}))},submit:function(){var t=this,o=this.$loading.show();this.twoFactorForm.post("/api/auth/security").then((function(e){toastr.success(i18n.auth.two_factor_security_verified),o.hide();var r="/dashboard";helper.hasRole("admin")&&helper.getConfig("setup_wizard")&&(r="/setup"),t.$router.push(r)})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},getAuthUser:function(t){return helper.getAuthUser(t)}},computed:{getLogo:function(){return helper.getLogo()}}},s=e("KHd+"),a=Object(s.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{attrs:{id:"wrapper"}},[e("div",{staticClass:"login-register guest-page"},[e("div",{staticClass:"login-box card guest-box"},[e("div",{staticClass:"card-body p-4"},[e("img",{staticClass:"mx-auto d-block",staticStyle:{"max-width":"250px"},attrs:{src:t.getLogo}}),t._v(" "),e("center",{staticClass:"m-t-30"},[e("h4",{staticClass:"card-title m-t-10"},[t._v(t._s(t.getAuthUser("name")))])]),t._v(" "),e("form",{staticClass:"form-horizontal form-material",attrs:{id:"twoFactorForm"},on:{submit:function(o){return o.preventDefault(),t.submit(o)},keydown:function(o){return t.twoFactorForm.errors.clear(o.target.name)}}},[e("h3",{staticClass:"box-title m-b-20 text-center"},[t._v(t._s(t.trans("auth.two_factor_security")))]),t._v(" "),e("div",{staticClass:"form-group "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.twoFactorForm.two_factor_code,expression:"twoFactorForm.two_factor_code"}],staticClass:"form-control text-center",attrs:{type:"text",name:"two_factor_code",placeholder:t.trans("auth.two_factor_code")},domProps:{value:t.twoFactorForm.two_factor_code},on:{input:function(o){o.target.composing||t.$set(t.twoFactorForm,"two_factor_code",o.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.twoFactorForm,"prop-name":"two_factor_code"}})],1),t._v(" "),e("div",{staticClass:"form-group text-center m-t-20"},[e("div",{staticClass:"col-xs-12"},[e("button",{staticClass:"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light",attrs:{type:"submit"}},[t._v(t._s(t.trans("auth.confirm")))])])]),t._v(" "),e("div",{staticClass:"form-group m-b-0"},[e("div",{staticClass:"col-sm-12 text-center"},[e("p",[e("a",{attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.logout(o)}}},[e("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.trans("auth.logout")))])])])])])],1),t._v(" "),e("guest-footer")],1)])])}),[],!1,null,null,null);o.default=a.exports}}]);
//# sourceMappingURL=security.js.map?id=14c5ef09900739dbd670