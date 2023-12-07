import React from 'react';

function EditForm({ editedBook, setEditedBook, onSave, onCancel }) {
  const handleSave = () => {
    fetch(`http://localhost:3001/books/${editedBook.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedBook),
    })
      .then(() => {
        onSave();
        onCancel();
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  }

  return (
    <form>
      <input
        placeholder='Title'
        value={editedBook.title}
        onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
      />
      <input
        placeholder='Author'
        value={editedBook.author}
        onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
      />
      <input
        placeholder='Year'
        value={editedBook.year}
        onChange={(e) => setEditedBook({ ...editedBook, year: e.target.value })}
      />
      <input
        placeholder='Image'
        value={editedBook.image}
        onChange={(e) => setEditedBook({ ...editedBook, image: e.target.value })}
      />
      <input
        placeholder='Audio'
        value={editedBook.audio}
        onChange={(e) => setEditedBook({ ...editedBook, audio: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditForm;
