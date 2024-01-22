<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { ref } from 'vue'

const name = ref('')
const dateValue = ref([])
const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main class="bg-system-gray-40">
    <div>
      <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" as-single use-range />
    </div>

    <h1 class="text-system-primary-120">H1文字</h1>
    <h2 class="text-system-primary-120">H2文字</h2>
    <h3 class="text-system-primary-120">H3文字</h3>
    ---

    <h1 class="text-system-primary-120">按鈕</h1>
    <div>
      <button class="btn-primary">primary</button>
      <button class="btn-secondary">secondary</button>
      <button class="btn-ghost">ghost</button>
    </div>
    ---
    <div class="mb-6">
      <label
        for="default-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Default input</label
      >
      <input type="text" id="default-input" class="form-input" />
    </div>

    <div class="mb-6">
      <label
        for="default-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Default input</label
      >
      <input type="text" id="default-input" class="form-input-error" />
    </div>

    <label class="form-checkbox-group"
      >One
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
    </label>

    ---
    <div>
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        id="countries"
        class="form-select"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    ---

<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li>
            <a href="#" class="tab-base">Profile</a>
        </li>
        <li>
            <a href="#" class="tab-active" aria-current="page">Dashboard</a>
        </li>
        <li>
            <a href="#" class="tab-base">Settings</a>
        </li>
        <li>
            <a href="#" class="tab-base">Contacts</a>
        </li>
        <li>
            <a class="tab-base">Disabled</a>
        </li>
    </ul>
</div>

    ---
    <ol class="stepper-group">
      <li class="stepper-line-basic stepper-line-dark">
        <div class="stepper-number-basic">
          <span class="stepper-number-bright"> 1 </span>
          <span class="stepper-title-bright"> Title </span>
        </div>
      </li>
      <li class="stepper-line-basic stepper-line-dark">
        <div class="stepper-number-basic">
          <span class="stepper-number-dark"> 2 </span>
          <span class="stepper-title-dark"> Title </span>
        </div>
      </li>
      <li class="stepper-line-basic">
        <div class="stepper-number-basic">
          <span class="stepper-number-dark"> 3 </span>
          <span class="stepper-title-dark"> Title </span>
        </div>
      </li>
    </ol>
    <ol class="stepper-group">
      <li class="stepper-line-basic stepper-line-bright">
        <div class="stepper-number-basic">
          <span class="stepper-number-bright">
            <svg
              class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <span class="stepper-title-bright"> Title </span>
        </div>
      </li>
      <li class="stepper-line-basic stepper-line-dark">
        <div class="stepper-number-basic">
          <span class="stepper-number-bright"> 2 </span>
          <span class="stepper-title-bright"> Title </span>
        </div>
      </li>
      <li class="stepper-line-basic">
        <div class="stepper-number-basic">
          <span class="stepper-number-dark"> 3 </span>
          <span class="stepper-title-dark"> Title </span>
        </div>
      </li>
    </ol>
    <ol class="stepper-group">
      <li class="stepper-line-basic stepper-line-bright">
        <div class="stepper-number-basic">
          <span class="stepper-number-bright">
            <svg
              class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <span class="stepper-title-bright"> Title </span>
        </div>
      </li>
      <li class="stepper-line-basic stepper-line-bright">
        <div class="stepper-number-basic">
          <span class="stepper-number-bright">
            <svg
              class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <span class="stepper-title-bright"> Title </span>
        </div>
      </li>
      <li class="stepper-line-basic">
        <div class="stepper-number-basic">
          <span class="stepper-number-bright"> 3 </span>
          <span class="stepper-title-bright"> Title </span>
        </div>
      </li>
    </ol>
    ---
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

    <select name="" id="" class="">
      <option value="">123</option>
      <option value="">123</option>
      <option value="">123</option>
    </select>
  </main>
</template>
<style lang="scss"></style>
