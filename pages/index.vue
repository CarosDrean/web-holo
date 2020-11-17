<template>
  <div>
    <section class="hero-wrap js-fullheight" style="background-image: url('/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
          <div class="col-lg-6 ftco-animate">
            <div class="mt-5">
              <h1 class="mb-4"> PRIMER CENTRO MEDICO DE SALUD OCUPACIONAL EN LA REGIÓN ICA</h1>
              <p class="mb-4">Nuestro médico ocupacional, el Dr. Manuel Antonio Huaman Pisconti Magister en Salud Ocupacional, es miembro de la Sociedad Peruana de Salud Ocupacional, miembro de la Comisión Internacional en Salud Ocupacional, miembro de la Sociedad Española de Cardiología y Auditor Externo del Ministerio de Trabajo.</p>
              <div class="row">
                <div class="col-md-7 col-lg-10">
                  <form action="#" class="appointment-form-intro ftco-animate">
                    <div class="d-flex">
                      <div class="form-group">
                        <div class="form-field">
                          <div class="select-wrap">
                            <div class="icon"><span class="fa fa-chevron-down"></span></div>
                            <select name="" id="iddepartamenos" class="form-control">
                              <option value="">Seleccione Especialidad</option>
                              <option value="">Cardiología</option>

                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="submit" value="Buscar" class="btn-custom form-control py-3 px-4">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-7 py-5">
            <div class="py-lg-5">
              <div class="row justify-content-center pb-5">
                <div class="col-md-12 heading-section ftco-animate">
                  <h2 class="mb-3">Bienvenido a <span>Holosalud</span></h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ambulance"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Prueba Rápida Covid19</h3>
                      <p>Estamos realizando las pruebas rapidas del Covid 19, disminuyendo la preocupación de la población iqueña.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ophthalmologist"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Staff Médico</h3>
                      <p>En HOLOSALUD contamos con doctores que cubren todas las especialidades médicas necesarias para brindarle a su empresa una evaluación médica ocupacional de calidad.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-flag"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Estamos Ubicados</h3>
                      <p>Nuestro centro médico se encuentra ubicado en una zona accesible para sus trabajadores, un lugar comodo y ambientado con todas las prevenciones del caso, visitanos ya!</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-stethoscope"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Médico Ocupacional</h3>
                      <p>Nuestro médico ocupacional el Dr. Manuel Huaman Pisconti, es Mágister en Salud Ocupacional y miembro de la Sociedad Peruana de Salud Ocupacional; sus trabajadores no pueden estar en mejores manos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 d-flex">
            <div class="appointment-wrap p-4 p-lg-5 d-flex align-items-center">
              <form action="#" class="appointment-form ftco-animate" @submit.prevent="sendMail">
                <h3>Solicita una cotización</h3>
                <div class="">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre de tu Empresa" v-model="businessMail.business">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ruc/DNI" v-model="businessMail.ruc">
                  </div>
                </div>
                <div class="">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombres y Apellidos" v-model="businessMail.name">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Celular" v-model="businessMail.phone">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Correo Electrónico" v-model="businessMail.email">
                  </div>
                </div>

                <div class="">
                  <div class="form-group">
                    <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="businessMail.consult" placeholder="Escribe tu consulta aquí"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Enviar" class="btn btn-secondary py-3 px-4">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-counter img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-6 col-lg-5 d-flex">
            <div class="img w-100 d-flex align-self-stretch align-items-center" style="background-image:url(/images/about.jpg);">
            </div>
          </div>
          <div class="col-md-6 col-lg-7 pl-lg-5 py-md-5">
            <div class="py-md-5">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section ftco-animate p-4 p-lg-5">
                  <h2 class="mb-4">Somos <span>HOLOSALUD</span> Especialistas cuidando tu salud</h2>
                  <p>Nuestro objetivo es que puedas tener las mejores condiciones para ingresar a un trabajo, no dudes de los servicios que te ofrecemos.</p>
                  <p><a href="price" class="btn btn-primary py-3 px-4">Solicita tu cotización</a> <a href="contact" class="btn btn-secondary py-3 px-4">Contacténos</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-intro img" style="background-image: url(/images/bg_3.jpg);">
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-7">
            <h2>Tú salud es nuestra prioridad</h2>
            <p>Trabaja con nosotros y dale un servicio de calidad a tus colaboradores.</p>
            <p class="mb-0"><a href="price" class="btn btn-white px-4 py-3">Solicita una cotización</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-2">
          <div class="col-md-8 text-center heading-section ftco-animate">
            <h2 class="mb-4"> Servicios de <span>Holosalud</span></h2>
          </div>
        </div>
        <div class="row tabulation mt-4 ftco-animate">
          <div class="col-md-3">
            <ul class="nav nav-pills nav-fill d-block w-100">
              <li class="nav-item text-left">
                <a class="nav-link active d-flex align-items-centere py-4" data-toggle="tab" href="#services-1"><span class="flaticon-health flaticon mr-3"></span> <span>Salud Ocupacional</span></a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4 d-flex align-items-center" data-toggle="tab" href="#services-2"><span class="flaticon-health flaticon mr-3"></span> <span>Oftalmología</span></a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4 d-flex align-items-center" data-toggle="tab" href="#services-3"><span class="flaticon-health flaticon mr-3"></span> <span>Audiometría</span></a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4 d-flex align-items-center" data-toggle="tab" href="#services-4"><span class="flaticon-health flaticon mr-3"></span> <span>Rayos X</span></a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4 d-flex align-items-center" data-toggle="tab" href="#services-5"><span class="flaticon-health flaticon mr-3"></span> <span>Espirometría</span></a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link d-flex align-items-centerm py-4" data-toggle="tab" href="#services-6"><span class="flaticon-health flaticon mr-3"></span> <span>Psicología</span></a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link d-flex align-items-centerm py-4" data-toggle="tab" href="#services-7"><span class="flaticon-health flaticon mr-3"></span> <span>Laboratorio</span></a>
              </li>
            </ul>
          </div>

          <div class="col-md-9">
            <div class="tab-content pt-4 pt-md-0 pl-md-3">
              <div class="tab-pane container p-0 active" id="services-1">
                <div class="row">
                  <div class="col-md-5 img"  style="background-image: url(/images/so.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Salud Ocupacional</a></h3>
                    <p>El servicio de Salud Ocupacional contribuye a la identificación y al análisis de las condiciones que, dentro del ambiente de trabajo, pueden afectar a corto, mediano o largo plazo la salud de los trabajadores, ofreciendo estrategias de intervención y medidas preventivas para ejercer un mayor control sobre ellas. Asimismo, un adecuado Sistema de Gestión de Seguridad y Salud Ocupacional permite evitar la aparición de enfermedades ocupacionales y disminuir los índices de accidentabilidad, facilitando así un desempeño laboral óptimo a la vez que garantiza la salud y el bienestar de los trabajadores. Contamos con una infraestructura de primer nivel, un staff de profesionales altamente calificados y todos los servicios en un solo lugar....</p>
                    <p><a href="saludocupacional" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>
                  </div>
                </div>
              </div>
              <div class="tab-pane container p-0 fade" id="services-2">
                <div class="row">
                  <div class="col-md-5 img" style="background-image: url(/images/dept-2.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Oftalmología</a></h3>
                    <p> La oftalmología es la especialidad médica encargada del estudio y tratamiento de las enfermedades del ojo y estructuras perioculares. La visión es uno de los sentidos más preciados por ello es imprescindible garantizar un buen cuidado, tanto de forma preventiva en situaciones de salud mediante exámenes rutinarios como en situaciones de enfermedad.

                      Además de las múltiples patologías oculares, el ojo puede verse afectado por numerosas patologías generales del organismo y ser el primer órgano afectado. El conocimiento de los síntomas desencadenados es fundamental en ocasiones para llegar a un diagnóstico adecuado de estas enfermedades sistémicas o generales.

                      Durante los últimos años la oftalmología... </p>

                    <p><a href="oftalmologia" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>

                  </div>
                </div>
              </div>
              <div class="tab-pane container p-0 fade" id="services-3">
                <div class="row">
                  <div class="col-md-5 img" style="background-image: url(/images/audiometria3.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Audiometría</a></h3>
                    <p>Este examen evalúa su capacidad para escuchar sonidos. Los sonidos varían de acuerdo con el volumen o fuerza (intensidad) y con la velocidad de vibración de las ondas sonoras (tono).

                      La audición se produce cuando las ondas sonoras estimulan los nervios del oído interno. El sonido luego viaja a lo largo de las rutas nerviosas hasta el cerebro.

                      Las ondas sonoras pueden viajar hasta el oído interno a través del conducto auditivo externo, el tímpano y los huesos del oído medio (conducción del aire). También pueden pasar a través de los huesos que se encuentran alrededor y detrás del oído (conducción ósea).

                      La INTENSIDAD del sonido se mide en decibeles (dB):

                      Un susurro es aproximadamente 20 dB.
                      La música fuerte (algunos conciertos) es alrededor....</p>
                    <p><a href="audiometria" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>
                  </div>
                </div>
              </div>
              <div class="tab-pane container p-0 fade" id="services-4">
                <div class="row">
                  <div class="col-md-5 img" style="background-image: url(/images/rayosxxx.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Rayos X</a></h3>
                    <p>Son una forma de radiación electromagnética, tal como la luz visible.

                      Una máquina de rayos x envía partículas de estos rayos a través del cuerpo. Las imágenes se registran en una computadora o en una película.

                      Las estructuras que son densas, como los huesos, bloquearán la mayoría de las partículas de rayos x y aparecerán de color blanco.
                      El metal y los medios de contraste (tintes especiales utilizados para resaltar áreas del cuerpo) también aparecerán de color blanco.
                      Las estructuras que contienen aire se verán negras, y los músculos, la grasa y los líquidos aparecerán como sombras de color gris.</p>
                    <p>El Servicio de Oftalmología cuenta con modernos equipos totalmente computarizados para una Evaluación de Calidad, entre los que podemos... </p>

                    <p><a href="rayosx" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>

                  </div>
                </div>
              </div>
              <div class="tab-pane container p-0 fade" id="services-5">
                <div class="row">
                  <div class="col-md-5 img" style="background-image: url(/images/espirometria.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Espirometría</a></h3>
                    <p>La respiración es un complejo mecanismo que requiere de tres procesos fundamentales: ventilación pulmonar, difusión de los gases, transporte de los mismos desde y hasta la célula. Además para un correcto funcionamiento precisa de una regulación neurológica.

                      La espirometría es una prueba diagnóstica que nos ayuda al conocimiento de la ventilación pulmonar. Se engloba dentro de las llamadas pruebas de función pulmonar. En ella se miden los flujos y volúmenes respiratorios útiles para el diagnóstico y seguimiento de algunas patologías respiratorias como la EPOC o el asma. icha espirometría puede ser simple o forzada.
                      Aunque el uso de la espirometría está muy extendido, diferentes estudios han puesto de manifiesto la insuficiente utilización de la espirometría...
                    </p>

                    <p><a href="espirometria" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p></div>
                </div>
              </div>
              <div class="tab-pane container p-0 fade" id="services-6">
                <div class="row">
                  <div class="col-md-5 img" style="background-image: url(/images/psicologia.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Psicología</a></h3>
                    <p>la psicología es la ciencia que estudia o investiga los procesos y los estados conscientes, así como sus orígenes y sus efectos.

                      Dentro de la psicología son posibles y justificables al menos dos enfoques: el de las ciencias naturales, que busca una explicación causal, y el de las ciencias filosóficas, que busca una explicación de significado y de sentido.

                      Gran parte de las investigaciones en psicología se llevan a cabo a través del método de la observación sistemática. En algunos casos, la observación puede ser ocasional.</p>
                    <p>Nos basamos en la GEMO OO2 – GUÍA DE PRÁCTICA CLÍNICA PARA LA EVALUACIÓN PSICOLÓGICA OCUPACIONAL.
                      Consiste en la evaluación del trabajador en sus diferentes aspectos...</p>
                    <p><a href="psicologia" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>

                  </div>
                </div>
              </div>
              <div class="tab-pane container p-0 fade" id="services-7">
                <div class="row">
                  <div class="col-md-5 img" style="background-image: url(/images/lab2.jpg);"></div>
                  <div class="col-md-7 text pl-md-4">
                    <h3><a href="#">Laboratorio</a></h3>
                    <p>En área del laboratorio contamos con equipos avanzados y personal capacitado con amplia experiencia profesional brindando así resultados en el menor tiempo posible, con la mayor precisión y exactitud que serán de gran apoyo para su diagnostico, aplicando las normas estandarizadas con todas las medidas de bioseguridad para el cuidado de usted y del personal.</p>
                    <p>1. Hematología </p>
                    <ul>
                      <li><span class="fa fa-check"></span>Microscopio Greetmed modelo GT116-201 </li>
                      <li><span class="fa fa-check"></span>Micro centrifuga K modelo KHT-410E Bañ...</li>
                    </ul>

                    <p><a href="laboratorio" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section bg-light">
      <div class="container-fluid px-5">
        <div class="row justify-content-center mb-5 pb-2">
          <div class="col-md-8 text-center heading-section ftco-animate">
            <h2 class="mb-4">Nuestros Doctores Calificados</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 ftco-animate">
            <div class="staff">
              <div class="img-wrap d-flex align-items-stretch">
                <div class="img align-self-stretch" style="background-image: url(/images/drhuaman.png);"></div>
              </div>
              <div class="text text-center">
                <h3 class="mb-2">Dr. Huaman Pisconti Manuel</h3>
                <span class="position mb-2">Médico Ocupacional</span>
                <div class="faded">
                  <p>Magister en Salud Ocupacional, Miembro de la Sociedad Peruana de Salud Ocupacional y Miembro de la Comision Internacional en Salud Ocupacional.

                  </p>
                  <ul class="ftco-social text-center">
                    <li class="ftco-animate"><a href="https://twitter.com/HOLOSALUD_CARD" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                    <li class="ftco-animate"><a href="https://www.facebook.com/cardioholosalud" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                    <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 ftco-animate">
            <div class="staff">
              <div class="img-wrap d-flex align-items-stretch">
                <div class="img align-self-stretch" style="background-image: url(/images/drhuaman.png);"></div>
              </div>
              <div class="text text-center">
                <h3 class="mb-2">Dr. Manuel Huaman Pisconti</h3>
                <span class="position mb-2">Cardiólogo</span>
                <div class="faded">
                  <p>Médico Cardiólogo del Hospital Regional de Ica, Especialista en Cardiología egresado del Hospital Nacional Edgardo Rebagliatti Martins</p>
                  <ul class="ftco-social text-center">
                    <li class="ftco-animate"><a href="https://twitter.com/HOLOSALUD_CARD" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                    <li class="ftco-animate"><a href="https://www.facebook.com/cardioholosalud" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                    <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--
           <div class="col-md-6 col-lg-3 ftco-animate">
             <div class="staff">
               <div class="img-wrap d-flex align-items-stretch">
                 <div class="img align-self-stretch" style="background-image: url(images/doc-3.jpg);"></div>
               </div>
               <div class="text text-center">
                 <h3 class="mb-2">Dr. Ian Smith</h3>
                 <span class="position mb-2">Dentist</span>
                 <div class="faded">
                   <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                   <ul class="ftco-social text-center">
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div class="col-md-6 col-lg-3 ftco-animate">
             <div class="staff">
               <div class="img-wrap d-flex align-items-stretch">
                 <div class="img align-self-stretch" style="background-image: url(images/doc-4.jpg);"></div>
               </div>
               <div class="text text-center">
                 <h3 class="mb-2">Dr. Alicia Henderson</h3>
                 <span class="position mb-2">Pediatrician</span>
                 <div class="faded">
                   <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                   <ul class="ftco-social text-center">
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                     <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                   </ul>
                 </div>
               </div>
             </div>
           </div> -->
         </div>
       </div>
     </section>

     <section class="ftco-facts img ftco-counter" style="background-image: url(/images/bg_3.jpg);">
       <div class="overlay"></div>
       <div class="container">
         <div class="row">
           <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
             <div class="block-18 p-4">
               <div class="text">
                 <strong class="number" data-number="7">0</strong>
                 <span>Años de experiencia</span>
               </div>
             </div>
           </div>
           <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
             <div class="block-18 p-4">
               <div class="text">
                 <strong class="number" data-number="40000">0</strong>
                 <span>Pacientes atendidos</span>
               </div>
             </div>
           </div>
           <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
             <div class="block-18 p-4">
               <div class="text">
                 <strong class="number" data-number="20">0</strong>
                 <span>Profesionales</span>
               </div>
             </div>
           </div>
           <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
             <div class="block-18 p-4">
               <div class="text">
                 <strong class="number" data-number="100">0</strong>
                 <span>Personal eficiente </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>

     <!--
         <section class="ftco-section bg-light">
           <div class="container-fluid px-md-5">
             <div class="row justify-content-center mb-5 pb-5">
               <div class="col-md-10 heading-section text-center ftco-animate">
                 <h2 class="mb-4">Últimas Noticias</h2>
                 <p>Entérate lo ultimo que hemos conseguido en esta sección respecto a la salud.</p>
               </div>
             </div>
             <div class="row d-flex">
               <div class="col-lg-4 ftco-animate">
                 <div class="blog-entry">
                   <a href="blog-single.html" class="block-20" style="background-image: url('images/image_1.jpg');">
                   </a>
                   <div class="d-flex">
                     <div class="meta pt-3 text-right pr-2">
                       <div><a href="#"><span class="fa fa-calendar mr-2"></span>Aug. 12, 2020</a></div>
                       <div><a href="#"><span class="fa fa-user mr-2"></span>Admin</a></div>
                       <div><a href="#" class="meta-chat"><span class="fa fa-comment mr-2"></span> 3</a></div>
                     </div>
                     <div class="text d-block">
                       <h3 class="heading"><a href="#">Auditor Externo Mintra</a></h3>
                       <p>Holosalud felicita a su médico ocupacional el Dr. Manuel Antonio Huaman Pisconti por su reciente...</p>
                       <p><a href="blog.html" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>
                     </div>
                   </div>
                 </div>
               </div>

               <div class="col-lg-4 ftco-animate">
                 <div class="blog-entry">
                   <a href="blog-single.html" class="block-20" style="background-image: url('images/image_2.jpg');">
                   </a>
                   <div class="d-flex">
                     <div class="meta pt-3 text-right pr-2">
                       <div><a href="#"><span class="fa fa-calendar mr-2"></span>Aug. 12, 2020</a></div>
                       <div><a href="#"><span class="fa fa-user mr-2"></span>Admin</a></div>
                       <div><a href="#" class="meta-chat"><span class="fa fa-comment mr-2"></span> 3</a></div>
                     </div>
                     <div class="text d-block">
                       <h3 class="heading"><a href="#">Plan Siscovid Minsa</a></h3>
                       <p>Obtuvimos la aprobación de nuestro Plan Siscovid y los Registros del Instituto Nacional de Salud para
                         el registro de las pruebas rápidas.</p>
                       <p><a href="blog.html" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="col-lg-4 ftco-animate">
                 <div class="blog-entry">
                   <a href="blog-single.html" class="block-20" style="background-image: url('images/image_3.jpg');">
                   </a>
                   <div class="d-flex">
                     <div class="meta pt-3 text-right pr-2">
                       <div><a href="#"><span class="fa fa-calendar mr-2"></span>Aug. 12, 2020</a></div>
                       <div><a href="#"><span class="fa fa-user mr-2"></span>Admin</a></div>
                       <div><a href="#" class="meta-chat"><span class="fa fa-comment mr-2"></span> 3</a></div>
                     </div>
                     <div class="text d-block">
                       <h3 class="heading"><a href="#">Maestría en Salud Ocupacional</a></h3>
                       <p>La clínica Holosalud brinda su reconocimiento a nuestro médico ocupacional, el Dr. Manuel Antonio Huaman
                         Pisconti, por su maestría en salud ocupacional.</p>
                       <p><a href="blog.html" class="btn btn-secondary btn-outline-secondary py-2 px-3">Leer más</a></p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section> -->


      </div>
    </template>

    <script lang="ts">
    import Vue from "vue"
    import axios from "axios"
    const config = require('../config')

    export default Vue.extend({
      head() {
        return {
          title: 'HoloSalud | Inicio'
        }
      },
      data(){
        return {
          businessMail: {
            business: "",
            ruc: "",
            name: "",
            phone: "",
            email: "",
            consult: ""
          }
        };
      },
      methods: {
        async sendMail() {
          let data = this.$data.businessMail
          const token = await this.login()

          const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
          }
          try {
            const resp = await axios.post(config.URL_MAIL + "/mailweb/", data, {headers: headers})
            console.log(resp)
          } catch (e) {
            console.log(e)
          }

        },
        async login(): Promise<string>{
          let forLogin = {
            secret: config.SECRET_TOKEN
          }
          let token = ""
          try {
            const resp = await axios.post(config.URL_MAIL + "/login", forLogin)
            console.log(resp)
            token = resp.data.token
          }catch (e) {
            console.log(e)
          }
          return token
        }
      }
    })
    </script>

    <style>

    </style>
