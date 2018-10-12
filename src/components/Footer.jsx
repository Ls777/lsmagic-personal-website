import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.footer`
  margin: 5rem 0 0;
  padding: 1rem ${props => props.theme.spacer.horizontal} 5rem;
  text-align: center;
  z-index: 2;
  color: ${props => (props.dark ? 'white' : props.theme.colors.body_color)};
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }

`

const Footer = ({ dark }) => (
  <Wrapper dark={dark}>
    Copyright © 2018. All rights reserved.
    <a href='https://github.com/LeKoArts/gatsby-starter-portfolio-emma'>
      Emma Theme
    </a>
    {' '}
    {' by '}
    {' '}
    <a href='https://www.lekoarts.de'>LekoArts</a>.
  </Wrapper>
)

export default Footer
