import { useNavigate } from 'react-router-dom'

import { useAppContext } from '../../AppContext'

import getSearch from '../../api/searchAPI'
import {
  getSearchRequest,
  getSearchSuccess,
  getSearchFail,
} from '../../actions/searchAction'

const useSearch = () => {
  const {
    data: { search: searchData },
    dispatch,
  } = useAppContext()
  let navigate = useNavigate()

  const getSearchResult = async ({
    page,
    pageSize,
    keyword,
    isRedirect = false,
    isLoadMore = false,
  }) => {
    if (!isLoadMore) {
      dispatch(getSearchRequest())
    }
    try {
      const res = await getSearch({
        page: page,
        pageSize: pageSize,
        searchKey: keyword,
      })
      if (isLoadMore) {
        dispatch(
          getSearchSuccess({
            ...searchData?.data,
            ...res,
            data: [...searchData?.data?.data, ...res?.data],
          })
        )
      } else {
        dispatch(getSearchSuccess(res))
      }
      if (isRedirect) {
        if (res.data.length > 0) {
          navigate(
            `/result?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
          )
        } else {
          dispatch(getSearchFail('No results were found'))
        }
      }
    } catch (err) {
      dispatch(getSearchFail(err))
    }
  }

  return getSearchResult
}

export default useSearch
