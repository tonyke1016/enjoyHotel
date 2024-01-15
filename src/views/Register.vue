<script setup lang="ts"></script>

<template>
  <div class="register">
    <div class="logo">
      <div class="logoImage"></div>
    </div>
    <div class="registerWrapper">
      <div class="loginPicture">
        <div class="background"></div>
      </div>
      <div class="registerArea">
        <div class="inputArea">
          <h2>享樂酒店，誠摯歡迎</h2>
          <h1>立即註冊</h1>
          <div class="stepArea">
            <div class="step1">
              <div class="number1">1</div>
              <h2>輸入信箱及密碼</h2>
            </div>
            <div class="line"></div>
            <div class="step2">
              <div class="number2">2</div>
              <h2>填寫基本資料</h2>
            </div>
          </div>
          <div class="email">
            <h3>電子信箱</h3>
            <input placeholder="hello@example.com" />
          </div>
          <div class="password">
            <h3>密碼</h3>
            <input placeholder="請輸入密碼" />
          </div>
          <div class="confirmPassword">
            <h3>確認密碼</h3>
            <input placeholder="請再輸入一次密碼" />
          </div>
          <div class="nextStep">下一步</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  .logo {
    @apply h-32 bg-black  px-4 py-8;
    .logoImage {
      @apply h-16 bg-no-repeat bg-left bg-contain;
      background-image: url('../assets/login/logo.png');
    }
  }
  .registerWrapper {
    @apply flex;
    .loginPicture {
      @apply w-3/6;
      .background {
        height: calc(100vh - 128px);
        background-image: url('../assets/login/register.png');
        @apply bg-cover bg-center;
      }
    }
    .registerArea {
      background-image: url('../assets/login/line3.png');
      @apply w-3/6 bg-black bg-no-repeat bg-top bg-contain;
      .inputArea {
        @apply w-[416px] h-[522px] mx-auto mt-[30px];
        h2 {
          @apply text-[16px] text-[#BF9D7D];
        }
        h1 {
          @apply text-[48px] text-white mb-[20px];
        }
        .stepArea {
          @apply flex justify-between mb-[30px];
          .step1 {
            .number1 {
              @apply border border-solid border-white rounded-full w-[24.5px] bg-[#BF9D7D] text-white text-center mx-auto mb-[5px];
            }
            h2 {
            }
          }
          .line {
            @apply w-[180px] h-[2px] bg-[#e5e5e5] self-center;
          }
          .step2 {
            .number2 {
              @apply border border-solid border-white rounded-full w-[24.5px] bg-black text-white text-center mx-auto mb-[5px];
            }
            h2 {
            }
          }
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
        .confirmPassword {
          h3 {
            @apply text-[#ffffff] mb-[10px];
          }
          input {
            @apply w-full  h-[56px] rounded-[8px] mb-[10px] pl-[10px];
          }
        }
        .nextStep {
          @apply h-[56px] text-black bg-white rounded-[8px] text-center leading-[56px] mt-[20px];
        }
      }
    }
  }
}
</style>
