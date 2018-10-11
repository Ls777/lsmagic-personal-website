import React from 'react'
import Helmet from 'react-helmet'
import { Header, Container, Layout } from 'components'
import config from '../../config/website'

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header color={'#1e6b8f'}>Contact</Header>
    <Container type='text'>
      <h1>Contact me!</h1>
      <p />
    </Container>
  </Layout>
)

export default Contact
