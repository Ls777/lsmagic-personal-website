import React from 'react'
import Helmet from 'react-helmet'
import { Header, Container, Layout } from 'components'
import config from '../../config/website'

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header color={'#332849'}>About</Header>
    <Container type='text'>
      <h1>Hi!</h1>
      <p>
        My name is Louis Sanchez and I am a designer, developer, and artist living in New York.
        I have a degree in Computer Science and am currently working at St. George's University Support
        Services. I have a proven history of using scripting and automation to streamline processes and
        I dabble in various freelance design work.
      </p>
    </Container>
  </Layout>
)

export default About
