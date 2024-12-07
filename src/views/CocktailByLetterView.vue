<template>
  <div>
    <div class="flex justify-center gap-1 mt-2">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter"
        class="inline px-1">
        {{ letter }}
      </router-link>
    </div>

    <div class="grid grid-cols-1 gap-3 p-8 md:grid-cols-3">
      <DrinkItem v-for="drink in drinks" :key="drink.id" :drink="drink" />
    </div>
  </div>
</template>

<script setup>
import { useSearchDrinksStore } from '@/stores/searchDrinksByLetter';
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import DrinkItem from '@/components/DrinkItem.vue';

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