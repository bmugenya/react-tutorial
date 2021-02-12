import React, { useState, useEffect } from 'react'

const useEffectCleanup = () => {
  const [size, setSize] = useState()
  return (
    <div>
      <h3>UseEffect Cleanup</h3>
    </div>
  )
}

export default useEffectCleanup
