<template>
  <div id="sections" class="md:flex md:justify-center md:space-x-5 md:space-x-4 ">
      <div v-for="section in sections" :key="section.index" class="container  "> 
        <h1 class="text-xl sm:text-2xl text-center text-gray-900 font-black pb-3 whitespace-nowrap">{{section.name}}</h1>
        <img :src="require(`/public/img/sections/${section.img}.jpg`)" alt="" 
          class=" md:h-auto lg:h-auto w-1/2 md:w-full mx-auto md:mx-0">
        <p class="text-gray-900 text-base md:text-base lg:text-lg">{{section.content}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          name: "О компании",
          content:
            "Наша компания занимается продажей промышленного оборудования уже более 7 лет. Мы знаем, какое оборудование необходимо именно Вам. Сервис менеджеры ООО “РУВЕНЗОРИ” всегда готовы оказать поддержку наших клиентов. ",
          img: "about",
        },
        {
          name: "Поддержка",
          content:
            "Задумались как организовать производство? А может, Вы задумались о модернизации, ваших промышленных мощностей? Наши менеджеры с большим удовольствием помогут вам с выбором. Мы подберем самый оптимальный вариант, исходя из ваших потребностей. ",
          img: "support",
        },
        {
          name: "Сервис",
          content: "Помимо поставкок оборудования, мы также занимаемся подбором и продажей запасных частей, а также оказываем услуги по монтажу и обслуживанию поставляемого оборудования.",
          img: "gear",
        },
      ],
    };
  },
};
</script>

<style></style>
