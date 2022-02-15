import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
} from '../constants'

const getSearchRequest = () => ({
  type: GET_SEARCH_REQUEST,
})

const getSearchSuccess = payload => ({
  type: GET_SEARCH_SUCCESS,
  payload,
})

const getSearchFail = error => ({
  type: GET_SEARCH_FAIL,
  payload: error,
})

export { getSearchRequest, getSearchSuccess, getSearchFail }
