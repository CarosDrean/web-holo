<template>
  <div>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/empresafondo.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-9 pb-5">
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Inicio <i class="fa fa-chevron-right"></i></a></span> <span>Empresas <i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-3 bread">Empresas</h1>

          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="row justify-content-center mb-5 pb-2" style="margin-right: 0 !important;">
        <div class="col-md-8 text-center heading-section">
          <h2 class="mb-4"> Empresas que confian en<span> Holosalud</span></h2>
        </div></div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-3">
            <a href="images/gym.jpg" class="image-popup img gallery" style="background-image: url(/images/gym.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/cosapi.jpg" class="image-popup img gallery" style="background-image: url(/images/cosapi.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/shougangn.jpg" class="image-popup img gallery" style="background-image: url(/images/shougangn.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/sanmartin.jpg" class="image-popup img gallery" style="background-image: url(/images/sanmartin.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/marcobre.jpg" class="image-popup img gallery" style="background-image: url(/images/marcobre.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/adidas.jpg" class="image-popup img gallery" style="background-image: url(/images/adidas.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/apumayo.jpg" class="image-popup img gallery" style="background-image: url(/images/apumayo.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
          <div class="col-md-3">
            <a href="images/ferreyros.jpg" class="image-popup img gallery" style="background-image: url(/images/ferreyros.jpg);">
              <span class="overlay"></span>
            </a>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script>
export default {
  name: "enterprise",
  head() {
    return {
      title: 'HoloSalud | Empresas'
    }
  },
  created() {
    if(process.client){
      let galleryJs = document.createElement('script')
      galleryJs.setAttribute('src', '/js/main.js')
      document.head.appendChild(galleryJs)
    }
  },
}
</script>

<style scoped>

</style>
