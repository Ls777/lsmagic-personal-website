import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Container, SEO, Layout, Stars } from 'components'
import sample from 'lodash/sample'
import config from '../../config/website'
import { overlay } from '../../config/theme'
import { Spring, Trail, animated, config as springConfig } from 'react-spring'

const Wrapper = styled.section`
  text-align: center;
  position: relative;
  width: 100%;
  color: white;
  padding: 8rem ${props => props.theme.spacer.horizontal};
  margin-bottom: 6rem;
  overflow: hidden;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Project = ({
  pageContext: { slug },
  data: { markdownRemark: postNode }
}) => {
  const project = postNode.frontmatter
  const overlayColor = sample(overlay)

  const infoBlocks = [
    <InfoBlock>
      <Top>Type</Top>
      <Bottom>{project.type}</Bottom>
    </InfoBlock>,
    <InfoBlock>
      <Top>Technologies</Top>
      <Bottom>{project.technologies}</Bottom>
    </InfoBlock>
  ]

  return (
    <Layout>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper style={{ backgroundColor: overlayColor }}>
        <Stars />
        <Spring
          from={{ opacity: 0, transform: 'translate3d(0,150px,0)' }}
          to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          config={{ tension: 170, friction: 30 }}
        >
          {props => (
            <animated.div style={props}><h1>{project.title}</h1></animated.div>
          )}
        </Spring>
        <InformationWrapper>
          <Trail
            native
            keys={infoBlocks.map((c, idx) => idx)}
            from={{ opacity: 0, transform: 'translate3d(0,100px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            delay={180}
          >
            {infoBlocks.map(item => props => (
              <animated.div style={props}>{item}</animated.div>
            ))}
          </Trail>
        </InformationWrapper>
      </Wrapper>
      <Container type='text'>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <ButtonWrapper>
          <button onClick={() => window.history.back()}>
            Back to Home
          </button>
        </ButtonWrapper>
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
