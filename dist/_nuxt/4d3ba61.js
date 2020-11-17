(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(t,e,n){"use strict";n.r(e);n(39);var o=n(6),l=n(53),c=n.n(l),r=n(1),d=n(220),v=n.n(d),m=n(217),f=r.a.extend({name:"Quotation",data:function(){return{businessMail:{business:"",ruc:"",name:"",phone:"",email:"",consult:""}}},methods:{sendMail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=t.$data.businessMail,e.next=3,t.loginApiMail();case 3:return n=e.sent,o={"Content-Type":"application/json",Authorization:n},e.prev=5,e.next=8,c.a.post(m.URL_MAIL+"/mailweb/",data,{headers:o});case 8:l=e.sent,v.a.fire({title:"Enviado.",html:"Correo Enviado Con Exito",icon:"success",confirmButtonText:"Aceptar"}),t.$data.businessMail={},console.log(l),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),v.a.fire({title:"Error.",html:"¡Ocurrio un error!",icon:"error",confirmButtonText:"Aceptar"}),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})))()},loginApiMail:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={secret:m.SECRET_TOKEN},n="",t.prev=2,t.next=5,c.a.post(m.URL_MAIL+"/login",e);case 5:o=t.sent,console.log(o),n=o.data.token,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}}),C=n(15),component=Object(C.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-5 d-flex"},[n("div",{staticClass:"appointment-wrap p-4 p-lg-5 d-flex align-items-center"},[n("form",{staticClass:"appointment-form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.sendMail(e)}}},[n("h3",[t._v("Solicita una cotización")]),t._v(" "),n("div",{},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.business,expression:"businessMail.business"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Empresa"},domProps:{value:t.businessMail.business},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"business",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.ruc,expression:"businessMail.ruc"}],staticClass:"form-control",attrs:{type:"number",placeholder:"RUC / DNI"},domProps:{value:t.businessMail.ruc},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"ruc",e.target.value)}}})])]),t._v(" "),n("div",{},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.name,expression:"businessMail.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Apellidos y Nombres"},domProps:{value:t.businessMail.name},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.phone,expression:"businessMail.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Celular"},domProps:{value:t.businessMail.phone},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"phone",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.email,expression:"businessMail.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Correo Electrónico"},domProps:{value:t.businessMail.email},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"email",e.target.value)}}})])]),t._v(" "),n("div",{},[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.businessMail.consult,expression:"businessMail.consult"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Escribe tu consulta aquí"},domProps:{value:t.businessMail.consult},on:{input:function(e){e.target.composing||t.$set(t.businessMail,"consult",e.target.value)}}})]),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("input",{staticClass:"btn btn-secondary py-3 px-4",attrs:{type:"submit",value:"Enviar"}})])}],!1,null,"319642dd",null);e.default=component.exports},217:function(t,e){t.exports={URL_MAIL:"https://api-mail.holosalud.org",SECRET_TOKEN:"miclavedetokens"}},218:function(t,e,n){"use strict";n.r(e);var o={name:"Doctors"},l=n(15),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ftco-section bg-light"},[n("div",{staticClass:"container-fluid px-5"},[n("div",{staticClass:"row justify-content-center mb-5 pb-2"},[n("div",{staticClass:"col-md-8 text-center heading-section"},[n("h2",{staticClass:"mb-4"},[t._v("Nuestros Doctores Calificados")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-lg-3"},[n("div",{staticClass:"staff"},[n("div",{staticClass:"img-wrap d-flex align-items-stretch"},[n("div",{staticClass:"img align-self-stretch",staticStyle:{"background-image":"url(/images/drhuaman.png)"}})]),t._v(" "),n("div",{staticClass:"text text-center",staticStyle:{position:"static !important"}},[n("h3",{staticClass:"mb-2"},[t._v("Dr. Huaman Pisconti Manuel")]),t._v(" "),n("span",{staticClass:"position mb-2"},[t._v("Médico Ocupacional")]),t._v(" "),n("div",{staticClass:"faded"},[n("p",[t._v("Magister en Salud Ocupacional, Miembro de la Sociedad Peruana de Salud Ocupacional y Miembro de la Comision Internacional en Salud Ocupacional, Especialista en Cardiología egresado del Hospital Nacional Edgardo Rebagliatti Martins.\n\n              ")]),t._v(" "),n("ul",{staticClass:"ftco-social text-center"},[n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center",attrs:{href:"https://twitter.com/HOLOSALUD_CARD"}},[n("span",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center",attrs:{href:"https://www.facebook.com/cardioholosalud"}},[n("span",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center",attrs:{href:"#"}},[n("span",{staticClass:"fa fa-instagram"})])])])])])])]),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-3"},[n("div",{staticClass:"staff"},[n("div",{staticClass:"img-wrap d-flex align-items-stretch"},[n("div",{staticClass:"img align-self-stretch",staticStyle:{"background-image":"url(/images/drmarlon.jpeg)"}})]),t._v(" "),n("div",{staticClass:"text text-center",staticStyle:{position:"static !important"}},[n("h3",{staticClass:"mb-2"},[t._v("Dr. Marlon Yovera Aldana")]),t._v(" "),n("span",{staticClass:"position mb-2"},[t._v("Auditor Médico")]),t._v(" "),n("div",{staticClass:"faded"},[n("p",[t._v("Auditor Médico de la Clinica Holosalud 2013-actual, Auditor en sistemas de gestion en seguridad y salud ocupacional ")]),t._v(" "),n("ul",{staticClass:"ftco-social text-center"},[n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center",attrs:{target:"_blank"}},[n("span",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center",attrs:{target:"_blank"}},[n("span",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center",attrs:{target:"_blank"}},[n("span",{staticClass:"fa fa-instagram"})])])])])])])]),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-3"},[n("div",{staticClass:"staff"},[n("div",{staticClass:"img-wrap d-flex align-items-stretch"},[n("div",{staticClass:"img align-self-stretch",staticStyle:{"background-image":"url(/images/drarafo.jpeg)"}})]),t._v(" "),n("div",{staticClass:"text text-center",staticStyle:{position:"static !important"}},[n("h3",{staticClass:"mb-2"},[t._v("Dra. Betty Rossana Raffo Flores")]),t._v(" "),n("span",{staticClass:"position mb-2"},[t._v("Médico Cirujano")]),t._v(" "),n("div",{staticClass:"faded"},[n("p",[t._v('Medicina Humana en la Universidad Nacional "San Luis Gonzaga de Ica", Maestría en salud ocupacional Universidad Alas Peruanas.')]),t._v(" "),n("ul",{staticClass:"ftco-social text-center"},[n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center"},[n("span",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center"},[n("span",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center"},[n("span",{staticClass:"fa fa-instagram"})])])])])])])]),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-3"},[n("div",{staticClass:"staff"},[n("div",{staticClass:"img-wrap d-flex align-items-stretch"},[n("div",{staticClass:"img align-self-stretch",staticStyle:{"background-image":"url(/images/drcesar.jpeg)"}})]),t._v(" "),n("div",{staticClass:"text text-center",staticStyle:{position:"static !important"}},[n("h3",{staticClass:"mb-2"},[t._v("Dr. Cesar Cruzalegui")]),t._v(" "),n("span",{staticClass:"position mb-2"},[t._v("Auditor Medico General")]),t._v(" "),n("div",{staticClass:"faded"},[n("p",[t._v("Supersivor de gestion y seguridad y salud ocupacional, Auditor Médico General de Holosalud, Auditor en sistemas de gestion en seguridad y salud ocupacional")]),t._v(" "),n("ul",{staticClass:"ftco-social text-center"},[n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center"},[n("span",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center"},[n("span",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"d-flex align-items-center justify-content-center"},[n("span",{staticClass:"fa fa-instagram"})])])])])])])])])])])}],!1,null,"12f4160c",null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var o={name:"Services"},l=n(15),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ftco-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center mb-5 pb-2"},[n("div",{staticClass:"col-md-8 text-center heading-section"},[n("h2",{staticClass:"mb-4"},[t._v(" Servicios de "),n("span",[t._v("Holosalud")])])])]),t._v(" "),n("div",{staticClass:"row tabulation mt-4"},[n("div",{staticClass:"col-md-3"},[n("ul",{staticClass:"nav nav-pills nav-fill d-block w-100"},[n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link active d-flex align-items-centere py-4",attrs:{"data-toggle":"tab",href:"#services-1"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Salud Ocupacional")])])]),t._v(" "),n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link py-4 d-flex align-items-center",attrs:{"data-toggle":"tab",href:"#services-2"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Oftalmología")])])]),t._v(" "),n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link py-4 d-flex align-items-center",attrs:{"data-toggle":"tab",href:"#services-3"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Audiometría")])])]),t._v(" "),n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link py-4 d-flex align-items-center",attrs:{"data-toggle":"tab",href:"#services-4"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Rayos X")])])]),t._v(" "),n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link py-4 d-flex align-items-center",attrs:{"data-toggle":"tab",href:"#services-5"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Espirometría")])])]),t._v(" "),n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link d-flex align-items-centerm py-4",attrs:{"data-toggle":"tab",href:"#services-6"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Psicología")])])]),t._v(" "),n("li",{staticClass:"nav-item text-left"},[n("a",{staticClass:"nav-link d-flex align-items-centerm py-4",attrs:{"data-toggle":"tab",href:"#services-7"}},[n("span",{staticClass:"flaticon-health flaticon mr-3"}),t._v(" "),n("span",[t._v("Laboratorio")])])])])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"tab-content pt-4 pt-md-0 pl-md-3"},[n("div",{staticClass:"tab-pane container p-0 active",attrs:{id:"services-1"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/so.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Salud Ocupacional")])]),t._v(" "),n("p",[t._v("El servicio de Salud Ocupacional contribuye a la identificación y al análisis de las condiciones que, dentro del ambiente de trabajo, pueden afectar a corto, mediano o largo plazo la salud de los trabajadores, ofreciendo estrategias de intervención y medidas preventivas para ejercer un mayor control sobre ellas. Asimismo, un adecuado Sistema de Gestión de Seguridad y Salud Ocupacional permite evitar la aparición de enfermedades ocupacionales y disminuir los índices de accidentabilidad, facilitando así un desempeño laboral óptimo a la vez que garantiza la salud y el bienestar de los trabajadores. Contamos con una infraestructura de primer nivel, un staff de profesionales altamente calificados y todos los servicios en un solo lugar....")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"saludocupacional"}},[t._v("Leer más")])])])])]),t._v(" "),n("div",{staticClass:"tab-pane container p-0 fade",attrs:{id:"services-2"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/dept-2.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Oftalmología")])]),t._v(" "),n("p",[t._v(" La oftalmología es la especialidad médica encargada del estudio y tratamiento de las enfermedades del ojo y estructuras perioculares. La visión es uno de los sentidos más preciados por ello es imprescindible garantizar un buen cuidado, tanto de forma preventiva en situaciones de salud mediante exámenes rutinarios como en situaciones de enfermedad.\n\n                  Además de las múltiples patologías oculares, el ojo puede verse afectado por numerosas patologías generales del organismo y ser el primer órgano afectado. El conocimiento de los síntomas desencadenados es fundamental en ocasiones para llegar a un diagnóstico adecuado de estas enfermedades sistémicas o generales.\n\n                  Durante los últimos años la oftalmología... ")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"oftalmologia"}},[t._v("Leer más")])])])])]),t._v(" "),n("div",{staticClass:"tab-pane container p-0 fade",attrs:{id:"services-3"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/audiometria3.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Audiometría")])]),t._v(" "),n("p",[t._v("Este examen evalúa su capacidad para escuchar sonidos. Los sonidos varían de acuerdo con el volumen o fuerza (intensidad) y con la velocidad de vibración de las ondas sonoras (tono).\n\n                  La audición se produce cuando las ondas sonoras estimulan los nervios del oído interno. El sonido luego viaja a lo largo de las rutas nerviosas hasta el cerebro.\n\n                  Las ondas sonoras pueden viajar hasta el oído interno a través del conducto auditivo externo, el tímpano y los huesos del oído medio (conducción del aire). También pueden pasar a través de los huesos que se encuentran alrededor y detrás del oído (conducción ósea).\n\n                  La INTENSIDAD del sonido se mide en decibeles (dB):\n\n                  Un susurro es aproximadamente 20 dB.\n                  La música fuerte (algunos conciertos) es alrededor....")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"audiometria"}},[t._v("Leer más")])])])])]),t._v(" "),n("div",{staticClass:"tab-pane container p-0 fade",attrs:{id:"services-4"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/rayosxxx.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Rayos X")])]),t._v(" "),n("p",[t._v("Son una forma de radiación electromagnética, tal como la luz visible.\n\n                  Una máquina de rayos x envía partículas de estos rayos a través del cuerpo. Las imágenes se registran en una computadora o en una película.\n\n                  Las estructuras que son densas, como los huesos, bloquearán la mayoría de las partículas de rayos x y aparecerán de color blanco.\n                  El metal y los medios de contraste (tintes especiales utilizados para resaltar áreas del cuerpo) también aparecerán de color blanco.\n                  Las estructuras que contienen aire se verán negras, y los músculos, la grasa y los líquidos aparecerán como sombras de color gris.")]),t._v(" "),n("p",[t._v("El Servicio de Oftalmología cuenta con modernos equipos totalmente computarizados para una Evaluación de Calidad, entre los que podemos... ")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"rayosx"}},[t._v("Leer más")])])])])]),t._v(" "),n("div",{staticClass:"tab-pane container p-0 fade",attrs:{id:"services-5"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/espirometria.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Espirometría")])]),t._v(" "),n("p",[t._v("La respiración es un complejo mecanismo que requiere de tres procesos fundamentales: ventilación pulmonar, difusión de los gases, transporte de los mismos desde y hasta la célula. Además para un correcto funcionamiento precisa de una regulación neurológica.\n\n                  La espirometría es una prueba diagnóstica que nos ayuda al conocimiento de la ventilación pulmonar. Se engloba dentro de las llamadas pruebas de función pulmonar. En ella se miden los flujos y volúmenes respiratorios útiles para el diagnóstico y seguimiento de algunas patologías respiratorias como la EPOC o el asma. icha espirometría puede ser simple o forzada.\n                  Aunque el uso de la espirometría está muy extendido, diferentes estudios han puesto de manifiesto la insuficiente utilización de la espirometría...\n                ")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"espirometria"}},[t._v("Leer más")])])])])]),t._v(" "),n("div",{staticClass:"tab-pane container p-0 fade",attrs:{id:"services-6"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/psicologia.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Psicología")])]),t._v(" "),n("p",[t._v("la psicología es la ciencia que estudia o investiga los procesos y los estados conscientes, así como sus orígenes y sus efectos.\n\n                  Dentro de la psicología son posibles y justificables al menos dos enfoques: el de las ciencias naturales, que busca una explicación causal, y el de las ciencias filosóficas, que busca una explicación de significado y de sentido.\n\n                  Gran parte de las investigaciones en psicología se llevan a cabo a través del método de la observación sistemática. En algunos casos, la observación puede ser ocasional.")]),t._v(" "),n("p",[t._v("Nos basamos en la GEMO OO2 – GUÍA DE PRÁCTICA CLÍNICA PARA LA EVALUACIÓN PSICOLÓGICA OCUPACIONAL.\n                  Consiste en la evaluación del trabajador en sus diferentes aspectos...")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"psicologia"}},[t._v("Leer más")])])])])]),t._v(" "),n("div",{staticClass:"tab-pane container p-0 fade",attrs:{id:"services-7"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-5 img",staticStyle:{"background-image":"url(/images/lab2.jpg)"}}),t._v(" "),n("div",{staticClass:"col-md-7 text pl-md-4"},[n("h3",[n("a",{attrs:{href:"#"}},[t._v("Laboratorio")])]),t._v(" "),n("p",[t._v("En área del laboratorio contamos con equipos avanzados y personal capacitado con amplia experiencia profesional brindando así resultados en el menor tiempo posible, con la mayor precisión y exactitud que serán de gran apoyo para su diagnostico, aplicando las normas estandarizadas con todas las medidas de bioseguridad para el cuidado de usted y del personal.")]),t._v(" "),n("p",[t._v("1. Hematología ")]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"fa fa-check"}),t._v("Microscopio Greetmed modelo GT116-201 ")]),t._v(" "),n("li",[n("span",{staticClass:"fa fa-check"}),t._v("Micro centrifuga K modelo KHT-410E Bañ...")])]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-secondary btn-outline-secondary py-2 px-3",attrs:{href:"laboratorio"}},[t._v("Leer más")])])])])])])])])])])}],!1,null,"49401f87",null);e.default=component.exports},230:function(t,e,n){"use strict";n.r(e);var o=n(219),l=n(216),c=n(218),r=n(1),d=(n(217),r.a.extend({components:{Services:o.default,Quotation:l.default,Doctors:c.default},head:function(){return{title:"HoloSalud | Inicio"}},data:function(){return{}},methods:{cardio:function(){var t=this.$router.resolve({path:"/cardio"});window.open(t.href="http://manuelhuaman.com/","_blank")}}})),v=n(15),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero-wrap js-fullheight",staticStyle:{"background-image":"url('/images/bg_2.jpg')"},attrs:{"data-stellar-background-ratio":"0.5"}},[n("div",{staticClass:"overlay"}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row no-gutters slider-text js-fullheight align-items-center justify-content-end",attrs:{"data-scrollax-parent":"true"}},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"mt-5"},[n("h1",{staticClass:"mb-4"},[t._v("PRIMER CENTRO MEDICO DE SALUD OCUPACIONAL EN ICA")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("Nuestro médico ocupacional, el Dr. Manuel Antonio Huaman Pisconti Magister en Salud Ocupacional, es miembro de la Sociedad Peruana de Salud Ocupacional, miembro de la Comisión Internacional en Salud Ocupacional, miembro de la Sociedad Española de Cardiología y Auditor Externo del Ministerio de Trabajo.")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7 col-lg-10"},[n("form",{staticClass:"appointment-form-intro",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.cardio(e)}}},[t._m(0)])])])])])])])]),t._v(" "),n("section",{staticClass:"ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex"},[t._m(1),t._v(" "),n("Quotation")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("Services"),t._v(" "),n("Doctors"),t._v(" "),n("section",{staticClass:"ftco-facts img ftco-counter",staticStyle:{"background-image":"url(/images/bg_3.jpg)"}},[n("div",{staticClass:"overlay"}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("transition",{attrs:{name:"ftco-animate"}},[n("div",{staticClass:"col-md-3 d-flex justify-content-center counter-wrap"},[n("div",{staticClass:"block-18 p-4"},[n("div",{staticClass:"text"},[n("strong",{staticClass:"number",attrs:{"data-number":"7"}},[t._v("0")]),t._v(" "),n("span",[t._v("Años de experiencia")])])])])]),t._v(" "),n("transition",{attrs:{name:"ftco-animate"}},[n("div",{staticClass:"col-md-3 d-flex justify-content-center counter-wrap"},[n("div",{staticClass:"block-18 p-4"},[n("div",{staticClass:"text"},[n("strong",{staticClass:"number",attrs:{"data-number":"40000"}},[t._v("0")]),t._v(" "),n("span",[t._v("Pacientes atendidos")])])])])]),t._v(" "),n("transition",{attrs:{name:"ftco-animate"}},[n("div",{staticClass:"col-md-3 d-flex justify-content-center counter-wrap"},[n("div",{staticClass:"block-18 p-4"},[n("div",{staticClass:"text"},[n("strong",{staticClass:"number",attrs:{"data-number":"20"}},[t._v("0")]),t._v(" "),n("span",[t._v("Profesionales")])])])])]),t._v(" "),n("transition",{attrs:{name:"ftco-animate"}},[n("div",{staticClass:"col-md-3 d-flex justify-content-center counter-wrap"},[n("div",{staticClass:"block-18 p-4"},[n("div",{staticClass:"text"},[n("strong",{staticClass:"number",attrs:{"data-number":"100"}},[t._v("0")]),t._v(" "),n("span",[t._v("Personal eficiente ")])])])])])],1)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-field"},[e("div",{staticClass:"select-wrap"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-chevron-down"})]),this._v(" "),e("select",{staticClass:"form-control",attrs:{name:"",id:"iddepartamenos"}},[e("option",{attrs:{value:""}},[this._v("Seleccione Especialidad")]),this._v(" "),e("option",{attrs:{value:"cardiologia"}},[this._v("Cardiología")])])])])]),this._v(" "),e("div",{staticClass:"form-group"},[e("input",{staticClass:"btn-custom form-control py-3 px-4",attrs:{type:"submit",value:"Buscar"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-7 py-5"},[n("div",{staticClass:"py-lg-5"},[n("div",{staticClass:"row justify-content-center pb-5"},[n("div",{staticClass:"col-md-12 heading-section"},[n("h2",{staticClass:"mb-3"},[t._v("Bienvenido a "),n("span",[t._v("Holosalud")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-ambulance"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Prueba Rápida Covid19")]),t._v(" "),n("p",[t._v("Estamos realizando las pruebas rapidas del Covid 19, disminuyendo la preocupación de la población iqueña.")])])])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-ophthalmologist"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Staff Médico")]),t._v(" "),n("p",[t._v("En HOLOSALUD contamos con doctores que cubren todas las especialidades médicas necesarias para brindarle a su empresa una evaluación médica ocupacional de calidad.")])])])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-flag"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Estamos Ubicados")]),t._v(" "),n("p",[t._v("Nuestro centro médico se encuentra ubicado en una zona accesible para sus trabajadores, un lugar comodo y ambientado con todas las prevenciones del caso, visitanos ya!")])])])]),t._v(" "),n("div",{staticClass:"col-md-12 col-lg-6 d-flex align-self-stretch"},[n("div",{staticClass:"media block-6 services d-flex"},[n("div",{staticClass:"icon justify-content-center align-items-center d-flex"},[n("span",{staticClass:"flaticon-stethoscope"})]),t._v(" "),n("div",{staticClass:"media-body pl-md-4"},[n("h3",{staticClass:"heading mb-3"},[t._v("Médico Ocupacional")]),t._v(" "),n("p",[t._v("Nuestro médico ocupacional el Dr. Manuel Huaman Pisconti, es Mágister en Salud Ocupacional y miembro de la Sociedad Peruana de Salud Ocupacional; sus trabajadores no pueden estar en mejores manos.")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ftco-counter img ftco-section ftco-no-pt ftco-no-pb",attrs:{id:"about-section"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex"},[n("div",{staticClass:"col-md-6 col-lg-5 d-flex"},[n("div",{staticClass:"img w-100 d-flex align-self-stretch align-items-center",staticStyle:{"background-image":"url(/images/about.jpg)"}})]),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-7 pl-lg-5 py-md-5"},[n("div",{staticClass:"py-md-5"},[n("div",{staticClass:"row justify-content-start pb-3"},[n("div",{staticClass:"col-md-12 heading-section p-4 p-lg-5"},[n("h2",{staticClass:"mb-4"},[t._v("Somos "),n("span",[t._v("HOLOSALUD")]),t._v(" Especialistas cuidando tu salud")]),t._v(" "),n("p",[t._v("Nuestro objetivo es que puedas tener las mejores condiciones para ingresar a un trabajo, no dudes de los servicios que te ofrecemos.")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-primary py-3 px-4",attrs:{href:"price"}},[t._v("Solicita tu cotización")]),t._v(" "),n("a",{staticClass:"btn btn-secondary py-3 px-4",attrs:{href:"contact"}},[t._v("Contacténos")])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"ftco-intro img",staticStyle:{"background-image":"url(/images/bg_3.jpg)"}},[e("div",{staticClass:"overlay"}),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-md-7"},[e("h2",[this._v("Tú salud es nuestra prioridad")]),this._v(" "),e("p",[this._v("Trabaja con nosotros y dale un servicio de calidad a tus colaboradores.")]),this._v(" "),e("p",{staticClass:"mb-0"},[e("a",{staticClass:"btn btn-white px-4 py-3",attrs:{href:"price"}},[this._v("Solicita una cotización")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Quotation:n(216).default,Services:n(219).default,Doctors:n(218).default})}}]);