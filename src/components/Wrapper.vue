<template>
  <div id="vue-header">
        <VueHeader />
      <div class="  px-10 md:px-24 lg:px-48">
        <Main />
      </div>
      <VFooter />
  </div>
</template>

<script>
import VueHeader from './VueHeader.vue'
import Main from './Main.vue'
import VFooter from './VFooter.vue'
export default {
components: {
    VueHeader,VFooter, Main
}
}
</script>

<style>

</style>