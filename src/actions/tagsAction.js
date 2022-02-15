import { GET_TAGS_REQUEST, GET_TAGS_SUCCESS, GET_TAGS_FAIL } from '../constants'

const getTagsRequest = () => ({
  type: GET_TAGS_REQUEST,
})

const getTagsSuccess = payload => ({
  type: GET_TAGS_SUCCESS,
  payload,
})

const getTagsFail = error => ({
  type: GET_TAGS_FAIL,
  payload: error,
})

export { getTagsRequest, getTagsSuccess, getTagsFail }
