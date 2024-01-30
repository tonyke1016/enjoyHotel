<template>
  <div class="profile">
    <div class="banner">
      <div class="helloWord">
        <img :src="userIcon" class="user" />
        <h1>Hello，{{ 'Jessica' }}</h1>
      </div>
    </div>
    <div class="editArea">
      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 w-[80%] mx-auto"
      >
        <ul class="flex flex-wrap -mb-px">
          <li>
            <RouterLink
              to="/profile/editProfile"
              :class="{
                'tab-base': route.name !== 'EditProfile',
                'tab-active': route.name === 'EditProfile'
              }"
            >
              個人資料</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/profile/order"
              :class="{
                'tab-base': route.name !== 'Order',
                'tab-active': route.name === 'Order'
              }"
              >我的訂單</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="keyVision">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router'
import userIcon from '../assets/editProfile/user1.png'
const route = useRoute()
const router = useRouter()
</script>

<style lang="scss" scoped>
.profile {
  .banner {
    @apply h-[384px] bg-no-repeat bg-center bg-cover pt-[100px];
    background-image: url('../assets/editProfile/hero.png');
    .helloWord {
      @apply flex items-center ml-[312px];

      .user {
        @apply w-[144px] h-[144px];
      }
      h1 {
        @apply text-white ml-[20px] text-[48px];
      }
    }
  }
  .editArea {
    @apply bg-black;
    .keyVision {
      @apply w-[80%] mx-auto;
    }
  }
}
</style>
