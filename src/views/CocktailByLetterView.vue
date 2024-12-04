<template>
  <div>
    <div class="flex justify-center gap-1 mt-2">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter" class="inline px-1">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

</script>