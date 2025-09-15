function BooksListItem({ book }) {
  return (
    <li>
      <strong>Title:</strong> {book.title}<br />
      <strong>Genre:</strong> {book.genre}<br />
      <strong>Author ID:</strong> {book.author_id}<br />
      <strong>Publisher ID:</strong> {book.publisher_id}
    </li>
  )
}

export default BooksListItem