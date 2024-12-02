<template>
  <div class="p-6">
    <input type="text" class="w-full border-2 border-gray-300 rounded" placeholder="Enter the drink name..."
      v-model="drinkKeyword" @change="changeDrink" />
  </div>


  <div class="grid grid-cols-1 gap-3 p-8 md:grid-cols-3">
    <div v-for="drink in drinks" :key="drink.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <router-link :to="{ name: 'drinkDetails', params: { id : drink.id } }">
        <img class="rounded-t-lg w-[383px] h-[255px]" :src="drink.image" :alt="drink.imageAlt" />
      </router-link>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{drink.name}}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
        <a :href="drink.video"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank">
          Video
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useSearchDrinksStore } from '@/stores/searchDrinks';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'

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
