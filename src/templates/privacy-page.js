import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const PrivacyPageTemplate = ({title, content, contentComponent}) => {
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
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

PrivacyPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
}

const PrivacyPage = ({ data }) => {
    const { markdownRemark : post } = data

    return (
        <PrivacyPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            content={post.html}
        />
    )
}

PrivacyPage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default PrivacyPage
  
  export const privacyPageQuery = graphql`
    query PrivacyPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          title
        }
      }
    }
  `