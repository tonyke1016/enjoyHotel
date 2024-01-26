<script setup lang="ts">
import { onMounted, ref, defineProps, computed } from 'vue'
import { FwbCarousel } from 'flowbite-vue'
const props = defineProps({
  content: { type: Object }
})

const pictures = computed(()=>{
  return props.content.imageUrlList.map((image,index)=>{
    return {src: image, alt: `Image ${index}`}
  })
})

const price = computed(()=>{
  return `NT ${props.content.price.toLocaleString()}`
})
onMounted(() => {
  console.log(props.content.imageUrlList)
})
</script>

<template>

<div class="flex bg-white max-w-7xl rounded-tr-lg rounded-br-lg">
  <div class="w-[773px] room-carousel">
    <FwbCarousel :pictures="pictures" />
  </div>
  <div class="flex flex-col p-10">
    <h2 class="mb-2">
      {{ props.content.name }}
    </h2>
    <div class="mb-10">
      {{ props.content.description }}
    </div>
    <div class="flex mb-10">
      <div class="font-bold font-serif border border-1 w-24 h-24 border-system-primary-100 p-4 rounded-lg mr-4">
        <img class="mb-2" src="./../assets/images/ic_Size.png" alt="" srcset="">
      {{ props.content.areaInfo }}
      </div>
      <div class="font-bold font-serif border border-1 w-24 h-24 border-system-primary-100 p-4 rounded-lg mr-4">
        <img class="mb-2" src="./../assets/images/ic_Bed.png" alt="" srcset="">
      {{ props.content.bedInfo }}
      </div>
      <div class="font-bold font-serif border border-1 w-24 h-24 border-system-primary-100 p-4 rounded-lg">
        <img class="mb-2" src="./../assets/images/ic_Person.png" alt="" srcset="">
      2-{{ props.content.maxPeople }}人
      </div>
    </div>
    <div class="bg-gradient-to-r from-system-primary-100 h-0.5 mb-10"></div>
      <h5 class="text-system-primary-100">
        {{ price }}
      </h5>
  </div>
</div>
</template>
