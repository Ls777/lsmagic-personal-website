import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ProjectListing, Layout, HomeHeader } from 'components'

const Index = ({
  data: { allMarkdownRemark: { edges: projectEdges }, headerImg }
}) => (
  <React.Fragment>
    <Layout>
      <HomeHeader headerImg={headerImg} />
      <ProjectListing projectEdges={projectEdges} />
    </Layout>
  </React.Fragment>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    },
    headerImg: file(relativePath: { eq: "header-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
