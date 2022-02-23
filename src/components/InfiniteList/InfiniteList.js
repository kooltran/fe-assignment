import React, { useState, useEffect, useRef } from 'react'

const InfiniteList = ({ getData, isStopLoadMore, listContentResolver }) => {
  const listRef = useRef(null)
  const [loadMore, setLoadMore] = useState(false)

  const handleScroll = e => {
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const listHeight = listRef.current.clientHeight

    if (scrollTop + listHeight >= scrollHeight) {
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
