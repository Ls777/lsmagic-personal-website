import React from 'react'
import { Layout, Container, Header } from 'components'

const NotFoundPage = () => (
  <Layout>
    <Header color={'#000'}>404</Header>
    <Container type='text'>
      <h1>NOT FOUND</h1>
      <p>Sorry, this page doesn't exist. Try our home page!</p>
    </Container>
  </Layout>
)

export default NotFoundPage
