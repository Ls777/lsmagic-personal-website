import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { SEO, Navigation, Footer } from '../components'
import theme from '../../config/theme'
import { css, injectGlobal } from 'emotion'
import styled from 'react-emotion'

const Layout = ({ children, dark }) => (
  <ThemeProvider theme={theme}>
    <ThemeWrapper dark={dark}>
      <SEO />
      <Navigation dark={dark} />
      {children}
      <Footer dark={dark} />
    </ThemeWrapper>
  </ThemeProvider>
)

const ThemeWrapper = styled.div`
  ${props => props.dark && `background-color: black; overflow: hidden;`}

  input, textarea, button {
    padding: 12px 20px;
    margin: -5px 0px 20px;
    box-sizing: border-box;
    width: 100%;
  }

  textarea {
    resize: vertical;
    height: 300px;
  }

  button, input[type=submit] {
    width: auto;
    align-self: center;
    background-color: transparent;
    border: 1px solid lightgrey;
  }
  
  button:hover, input[type=submit]:hover {
    border: 1px solid ${props => props.theme.brand.primary};
    cursor: pointer;
  }
`

injectGlobal`
  html, body {
    overflow-x: hidden;
  }
  body {
    position: relative;
  }
`

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
