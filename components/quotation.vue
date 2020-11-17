<template>
  <div class="col-md-5 d-flex">
    <div class="appointment-wrap p-4 p-lg-5 d-flex align-items-center">
      <form action="#" class="appointment-form" @submit.prevent="sendMail">
        <h3>Solicita una cotización</h3>
        <div class="">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Empresa" v-model="businessMail.business">
          </div>
          <div class="form-group">
            <input type="number" class="form-control" placeholder="RUC / DNI" v-model="businessMail.ruc">
          </div>
        </div>
        <div class="">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Apellidos y Nombres" v-model="businessMail.name">
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
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue"
const config = require('../config')

export default Vue.extend({
  name: "Quotation",
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
      const token = await this.loginApiMail()

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
    async loginApiMail(): Promise<string>{
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

<style scoped>

</style>
