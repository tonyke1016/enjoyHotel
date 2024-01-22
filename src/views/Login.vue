<template>
  <div class="login">
    <div class="logo">
      <div class="logoImage"></div>
    </div>
    <div class="loginWrapper">
      <div class="loginPicture">
        <div class="background"></div>
      </div>
      <div class="loginArea">
        <div class="inputArea">
          <h2>享樂酒店，誠摯歡迎</h2>
          <h1>立即開始旅程</h1>
          <div class="email">
            <h3>電子信箱</h3>
            <input v-model="mail" />
          </div>
          <div class="password">
            <h3>密碼</h3>
            <input v-model="password" />
          </div>
          <div class="remember">
            <div class="rememberAccount"><input type="checkbox" /><span>記住帳號</span></div>
            <span class="forgetPassword">忘記密碼?</span>
          </div>
          <div class="loginButton" @click="login">會員登入</div>
          <div class="register">
            <span class="noMember">沒有會員嗎?</span>
            <span class="goRegister" @click="goRegister">前往註冊</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()
const goRegister = () => {
  router.push('/register')
}
const mail = ref('tony@example.com')
const password = ref('Aa112233')

const login = async () => {
  const data = {
    email: mail.value,
    password: password.value
  }
  await axios({
    method: 'post',
    url: 'https://hotel-api-baf5.onrender.com/api/v1/user/login',
    data
  })
    .then((res) => {
      console.log('login res', res)
      localStorage.setItem('token', res.data.token)
      router.push('/room')
    })
    .catch((err) => {
      console.error('login err', err)
    })
}
</script>

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
      background-image: url('../assets/login/line3.png');
      @apply w-3/6 bg-black bg-no-repeat bg-top bg-contain;
      .inputArea {
        @apply w-[416px] h-[522px] mx-auto mt-[60px];
        h2 {
          @apply text-[16px] text-[#BF9D7D];
        }
        h1 {
          @apply text-[48px] text-[#ffffff] mb-[20px];
        }
        .email {
          h3 {
            @apply text-[#ffffff] mb-[10px];
          }
          input {
            @apply w-full h-[56px] rounded-[8px] mb-[10px] pl-[10px];
          }
        }
        .password {
          h3 {
            @apply text-[#ffffff] mb-[10px];
          }
          input {
            @apply w-full  h-[56px] rounded-[8px] mb-[10px] pl-[10px];
          }
        }
        .remember {
          @apply flex  justify-between mb-[30px];
          .rememberAccount {
            @apply flex items-center;
            input[type='checkbox'] {
              @apply w-[24px] h-[24px]  bg-[#BF9D7D];
              &:after {
                @apply inline-block content-[''] w-[24px] h-[24px] border border-solid border-[#BF9D7D];
                &:checked {
                  @apply bg-[#BF9D7D] content-['✔︎'] text-[16px] text-center text-white;
                }
              }
            }
            span {
              @apply ml-[5px] text-[#ffffff];
            }
          }
          .forgetPassword {
            @apply text-[#BF9D7D] underline cursor-pointer;
          }
        }
        .loginButton {
          @apply h-[56px] text-[#ffffff] bg-[#BF9D7D] rounded-[8px] text-center leading-[56px] mb-[30px];
        }
        .register {
          .noMember {
            @apply text-[#ffffff];
          }
          .goRegister {
            @apply text-[#BF9D7D] ml-[5px] underline cursor-pointer;
          }
        }
      }
    }
  }
}
</style>
