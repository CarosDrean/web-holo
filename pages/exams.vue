<template>
  <div>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/examenes.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-9 pb-5">
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Inicio <i class="fa fa-chevron-right"></i></a></span> <span>Examenes <i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-3 bread">Evaluaciones de Salud Ocupacional</h1>
          </div>
        </div>
      </div>
    </section>
    <Services/>
  </div>
</template>
<script>
import Services from "~/components/services";
export default {
  name: "exams",
  components: {Services},
  head() {
    return {
      title: 'HoloSalud | Exámenes'
    }
  }
}
</script>

<style scoped>

</style>
