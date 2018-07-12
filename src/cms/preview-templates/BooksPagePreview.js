import React from 'react'
import PropTypes from 'prop-types'
import { BooksPageTemplate } from '../../templates/books-page'

const BooksPagePreview = ({ entry, getAsset }) => {

  const entryBooks = entry.getIn(['data', 'main', 'books'])
  const books = entryBooks ? entryBooks.toJS() : []

  return (
    <BooksPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      main={{ books }}
    />
  )
}

BooksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BooksPagePreview
