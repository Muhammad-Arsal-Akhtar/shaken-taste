<template>
  <div>
    <pre>{{ drink }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "@/axiosClient";
import { useRoute } from "vue-router";

const drink = ref({})
const route = useRoute()

onMounted(() => {

  axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({ data }) => {
        drink.value = data
        console.log(data)
      });
})
</script>
