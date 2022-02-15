import {
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAIL,
  GET_FOLLOWING_REQUEST,
  GET_FOLLOWING_SUCCESS,
  GET_FOLLOWING_FAIL,
} from '../constants'

export const followReducer = (state, action) => {
  switch (action.type) {
    case GET_FOLLOWERS_REQUEST:
      return {
        ...state,
        followers: {
          ...state.followers,
          loading: true,
          data: null,
          fail: null,
        },
      }
    case GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: {
          ...state.followers,
          loading: false,
          data: action.payload,
          fail: null,
        },
      }
    case GET_FOLLOWERS_FAIL:
      return {
        ...state,
        followers: {
          ...state.followers,
          loading: false,
          data: null,
          fail: action.payload,
        },
      }

    case GET_FOLLOWING_REQUEST:
      return {
        ...state,
        following: {
          ...state.following,
          loading: true,
          data: null,
          fail: null,
        },
      }
    case GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        following: {
          ...state.following,
          loading: false,
          data: action.payload,
          fail: null,
        },
      }
    case GET_FOLLOWING_FAIL:
      return {
        ...state,
        following: {
          ...state.following,
          loading: false,
          data: null,
          fail: action.payload,
        },
      }

    default:
      return state
  }
}
