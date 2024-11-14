<script setup>

</script>

<template>

    <div class="h-full bg-gray-200">
        <header class="flex items-stretch justify-between bg-white shadow-md h-14">
            <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 hover:bg-green-200">
                Home
            </router-link>

            <div class="flex items-center gap-1">
                <router-link to="/" class="inline-flex items-center h-full px-2 hover:bg-green-200">
                    Search cocktails
                </router-link>

                <router-link to="/" class="inline-flex items-center h-full px-2 hover:bg-green-200">
                    Cocktails By Letter
                </router-link>

                <router-link to="/" class="inline-flex items-center h-full px-2 hover:bg-green-200">
                    Search By Ingredients
                </router-link>
            </div>
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped></style>
