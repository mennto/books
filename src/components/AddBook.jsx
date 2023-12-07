import React, { useState } from 'react';

function AddBook({ setBooks }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [image, setImage] = useState('')
  const [audio, setAudio] = useState('')

  const createBook = () => {
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, year, image, audio }),
    })
      .then(response => response.json())
      .then(newBook => {
        setBooks(prevBooks => [...prevBooks, newBook]);
        setTitle('');
        setAuthor('');
        setYear('');
        setImage('');
        setAudio('');
      })
      .catch(error => {
        console.error('Error creating book:', error);
      });
  }

  return (
    <form>
      <input
        placeholder='Title'
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input
        placeholder='Author'
        onChange={e => setAuthor(e.target.value)}
        value={author}
      />
      <input
        placeholder='Year'
        onChange={e => setYear(e.target.value)}
        value={year}
      />
      <input
        placeholder='Image'
        onChange={e => setImage(e.target.value)}
        value={image}
      />
      <input
        placeholder='Audio'
        onChange={e => setAudio(e.target.value)}
        value={audio}
      />
      <button type='button' onClick={createBook}>Add</button>
    </form>
  );
}

export default AddBook;
