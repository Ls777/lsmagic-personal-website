import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ProjectListing, Layout, HomeHeader } from 'components'
import { injectGlobal, css } from 'emotion'

const Index = ({
  data: { allMarkdownRemark: { edges: projectEdges }, headerImg, headerImg2 }
}) => (
  <Layout dark>
    <HomeHeader headerImg={headerImg} headerImg2={headerImg2} />
    <ProjectListing projectEdges={projectEdges} />
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
}

export const backgroundImage = graphql`
fragment backgroundImage on File {
  childImageSharp {
    fluid(maxWidth: 1920, quality: 90) {
      ...GatsbyImageSharpFluid_noBase64
    }
  }
}
`

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
            cover {
              childImageSharp {
                fluid(maxWidth: 500, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    },
    headerImg: file(relativePath: { eq: "header-bg.jpg" }) {
      ...backgroundImage
    },
    headerImg2: file(relativePath: { eq: "header-bg2.jpg" }) {
      ...backgroundImage
    }

  }
`
