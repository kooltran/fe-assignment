import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  getTagsRequest,
  getTagsSuccess,
  getTagsFail,
} from '../../actions/tagsAction'
import getTags from '../../api/tagsAPI'

import { useAppContext } from '../../AppContext'

import { Skeleton, IconArrowLeft } from '../../components'

import './Tags.scss'

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str
}

const Tags = () => {
  const {
    data: { tags },
    dispatch,
  } = useAppContext()

  let navigate = useNavigate()

  const handleGetTags = async () => {
    dispatch(getTagsRequest())
    try {
      const res = await getTags()
      dispatch(getTagsSuccess(res))
    } catch (err) {
      dispatch(getTagsFail(err))
    }
  }

  const handleBackHome = () => {
    navigate('/')
  }

  useEffect(() => {
    handleGetTags()
  }, [])

  return (
    <div className="tags">
      <div className="back" onClick={handleBackHome}>
        <IconArrowLeft />
        <span>Home page</span>
      </div>
      <div className="tags-title">Tags</div>
      <div className="tags-list">
        <Skeleton type="boxes">
          {tags?.data?.length > 0
            ? tags?.data?.map(tag => (
                <div key={tag.id} className="tags-item">
                  <div className="content">
                    <p>{truncate(tag.name, 6)}</p>
                  </div>
                  <div className="desc">
                    <div className="name">{tag.name}</div>
                    <div className="count">{tag.count}</div>
                  </div>
                </div>
              ))
            : null}
        </Skeleton>
      </div>
    </div>
  )
}

export default Tags
