import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { books } from './books';
import Book from './Book';


function App() {
  return <h2>advanced react tutorial</h2>
}


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const {img, title, author} = book;
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'))

const Image = () => {
  return (
    <img
    src=''
    alt='#'
  />
  );
  
}

const Title = () => {
  const title = 'First 100 Numbers'
  return (
    <h1>{ title.toUpperCase() }</h1>
  );
}

const Author = () => {
  return (
    <h4>Priddy Baby</h4>
  );
}

