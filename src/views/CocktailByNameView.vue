<template>
  <div class="p-6">
    <input type="text" class="w-full border-2 border-gray-300 rounded" placeholder="Enter the drink name..."
      v-model="drinkKeyword" @change="changeDrink" />
  </div>

  <pre>
    {{ drinks }}
  </pre>
</template>

<script setup>
import { useSearchDrinksStore } from '@/stores/searchDrinks';
import { ref, computed } from 'vue';

const drinksStore = useSearchDrinksStore()


const drinkKeyword = ref('')
const changeDrink = () => {
  if (drinkKeyword.value.trim()) {
    drinksStore.searchDrink(drinkKeyword.value);
  }
};

const drinks = computed(()=>{
  return drinksStore.getSearchDrinks
})

</script>

<style lang="scss" scoped></style>