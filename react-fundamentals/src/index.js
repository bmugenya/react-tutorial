import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'
import Book from './Book'

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formating

// Nested Components,React Tools

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { title, author, img } = book
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
