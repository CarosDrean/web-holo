<template>
  <div>
    <section class="hero-wrap js-fullheight" style="background-image: url('/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
          <div class="col-lg-6">
            <div class="mt-5">
              <h1 class="mb-4">PRIMER CENTRO MEDICO DE SALUD OCUPACIONAL EN ICA</h1>
              <p class="mb-4">Nuestro médico ocupacional, el Dr. Manuel Antonio Huaman Pisconti Magister en Salud Ocupacional, es miembro de la Sociedad Peruana de Salud Ocupacional, miembro de la Comisión Internacional en Salud Ocupacional, miembro de la Sociedad Española de Cardiología y Auditor Externo del Ministerio de Trabajo.</p>
              <div class="row">
                <div class="col-md-7 col-lg-10">
                  <form action="#" @submit.prevent="cardio" class="appointment-form-intro">
                    <div class="d-flex">
                      <div class="form-group">
                        <div class="form-field">
                          <div class="select-wrap">
                            <div class="icon"><span class="fa fa-chevron-down"></span></div>
                            <select name="" id="iddepartamenos" class="form-control">
                              <option value="">Seleccione Especialidad</option>
                              <option value="cardiologia">Cardiología</option>

                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="submit" value="Buscar" class="btn-custom form-control py-3 px-4" >
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
                <div class="col-md-12 heading-section">
                  <h2 class="mb-3">Bienvenido a <span>Holosalud</span></h2>
                </div>
              </div>
              <div class="row">

                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ambulance"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Prueba Rápida Covid19</h3>
                      <p>Estamos realizando las pruebas rapidas del Covid 19, disminuyendo la preocupación de la población iqueña.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ophthalmologist"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Staff Médico</h3>
                      <p>En HOLOSALUD contamos con doctores que cubren todas las especialidades médicas necesarias para brindarle a su empresa una evaluación médica ocupacional de calidad.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-flag"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Estamos Ubicados</h3>
                      <p>Nuestro centro médico se encuentra ubicado en una zona accesible para sus trabajadores, un lugar comodo y ambientado con todas las prevenciones del caso, visitanos ya!</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
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


          <Quotation/>

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
          <div class="col-md-6 col-lg-7 pl-lg-5 py-md-2">
            <div class="py-md-2">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section p-4 p-lg-5">
                  <h2 class="mb-4">Somos <span>HOLOSALUD</span> Especialistas cuidando tu salud</h2>
                  <p>Nuestro objetivo es que puedas tener las mejores condiciones para ingresar a un trabajo, no dudes de los servicios que te ofrecemos.</p>
                  <p><a href="price" class="btn btn-primary py-3 px-4">Solicita tu cotización</a> <a href="contact" class="btn btn-secondary py-3 px-4">Contacténos</a></p>
                </div>

                <div class="col-lg">
                  <div class="ftco-footer-widget heading-section p-4 p-lg-5">
                    <h2 class="ftco-heading-2">Redes Sociales</h2>
                    <div class="col-md-auto">
                      <div id="fb-root"></div>
                      <script async diferir crossorigin="anonymous"
                              src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0" nonce="Jl7teyep"></script>
                      <div class="fb-page" data-href="https://www.facebook.com/Holosalud" data-tabs="timeline" data-width="450"
                           data-height="450" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                           data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/Holosalud " class=" fb-xfbml-parse-ignore "><a
                          href="https://www.facebook.com/Holosalud"> HoloSalud </a></blockquote>
                      </div>
                    </div>
                  </div>
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

    <Services/>

    <Doctors/>

     <section class="ftco-facts img ftco-counter" style="background-image: url(/images/bg_3.jpg);">
       <div class="overlay"></div>
       <div class="container">
         <div class="row">
           <transition name="ftco-animate">
             <div class="col-md-3 d-flex justify-content-center counter-wrap">
               <div class="block-18 p-4">
                 <div class="text">
                   <strong class="number" data-number="7">0</strong>
                   <span>Años de experiencia</span>
                 </div>
               </div>
             </div>
           </transition>
           <transition name="ftco-animate">
             <div class="col-md-3 d-flex justify-content-center counter-wrap">
               <div class="block-18 p-4">
                 <div class="text">
                   <strong class="number" data-number="40000">0</strong>
                   <span>Pacientes atendidos</span>
                 </div>
               </div>
             </div>
           </transition>
           <transition name="ftco-animate">
             <div class="col-md-3 d-flex justify-content-center counter-wrap">
               <div class="block-18 p-4">
                 <div class="text">
                   <strong class="number" data-number="20">0</strong>
                   <span>Profesionales</span>
                 </div>
               </div>
             </div>
           </transition>
           <transition name="ftco-animate">
             <div class="col-md-3 d-flex justify-content-center counter-wrap">
               <div class="block-18 p-4">
                 <div class="text">
                   <strong class="number" data-number="100">0</strong>
                   <span>Personal eficiente </span>
                 </div>
               </div>
             </div>
           </transition>
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
    import Services from "~/components/services.vue";
    import Quotation from "~/components/quotation.vue"
    import Doctors from "~/components/doctors.vue"
    import Vue from "vue"
    const config = require('../config')

    export default Vue.extend({
      components: {Services, Quotation, Doctors},
      head() {
        return {
          title: 'HoloSalud | Inicio'
        }
      },
      data(){
        return {

        };
      },
      methods: {
        cardio(){
          let routeData = this.$router.resolve({path: '/cardio'});
          window.open(routeData.href = 'http://manuelhuaman.com/', '_blank');
        },
      }
    })
    </script>

    <style>

    </style>
