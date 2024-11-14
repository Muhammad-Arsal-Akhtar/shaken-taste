<template>
    <!-- <h1 class="text-3xl font-bold underline bg-amber-300">
    Hello world! from home {{ juices }}
  </h1> -->
  <div class="flex flex-col p-8">
    <div>
      <input type="text" class="w-full border-2 border-gray-300 rounded" placeholder="Enter the drink name..." />
    </div>

    <div class="flex justify-center gap-1 mt-2">
      <router-link to="/" v-for="letter in letters">
        {{ letter }}
      </router-link>
    </div>
      
  </div>
</template>

<script setup>
import { useCocktailStore } from '@/stores/cocktail'

const cocktailStore = useCocktailStore()
const {juices} = cocktailStore

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


</script>

<style scoped>

</style>