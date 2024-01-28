<script setup lang="ts">
  import { useRoomStore } from '@/stores/roomStore'
  import HotelRoom from '../components/HotelRoom.vue'
  import { ref, onMounted } from 'vue'
  
  const roomStore = useRoomStore()
  
  const loadData = async () => {
    await roomStore.fetchRoomList()
  }
  
  onMounted(() => {
    loadData()
  })
  </script>
  
  <template>
    <main class="bg-system-primary-10 pt-[120px] pb-[168px] grid grid-cols-6 gap-4">
      <div class="tablet:col-start-2 tablet:col-span-4 mobile:col-span-6 ml-4 mr-4">
        <h6 class="font-serif font-bold">房型選擇</h6>
      <h1 class="text-system-primary-100 tablet:mb-20 mobile:mb-10 mobile:text-h3">各種房型，任您挑選</h1>
      <HotelRoom v-for="(room, roomIndex) in roomStore.getRoomList" :key="roomIndex" :content="room" />
      </div>
    </main>
  </template>
  <style lang="scss"></style>
  