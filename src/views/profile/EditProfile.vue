<template>
  <div class="editProfile">
    <div class="modifyPassword">
      <h1>修改密碼</h1>
      <div class="mail">
        <h2>電子信箱</h2>
        <h3>tony@example.com</h3>
      </div>
      <div class="showAccountArea" v-show="accountIsedit === false">
        <div class="password">
          <div>
            <h2>密碼</h2>
            <span v-for="item in 8" :key="item">●</span>
          </div>
          <span class="reset" @click="accountIsedit = !accountIsedit">重設</span>
        </div>
      </div>
      <div class="editAccountArea" v-show="accountIsedit === true">
        <div class="oldPassword">
          <h2>舊密碼</h2>
          <input placeholder="請輸入舊密碼" />
        </div>
        <div class="newPassword">
          <h2>新密碼</h2>
          <input placeholder="請輸入新密碼" />
        </div>
        <div class="confirmPassword">
          <h2>確認新密碼</h2>
          <input placeholder="請再輸入一次新密碼" />
        </div>
        <div class="storeButton" @click="storeNewPassword(1)">儲存設定</div>
      </div>
    </div>
    <div class="basicInformation">
      <h1>基本資料</h1>
      <div class="showBasicInformationArea" v-show="basicInformationIsedit === false">
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
        <div class="editButton" @click="basicInformationIsedit = !basicInformationIsedit">編輯</div>
      </div>
      <div class="editBasicInformationArea" v-show="basicInformationIsedit === true">
        <div class="name">
          <h2>姓名</h2>
          <input placeholder="請輸入姓名" v-model="name" />
        </div>
        <div class="phoneNumber">
          <h2>手機號碼</h2>
          <input placeholder="請輸入手機號碼" v-model="phone" />
        </div>
        <div class="birthday">
          <h2>生日</h2>
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
          <h2>地址</h2>
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
          <input placeholder="請輸入詳細地址" v-model="address" />
        </div>
        <div class="storeButton" @click="storeNewPassword(2)">儲存設定</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import api from '../../stores/api'
import ZipCodeMap from '../../utils/zipcodes'

// 個人資料
const data = ref(null)

// 帳號編輯狀態
const accountIsedit = ref(false)
// 儲存密碼設定
const storeNewPassword = (type) => {
  // 打api
  if (type === 1) {
    accountIsedit.value = !accountIsedit.value
  } else {
    basicInformationIsedit.value = !basicInformationIsedit.value
  }
}

// 基本資料編輯狀態
const basicInformationIsedit = ref(false)
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
const name = ref('')
const phone = ref('')
const address = ref('')
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
    @apply w-[40%] h-fit bg-white p-[40px] rounded-[20px];
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
    .showAccountArea {
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
    .editAccountArea {
      h2 {
        @apply text-[16px] mb-2;
      }
      input {
        @apply w-full mb-[20px];
      }
      .storeButton {
        @apply w-[129px] h-[56px] leading-[56px] text-center text-[#909090] rounded-[8px]  bg-[#ECECEC] cursor-pointer;
      }
    }
  }
  .basicInformation {
    @apply w-[55%] h-fit bg-white ml-[30px] rounded-[20px] p-[40px];
    h1 {
      @apply text-[24px] mb-[20px] font-bold;
    }
    .showBasicInformationArea {
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
    .editBasicInformationArea {
      .name {
        h2 {
          @apply text-[16px] mb-2;
        }
        input {
          @apply w-full h-[56px] rounded-[8px] mb-[10px] pl-[10px];
        }
      }
      .phoneNumber {
        h2 {
          @apply text-[16px] mb-2;
        }
        input {
          @apply w-full h-[56px] rounded-[8px] mb-[10px] pl-[10px];
        }
      }
      .birthday {
        h2 {
          @apply text-[16px] mb-2;
        }
        div {
          @apply flex justify-between mb-[20px];
          select {
            @apply w-[31%] h-[56px] rounded-[8px] pl-[10px] border;
          }
        }
      }
      .address {
        h2 {
          @apply text-[16px] mb-2;
        }
        div {
          @apply flex justify-between mb-[20px];
          select {
            @apply w-[49%] h-[56px] rounded-[8px] pl-[10px] border;
          }
        }
        input {
          @apply w-full h-[56px] rounded-[8px] mb-[20px] pl-[10px];
        }
      }
      .storeButton {
        @apply w-[129px] h-[56px] leading-[56px] text-center text-[#909090] rounded-[8px]  bg-[#ECECEC] cursor-pointer;
      }
    }
  }
}
</style>
