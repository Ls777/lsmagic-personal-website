import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { SEO, Navigation, Footer } from '../components'
import theme from '../../config/theme'
import { css } from 'emotion'

const Layout = ({ children, dark }) => (
  <ThemeProvider theme={theme}>
    <div className={dark && css`background-color: black;`}>
      <SEO />
      <Navigation dark={dark} />
      {children}
      <Footer dark={dark} />
    </div>
  </ThemeProvider>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
}
