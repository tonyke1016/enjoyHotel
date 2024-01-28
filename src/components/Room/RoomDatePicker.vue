<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import router from '@/router'

const props = defineProps({
  content: { type: Object }
})

const showOverlay = ref(false)
const dateRange = ref('')
const startDate = ref('2019/03/15')
const endDate = ref('')
const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MM'
})
const changeDate = () =>{
  const range = dateRange.value.split('-');
  console.log(range)
}

</script>

<template>
  <div>
    <div v-if="showOverlay" class="overlay" @click="showOverlay = false"></div>
    <div class="flex mb-4 relative justify-between" @click="showOverlay=true">
      <div class="w-52 border-2 rounded-lg border-black p-4 mr-2 z-20">
        <span class="text-tiny">入住</span>
        <div>
          {{ startDate }}
        </div>
      </div>
      <div class="w-52 border-2 rounded-lg border-black p-4 mr-2 z-20">
        <span class="text-tiny">退房</span>
        <div>
          {{ startDate }}
        </div>
      </div>
      <div v-show="showOverlay" class="vue-datepicker font-bold bg-white absolute block z-10 rounded-2xl -top-4 right-0" @click="showOverlay=true">
        <div class="pt-8 pl-8 pr-8">
          <h5>
            1晚
          </h5>
          <div>
            {{ startDate }} -  {{ startDate }}
          </div>
        </div>
        <vue-tailwind-datepicker
          :formatter="formatter"
          v-model="dateRange"
          @update:model-value="changeDate"
          no-input
          :shortcuts="false"
          overlay
          separator=" - "
          use-range
        >
          <template #inputIcon="{ value }">
            {{ value ? '' : '' }}
          </template>
        </vue-tailwind-datepicker>
        <div class="flex justify-end pb-8 pl-8 pr-8">
          <button class="mr-4">清除日期</button>
          <button class="btn-primary">確定日期</button>
        </div>
      </div>
    </div>
  </div>
</template>