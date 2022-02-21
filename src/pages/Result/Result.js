import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

import { Button, InfiniteList, IconArrowLeft } from '../../components'

import useSearch from './useSearch'
import { useAppContext } from '../../AppContext'
import PlaceHolderImage from '../../assets/images/place_holder.png'
import LoadingIcon from '../../assets/images/icons/loading.svg'

import { getSearchSuccess } from '../../actions/searchAction'

import './Result.scss'

const ResultPage = () => {
  const {
    data: { search: searchData },
    dispatch,
  } = useAppContext()

  const getSearchResult = useSearch()

  let [searchParams] = useSearchParams()
  let navigate = useNavigate()

  const page = searchParams.get('page')
  const pageSize = searchParams.get('pageSize')
  const keyword = searchParams.get('keyword')

  const totalPages = searchData?.data?.total
  useEffect(async () => {
    if (page && pageSize && keyword) {
      if (!searchData.data) {
        getSearchResult({ page, pageSize, keyword })
      }
    } else {
      navigate('/')
    }
  }, [])

  const handleLoadMore = async () => {
    getSearchResult({
      page: searchData?.data?.page ? parseInt(searchData?.data?.page) + 1 : 1,
      pageSize,
      keyword,
      isLoadMore: true,
    })
  }

  const resultListResolver = () => {
    return (
      <div className="result-list">
        {searchData?.data?.data?.map(item => {
          return (
            <div key={item.id} className="result-item">
              <img
                src={PlaceHolderImage}
                alt={item.username}
                className="result-item__image"
              />
              <div className="result-item__title">This is title</div>
              <div className="result-item__username">{`by ${item.name}`}</div>
            </div>
          )
        })}
      </div>
    )
  }

  const handleBackHome = () => {
    dispatch(getSearchSuccess(null))
    navigate('/')
  }

  return (
    <div className="result-wrapper">
      <div className="back" onClick={handleBackHome}>
        <IconArrowLeft />
        <span>Home page</span>
      </div>
      <div className="result-title">Result</div>
      <div className="result-content">
        <InfiniteList
          listContentResolver={resultListResolver}
          getData={handleLoadMore}
          extraHeightAmount={195}
          isStopLoadMore={
            searchData?.data?.data?.length &&
            searchData?.data?.data?.length === searchData?.data?.total
          }
          loading={searchData.loading}
        />
        {searchData.loading && (
          <div
            style={{
              width: '50px',
              color: 'white',
              margin: '0 auto',
              marginTop: '-35px',
            }}
          >
            <img style={{ width: '100%', height: '100%' }} src={LoadingIcon} />
          </div>
        )}
      </div>
      {searchData?.data?.data?.length < totalPages && (
        <div className="result-more">
          <Button onClick={handleLoadMore}>More</Button>
        </div>
      )}
    </div>
  )
}

export default ResultPage
