import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Books = ({ books }) => (
  <div className="columns is-multiline">
    {books.map(book => (
      <div key={v4()} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <h1>{book.title}</h1>
            <h2>{book.subtitle}</h2>
            <img alt="" src={book.book_cover} />
          </div>
          <p>{book.description}</p>
        </section>
      </div>
    ))}
  </div>
)

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      book_cover: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Books