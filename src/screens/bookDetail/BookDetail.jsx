import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BookDetail.module.css'
import EditForm from '../../components/EditForm.jsx';
import Header from '../../components/Header.jsx';

function BookDetail({ setBooks }) {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    const [editingBookId, setEditingBookId] = useState(null);
    const [editedBook, setEditedBook] = useState({
        id: null,
        title: '',
        author: '',
        year: '',
        image: '',
        audio: '',
    });

    const handleEditBook = (book) => {
        setEditingBookId(book.id);
        setEditedBook({
            id: book.id,
            title: book.title,
            author: book.author,
            year: book.year,
            image: book.image,
            audio: book.audio,
        });
    };

    const handleSaveEdit = (bookId) => {
        const updatedBooks = books.map((book) =>
            book.id === bookId ? editedBook : book
        );
        setBooks(updatedBooks);
        setEditingBookId(null);
    };

    const handleCancelEdit = () => {
        setEditingBookId(null);
    };

    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(data => {
                setBook(data);
            })
            .catch(error => {
                console.error('Error while receiving data:', error);
            });
    }, [id]);

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <Header title='e-books'></Header>
            {editingBookId === book.id ? (
                <div className={styles.editBookContainer}>
                    <EditForm
                        editedBook={editedBook}
                        setEditedBook={setEditedBook}
                        onSave={() => handleSaveEdit(book.id)}
                        onCancel={() => handleCancelEdit()}
                    />
                </div>
            ) : (
                <div className={styles.bookContainer}>
                    <div className={styles.bookImageContainer}>
                        <img src={book.image} alt={book.title} className={styles.bookImage} />
                    </div>
                    <div className={styles.bookInfo}>
                        <button onClick={() => handleEditBook(book)}>Edit ✍🏻</button>
                        <h2>{book.title}</h2>
                        <p style={{ marginTop: '15px' }}>Author : {book.author}</p>
                        <p>{book.country}</p>
                        <p>{book.language}</p>
                        <p>Year : {book.year}</p>
                        <p style={{ marginTop: '15px' }}>
                            <audio controls src={book.audio} alt={book.title}></audio>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookDetail;
