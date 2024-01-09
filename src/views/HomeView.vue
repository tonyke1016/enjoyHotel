<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="homePage">
    我是首頁
    <button class="loginButton" @click="goLogin">前往登入頁</button>
  </div>
</template>
<style lang="scss">
.homePage {
  .loginButton {
    @apply p-4 bg-blue-500;
  }
}
</style>
