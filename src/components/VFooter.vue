<template>
  <div id="v-footer" class="bg-gray-50 py-3">
      <div class='px-10 md:px-24 lg:px-48'>
      <p class="text-blue-500 lg:text-xl text-lg font-semibold ">{{currentYear}} © ООО "Рувензори"</p>

      </div>

  </div>
</template>

<script>
export default {
    computed: {
        currentYear() {
            let date = new Date();
            return date.getFullYear()
        }
    }
}
</script>

<style>

</style>