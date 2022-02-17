import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
} from '../constants'

export const searchReducer = (state, action) => {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        data: state.data,
        fail: null,
      }
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        fail: null,
      }
    case GET_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        fail: action.payload,
      }

    default:
      return state
  }
}
