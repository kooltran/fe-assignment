import React, { useState, useEffect, useRef } from 'react'

const InfiniteList = ({
  getData,
  isStopLoadMore,
  listContentResolver,
  extraHeightAmount,
}) => {
  const listRef = useRef(null)
  const [loadMore, setLoadMore] = useState(false)

  const handleScroll = e => {
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const windowInnerHeight = window.innerHeight

    if (scrollTop + windowInnerHeight - extraHeightAmount >= scrollHeight) {
      setLoadMore(true)
    }
  }

  useEffect(() => {
    listRef.current.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (loadMore && !isStopLoadMore) {
      getData()
    }
    setLoadMore(false)
  }, [loadMore])

  return (
    <div ref={listRef} style={{ height: '100%', overflowY: 'auto' }}>
      {listContentResolver()}
    </div>
  )
}

export default InfiniteList
