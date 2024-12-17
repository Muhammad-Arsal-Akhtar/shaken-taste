import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import axiosClient from '@/axiosClient';

export const useSearchDrinksStore = defineStore('searchDrinksByIngredient', () => {
  // Make drinks reactive
  const drinks = ref([]);
  const isLoading = ref(false)

  function searchDrink(drinkKeyword) {
    isLoading.value = true
    axiosClient
      .get(`filter.php?i=${drinkKeyword}`)
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
      }).finally(()=>{
        isLoading.value = false
      });
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

  return { drinks, searchDrink, getSearchDrinks, isLoading };
});
