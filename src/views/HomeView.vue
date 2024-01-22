<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { increment } = store
const { count, doubleCount } = storeToRefs(store)
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="increment" class="button">++</button>
    <br />
    {{ count }}
    {{ doubleCount }}
  </main>
</template>
<style lang="scss">
// .button {
//   @apply border p-1.5 m-2 bg-blue-500 rounded-xl;
// }
</style>
