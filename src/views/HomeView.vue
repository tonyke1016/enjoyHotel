<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
}
</script>

<template>
  <Header></Header>
  <!-- <div class="homePage">
    我是首頁
    <button class="loginButton" @click="goLogin">前往登入頁</button>
  </div> -->
  <Footer></Footer>
</template>
<style lang="scss">

</style>
