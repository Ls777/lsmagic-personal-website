import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Container, SEO, Layout } from 'components'
import sample from 'lodash/sample'
import config from '../../config/website'
import { overlay } from '../../config/theme'

const overlayColor = sample(overlay)

const Wrapper = styled.section`
  text-align: center;
  position: relative;
  width: 100%;
  color: white;
  padding: 8rem ${props => props.theme.spacer.horizontal};
  margin-bottom: 6rem;
`

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacer.vertical} ${props => props.theme.spacer.horizontal} 0
    ${props => props.theme.spacer.horizontal};
`

const Top = styled.div`
  font-size: 80%;
  margin-bottom: 0.5rem;
  position: relative;
  text-transform: uppercase;
`

const Bottom = styled.div`
  font-size: 125%;
`

const Project = ({
  pageContext: { slug },
  data: { markdownRemark: postNode }
}) => {
  const project = postNode.frontmatter
  return (
    <Layout>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper style={{ backgroundColor: overlayColor }}>
        <h1>{project.title}</h1>
        <InformationWrapper>
          <InfoBlock>
            <Top>Type</Top>
            <Bottom>{project.type}</Bottom>
          </InfoBlock>
          <InfoBlock>
            <Top>Technologies</Top>
            <Bottom>{project.technologies}</Bottom>
          </InfoBlock>
        </InformationWrapper>
      </Wrapper>
      <Container type='text'>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Container>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired
  }).isRequired
}

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        type
        technologies
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
