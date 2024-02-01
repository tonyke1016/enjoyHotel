import type { AxiosResponse } from 'axios'
import axios from 'axios'
import router from '@/router'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  baseURL: 'https://hotel-api-baf5.onrender.com/api/v1/',
  timeout: 1000

  // headers: {'X-Custom-Header': 'foobar'}
})

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use((config) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token')

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {}

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : ''
  }

  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle error
    if (error.response.status === 401) {
      // ℹ️ Logout user and redirect to login page
      // Remove "userData" from localStorage
      localStorage.removeItem('userData')

      // Remove "accessToken" from localStorage
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userAbilities')

      // If 401 response returned from api
      router.push('/login')
    } else {
      return Promise.reject(error)
    }
  }
)

interface ErrorResponse {
  isError: true
  message: string
}

export default {
  async GET<T = any>(url: string, params?: object): Promise<T> {
    try {
      const res: AxiosResponse<T> = await axiosIns.get<T>(url, { params })

      return res.data
    } catch (error: any) {
      console.error('GET error', error)

      return Promise.reject(error.message)
    }
  },

  async DELETE<T = any>(url: string, params?: object): Promise<T> {
    try {
      const res: AxiosResponse<T> = await axiosIns.delete<T>(url, { params })

      return res.data
    } catch (error: any) {
      return Promise.reject(error.message)
    }
  },

  async POST<T = any>(url: string, data?: object, config?: object): Promise<T | ErrorResponse> {
    try {
      const res: AxiosResponse<T> = await axiosIns.post<T>(url, data, config)
      return res.data
    } catch (error: any) {
      return {
        isError: true,
        message: error.response?.data?.message || error.message
      }
    }
  },

  async PUT<T = any>(url: string, data?: object, config?: object): Promise<T> {
    try {
      const res: AxiosResponse<T> = await axiosIns.put<T>(url, data, config)

      return res.data
    } catch (error: any) {
      return Promise.reject(error.message)
    }
  },

  async PATCH<T = any>(url: string, data?: object, config?: object): Promise<T> {
    try {
      const res: AxiosResponse<T> = await axiosIns.patch<T>(url, data, config)

      return res.data
    } catch (error: any) {
      return Promise.reject(error.message)
    }
  }
}
