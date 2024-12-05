<template>
<div class="flex items-center justify-center min-h-screen pt-3 bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-wrap justify-center gap-4">
    <router-link
      v-for="(ingredient, index) in ingredients" 
      :key="index" 
      class="px-4 py-2 text-lg font-semibold text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300 hover:cursor-pointer"
      :to="{ name: 'byIngredient', params: { ingredient : ingredient.strIngredient1.replace(/ /g, '_') } }"
      >
      {{ ingredient.strIngredient1 }}
    </router-link>
  </div>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '@/axiosClient';

const ingredients = ref([])

onMounted(() => {
  axiosClient
    .get(`list.php?i=list`)
    .then(({ data }) => {
      ingredients.value = data.drinks
    })
})



</script>
