<template>
  <main class="pt-8 pb-16 antialiased bg-white lg:pt-16 lg:pb-24 dark:bg-gray-900">
    <div class="flex justify-between max-w-screen-xl px-4 mx-auto ">
      <article
        class="w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header class="mb-4 lg:mb-6 not-format">
          <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{{
            drink.strDrink }}</h1>
        </header>
        <figure>
          <img :src="drink.strDrinkThumb" alt="" class="rounded-lg" />
          <figcaption>{{ drink.strDrinkAlternate }}</figcaption>
        </figure>

        <div class="flex justify-between mt-4">
          <div>
            <h4 class="inline-block mb-4 text-2xl font-bold">Category : </h4> &nbsp; <span class="text-xl">{{
              drink.strCategory ?? '-' }}</span>
          </div>
          <div>
            <h4 class="inline-block mb-4 text-2xl font-bold">Tags : </h4> &nbsp; <span class="text-xl">{{ drink.strTags
              ?? '-' }}</span>
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <h2 class="mb-4 text-2xl font-bold">Ingredients</h2>
            <ul>
              <li v-for="(ingredient, index) in drinksList.ingredients" :key="index">
                <span>{{ ingredient }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-4 text-2xl font-bold">Measures</h2>
            <ul>
              <li v-for="(measure, index) in drinksList.measures" :key="index">
                <span>{{ measure }}</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axiosClient from "@/axiosClient";
import { useRoute } from "vue-router";

const drink = ref({})
const route = useRoute()

onMounted(() => {

  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      drink.value = data.drinks[0] || {}
    });
})

const drinksList = computed(() => {
  const ingredients = [];
  const measures = [];
  if (drink.value) {
    Object.keys(drink.value).forEach((key) => {
      if (key.startsWith("strIngredient") && drink.value[key]) {
        ingredients.push(drink.value[key]);
      }

      if (key.startsWith("strMeasure") && drink.value[key]) {
        measures.push(drink.value[key]);
      }
    });
  }
  return { ingredients, measures };
});

</script>
