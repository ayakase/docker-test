<template>
  <div style="display: flex;flex-direction: column;">
    <div> Hello from frontend</div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import baseUrl from '../connect';
const text = ref("")
onMounted(() => {
  baseUrl.get('/').then((response) => {
    console.log(response.data)
    text.value = response.data
  }).catch((error) => {
    console.error(error)
  });
})
</script>

<style scoped></style>