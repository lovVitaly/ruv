<template>
  <div id="nav" class="relative">
    <button class="sm:hidden focus:outline-none" @click="isNavOpen = !isNavOpen" >
      <svg
        v-if="!isNavOpen"
        class="w-6 fill-current text-blue-400 hover:text-blue-600"
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
      class="sm:hidden text-lg text-blue-100 absolute z-10 bg-blue-400 border border-blue-50 rounded-lg right-0 overflow-hidden">
      <button class="px-2 cursor-pointer py-1 font-medium  hover:bg-blue-600 w-full">
        <router-link to="/"> 
          Главная
        </router-link>
        </button>
      <button class="px-2   cursor-pointer py-1 font-medium hover:bg-blue-600 w-full">
        <router-link to="/partners"> 
          Партнеры
        </router-link>
        </button>
      <button class="px-2 cursor-pointer py-1 font-medium hover:bg-blue-600 whitespace-nowrap w-full">
        <router-link to="/about"> 
          О нас
        </router-link>
      </button> 
      <button class="px-2 cursor-pointer py-1 font-medium hover:bg-blue-600 w-full">
        <router-link to="/contacts"> 
          Контакты
        </router-link>
        </button>
    </div>
    <div
      class="sm:flex  text-lg md:text-xl text-blue-400 hidden "
    >
      <button class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md">
        <router-link to="/"> 
          Главная
        </router-link>
      </button>
      <button class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md">
        <router-link to="/partners"> 
          Партнеры
        </router-link>
      </button>
      <button class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md whitespace-nowrap">
        <router-link to="/about"> 
          О нас
        </router-link>
      </button>
      <button  class="px-2 py-1 font-semibold hover:bg-blue-200 rounded-md">
           <router-link to="/contacts"> 
        Контакты
          </router-link>
        </button>
      
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
