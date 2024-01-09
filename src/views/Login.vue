<template>
  <div class="login">
    <div class="logo">
      <div class="logoImage"></div>
    </div>
    <div class="loginWrapper">
      <div class="loginPicture">
        <div class="background"></div>
      </div>
      <div class="loginArea"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login {
  .logo {
    @apply h-32 bg-black  px-4 py-8;
    .logoImage {
      @apply h-16 bg-no-repeat bg-left bg-contain;
      background-image: url('../assets/login/logo.png');
    }
  }
  .loginWrapper {
    @apply flex;
    .loginPicture {
      @apply w-3/6;
      .background {
        height: calc(100vh - 128px);
        background-image: url('../assets/login/register.png');
        @apply bg-cover bg-center;
      }
    }
    .loginArea {
      @apply w-3/6;
    }
  }
}
</style>
