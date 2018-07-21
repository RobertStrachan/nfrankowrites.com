import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import config from '../../data/SiteConfig'

const IndexPage = ({
  // props
}) => {
  // console.log(props);
  return (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)
}
export default IndexPage

// export const indexPageFragment = graphql`
// fragment IndexPage on MarkdownRemark {
//     html
//     frontmatter {
//       front_title
//       front_image
//       front_copy
//     }
//   }
  

// `