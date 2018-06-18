import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
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

AboutPageTemplate.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
    const { markdownRemark : post } = data

    return (
        <AboutPageTemplate
            contentComponent={HTMLContent}
            image={post.frontmatter.image}
            title={post.frontmatter.title}
            content={post.html}
        />
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default AboutPage
  
  export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          title
          image
        }
      }
      
    }
  `