<template>
  <div>
    <Loader v-if="drinksStore.isLoading" />
    <div v-else class="grid grid-cols-1 gap-3 p-8 md:grid-cols-3">
      <DrinkItem v-for="drink in drinks" :key="drink.id" :drink="drink" />
    </div>
  </div>
</template>

<script setup>

import { useSearchDrinksStore } from '@/stores/searchDrinksByIngredient';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import DrinkItem from '@/components/DrinkItem.vue';
import Loader from '@/components/Loader.vue';

const drinksStore = useSearchDrinksStore()
const route = useRoute()

const ingredientKeyword = ref('')

const drinks = computed(() => {
  return drinksStore.getSearchDrinks
})

onMounted(() => {

  ingredientKeyword.value = route.params.ingredient
  if (ingredientKeyword.value) {
    ingredientKeyword.value = ingredientKeyword.value.replace(/_/g, ' ');
    drinksStore.searchDrink(ingredientKeyword.value)
  }
})
</script>
