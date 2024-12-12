<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <router-link :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
        <svg width="50px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M243.695 17.3L230.82 120.304l-60.279-44.479 37.455 68.473-64.96-8.193 55.495 34.894-53.898-12.508-2.237 8.428-35.41 133.324-.03.137c-4.45 19.17.229 36.572 10.108 49.285 8.021 10.321 19.14 17.723 31.36 22.074l-20.965 90.332c-10.725-2.312-19.535-3.777-26.486-3.84-11.275-.102-17.749 3.446-19.938 12.88L182.69 494.7c3.539-15.248-9.791-21.619-37.697-28.56l20.963-90.333c12.886 1.474 26.13-.275 37.875-6.008 14.47-7.063 26.335-20.624 30.783-39.793l.032-.139 23.269-116.904 18.522 89.986.033.137c4.573 19.14 16.528 32.625 31.043 39.594 11.782 5.656 25.036 7.318 37.912 5.76l21.553 90.195c-27.86 7.122-41.148 13.58-37.51 28.804l101.498-24.253c-2.251-9.42-8.747-12.924-20.022-12.748-6.95.108-15.751 1.63-26.46 4.011l-21.553-90.193c12.19-4.43 23.26-11.905 31.213-22.277 9.796-12.778 14.362-30.21 9.789-49.35l-.034-.139-38.572-141.502-39.107 9.346 49.74-32.906-72.568 19.896 31.601-83.687-61.449 71.984zM352.55 152.548l15.435 56.629-94.435-9.526-5.537-26.904zm-194.996 27.418l84.666 19.648-2.375 11.928-93.373 10.15zm119.799 38.156l16.285 1.643c3.526 21.284 13.407 75.46 24.455 85.855 10.904 10.26 44.84 2.596 44.84 2.596-36.87 2.87-57.908-53.902-68.108-88.332l78.23 7.892 13.382 49.088c3.409 14.325.234 25.28-6.577 34.164-6.819 8.895-17.778 15.455-29.746 18.315-11.967 2.86-24.709 1.964-34.812-2.887-10.088-4.843-17.872-13.178-21.309-27.488zm-41.19 11.926l-19.098 95.947c-3.343 14.335-11.073 22.722-21.13 27.631-10.072 4.916-22.806 5.897-34.791 3.115-11.986-2.781-22.989-9.27-29.866-18.119-6.867-8.838-10.114-19.771-6.8-34.115l17.043-64.172 19.427-2.111c-7.946 22.99-22.686 68.977-18.386 82.308 4.595 14.25 38.013 23.924 38.013 23.924-35.245-20.62-26.243-72.809-18.168-106.39z" /></svg>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HOME</span>
    </router-link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block px-3 py-2 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <!-- <header class="flex items-stretch justify-between bg-white shadow-md h-14">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 hover:bg-green-200">
            Home
        </router-link>

        <div class="flex items-center gap-1">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center h-full px-2 transition-colors hover:bg-green-200">
                Cocktails by Name
            </router-link>

            <router-link :to="{ name: 'byLetter' }"
                class="inline-flex items-center h-full px-2 transition-colors hover:bg-green-200">
                Cocktails By Letter
            </router-link>

            <router-link :to="{ name: 'ingredient' }"
                class="inline-flex items-center h-full px-2 transition-colors hover:bg-green-200">
                Cocktails By Ingredients
            </router-link>
        </div>
    </header> -->
</template>