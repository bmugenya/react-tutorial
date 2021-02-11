import React from 'react'

const ErrorExample = () => {
  const handleClick = () => {
    console.log('brian')
  }
  return (
    <div>
      <h1>UseState error example</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </div>
  )
}

export default ErrorExample
