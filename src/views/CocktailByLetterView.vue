<template>
  <div>
    <div class="flex justify-center gap-1 mt-2">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter"
      class="inline-block px-3 py-2 text-2xl font-semibold text-gray-700 transition-all duration-300 transform rounded-lg hover:scale-110 hover:text-green-600 hover:bg-gray-200">
        {{ letter }}
      </router-link>
    </div>

    <Drinks :drinks="drinks" />
  </div>
</template>

<script setup>
import { useSearchDrinksStore } from '@/stores/searchDrinksByLetter';
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import Drinks from '@/components/Drinks.vue';

const drinksStore = useSearchDrinksStore()
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const route = useRoute()

const drinks = computed(() => {
  return drinksStore.getSearchDrinks
})

onMounted(() => {
  if(route.params.letter) {
    drinksStore.searchDrink(route.params.letter)
  }
})

watch(route, () => {
  drinksStore.searchDrink(route.params.letter)
})


</script>