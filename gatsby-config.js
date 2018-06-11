module.exports = {
  siteMetadata: {
    title: 'N. Franko | romantic word slinger',
    authorName: 'N. FRANKO',
    authorTag: 'romantic word slinger'
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/img`,
          name: 'images',
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [],
        },
      },
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          modulePath: `${__dirname}/src/cms/cms.js`,
        },
      },
      'gatsby-plugin-netlify-cms' //Make sure to keep last in array
    ],
}
