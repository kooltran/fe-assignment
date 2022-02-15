import axiosInstance from './axiosInstance'
import { API_BASE_URL } from '../constants'

const getTags = () => {
  return axiosInstance.get(`${API_BASE_URL}/api/tags`).then(res => res.data)
}

export default getTags
