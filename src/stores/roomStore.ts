import { defineStore } from 'pinia'
import API  from './api'

export const useRoomStore = defineStore('RoomStore', {
  state: () => ({
    roomList: [],
  }),
  getters: {
    getroomList: state => state.roomList,
  },
  actions: {
    async fetchRoomList() {
      const {result}  = await API.GET(`rooms`)
      this.roomList = result;
    },
}})
