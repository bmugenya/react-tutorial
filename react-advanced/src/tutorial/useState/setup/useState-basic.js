import React, { useState } from 'react'

const UseStateBasic = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    setText('hello world')
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasic
