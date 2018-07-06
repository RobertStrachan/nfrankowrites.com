import React from 'react'
import PropTypes from 'prop-types'
import { BooksPageTemplate } from '../../templates/books-page'

const BooksPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  const entryBooks = entry.getIn(['data', 'main', 'books'])
  const books = entryBooks ? entryBooks.toJS() : []

  return (
    <BooksPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      main={{ books }}
      intro={{ blurbs }}
      main2={{
        heading: entry.getIn(['data', 'main2', 'heading']),
        description: entry.getIn(['data', 'main2', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main2', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main2', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main2', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main2', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main2', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main2', 'image3', 'alt']),
        },
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
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
