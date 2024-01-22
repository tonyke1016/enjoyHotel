<template>
  <main>
    <div>
      <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" as-single />
    </div>

    <h1 class="text-sub-title">test</h1>
    <h2 class="font-serif text-primary">享樂酒店</h2>
    <h5 class="font-serif text-primary">Enjoyment Luxury Hotel</h5>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src=""
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          123123
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src=""
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          12311123
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src=""
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          123111232
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src=""
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          12311223
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src=""
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          12311
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_14_2307)">
              <path
                d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_2307">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z"
              fill="black"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <h1 class="text-system-primary-120">您的文字</h1>
    <button class="btn-secondary">123</button>
    <select name="" id="" class="">
      <option value="">123</option>
      <option value="">123</option>
      <option value="">123</option>
    </select>
  </main>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios'
const dateValue = ref([])
const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})

onMounted(() => {
  initFlowbite()
  getRoomList()
})

const getRoomList = async () => {
  await axios({
    method: 'get',
    url: 'https://hotel-api-baf5.onrender.com/api/v1/admin/rooms',
    headers: {
      responseType: 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  })
    .then((res) => {
      console.log('getRoomList res', res)
    })
    .catch((err) => {
      console.error('getRoomList err', err)
    })
}
</script>
<style lang="scss" scoped></style>
