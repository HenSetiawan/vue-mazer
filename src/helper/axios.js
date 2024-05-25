import axios from 'axios'
import { BASE_URL } from './main.js'

// local : http://127.0.0.1:8000/api/v1
// public : http://192.168.116.105/app/api/v1

const axiosInstance = axios.create({
  baseURL: BASE_URL + 'api/v1/',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Accept: 'application/json'
  }
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default axiosInstance
