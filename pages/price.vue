<template>
  <div>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/cotizacionesfondo.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-9 pb-5">
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Inicio <i class="fa fa-chevron-right"></i></a></span> <span>Cotizaciones <i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-3 bread">Cotizaciones</h1>
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
                  <h2 class="mb-3">Protocolos comunes de <span>Holosalud</span></h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ambulance"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Prueba Rápida Covid19</h3>

                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ophthalmologist"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Protocolo Conductor</h3>

                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ophthalmologist"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Protocolo Operativo</h3>

                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="media block-6 services d-flex">
                    <div class="icon justify-content-center align-items-center d-flex"><span class="flaticon-ophthalmologist"></span></div>
                    <div class="media-body pl-md-4">
                      <h3 class="heading mb-3">Protocolo Administrativo</h3>
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
  </div>
</template>
<script>
import Quotation from "~/components/quotation"
export default {
  name: "price",
  components: {Quotation},
  head() {
    return {
      title: 'HoloSalud | Cotizacion'
    }
  },
}
</script>
