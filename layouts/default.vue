<template>
  <div>
    <Header />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style>

</style>
<script>
import Header from "../components/header";
import Footer from "~/components/footer";
export default {
  components: {Footer, Header}
}
</script>
