import React from 'react'

const Book = ({ title, author, img }) => {
  const clickHandler = () => {}
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Buy
      </button>
    </article>
  )
}

export default Book
