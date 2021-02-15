<template>
  <div id="main" >
    <div class="flex justify-center py-10">
      <div class="relative">
        <img
          :src="
            width <= 500
              ? require('/public/img/factory/factory_sm.jpg')
              : require('/public/img/factory/factory.jpg')
          "
          alt="factory"
          class="  mx-auto rounded-md opacity-50"
        />
        <p
          class="absolute top-1/3 text-gray-900 text-center font-bold  sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl "
          :class="[width < 325 ? 'text-lg' : 'text-3xl']"
        >
          Поставка промышленного оборудования
        </p>
      </div>
    </div>
    <MainSections />
  </div>
</template>

<script>
import MainSections from "./MainSections";
export default {
  data() {
    return {
      width: 0,
    };
  },
  components: {
    MainSections,
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
  computed: {
    factoryImg() {
      if (this.width <= 400) {
        return "require('/public/img/factory/factory.jpg')";
      } else {
        return "require('/public/img/factory/factory_sm.jpg')";
      }
    },
  },
};
</script>
