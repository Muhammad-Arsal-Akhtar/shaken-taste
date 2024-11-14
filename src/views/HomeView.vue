<template>
    <!-- <h1 class="text-3xl font-bold underline bg-amber-300">
    Hello world! from home {{ juices }}
  </h1> -->
  <div class="flex flex-col p-8">
    <div>
      <input type="text" class="w-full border-2 border-gray-300 rounded" placeholder="Enter the drink name..." />
    </div>

    <div class="flex justify-center gap-1 mt-2">
      <router-link :to="{ name: 'byLetter', params: {letter} }" v-for="letter in letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
      
  </div>
</template>

<script setup>
import { useCocktailStore } from '@/stores/cocktail'
import { onMounted, ref } from 'vue'
import axiosClient from '@/axiosClient';

const cocktailStore = useCocktailStore()

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const cocktailList = ref([])

onMounted(async () => {
 const response =  await axiosClient.get('list.php?i=list')
 cocktailList.value = response.data.drinks

})

</script>

<style scoped>

</style>