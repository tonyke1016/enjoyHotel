<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import router from '@/router'

const props = defineProps({
  content: { type: Object }
})

const emit = defineEmits(["getSelectDate"])

const showOverlay = ref(false)
const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MM'
})
const formatDate = (date)=> {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0'); // 月份是從 0 開始的
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}/${mm}/${dd}`;
}

const startDate = ref(formatDate(new Date()));
const endDate = ref(formatDate(new Date(new Date().getTime() + (24 * 60 * 60 * 1000))))
const dateRange = ref(`${startDate.value} - ${endDate.value}`)
const countDate = ref(1);

const calculateDaysDifference = (start, end) =>{
      const startDate = new Date(start);
      const endDate = new Date(end);
      const differenceInTime = endDate.getTime() - startDate.getTime();
      return differenceInTime / (1000 * 3600 * 24);
}

const validDate = (date) =>{
  return date < new Date() || date > new Date()
}

const changeDate = () =>{
  const range = dateRange.value.split('-');
  startDate.value = range[0].trim();
  endDate.value = range[1].trim();
  countDate.value = calculateDaysDifference(range[0],range[1])
}

const confirmSelectDate = (event) =>{
  event.stopPropagation();
  showOverlay.value = false;
  emit("getSelectDate",[startDate.value, endDate.value])
}

</script>

<template>
  <div>
    <div v-if="showOverlay" class="overlay" @click="showOverlay = false"></div>
    <div class="flex mb-4 relative justify-between">
      <div class="w-52 border-2 rounded-lg border-black p-4 mr-2 z-20" @click.prevent="showOverlay = true">
        <span class="text-tiny">入住</span>
        <div>
          {{ startDate }}
        </div>
      </div>
      <div class="w-52 border-2 rounded-lg border-black p-4 mr-2 z-20" @click.prevent="showOverlay = true">
        <span class="text-tiny">退房</span>
        <div>
          {{ endDate }}
        </div>
      </div>
      <div v-show="showOverlay" class="vue-datepicker font-bold bg-white absolute block z-10 rounded-2xl -top-4 right-0" @click="showOverlay=true">
        <div class="pt-8 pl-8 pr-8">
          <h5>
            {{countDate}}晚
          </h5>
          <div>
            {{ startDate }} -  {{ endDate }}
          </div>
        </div>
        <vue-tailwind-datepicker
          i18n="zh-tw"
          :formatter="formatter"
          v-model="dateRange"
          @update:model-value="changeDate"
          :disable-date="validDate"
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
        <div class="flex justify-end pb-8 pl-8 pr-8 z-20">
          <button class="mr-4">清除日期</button>
          <button class="btn-primary" @click.prevent="confirmSelectDate($event)">確定日期</button>
        </div>
      </div>
    </div>
  </div>
</template>