import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { Stars } from '../components'
import { Spring, animated } from 'react-spring'

const Wrapper = styled.div`
  background: ${props => (props.color ? props.color : props.theme.brand.secondary)};
  color: #fff;
  margin-bottom: 6rem;
  padding: 6rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  h1 {
    margin-bottom: 0;
  }
  overflow: hidden;
`

const Header = ({ children, color }) => (
  <Wrapper color={color}>
    <Stars />
    <Spring
      from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
    >
      {props => <animated.h1 style={props}>{children}</animated.h1>}
    </Spring>
  </Wrapper>
)

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired
}
