<template>
  <div>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-9 ftco-animate pb-5">
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Inicio <i class="fa fa-chevron-right"></i></a></span> <span>Conócenos <i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-3 bread">Sobre Nosotros</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-counter img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-6 col-lg-5 d-flex">
            <div class="img w-100 d-flex align-self-stretch align-items-center" style="background-image:url(images/about.jpg);">
            </div>
          </div>
          <div class="col-md-6 col-lg-7 pl-lg-5 py-md-5">
            <div class="py-md-5">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section ftco-animate p-4 p-lg-5">
                  <h2 class="mb-4">Somos <span>HOLOSALUD</span> Especialistas cuidando tu salud</h2>
                  <p>Nuestro objetivo es que puedas tener las mejores condiciones para ingresar a un trabajo, no dudes de los servicios que te ofrecemos.</p>
                  <p><a href="#" class="btn btn-primary py-3 px-4">Solicita tu cotización</a> <a href="#" class="btn btn-secondary py-3 px-4">Contacténos</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-facts img ftco-counter" style="background-image: url(images/bg_3.jpg);">
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

    <section class="ftco-section testimony-section img" style="background-image: url(/images/bg_4.jpg);">
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center pb-3">
          <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <span class="subheading">Read testimonials</span>
            <h2 class="mb-4">Our Patient Says</h2>
          </div>
        </div>
        <div class="row ftco-animate justify-content-center">
          <div class="col-md-12">
            <!--VER COMO USAR CARRUSEL EN NUXT Y EL MENU FIXED-->
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  name: "about",
  head() {
    return {
      title: 'HoloSalud | Acerca de'
    }
  }
}
</script>

<style scoped>

</style>
