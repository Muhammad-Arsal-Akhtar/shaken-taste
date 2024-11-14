<template>
    <h1 class="text-3xl font-bold underline bg-amber-300">
    Hello world! from home {{ juices }}
  </h1>
</template>

<script setup>
import { useCocktailStore } from '@/stores/cocktail'

const cocktailStore = useCocktailStore()
const {juices} = cocktailStore



</script>

<style scoped>

</style>