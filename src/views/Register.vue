<template>
  <div class="register">
    <div class="logo">
      <div class="logoImage"></div>
    </div>
    <div class="registerWrapper">
      <div class="loginPicture">
        <div class="background"></div>
      </div>
      <div class="registerArea" :class="{ inStep1: step === 1 }">
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
              <div class="number2" :class="{ inStep2: step === 2 }">2</div>
              <h2>填寫基本資料</h2>
            </div>
          </div>
          <div class="step1InputArea" v-show="step === 1">
            <div class="email">
              <h3>電子信箱</h3>
              <input placeholder="hello@example.com" v-model="registerEmail" />
            </div>
            <div class="password">
              <h3>密碼</h3>
              <input placeholder="請輸入密碼" v-model="registerPassword" />
            </div>
            <div class="confirmPassword">
              <h3>確認密碼</h3>
              <input placeholder="請再輸入一次密碼" v-model="registerConfirmPassword" />
            </div>
            <div class="nextStep" @click="nextStep">下一步</div>
            <div class="inquireLogin">
              <span class="memberQuestion">已經有會員了嗎？</span>
              <span class="loginSoon" @click="goLogin">立即登入</span>
            </div>
          </div>
          <div class="step2InputArea" v-show="step === 2">
            <div class="name">
              <h3>姓名</h3>
              <input placeholder="請輸入姓名" v-model="registerName" />
            </div>
            <div class="phoneNumber">
              <h3>手機號碼</h3>
              <input placeholder="請輸入手機號碼" v-model="registerPhoneNumber" />
            </div>
            <div class="birthday">
              <h3>生日</h3>
              <div>
                <select name="year" class="year" v-model="selectedYear">
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
                <select name="month" class="month" v-model="selectedMonth">
                  <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
                </select>
                <select name="day" class="day" v-model="selectedDay">
                  <option
                    v-for="day in daysInMonth(selectedYear, selectedMonth)"
                    :key="day"
                    :value="day"
                  >
                    {{ day }}
                  </option>
                </select>
              </div>
            </div>
            <div class="address">
              <h3>地址</h3>
              <div>
                <select name="county" class="city" v-model="chooseCounty" @change="selectCounty">
                  <option v-for="county in countyList" :key="county" :value="county">
                    {{ county }}
                  </option>
                </select>
                <select name="city" class="district" v-model="chooseCity">
                  <option v-for="city in cityList" :key="city.zipcode" :value="city">
                    {{ city.city }}
                  </option>
                </select>
              </div>
              <input placeholder="請輸入詳細地址" v-model="registerAddress" />
            </div>
            <div class="norm">
              <input type="checkbox" v-model="regulation" /><span
                >我已閱讀並同意本網站個資使用規範</span
              >
            </div>
            <div class="registerButton" @click="registerSubmit">完成註冊</div>
            <div class="login">
              <span class="hasMember">已經有會員了嗎?</span>
              <span class="goLogin" @click="goLogin">立即登入</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/stores/api'
import ZipCodeMap from '../utils/zipcodes'

// 步驟1註冊資料
const registerEmail = ref('')
const registerPassword = ref('')
const registerConfirmPassword = ref('')

// 步驟2註冊資料
const registerName = ref('')
const registerPhoneNumber = ref('')
const chooseCounty = ref('臺北市')
const countyList = ref([
  '臺北市',
  '基隆市',
  '新北市',
  '宜蘭縣',
  '新竹市',
  '新竹縣',
  '桃園市',
  '苗栗縣',
  '臺中市',
  '彰化縣',
  '南投縣',
  '嘉義市',
  '嘉義縣',
  '雲林縣',
  '臺南市',
  '高雄市',
  '澎湖縣',
  '屏東縣',
  '臺東縣',
  '花蓮縣',
  '金門縣',
  '連江縣'
])
const cityList = computed(() => {
  return ZipCodeMap.filter((item) => item.county === chooseCounty.value)
})
const chooseCity = ref({
  detail: '100臺北市中正區',
  zipcode: 100,
  county: '臺北市',
  city: '中正區'
})
// 選縣市 預設為該縣市第一區
const selectCounty = () => {
  chooseCity.value = cityList.value[0]
}
// 選出生年月日
const generateYearRange = () => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: 100 }, (_, i) => currentYear - i)
}
const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate()
}
const selectedYear = ref(new Date().getFullYear())
const selectedMonth = ref(new Date().getMonth() + 1)
const selectedDay = ref(new Date().getDate())
const years = ref(generateYearRange())
const registerAddress = ref('')
const regulation = ref(true)
const registerSubmit = async () => {
  if (
    registerName.value === '' ||
    registerPhoneNumber.value === '' ||
    registerAddress.value === ''
  ) {
    alert('尚有必填欄位為空！！')
    return
  }
  const sendObj = {
    name: registerName.value,
    email: registerEmail.value,
    password: registerPassword.value,
    phone: registerPhoneNumber.value,
    birthday:
      String(selectedYear.value) +
      '/' +
      String(selectedMonth.value) +
      '/' +
      String(selectedDay.value),
    address: {
      zipcode: chooseCity.value.zipcode,
      detail: chooseCounty.value + chooseCity.value.city + registerAddress.value
    }
  }
  console.log('提交的obj', sendObj)
  try {
    let res = await api.POST('user/signup', sendObj)
    alert('您已註冊成功！！')
    router.push('/login')
  } catch (error) {
    console.log(error)
    // alert(`${error}`)
  }
}

const router = useRouter()
const step = ref(1)
const nextStep = () => {
  if (
    registerEmail.value === '' ||
    registerPassword.value === '' ||
    registerConfirmPassword.value === ''
  ) {
    alert('尚有欄位必填！！！')
    return
  }
  if (registerPassword.value !== registerConfirmPassword.value) {
    alert('密碼與確認密碼不相符！！！')
    return
  }
  step.value = 2
}
const goLogin = () => {
  router.push('/login')
}
</script>
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
        height: 100%;
        background-image: url('../assets/login/register.png');
        @apply bg-cover bg-center;
      }
    }
    .registerArea {
      &.inStep1 {
        height: calc(100vh - 128px);
      }
      background-image: url('../assets/login/line3.png');
      @apply w-3/6 bg-black bg-no-repeat bg-top bg-contain;
      .inputArea {
        @apply w-[416px] mx-auto mt-[30px];
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
              &.inStep2 {
                @apply bg-[#BF9D7D];
              }
            }
            h2 {
            }
          }
        }
        .step1InputArea {
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
            @apply h-[56px] text-black bg-white rounded-[8px] text-center leading-[56px] mt-[20px] cursor-pointer
              hover:bg-[#BF9D7D] mb-[20px];
          }
          .inquireLogin {
            .memberQuestion {
              @apply text-white;
            }
            .loginSoon {
              @apply text-[#BF9D7D] ml-[10px] cursor-pointer;
            }
          }
        }
        .step2InputArea {
          .name {
            h3 {
              @apply text-[#ffffff] mb-[10px];
            }
            input {
              @apply w-full h-[56px] rounded-[8px] mb-[10px] pl-[10px];
            }
          }
          .phoneNumber {
            h3 {
              @apply text-[#ffffff] mb-[10px];
            }
            input {
              @apply w-full h-[56px] rounded-[8px] mb-[10px] pl-[10px];
            }
          }
          .birthday {
            h3 {
              @apply text-[#ffffff] mb-[10px];
            }
            div {
              @apply flex justify-between mb-[20px];
              select {
                @apply w-[31%] h-[56px] rounded-[8px] pl-[10px];
              }
            }
          }
          .address {
            h3 {
              @apply text-[#ffffff] mb-[10px];
            }
            div {
              @apply flex justify-between mb-[20px];
              select {
                @apply w-[49%] h-[56px] rounded-[8px] pl-[10px];
              }
            }
            input {
              @apply w-full h-[56px] rounded-[8px] mb-[20px] pl-[10px];
            }
          }
          .norm {
            @apply flex items-center mb-[20px];
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
          .registerButton {
            @apply h-[56px] text-[#ffffff] bg-[#BF9D7D] rounded-[8px] text-center leading-[56px] mb-[20px];
          }
          .login {
            .hasMember {
              @apply text-[#ffffff];
            }
            .goLogin {
              @apply text-[#BF9D7D] ml-[5px] underline cursor-pointer;
            }
          }
        }
      }
    }
  }
}
</style>
