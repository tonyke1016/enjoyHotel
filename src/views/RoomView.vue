<script setup lang="ts">
import { useRoomStore } from '@/stores/roomStore'
import Room from '../components/Room.vue'
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
  <main class="bg-system-primary-10 p-[120px] p-[168px]">
    <h6>房型選擇</h6>
    <h1 class="text-system-primary-100 mb-20">各種房型，任您挑選</h1>
    <Room v-for="(room, roomIndex) in roomStore.getroomList" :key="roomIndex" :content="room" />
  </main>
</template>
<style lang="scss"></style>
