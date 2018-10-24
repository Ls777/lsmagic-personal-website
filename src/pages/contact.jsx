import React from 'react'
import Helmet from 'react-helmet'
import { Header, Container, Layout } from 'components'
import config from '../../config/website'
import styled from 'react-emotion'

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header color={'#1e6b8f'}>Contact</Header>
    <Container type='text'>
      <h1>Contact me!</h1>
      <p />
      <FormWrapper
        action='https://formspree.io/lsmagicdev+contact@gmail.com'
        method='POST'
      >

        <label>
          <h4>Your Email Address:</h4>
          <input type='email' name='Email Address' />
        </label>
        <label>
          <h4>Message:</h4>
          <textarea type='text' name='message' />
        </label>
        <input type='submit' value='Submit' />
      </FormWrapper>
    </Container>
  </Layout>
)

const FormWrapper = styled.form`

  display: flex;
  flex-direction: column;
  input, textarea {
    width: 100%;
    padding: 12px 20px;
    margin: -5px 0px 20px;
  }
  
`

export default Contact
