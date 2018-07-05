import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './all.sass'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      // link={[
      //   { href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css",
      //     rel: "stylesheet"
      // },    
      // ]}
      // script={[
      //   {src: 'https://use.fontawesome.com/fd007dd772.js'}
      // ]}

    />
    <Header siteTitle={data.site.siteMetadata.title}
            authorName={data.site.siteMetadata.authorName}
            authorTag={data.site.siteMetadata.authorTag}
            headerImage={data.headerImage}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexQuery {
    
    site {
      siteMetadata {
        title
        authorName
        authorTag
      }
    }
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

