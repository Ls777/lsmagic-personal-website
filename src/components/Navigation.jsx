import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'
import config from '../../config/website'
import theme from '../../config/theme'
import LsLogo from '../images/LsLogo'

// max-width: ${props => props.theme.container.base};
const Wrapper = styled.header`
  align-items: center;
  display: flex;
  max-width: 55em;
  padding: 0rem;
  margin: auto;

  a {
    color: ${props => props.theme.colors.body_color};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0;
    flex-wrap: wrap;
  }
`

const active = css`
  color: ${theme.brand.primary} !important;
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    color: ${props => (props.dark ? 'white' : props.theme.colors.body_color)};
  }

  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
`

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  a {
    font-size: 23px;
    font-family: ${`${config.headerFontFamily}, sans-serif`};
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.body_color};
      text-decoration: none;
    }
  }
`

const Navigation = ({ dark }) => (
  <Wrapper>
    <Nav dark={dark}>
      <Name>
        <Link to='/'>
          <LsLogo dark={dark} />
        </Link>
      </Name>
      <Link
        to='/about'
        activeClassName={css`
          ${active};
        `}
      >
        ABOUT
      </Link>
      <Link
        to='/contact'
        activeClassName={css`
          ${active};
        `}
      >
        CONTACT
      </Link>
    </Nav>
  </Wrapper>
)

export default Navigation
