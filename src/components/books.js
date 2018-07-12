import React from 'react'
import PropTypes from 'prop-types'
import { MarkdownPreview } from 'react-marked-markdown';
import Retail from '../components/Retail'




const Books = ({ books }) => 
(



  <div className="columns is-multiline" >
    {books.map(book => (
      <div key={book.book_cover} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <h1>{book.title}</h1>
            <h2>{book.subtitle}</h2>
            <img alt="" src={book.book_cover} />
          </div>
          <MarkdownPreview value={book.description} />
          <Retail retail={book.retail} />


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
      retail: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string,
        }) 
      ),
    })
  ),
}


export default Books