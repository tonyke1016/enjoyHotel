<template>
  <div class="editProfile">
    <div class="modifyPassword">
      <h1>修改密碼</h1>
      <div class="mail">
        <h2>電子信箱</h2>
        <h3>tony@example.com</h3>
      </div>
      <div class="password">
        <div>
          <h2>密碼</h2>
          <span v-for="item in 6" :key="item">●</span>
        </div>
        <span class="reset">重設</span>
      </div>
    </div>
    <div class="basicInformation">
      <h1>基本資料</h1>
      <div class="name">
        <h2>姓名</h2>
        <h3>Jessica Wang</h3>
      </div>
      <div class="phone">
        <h2>手機號碼</h2>
        <h3>+886 912 345 678</h3>
      </div>
      <div class="birth">
        <h2>生日</h2>
        <h3>1995年8月15日</h3>
      </div>
      <div class="address">
        <h2>地址</h2>
        <h3>高雄市新興區六角路123號</h3>
      </div>
      <div class="editButton">編輯</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../../stores/api'
const data = ref(null)
onMounted(async () => {
  try {
    if (localStorage.getItem('token')) {
      data.value = await api.GET('/user')
      console.log('data', data.value)
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<style lang="scss" scoped>
.editProfile {
  @apply py-[100px]  flex;
  .modifyPassword {
    @apply w-[40%] h-[285px] bg-white p-[40px] rounded-[20px];
    h1 {
      @apply text-[24px] mb-[20px] font-bold;
    }
    .mail {
      @apply mb-[20px];
      h2 {
        @apply text-[16px] font-bold mb-[10px];
      }
      h3 {
        @apply text-[16px];
      }
    }
    .password {
      @apply mb-[20px] flex items-center justify-between;
      div {
        h2 {
          @apply text-[16px] mb-2;
        }
        span {
          @apply mx-1;
        }
      }
      .reset {
        @apply underline cursor-pointer text-[#bf9d7d];
      }
    }
  }
  .basicInformation {
    @apply w-[55%] h-[540px] bg-white ml-[30px] rounded-[20px] p-[40px];
    h1 {
      @apply text-[24px] mb-[20px] font-bold;
    }
    .name {
      @apply mb-[20px];
      h2 {
        @apply text-[16px] font-bold mb-[10px];
      }
      h3 {
        @apply text-[16px];
      }
    }
    .phone {
      @apply mb-[20px];
      h2 {
        @apply text-[16px] font-bold mb-[10px];
      }
      h3 {
        @apply text-[16px];
      }
    }
    .birth {
      @apply mb-[20px];
      h2 {
        @apply text-[16px] font-bold mb-[10px];
      }
      h3 {
        @apply text-[16px];
      }
    }
    .address {
      @apply mb-[20px];
      h2 {
        @apply text-[16px] font-bold mb-[10px];
      }
      h3 {
        @apply text-[16px];
      }
    }
    .editButton {
      @apply border border-[#bf9d7d] text-[#bf9d7d] w-[97px] h-[56px] rounded-[8px] text-center leading-[56px] cursor-pointer;
    }
  }
}
</style>
