import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'

export const useSearchDrinksStore = defineStore('searchDrinks', () => {

  let drinks = []

  function searchDrink(drinkKeyword) {

    axiosClient.get(`search.php?s=${drinkKeyword}`).then(({ data })=> {
    console.log(data)
      if (data.drinks) {
        drinks = data.drinks;
      }else {
        drinks = []; // Reset if no drinks found
      }
    }).catch(error => {
      console.error('Error fetching drinks:', error);
      drinks = []; // Handle errors by clearing the array
    });

  }


  const getSearchDrinks = computed(() => {
    return drinks
  });


  return { drinks, searchDrink, getSearchDrinks }
})
