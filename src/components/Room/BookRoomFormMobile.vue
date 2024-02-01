<script setup lang="ts">
import RoomDatePicker from '@/components/Room/RoomDatePicker.vue'
import { ref, defineProps, computed, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const peopleNum = ref(1)
const props = defineProps({
  room: { type: Object }
})

const calcPeople = (num) => {
  let amountPeople = peopleNum.value + num
  if (amountPeople < 1) return (peopleNum.value = 1)
  if (amountPeople > props.room.maxPeople) return (peopleNum.value = props.room.maxPeople)
  peopleNum.value = amountPeople
}

const price = computed(() => {
  return `NT ${props.room.price.toLocaleString()}`
})

const showOverlay = ref(false)
const showDateDrawer = ref(false)
const showPeopleDrawer = ref(false)
const showBookDrawer = ref(false)


const formatDate = (date) => {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0') // 月份是從 0 開始的
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}/${mm}/${dd}`
}

const startDate = ref(formatDate(new Date()))
const endDate = ref(formatDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)))
const dateRange = ref(`${startDate.value} - ${endDate.value}`)
const countDate = ref(1)

const calculateDaysDifference = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const differenceInTime = endDate.getTime() - startDate.getTime()
  return differenceInTime / (1000 * 3600 * 24)
}

const validDate = (date) =>{
  return date < new Date()
}

const changeDate = () => {
  const range = dateRange.value.split('-')
  startDate.value = range[0].trim()
  endDate.value = range[1].trim()
  countDate.value = calculateDaysDifference(range[0], range[1])
}

const checkDate = () =>{
  showOverlay.value = true;
  showPeopleDrawer.value = true;
  showDateDrawer.value = false;
}

const clearDate = () =>{
  dateRange.value = '';
}

const backToSelectDate = () =>{
  showOverlay.value=false;
  peopleNum.value = 1;
  showPeopleDrawer.value = false;
  showDateDrawer.value = true;
}

const checkBookInfo = () =>{
  showOverlay.value=false;
  showBookDrawer.value = true;
  showPeopleDrawer.value = false;
}

const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MM'
})

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div>
    <div v-if="showOverlay" class="overlay z-50 h-full" @click="showOverlay = false"></div>
    <div
      class="xl:hidden lg:hidden tablet:block mobile:flex w-full fixed bottom-0 bg-white h-20 p-3 justify-around border-t-2 items-center"
    >
      <h6 class="font-serif text-body-2">{{ price }}/晚</h6>
      <button
        class="btn-primary font-serif"
        @click="showDateDrawer=true"
      >
        查看可訂日期
      </button>
    </div>
    <Transition name="slide">
  
      <div
      v-if="showDateDrawer"
      class="fixed z-40 w-full overflow-y-auto h-full bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform left-0 right-0 translate-y-full bottom-full"
    >
      <div
        class="sticky top-0 z-50 w-full px-6 pt-4 pb-2 cursor-pointer hover:bg-system-gray-10 border-b-2 bg-system-gray-10"

      >
        <h5
          class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium"
          @click="showDateDrawer=false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_4323_7101)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_4323_7101">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h5>
        <div class="flex items-end py-3">
          <h5>
            {{ countDate }}晚
          </h5>
          <span class="font-serif ml-2">
            {{ startDate }} - {{ endDate }}
          </span>
        </div>
        <div class="font-serif grid grid-cols-7 py-3.5 text-center px-6">
          <span class="font-bold m-2">日</span>
          <span class="font-bold m-2">一</span>
          <span class="font-bold m-2">二</span>
          <span class="font-bold m-2">三</span>
          <span class="font-bold m-2">四</span>
          <span class="font-bold m-2">五</span>
          <span class="font-bold m-2">六</span>
        </div>
      </div>
      <div class="vue-datepicker mobile pb-4 px-6 z-40">
        <vue-tailwind-datepicker
          i18n="zh-tw"
          :formatter="formatter"
          v-model="dateRange"
          :disable-date="validDate"
          @update:model-value="changeDate"
          no-input
          :shortcuts="false"
          overlay
          :start-from="startDate"
          separator=" - "
          use-range
        >
          <template #inputIcon="{ value }">
            {{ value ? '' : '' }}
          </template>
        </vue-tailwind-datepicker>
      </div>
      <div class="sticky bottom-0 z-50 bg-white w-full border-t-2 p-3 flex justify-around">
        <button class="font-serif text-title w-full" @click="clearDate">清除日期</button>
        <button class="btn-primary font-serif w-full" 
        v-if="startDate!==endDate && dateRange"
        @click="checkDate"
        >確定日期</button>
        <button class="btn-primary bg-system-gray-40 font-serif" v-if="startDate===endDate || !dateRange">確定日期</button>
      </div>
    </div>
</Transition>

<Transition name="slide">
  <div
      v-if="showPeopleDrawer"
      class="fixed z-50 w-full overflow-y-auto h-full bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform left-0 right-0 translate-y-full bottom-[370px]"
    >
      <div
        class="z-50 w-full px-6 pt-4 pb-2 cursor-pointer hover:bg-system-gray-10 border-b-2 bg-system-gray-10"
      >
        <h5
          @click="backToSelectDate"
          class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_4323_7101)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_4323_7101">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h5>
        <div class="flex items-end py-3">
          <h5>
            {{ countDate }}晚
          </h5>
          <span class="font-serif ml-2">
            {{ startDate }} - {{ endDate }}
          </span>
        </div>
      </div>
      <div class="px-6 py-6 z-40">
      <h6 class="font-serif font-bold">選擇人數</h6>
      <span class="font-serif">此房型最多供 {{ props.room?.maxPeople }} 人居住，不接受寵物入住。</span>
      <div class="py-4 flex items-center">
          <button class="btn-circle" @click="calcPeople(-1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M19 13H5V11H19V13Z" fill="black" />
            </svg>
          </button>
          <span class="text-h6 mr-6 ml-6">
            {{ peopleNum }}
          </span>
          <button class="btn-circle" @click="calcPeople(1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
      <div class="z-60 bg-white w-full border-t-2 p-3 flex justify-around">
        <button class="font-serif text-title w-full" @click="backToSelectDate">重新選擇日期</button>
        <button class="btn-primary font-serif w-full" v-if="startDate!==endDate && dateRange" @click="checkBookInfo">儲存</button>
      </div>
    </div>
</Transition>

<Transition name="slide">
  <div
      v-if="showBookDrawer"
      class="fixed z-50 w-full overflow-y-auto h-full bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform left-0 right-0 translate-y-full bottom-[90px]"
    >
     <div class="flex justify-between">
      <div class="px-6 py-6 z-40 flex flex-col w-full">
      <span class="font-serif font-bold"> {{ price }} / {{ countDate }} 晚 / {{ peopleNum }}人</span>
      <span class="font-serif text-body-2"> {{ startDate }} - {{ endDate }}</span>
      </div>
      <div class="flex items-center w-full pr-3">
      <button class="btn-primary font-serif w-full" v-if="startDate!==endDate && dateRange">立即預訂</button>
      </div>
     </div>
    </div>
</Transition>
  </div>
</template>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: bottom 0.5s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  bottom: 0%;
}
</style>
