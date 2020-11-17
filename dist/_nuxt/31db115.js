(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(t,e,n){"use strict";n.r(e);n(39);var o=n(6),l=n(53),r=n.n(l),c=n(1),d=n(220),m=n.n(d),v=n(217),f=c.a.extend({name:"Quotation",data:function(){return{businessMail:{business:"",ruc:"",name:"",phone:"",email:"",consult:""}}},methods:{sendMail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=t.$data.businessMail,e.next=3,t.loginApiMail();case 3:return n=e.sent,o={"Content-Type":"application/json",Authorization:n},e.prev=5,e.next=8,r.a.post(v.URL_MAIL+"/mailweb/",data,{headers:o});case 8:l=e.sent,m.a.fire({title:"Enviado.",html:"Correo Enviado Con Exito",icon:"success",confirmButtonText:"Aceptar"}),t.$data.businessMail={},console.log(l),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),m.a.fire({title:"Error.",html:"¡Ocurrio un error!",icon:"error",confirmButtonText:"Aceptar"}),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})))()},loginApiMail:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={secret:v.SECRET_TOKEN},n="",t.prev=2,t.next=5,r.a.post(v.URL_MAIL+"/login",e);case 5:o=t.sent,console.log(o),n=o.data.token,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}}),h=n(15),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-5 d-flex"},[n("div",{staticClass:"appointment-wrap p-4 p-lg-5 d-flex align-items-center"},[n("form",{staticClass:"appointment-form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.sendMail(e)}}},[n("h3",[t._v("Solicita una cotización")]),t._v(" "),n("div",{},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.business,expression:"businessMail.business"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Empresa"},domProps:{value:t.businessMail.business},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"business",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.ruc,expression:"businessMail.ruc"}],staticClass:"form-control",attrs:{type:"number",placeholder:"RUC / DNI"},domProps:{value:t.businessMail.ruc},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"ruc",e.target.value)}}})])]),t._v(" "),n("div",{},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.name,expression:"businessMail.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Apellidos y Nombres"},domProps:{value:t.businessMail.name},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.phone,expression:"businessMail.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Celular"},domProps:{value:t.businessMail.phone},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"phone",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.email,expression:"businessMail.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Correo Electrónico"},domProps:{value:t.businessMail.email},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"email",e.target.value)}}})])]),t._v(" "),n("div",{},[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.consult,expression:"businessMail.consult"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Escribe tu consulta aquí"},domProps:{value:t.businessMail.consult},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"consult",e.target.value)}}})]),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("input",{staticClass:"btn btn-secondary py-3 px-4",attrs:{type:"submit",value:"Enviar"}})])}],!1,null,"319642dd",null);e.default=component.exports},217:function(t,e){t.exports={URL_MAIL:"https://api-mail.holosalud.org",SECRET_TOKEN:"miclavedetokens"}},228:function(t,e,n){"use strict";n.r(e);var o={name:"price",components:{Quotation:n(216).default},head:function(){return{title:"HoloSalud | Cotizacion"}}},l=n(15),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("section",{staticClass:"ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex"},[this._m(1),this._v(" "),e("Quotation")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero-wrap hero-wrap-2",staticStyle:{"background-image":"url('/images/cotizacionesfondo.jpg')"},attrs:{"data-stellar-background-ratio":"0.5"}},[e("div",{staticClass:"overlay"}),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row no-gutters slider-text align-items-end justify-content-start"},[e("div",{staticClass:"col-md-9 pb-5"},[e("p",{staticClass:"breadcrumbs"},[e("span",{staticClass:"mr-2"},[e("a",{attrs:{href:"index.html"}},[this._v("Inicio "),e("i",{staticClass:"fa fa-chevron-right"})])]),this._v(" "),e("span",[this._v("Cotizaciones "),e("i",{staticClass:"fa fa-chevron-right"})])]),this._v(" "),e("h1",{staticClass:"mb-3 bread"},[this._v("Cotizaciones")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-7 py-5"},[n("div",{staticClass:"py-lg-5"},[n("div",{staticClass:"row justify-content-center pb-5"},[n("div",{staticClass:"col-md-12 heading-section"},[n("h2",{staticClass:"mb-3"},[t._v("Protocolos comunes de "),n("span",[t._v("Holosalud")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-ambulance"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Prueba Rápida Covid19")])])])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-ophthalmologist"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Protocolo Conductor")])])])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-ophthalmologist"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Protocolo Operativo")])])])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-ophthalmologist"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Protocolo Administrativo")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Quotation:n(216).default})}}]);