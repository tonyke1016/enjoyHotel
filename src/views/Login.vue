<template>
  <div class="login">
    <div class="loginPicture">
      <div class="logo">
        <h1>享樂酒店</h1>
      </div>
      <div class="background"></div>
    </div>
    <div class="loginArea">456</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login {
  @apply flex;
  .loginPicture {
    @apply w-3/6;
    .logo {
      @apply h-32 bg-black;
      h1 {
        @apply text-white;
      }
    }
    .background {
      height: calc(100vh - 128px);
      background-image: url('../assets/login/register.png');
      background-position: center;
      background-size: cover;
    }
  }
  .loginArea {
    @apply w-3/6;
  }
}
</style>
