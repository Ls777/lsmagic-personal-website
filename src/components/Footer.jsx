import React from 'react'
import styled from 'react-emotion'
import { FaTwitter, FaCodepen, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

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

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1em ${props => props.theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`

const socialMedia = [
  {
    url: 'https://twitter.com/ls_magic',
    icon: <FaTwitter />
  },
  {
    url: 'https://www.linkedin.com/in/louis-sanchez-9450067b/',
    icon: <FaLinkedinIn />
  },
  {
    url: 'https://codepen.io/Lsmagic/',
    icon: <FaCodepen />
  },
  {
    url: 'https://github.com/Ls777',
    icon: <FaGithubAlt />
  }
]

const Footer = ({ dark }) => (
  <Wrapper dark={dark}>
    Copyright © 2018. All rights reserved.
    <SocialMedia>
      {socialMedia.map(link => (
        <a
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          key={link.url}
        >
          {link.icon}
        </a>
      ))}
    </SocialMedia>
  </Wrapper>
)

export default Footer
