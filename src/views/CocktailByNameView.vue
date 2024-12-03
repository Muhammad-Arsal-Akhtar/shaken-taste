<template>
  <div class="p-6">
    <input type="text" class="w-full border-2 border-gray-300 rounded" placeholder="Enter the drink name..."
      v-model="drinkKeyword" @change="changeDrink" />
  </div>


  <div class="grid grid-cols-1 gap-3 p-8 md:grid-cols-3">
    <DrinkItem v-for="drink in drinks" :key="drink.id" :drink="drink"  />
  </div>

</template>

<script setup>
import { useSearchDrinksStore } from '@/stores/searchDrinks';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import DrinkItem from '@/components/DrinkItem.vue';

const drinksStore = useSearchDrinksStore()
const route = useRoute()

const drinkKeyword = ref('')
const changeDrink = () => {
  if (drinkKeyword.value.trim()) {
     drinksStore.searchDrink(drinkKeyword.value);
  }
}

const drinks = computed(() => {
  return drinksStore.getSearchDrinks
})

onMounted(() => {
  drinkKeyword.value = route.params.name
  if(drinkKeyword.value){
    changeDrink()
  }
})


</script>
