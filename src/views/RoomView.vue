<script setup lang="ts">
import { useRoomStore } from '@/stores/roomStore'
import RoomDatePicker from '@/components/Room/RoomDatePicker.vue'
import { ref, onMounted, computed } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'

const route = useRoute()
const roomStore = useRoomStore()
const dataLoading = ref(false)

const peopleNum = ref(1)
const room = ref({})

const loadData = async () => {
  await roomStore.fetchRoom(route.params.id)
  room.value = roomStore.getRoom
  console.log(room.value)
  dataLoading.value = true
}

const price = computed(() => {
  return `NT ${room.value.price.toLocaleString()}`
})

onMounted(() => {
  loadData()
  initFlowbite()
})
</script>

<template>
  <main class="bg-system-primary-10 p-20" v-if="dataLoading">
    <div class="grid grid-cols-4 grid-rows-2 gap-4">
      <div class="col-span-2 row-span-2">
        <img class="rounded-lg" :src="room.imageUrl" alt="" srcset="" />
      </div>
      <div v-for="(img, index) in room.imageUrlList.slice(1)">
        <img class="rounded-lg" :src="img" alt="" srcset="" :key="index" />
      </div>
    </div>
    <div class="pt-[120px] pb-[168px] grid grid-cols-8 gap-4">
      <div class="tablet:col-start-2 tablet:col-span-4 mobile:col-span-6 mr-[72px]">
        <div class="mb-20">
          <h1 class="tablet:mb-4 mobile:mb-4">{{ room.name }}</h1>
          <span class="font-serif font-bold">{{ room.description }}</span>
        </div>
        <div class="mb-20">
          <h5 class="border-system-primary-100 border-l-4 pl-3 mb-6">房間基本資訊</h5>
          <div class="flex mb-10">
            <div class="bg-white font-bold font-serif w-24 h-24 p-4 rounded-lg mr-4 mobile:font-sm">
              <img class="mb-2" src="./../assets/images/ic_Size.png" alt="" srcset="" />
              {{ room.areaInfo }}
            </div>
            <div class="bg-white font-bold font-serif w-24 h-24 p-4 rounded-lg mr-4 mobile:font-sm">
              <img class="mb-2" src="./../assets/images/ic_Bed.png" alt="" srcset="" />
              {{ room.bedInfo }}
            </div>
            <div class="bg-white font-bold font-serif w-24 h-24 p-4 rounded-lg mobile:font-sm">
              <img class="mb-2" src="./../assets/images/ic_Person.png" alt="" srcset="" />
              2-{{ room.maxPeople }}人
            </div>
          </div>
        </div>
        <div class="mb-20">
          <h5 class="border-system-primary-100 border-l-4 pl-3 mb-6">房內設施</h5>
          <div class="bg-white rounded-lg">
            <div v-for="(item, index) in room?.facilityInfo" :key="index" class="p-6">
              <div v-if="item.isProvide" class="flex">
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_40_7999)">
                      <path
                        d="M8.99844 16.2L4.79844 12L3.39844 13.4L8.99844 19L20.9984 6.99998L19.5984 5.59998L8.99844 16.2Z"
                        fill="#BF9D7D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_7999">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="font-serif">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <h5 class="border-system-primary-100 border-l-4 pl-3 mb-6">備品提供</h5>
          <div class="bg-white rounded-lg">
            <div v-for="(item, index) in room?.amenityInfo" :key="index" class="p-6">
              <div v-if="item.isProvide" class="flex">
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_40_7999)">
                      <path
                        d="M8.99844 16.2L4.79844 12L3.39844 13.4L8.99844 19L20.9984 6.99998L19.5984 5.59998L8.99844 16.2Z"
                        fill="#BF9D7D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_7999">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="font-serif">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <h5 class="border-system-primary-100 border-l-4 pl-3 mb-6">訂房須知</h5>
          <div class="font-serif">
            1.入住時間為下午3點，退房時間為上午12點。<br />
            2.如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。<br />
            3.請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。<br />
            4.若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。<br />
            5.請愛惜我們的房間與公共空間，並保持整潔。<br />
            6.如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。<br />
            7.我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。<br />
            8.請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。<br />
            9.我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。<br />
            10.為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。<br />
          </div>
        </div>
      </div>
      <div class="tablet:col-span-2 mobile:col-span-6">
        <div class="rounded-2xl bg-white font-serif p-10 flex flex-col">
          <h5 class="border-b-2 border-system-gray-40 pb-4 mb-10">預訂房型</h5>
          <h2 class="mb-2">{{ room.name }}</h2>
          <span class="mb-10">
            {{ room.description }}
          </span>
          <RoomDatePicker/>
          <div class="mb-10 flex justify-between items-center">
            <span>人數</span>
            <div>
              <button class="btn-circle">
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
              <button class="btn-circle">
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
    </div>
    <div></div>
  </main>
</template>
<style lang="scss"></style>
