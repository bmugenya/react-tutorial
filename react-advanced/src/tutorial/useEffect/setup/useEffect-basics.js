import React, { useState, useEffect } from 'react'

const useEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('hello world')
  })
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}

export default useEffectBasics
