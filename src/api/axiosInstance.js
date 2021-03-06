import axios from 'axios'
import { API_BASE_URL } from '../constants'

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  // withCredentials: true,
})

export default axiosInstance
