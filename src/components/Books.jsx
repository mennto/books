import React from 'react';
import styles from '../screens/home/Home.module.css'
import { useNavigate } from "react-router-dom";

function Books({ bookList, setBooks }) {
    const books = bookList;
    const navigate = useNavigate();

    const handleBookClick = (id) => {
        navigate(`/book/${id}`);
    };

    const handleDeleteBook = (id) => {
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const updatedBooks = books.filter((book) => book.id !== id);
                setBooks(updatedBooks);
            })
            .catch(error => {
                console.error('Error when deleting a book:', error);
            });
    };

    if (books.length === 0) {
        return (
            <div className={styles.book}>
                <h3>Sorry! It seems there are no books.</h3>
            </div>
        );
    }

    return (
        <div>
            {books.map((book) => (
                <div key={book.id} className={styles.book}>
                    <div>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>{book.year}</p>
                        <button onClick={() => handleBookClick(book.id)}>Read more 📖</button>
                        <button onClick={() => handleDeleteBook(book.id)}>Delete 🗑️</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Books;
