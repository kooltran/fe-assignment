import React from 'react'

import './TextBox.scss'

const TextBox = ({ placeHolder }) => {
  return <input type="text" className="input-text" placeholder={placeHolder} />
}

export default TextBox
