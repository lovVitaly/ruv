<template>
  <div id="nav" class="relative">
    <button class="sm:hidden focus:outline-none" @click="isNavOpen = !isNavOpen" >
      <svg
        v-if="!isNavOpen"
        class="w-6 fill-current text-blue-600 hover:text-blue-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
      <svg
        v-if="isNavOpen"
        class="w-5 fill-current text-blue-600 hover:text-blue-900"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>
    </button>
    <div v-if="isNavOpen"
      class="sm:hidden text-lg text-blue-50 absolute z-10 bg-blue-500 border border-gray-500 rounded-lg right-0 overflow-hidden">
      <p class="px-2 cursor-pointer py-1 font-medium  hover:bg-blue-600 w-auto">Главная</p>
      <p class="px-2 cursor-pointer py-1 font-medium hover:bg-blue-600 ">Партнеры</p>
      <p class="px-2 cursor-pointer py-1 font-medium hover:bg-blue-600 whitespace-nowrap">
        О нас 
      </p> 
      <p @click="$router.push({name:'contacts'})" class="px-2 cursor-pointer py-1 font-medium hover:bg-blue-600  ">Контакты</p>
    </div>
    <div
      class="sm:flex  text-lg md:text-lg text-blue-600 hidden "
    >
      <button class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md">Главная</button>
      <button class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md">Партнеры</button>
      <button class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md whitespace-nowrap">
        О нас
      </button>
      <button  class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md">Контакты</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
};
</script>

<style></style>
