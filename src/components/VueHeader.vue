<template>
  <div id="vue-header" class="bg-gray-50 py-5">
      <div class=" px-10 md:px-24 lg:px-48 flex justify-between items-end" >
        <div class="flex">
          <p class="uppercase text-blue-600 text-2xl md:text-3xl font-semibold ">ruvenzori</p>
          <img :src="require('/public/img/ruv_logo.png')" alt="logo" class="w-10 h-10">      
        </div>
        <NavMenu class="" />
      </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    NavMenu
  }
}
</script>

<style>

</style>