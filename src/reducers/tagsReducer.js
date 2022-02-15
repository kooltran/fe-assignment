import { GET_TAGS_REQUEST, GET_TAGS_SUCCESS, GET_TAGS_FAIL } from '../constants'

export const tagsReducer = (state, action) => {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        fail: null,
      }
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        fail: null,
      }
    case GET_TAGS_FAIL:
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
