import React, { useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import PropTypes from 'prop-types'

import './Skeleton.scss'

const isChildNull = children => {
  return !children && !ReactDOMServer.renderToStaticMarkup(children)
}

const SkeletonAnimation = ({ type, height, width }) => {
  const skeletonListItems = height
    ? Array.from(Array(Math.round(height / 71)).keys())
    : []

  const skeletonBoxItems =
    !!height && !!width
      ? Array.from(
          Array(Math.round(width / 200) * Math.round(height / 200)).keys()
        )
      : []

  switch (type) {
    case 'boxes': {
      return (
        <div className="cui-shell__boxes">
          {skeletonBoxItems.map(item => (
            <div key={item} className="cui-shell has-effect" />
          ))}
        </div>
      )
    }
    case 'list': {
      return (
        <div className="cui-shell__list">
          {skeletonListItems.map(item => (
            <div key={item} className="cui-shell">
              <div className="cui-shell__image has-effect"></div>
              <div className="cui-shell__desc">
                <p className="has-effect"></p>
                <p className="has-effect"></p>
              </div>
            </div>
          ))}
        </div>
      )
    }
    default: {
      return <div className="cui-shell" />
    }
  }
}

SkeletonAnimation.propTypes = {
  type: PropTypes.string,
}

const Skeleton = ({ children, type }) => {
  const skeletonRef = useRef(null)

  const skeletonStyle = {
    width: '100%',
    height: '100%',
    minHeight: '10px',
  }

  const renderChildren = () => {
    if (isChildNull(children)) {
      return (
        <div style={skeletonStyle} ref={skeletonRef}>
          {' '}
          <SkeletonAnimation
            height={skeletonRef?.current?.offsetHeight}
            width={skeletonRef?.current?.offsetWidth}
            type={type}
          />{' '}
        </div>
      )
    }
    return children
  }
  return renderChildren()
}

Skeleton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
}

Skeleton.defaultProps = {
  type: 'normal',
}

export default Skeleton
