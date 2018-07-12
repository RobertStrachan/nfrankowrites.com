import React from 'react'
import PropTypes from 'prop-types'
import Books from '../components/Books'

export const BooksPageTemplate = ({
  image,
  title,
  heading,
  description,
  main,
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
                    color: 'black',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <Books books={main.books}/>
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
}

const BooksPage = ({ data }) => {
  const { frontmatter} = data.markdownRemark

  return (
    <BooksPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      main={frontmatter.main}
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
      }
    }
  }
`
