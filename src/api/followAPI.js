import axiosInstance from './axiosInstance'
import { API_BASE_URL } from '../constants'

const getFollowers = ({ page, pageSize }) => {
  return axiosInstance
    .get(`${API_BASE_URL}/api/users/all?page=${page}&pageSize=${pageSize}`)
    .then(res => res.data)
}

const getFollowing = ({ page, pageSize }) => {
  return axiosInstance
    .get(`${API_BASE_URL}/api/users/friends?page=${page}&pageSize=${pageSize}`)
    .then(res => res.data)
}

export { getFollowers, getFollowing }
