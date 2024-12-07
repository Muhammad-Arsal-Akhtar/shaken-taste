import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CocktailByLetterView from '@/views/CocktailByLetterView.vue'
import CocktailByNameView from '@/views/CocktailByNameView.vue'
import CocktailByIngredientView from '@/views/CocktailByIngredientView.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import DrinkDetails from '@/views/DrinkDetails.vue'
import IngredientView from '@/views/IngredientView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: CocktailByLetterView,
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: CocktailByNameView,
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredient',
          component: CocktailByIngredientView,
          beforeEnter: (to, from, next) => {
            if (!to.params.ingredient) {
              next({ path: '/ingredient' });
            } else {
              next();
            }
          },
        },
        {
          path: '/ingredient',
          name: 'ingredient',
          component: IngredientView,
        },
        {
          path: '/drink-details/:id',
          name: 'drinkDetails',
          component: DrinkDetails,
        },
        
      ],
    },
  ],
})

export default router
