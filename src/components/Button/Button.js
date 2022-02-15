import React from 'react'
import classNames from 'classnames'

import './Button.scss'

const Button = ({ children, variant, disabled, onClick, ...props }) => {
  return (
    <button
      className={classNames('btn', {
        'btn-normal': variant === 'normal',
        'btn-outlined': variant === 'outlined',
        'btn-contained': variant === 'contained',
        'btn-disabled': disabled,
      })}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'normal',
  width: '100%',
  disabled: false,
}

export default Button
