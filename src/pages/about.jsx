import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Header, Container, Layout } from 'components'
import config from '../../config/website'
import Styled from 'react-emotion'
import Img from 'gatsby-image'

const ImgWrapper = Styled.div`
  display: flex;
  justify-content: center;
`

const About = ({ data: { portrait } }) => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header color={'#332849'}>About</Header>
    <Container type='text'>
      <ImgWrapper>
        <Img fixed={portrait.childImageSharp.fixed} alt='portrait' />
      </ImgWrapper>
      <h1>Hi!</h1>
      <p>
        My name is Louis Sanchez and I am a designer, developer, and artist
        living in New York. I have a degree in Computer Science and am currently
        working at St. George's University Support Services. I have a proven
        history of using scripting and automation to streamline processes and I
        love experimenting with new technologies and techniques. I am very
        passionate about web development and I am constantly tackling new
        problems and expanding my skillset.
      </p>
    </Container>
  </Layout>
)

export default About

export const PageQuery = graphql`
  query AboutQuery {
    portrait: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fixed(width: 225, quality: 95) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
