import React from 'react'
import classNames from 'classnames'

import './Button.scss'

const Button = ({ children, variant }) => {
  return (
    <button
      className={classNames('btn', {
        'btn-normal': variant === 'normal',
        'btn-outlined': variant === 'outlined',
        'btn-contained': variant === 'contained',
      })}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'normal',
  width: '100%',
}

export default Button
