import React from 'react'
import Helmet from 'react-helmet'
import { Header, Container, Layout } from 'components'
import config from '../../config/website'

const ContactSuccess = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header color={'#1e6b8f'}>Contact</Header>
    <Container type='text'>
      <h1>Message received!</h1>
      <p>Thank you for reaching out!</p>
    </Container>
  </Layout>
)

export default ContactSuccess
