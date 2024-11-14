import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCocktailStore = defineStore('cocktail', () => {

  const juices = ref(['lemon juice'])
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { juices }
})
