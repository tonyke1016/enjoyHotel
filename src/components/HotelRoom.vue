<script setup lang="ts">
import { onMounted, ref , computed } from 'vue'
import { FwbCarousel } from 'flowbite-vue'
import router from '@/router'

const props = defineProps({
  content: { type: Object }
})

const pictures = computed(() => {
  return props.content.imageUrlList.map((image, index) => {
    return { src: image, alt: `Image ${index}` }
  })
})

const price = computed(() => {
  return `NT ${props.content.price.toLocaleString()}`
})

const toRoom = (id: string) => {
  router.push({
    name: 'room',
    params: { id }
  })
}

onMounted(() => {
  console.log(props.content.imageUrlList)
})
</script>

<template>
  <div
    class="flex bg-white rounded-tr-lg rounded-br-lg ml-auto mr-auto max-w-7xl mobile:flex-col tablet:flex-col lg:flex-row"
  >
    <div class="mobile:w-full lg:w-[773px] room-carousel primary-carousel">
      <FwbCarousel :pictures="pictures" />
    </div>
    <div class="flex flex-col tablet:p-10 mobile:p-4">
      <h2 class="mb-2">
        {{ props.content.name }}
      </h2>
      <div class="mb-10">
        {{ props.content.description }}
      </div>
      <div class="flex mb-10">
        <div
          class="font-bold font-serif border border-1 w-24 h-24 border-system-primary-100 p-4 rounded-lg mr-4 mobile:font-sm"
        >
          <img class="mb-2" src="./../assets/images/ic_Size.png" alt="" srcset="" />
          {{ props.content.areaInfo }}
        </div>
        <div
          class="font-bold font-serif border border-1 w-24 h-24 border-system-primary-100 p-4 rounded-lg mr-4 mobile:font-sm"
        >
          <img class="mb-2" src="./../assets/images/ic_Bed.png" alt="" srcset="" />
          {{ props.content.bedInfo }}
        </div>
        <div
          class="font-bold font-serif border border-1 w-24 h-24 border-system-primary-100 p-4 rounded-lg mobile:font-sm"
        >
          <img class="mb-2" src="./../assets/images/ic_Person.png" alt="" srcset="" />
          2-{{ props.content.maxPeople }}人
        </div>
      </div>
      <div class="bg-gradient-to-r from-system-primary-100 h-0.5 mb-10"></div>
      <div class="flex justify-between">
        <h5 class="text-system-primary-100">
          {{ price }}
        </h5>
        <div @click="toRoom(props.content._id)" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_8091_4115)">
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="#BF9D7D"
              />
            </g>
            <defs>
              <clipPath id="clip0_8091_4115">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
