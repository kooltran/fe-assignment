import axiosInstance from './axiosInstance'
import { API_BASE_URL } from '../constants'

const getSearch = ({ page, pageSize, searchKey }) => {
  return axiosInstance
    .get(
      `${API_BASE_URL}/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${searchKey}`
    )
    .then(res => res.data)
}

export default getSearch
