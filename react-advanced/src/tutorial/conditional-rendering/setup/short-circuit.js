import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  const [isError, setIsError] = useState(false)

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
