import {
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAIL,
  GET_FOLLOWING_REQUEST,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAIL,
} from '../constants'

const getFollowersRequest = () => ({
  type: GET_FOLLOWERS_REQUEST,
})

const getFollowersSuccess = payload => ({
  type: GET_FOLLOWERS_SUCCESS,
  payload,
})

const getFollowersFail = error => ({
  type: GET_FOLLOWERS_FAIL,
  payload: error,
})

const getFollowingRequest = () => ({
  type: GET_FOLLOWING_REQUEST,
})

const getFollowingSuccess = payload => ({
  type: GET_FOLLOWING_SUCCESS,
  payload,
})

const getFollowingFail = error => ({
  type: GET_FOLLOWING_FAIL,
  payload: error,
})

export {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFail,
  getFollowingRequest,
  getFollowingSuccess,
  getFollowingFail,
}
