import React, { useEffect } from 'react'

import {
  getTagsRequest,
  getTagsSuccess,
  getTagsFail,
} from '../../actions/tagsAction'
import getTags from '../../api/tagsAPI'

import { useAppContext } from '../../AppContext'

import './Tags.scss'

const Tags = () => {
  const {
    data: { tags },
    dispatch,
  } = useAppContext()

  const handleGetTags = async () => {
    dispatch(getTagsRequest())
    try {
      const res = await getTags()
      dispatch(getTagsSuccess(res))
    } catch (err) {
      dispatch(getTagsFail(err))
    }
  }

  useEffect(() => {
    handleGetTags()
  }, [])

  return (
    <div className="tags">
      <div className="tags-title">Tags</div>
      <div className="tags-list">
        {tags?.data?.map(tag => (
          <div key={tag.id} className="tags-item">
            <div className="content">
              <p>{tag.name}</p>
            </div>
            <div className="desc">
              <div className="name">{tag.name}</div>
              <div className="count">{tag.count}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tags
