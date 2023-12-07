import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../screens/home/Home.jsx'
import BookDetail from "../screens/bookDetail/BookDetail.jsx"
import { useState, useEffect } from 'react';

function Router() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error('Error while receiving data:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home books={books} setBooks={setBooks} />} path='/' />
        <Route element={<BookDetail setBooks={setBooks} />} path='/book/:id' />
        <Route element={<div>Sorry, something went wrong.</div>} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;