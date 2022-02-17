import React, { useState } from 'react'
import classNames from 'classnames'

import { getFollowers, getFollowing } from '../../api/followAPI'
import {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFail,
  getFollowingRequest,
  getFollowingSuccess,
  getFollowingFail,
} from '../../actions/followAction'

import { useAppContext } from '../../AppContext'

import { Button, Skeleton, InfiniteList } from '../../components'

import AvatarPlaceHolder from '../../assets/images/avatar_placeholder.png'

import './Follow.scss'

const Follow = () => {
  const [activeTab, setTabActive] = useState('followers')

  const [currentFollowersPage, setFollowersPage] = useState(1)
  const [currentFollowingPage, setFollowingPage] = useState(1)

  const [isStopLoadMoreFollwers, setStopLoadMoreFollowers] = useState(false)
  const [isStopLoadMoreFollwing, setStopLoadMoreFollowing] = useState(false)

  const {
    data: {
      follow: { followers, following },
    },
    dispatch,
  } = useAppContext()

  const handleGetFollowers = async () => {
    dispatch(getFollowersRequest())
    try {
      const res = await getFollowers({
        page: currentFollowersPage,
        pageSize: 20,
      })

      dispatch(
        getFollowersSuccess(
          followers?.data ? [...followers?.data, ...res.data] : res.data
        )
      )

      setFollowersPage(currentFollowersPage + 1)

      if (followers?.data?.length + 20 === res.total) {
        setStopLoadMoreFollowers(true)
      }
    } catch (err) {
      dispatch(getFollowersFail(err))
    }
  }

  const handleGetFollowing = async () => {
    dispatch(getFollowingRequest())
    try {
      const res = await getFollowing({
        page: currentFollowingPage,
        pageSize: 20,
      })

      dispatch(
        getFollowingSuccess(
          following?.data ? [...following?.data, ...res.data] : res.data
        )
      )

      setFollowingPage(currentFollowingPage + 1)

      if (following?.data?.length + 20 === res.total) {
        setStopLoadMoreFollowing(true)
      }
    } catch (err) {
      dispatch(getFollowingFail(err))
    }
  }

  const handleActiveTab = tabName => {
    setTabActive(tabName)
  }

  const followersListContentResolver = () => {
    return (
      <div className="follow-list">
        <Skeleton type="list">
          {followers?.data?.length > 0
            ? followers.data.map(item => (
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
              ))
            : null}
        </Skeleton>
      </div>
    )
  }

  const followingListContentResolver = () => {
    return (
      <div className="follow-list">
        <Skeleton type="list">
          {following?.data?.length
            ? following.data.map(item => (
                <div key={item.id} className="follow-list__item">
                  <div className="follow-image">
                    <img src={AvatarPlaceHolder} alt="" />
                  </div>
                  <div className="follow-desc">
                    <div className="name">{item.name}</div>
                    <div className="username">{item.username}</div>
                  </div>
                  <div className="follow-button">
                    <Button variant="contained">Following</Button>
                  </div>
                </div>
              ))
            : null}
        </Skeleton>
      </div>
    )
  }

  return (
    <div className="follow">
      <div
        className={classNames('follow-tab', {
          left: activeTab === 'followers',
          right: activeTab === 'following',
        })}
      >
        <div
          className={classNames('follow-tab__item', {
            active: activeTab === 'followers',
          })}
          onClick={() => handleActiveTab('followers')}
        >
          Followers
        </div>
        <div
          className={classNames('follow-tab__item', {
            active: activeTab === 'following',
          })}
          onClick={() => handleActiveTab('following')}
        >
          Following
        </div>
      </div>
      <div className="follow-panel">
        {activeTab === 'followers' && (
          <InfiniteList
            getData={handleGetFollowers}
            isStopLoadMore={isStopLoadMoreFollwers}
            listContentResolver={followersListContentResolver}
            extraHeightAmount={135}
          />
        )}
        {activeTab === 'following' && (
          <InfiniteList
            getData={handleGetFollowing}
            isStopLoadMore={isStopLoadMoreFollwing}
            listContentResolver={followingListContentResolver}
            extraHeightAmount={135}
          />
        )}
      </div>
    </div>
  )
}

export default Follow
