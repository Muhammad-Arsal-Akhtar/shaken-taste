import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCocktailStore = defineStore('cocktail', () => {

  const drinks = ref([])

  function searchDrink(drinkKeyword) {
    if(drinkKeyword){
      axiosClient
      .get(`search.php?s=${drinkKeyword}`)
      .then(({ data }) => {
        if (data.drinks) {
          drinks.value = data.drinks;
          console.log(drinks.value)
        } else {
          drinks.value = [];
        }
      })
      .catch((error) => {
        console.error('Error fetching drinks:', error);
        drinks.value = [];
      });
    }else{
      drinks.value = [];
    }
  }


  const getSearchDrinks = computed(() => {
    return drinks.value.map((drink) => {
      return {
        id: drink.idDrink,
        name: drink.strDrink,
        imageAlt: drink.strDrinkAlternate,
        image: drink.strDrinkThumb,
        video: drink.strVideo,
      };
    });
  });

  return { drinks, searchDrink, getSearchDrinks };
})
