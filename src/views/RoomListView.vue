<script setup lang="ts">
import { useRoomStore } from '@/stores/roomStore'
import HotelRoom from '../components/HotelRoom.vue'
import { ref, onMounted } from 'vue'
import { FwbCarousel } from 'flowbite-vue'
import img1 from '@/assets/images/img1.svg'
import img2 from '@/assets/images/img2.svg'
import img3 from '@/assets/images/img3.svg'
import img4 from '@/assets/images/img4.svg'

const roomStore = useRoomStore()

const loadData = async () => {
  await roomStore.fetchRoomList()
}

const pictures = ref([
  {
    src: img1,
    alt: 'img1'
  },
  {
    src: img2,
    alt: 'img2'
  },
  {
    src: img3,
    alt: 'img3'
  },
  {
    src: img4,
    alt: 'img4'
  }
])

onMounted(() => {
  loadData()
})
</script>

<template>
  <div>
    <div class="primary-carousel room-banner-carousel relative">
      <div class="room-banner-text">
        <div class="room-banner-text-left">
          <h1 class="text-system-primary-100 font-serif table:text-h4 mobile:text-h4">享樂酒店</h1>
          <h3 class="text-system-primary-100 font-serif lg:pb-10 tablet:pb-5 mobile:pb-5 table:text-h4 mobile:text-h4">Enjoyment Luxury Hotel</h3>
          <div class="lg:w-full lg:h-1 bg-gradient-to-r from-system-primary-100 to-white tablet:w-1 tablet:h-20 mobile:w-1 mobile:h-20"></div>
        </div>
        <div>
          <h1 class="text-white table:text-h4 mobile:text-h4 lg:pt-0 tablet:pt-10 mobile:pt-10">客房旅宿</h1>
        </div>
      </div>
      <div class="bg-black z-40 opacity-50 inset-0 absolute"></div>
      <FwbCarousel :pictures="pictures" no-controls />
    </div>
    <main class="bg-system-primary-10 pt-[120px] pb-[168px] grid grid-cols-6 gap-4">
      <div class="tablet:col-start-2 tablet:col-span-4 mobile:col-span-6 ml-4 mr-4">
        <h6 class="font-serif font-bold">房型選擇</h6>
        <h1 class="text-system-primary-100 tablet:mb-20 mobile:mb-10 mobile:text-h3">
          各種房型，任您挑選
        </h1>
        <HotelRoom
          v-for="(room, roomIndex) in roomStore.getRoomList"
          :key="roomIndex"
          :content="room"
        />
      </div>
    </main>
  </div>
</template>
