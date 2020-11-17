<template>
  <div>
    <div class="py-1 top">
      <div class="container">
        <div class="row">
          <div class="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
            <p class="mb-0 w-100">
              <span class="fa fa-paper-plane"></span>
              <span class="text">holosaludsac@gmail.com</span>
            </p>
          </div>
          <div class="col-sm justify-content-center d-flex mb-md-0 mb-2">
            <div class="social-media">
              <p class="mb-0 d-flex">
                <a target="_blank" href="https://www.facebook.com/Holosalud" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
                <a target="_blank" href="https://twitter.com/HOLOSALUD_CARD" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
                <a target="_blank" href="https://instagram.com/holosaludsac?igshid=i4g41fixxj7b" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>

              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
            <p class="mb-0 register-link"><a href="price" class="btn btn-primary">Solicita tu cotización</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-3">
      <div class="container">
        <div class="row d-flex align-items-start align-items-center px-3 px-md-0">

          <div class="col-md-4 d-flex mb-2 mb-md-0">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
              <img src="../assets/images/logo-2-png-sinfondo.png" height="50" width="50" />
              <span> Holosalud</span>
            </a>
          </div>

          <div class="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fa fa-map"></span>
            </div>
            <div class="pr-md-4 pl-md-3 pl-3 text">
              <p class="con"><span>Contáctenos</span> <span>+51 943991985</span></p>
              <p class="con">Especialistas cuidando tu salud</p>
            </div>
          </div>
          <div class="col-md-4 d-flex topper mb-md-0 align-items-center">
            <div class="icon d-flex justify-content-center align-items-center"><span class="fa fa-paper-plane"></span>
            </div>
            <div class="text pl-3 pl-md-3">
              <p class="hr"><span>Ubícanos</span></p>
              <p class="con">Urbanización Puente Blanco Mz. F Lote 25-26 4ta Etapa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">

      <div class="container d-flex align-items-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa fa-bars"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav m-auto">
            <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Inicio</a>
              </li>
            </router-link>
            <router-link to="/about" v-slot="{ href, route, navigate, isActive, isExactActive }">

              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Conocenos</a>
                  <span
                  ></span>
              </li>
            </router-link>
            <router-link to="/services" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Servicios</a>
              </li>
            </router-link>
            <router-link to="/doctors" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Doctores</a>
              </li>
            </router-link>
            <router-link to="/exams" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Examenes</a>
              </li>
            </router-link>
            <router-link to="/price" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Cotizaciones</a>
              </li>
            </router-link>
            <router-link to="/enterprise" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Empresas</a>
              </li>
            </router-link>
            <router-link to="/contact" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <li class="nav-item" :class="[isActive && 'router-link-active', isExactActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">Contacto</a>
              </li>
            </router-link>


            <!--<li class="nav-item active"><a href="/" class="nav-link">Inicio</a></li>
            <li class="nav-item"><a href="about" class="nav-link">Conócenos</a></li>
            <li class="nav-item"><a href="services" class="nav-link">Servicios</a></li>
            <li class="nav-item"><a href="doctors" class="nav-link">Doctores</a></li>
            <li class="nav-item"><a href="exams" class="nav-link">Examenes</a></li>
            <li class="nav-item"><a href="price" class="nav-link">Cotizaciones</a></li>
            <li class="nav-item"><a href="enterprise" class="nav-link">Empresas</a></li>
            <li class="nav-item"><a href="blog" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="contact" class="nav-link">Contáctenos</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Header",


  methods: ({
    subIsActive(input) {
      const paths = Array.isArray(input) ? input: [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0
      })
    }
  }),
}
</script>

<style scoped>

</style>
