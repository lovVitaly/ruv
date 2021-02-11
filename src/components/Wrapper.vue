<template>
  <div id="vue-header">
    <VueHeader />
    <router-view class="px-10 md:px-24 lg:px-48">
    </router-view>
    <VFooter />
  </div>
</template>

<script>
import VueHeader from "./VueHeader.vue";
// import Main from "./Main.vue";
import VFooter from "./VFooter.vue";
export default {
  components: {
    VueHeader,
    VFooter,
    // Main,
  },
};
</script>

<style></style>
