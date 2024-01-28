import { defineStore } from 'pinia'
import API  from './api'

export const useRoomStore = defineStore('RoomStore', {
  state: () => ({
    roomList: [],
    room:{}
  }),
  getters: {
    getRoomList: state => state.roomList,
    getRoom: state => state.room,
  },
  actions: {
    async fetchRoomList() {
      const {result}  = await API.GET(`rooms`)
      this.roomList = result;
    },
    async fetchRoom(id:string) {
      const {result}  = await API.GET(`rooms/${id}`)
      this.room = result;
    },
}})
