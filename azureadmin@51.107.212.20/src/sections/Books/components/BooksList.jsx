import BooksListItem from './BooksListItem'

function BooksList({ data }) {
  if (!Array.isArray(data)) return <div>No books found.</div>;

  return (
    <ul>
      {data.map(book => (
        <BooksListItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BooksList