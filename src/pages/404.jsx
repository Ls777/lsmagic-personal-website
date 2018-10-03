import React from 'react'
import { Layout, Container } from 'components'

const NotFoundPage = () => (
  <Layout>
    <Container type='text'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
