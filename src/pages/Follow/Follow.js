import React, { useState, useEffect } from 'react'
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

import { Button, Skeleton } from '../../components'

import { InfiniteList } from '../../components'

import { useAppContext } from '../../AppContext'
import AvatarPlaceHolder from '../../assets/images/avatar_placeholder.png'

import './Follow.scss'

const Follow = () => {
  const [activeTab, setTabActive] = useState('followers')
  const [state, setState] = useState([])

  const {
    data: {
      follow: { followers, following },
    },
    dispatch,
  } = useAppContext()

  const handleGetFollowers = async () => {
    dispatch(getFollowersRequest())
    try {
      const res = await getFollowers({ page: 1, pageSize: 20 })
      dispatch(getFollowersSuccess(res.data))
    } catch (err) {
      dispatch(getFollowersFail(err))
    }
  }

  const handleGetFollowing = async () => {
    dispatch(getFollowingRequest())
    try {
      const res = await getFollowing({ page: 1, pageSize: 20 })
      dispatch(getFollowingSuccess(res.data))
    } catch (err) {
      dispatch(getFollowingFail(err))
    }
  }

  const handleActiveTab = tabName => {
    setTabActive(tabName)
  }

  // useEffect(() => {
  //   if (activeTab === 'followers' && !followers.data) {
  //     handleGetFollowers()
  //   }

  //   if (activeTab === 'following' && !following.data) {
  //     handleGetFollowing()
  //   }
  // }, [activeTab])

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
        <InfiniteList scrollable={true} state={state} setState={setState} />
        {/* {activeTab === 'followers' && (
          <div className="follow-list">
            <Skeleton type="list">
              {followers?.data?.length > 0
                ? followers?.data?.map(item => (
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
        )}

        {activeTab === 'following' && (
          <div className="follow-list">
            <Skeleton type="list">
              {following?.data?.length > 0
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
        )} */}
      </div>
    </div>
  )
}

export default Follow
