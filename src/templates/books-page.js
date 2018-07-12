import React from 'react'
import PropTypes from 'prop-types'
import Books from '../components/Books'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'


export const BooksPageTemplate = ({
  image,
  title,
  heading,
  description,
  main,
  intro,
  main2,
  testimonials,
  fullImage,
  pricing,
  html,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <Books books={main.books}/>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main2.heading}
                  </h3>
                  <p>{main2.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main2.image1.image}
                          alt={main2.image1.alt}
                        />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main2.image2.image}
                          alt={main2.image2.alt}
                        />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={main2.image3.image}
                        alt={main2.image3.alt}
                      />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${fullImage})` }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

BooksPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    books: PropTypes.arrayOf(
      PropTypes.shape({
        retail: PropTypes.array,
      })
    ),
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main2: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const BooksPage = ({ data }) => {
  const { frontmatter} = data.markdownRemark

  return (
    <BooksPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      main={frontmatter.main}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main2={frontmatter.main2}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  )
}

BooksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BooksPage

export const booksPageQuery = graphql`
  query BooksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        main {
          books {
            book_cover
            description
            subtitle
            title
            retail {
              name
              url
            }
          }
        }
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main2 {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
