import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import { AboutPageTemplate } from './about-page';


export const BookPageTemplate = ({
    image,
    title,
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

                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <img src={image}/>
                <PageContent className="content" content={content} />
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
          image
        }
      }
      
    }
  `

