import React from 'react';
import PropTypes from 'prop-types'
import { BookPageTemplate } from '../../templates/book-page'

const BookPagePreview = ({ entry, widgetFor, getAsset }) => (
    <BookPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )

BookPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
    getAsset: PropTypes.func,
}

export default BookPagePreview