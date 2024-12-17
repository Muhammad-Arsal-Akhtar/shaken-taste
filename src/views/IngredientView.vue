<template>
  <div class="flex items-center justify-center pt-3 bg-gray-50 dark:bg-gray-900">
    <Loader v-if="isLoading" />
    <div v-else class="flex flex-wrap justify-center gap-4">
      <router-link v-for="(ingredient, index) in ingredients" :key="index"
        class="px-4 py-2 text-lg font-semibold text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300 hover:cursor-pointer"
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient1.replace(/ /g, '_') } }">
        {{ ingredient.strIngredient1 }}
      </router-link>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '@/axiosClient';
import Loader from '@/components/Loader.vue';

const ingredients = ref([])
const isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  axiosClient
    .get(`list.php?i=list`)
    .then(({ data }) => {
      ingredients.value = data.drinks
    }).catch(() => {
      console.error('error')
    }).finally(() => {
      isLoading.value = false
    })
})



</script>
