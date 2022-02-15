import React from 'react'

import './TextBox.scss'

const TextBox = ({ placeHolder, onChange, value }) => {
  return (
    <input
      type="text"
      className="input-text"
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  )
}

export default TextBox
