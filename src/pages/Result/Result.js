import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

import { Button } from '../../components'

import useSearch from './useSearch'
import { useAppContext } from '../../AppContext'
import PlaceHolderImage from '../../assets/images/place_holder.png'

import './Result.scss'

const ResultPage = () => {
  const {
    data: { search: searchData },
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
      page: parseInt(searchData.data.page) + 1,
      pageSize,
      keyword,
      isLoadMore: true,
    })
  }

  return (
    <div className="result-wrapper">
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
      {searchData?.data?.data.length < totalPages && (
        <div className="result-more">
          <Button onClick={handleLoadMore}>More</Button>
        </div>
      )}
    </div>
  )
}

export default ResultPage
