<script setup lang="ts">
import RoomDatePicker from '@/components/Room/RoomDatePicker.vue'
import { ref, defineProps, computed } from 'vue'

const peopleNum = ref(1)

const props = defineProps({
  room: { type: Object }
})

const calcPeople = (num) => {
  let amountPeople = peopleNum.value + num
  if (amountPeople < 1) return (peopleNum.value = 1)
  if (amountPeople > props.room.maxPeople)
    return (peopleNum.value = props.room.maxPeople)
  peopleNum.value = amountPeople
}

const price = computed(() => {
  return `NT ${props.room.price.toLocaleString()}`
})

const getSelectDate = (dateRange) => {
  console.log(dateRange)
}
</script>

<template>
  <div class="xl:col-span-2 lg:block lg:col-span-4 tablet:hidden mobile:hidden">
    <div class="rounded-2xl bg-white font-serif p-10 flex flex-col tablet:sticky tablet:top-0">
      <h5 class="border-b-2 border-system-gray-40 pb-4 mb-10">預訂房型</h5>
      <h2 class="mb-2">{{ props.room.name }}</h2>
      <span class="mb-10">
        {{ props.room.description }}
      </span>
      <RoomDatePicker @getSelectDate="getSelectDate" />
      <div class="mb-10 flex justify-between items-center">
        <span>人數</span>
        <div>
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
      <h5 class="text-system-primary-100 mb-10">
        {{ price }}
      </h5>
      <button class="btn-primary">立即預訂</button>
    </div>
  </div>
</template>
