<template>
  <div class="p-6">
    <input type="text" class="w-full border-2 border-gray-300 rounded" placeholder="Enter the drink name..."
      v-model="drinkKeyword" @change="changeDrink" />
  </div>

  <Drinks :drinks="drinks" />

</template>

<script setup>
import { useSearchDrinksStore } from '@/stores/searchDrinks';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import Drinks from '@/components/Drinks.vue';

const drinksStore = useSearchDrinksStore()
const route = useRoute()

const drinkKeyword = ref('')

const changeDrink = () => {
  drinksStore.searchDrink(drinkKeyword.value.trim());
};

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
