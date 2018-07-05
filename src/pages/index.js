import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import config from '../../data/SiteConfig'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>{config.userLinks[0].label}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

