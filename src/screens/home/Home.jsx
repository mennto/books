import Header from '../../components/Header.jsx';
import Books from '../../components/Books.jsx';
import AddBook from '../../components/AddBook.jsx';

function Home({ books, setBooks }) {
  return (
    <div>
      <Header title='e-books'></Header>
      <main>
        <Books bookList={books} setBooks={setBooks}></Books>
      </main>
      <aside>
        <AddBook setBooks={setBooks}></AddBook>
      </aside>
    </div>
  )
}

export default Home