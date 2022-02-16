import React, { useState, useEffect } from 'react'

import { useAppContext } from '../../AppContext'
import { Button } from '../../components'

import { getFollowers, getFollowing } from '../../api/followAPI'
import {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFail,
  getFollowingRequest,
  getFollowingSuccess,
  getFollowingFail,
} from '../../actions/followAction'

import AvatarPlaceHolder from '../../assets/images/avatar_placeholder.png'

const InfiniteList = () => {
  const {
    data: {
      follow: { followers, following },
    },
    dispatch,
  } = useAppContext()

  const [currentPage, setPage] = useState(1)
  const [loadMore, setLoadMore] = useState(true)

  const handleScroll = e => {
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const windowInnerHeight = window.innerHeight

    const extraHeightAmount = 135
    console.log(loadMore, 'loadMOre')

    if (
      scrollTop + windowInnerHeight - extraHeightAmount >= scrollHeight &&
      loadMore !== null
    ) {
      setLoadMore(true)
    }

    if (loadMore === null) {
      setLoadMore(false)
    }
  }

  useEffect(() => {
    const list = document.getElementById('list')
    list.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (loadMore) {
      handleGetFollowers()
    }
    setLoadMore(false)
  }, [loadMore])

  const handleGetFollowers = async () => {
    if (loadMore === null) {
      dispatch(getFollowersRequest())
    }
    try {
      const res = await getFollowers({ page: currentPage, pageSize: 20 })

      dispatch(
        getFollowersSuccess(
          followers?.data ? [...followers?.data, ...res.data] : res.data
        )
      )
      setPage(currentPage + 1)
      if (followers?.data?.length === res.total) {
        setLoadMore(null)
      }
    } catch (err) {
      dispatch(getFollowersFail(err))
    }
  }
  // console.log(loadMore, 'loadMore')
  return (
    <div id="list" className="follow-list">
      {followers?.data?.map(item => (
        <div key={item.id} className="follow-list__item">
          <div className="follow-image">
            <img src={AvatarPlaceHolder} alt="" />
          </div>
          <div className="follow-desc">
            <div className="name">{item.name}</div>
            <div className="username">{item.username}</div>
          </div>
          <div className="follow-button">
            <Button variant="outlined">Follow</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InfiniteList
