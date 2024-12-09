<template>
  <div>
    <div class="flex justify-center gap-1 mt-2">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter"
        class="inline px-1">
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