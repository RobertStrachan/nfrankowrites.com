import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const FrontPageTemplate = ({
  front_image,
  front_title,
  front_copy, 
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
                  {front_title}
                </h2>
                <img src={front_image}/>
                <div>
                    {front_copy}
                </div>    
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

FrontPageTemplate.propTypes = {
    front_image: PropTypes.string,
    front_title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
}

const FrontPage = ({ data }) => {
    const { markdownRemark : post } = data
    console.log(data);

    return (
        <FrontPageTemplate
            contentComponent={HTMLContent}
            front_image={post.frontmatter.front_image}
            front_title={post.frontmatter.front_title}
            front_copy={post.frontmatter.front_copy}
            content={post.html}
        />
    )
}

FrontPage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default FrontPage
  
  export const frontPageQuery = graphql`
    query FrontPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          front_title
          front_image
          front_copy
        }
      }
      
    }
  `