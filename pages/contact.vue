<template>
<div>
  <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/contactofondo.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text align-items-end justify-content-start">
        <div class="col-md-9 pb-5">
          <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Inicio <i class="fa fa-chevron-right"></i></a></span> <span>Contáctenos <i class="fa fa-chevron-right"></i></span></p>
          <h1 class="mb-3 bread">Contáctenos</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section contact-section">
    <div class="container">
      <div class="row d-flex contact-info mb-5">
        <div class="col-md-6 col-lg-3 d-flex">
          <div class="align-self-stretch box p-4 text-center bg-light">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="flaticon-flag"></span>
            </div>
            <h3 class="mb-4">Dirección</h3>
            <p>Urbanización Puente Blanco Mz. F Lote 25-26 4ta Etapa</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex">
          <div class="align-self-stretch box p-4 text-center bg-light">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="flaticon-phone-call"></span>
            </div>
            <h3 class="mb-4">Telefono</h3>
            <p><a href="https://api.whatsapp.com/send?phone=51943991985&text=Hola%20CL%C3%8DNICA%20HOLOSALUD%20quisiera%20informacion%0Ahttps%3A%2F%2Fwww.holosalud.pe%2Fweb">943 991 985</a></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex">
          <div class="align-self-stretch box p-4 text-center bg-light">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="flaticon-paper-plane"></span>
            </div>
            <h3 class="mb-4">Correo Electrónico</h3>
            <p><a href="https://mail.google.com/">saludocupacional<br/>@holosalud.pe</a></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex">
          <div class="align-self-stretch box p-4 text-center bg-light">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="flaticon-world-wide-web-on-grid"></span>
            </div>
            <h3 class="mb-4">Website</h3>
            <p><a href="https://www.holosalud.pe/">www.holosalud.pe</a></p>
          </div>
        </div>
      </div>
      <div class="row no-gutters block-9">
        <!--FALTA QUE APAREZCA EL MAPA-->


        <div class="col-md-6 d-flex">
          <div class="hero-wrap hero-wrap-2" style="background-image: url(/images/mapa.jpg);"></div>

        </div>
        <Quotation/>

      </div>
    </div>
  </section>


</div>
</template>

<script>
import Quotation from "~/components/quotation"
export default {
  components: {Quotation},
  head() {
    return {
      title: 'HoloSalud | Contacto'
    }
  },
  name: "contact",

}
</script>

<style scoped>

</style>
