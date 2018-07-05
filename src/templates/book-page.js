import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import RetailLinks from '../components/RetailLinks'


export const BookPageTemplate = ({
    image,
    title,
    subtitle,
    retailIndex,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    return (
        <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1>{title}</h1>
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {subtitle}
                </h2>
                <div className="columns">
                <div className="column">
                <img src={image}/>                
                </div>
                <div className="column">
                <PageContent className="content" content={content} />
                </div>
                </div>
                <RetailLinks retailIndex={retailIndex}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

BookPageTemplate.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    retailIndex: PropTypes.string,
    content: PropTypes.string,
    contentComponent: PropTypes.func
}

const BookPage = ({ data }) => {
    const { markdownRemark : post } = data

    return (
        <BookPageTemplate
            contentComponent={HTMLContent}
            image={post.frontmatter.image}
            title={post.frontmatter.title}
            subtitle={post.frontmatter.subtitle}
            retailIndex={post.frontmatter.retailIndex}
            content={post.html}
        />
    )
}

BookPage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default BookPage
  
  export const bookPageQuery = graphql`
    query BookPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          title
          subtitle
          image
          retailIndex
        }
      }
      
    }
  `

