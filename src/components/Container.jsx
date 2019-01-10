import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacer.horizontal};
  max-width: ${props => props.theme.container[props.type]};
  ${props =>
    props.type === 'text' &&
    css`
      p {
        color: hsl(0, 0%, 30%);
        font-size: 1.25rem;
        letter-spacing: -0.003em;
        line-height: 1.98;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        margin-bottom: 5em;
      }
      h2 {
        letter-spacing: 0.1em;
      }
    `};

  p > a {
    background: linear-gradient(
      to bottom,
      ${props => props.theme.brand.primary} 0%,
      ${props => props.theme.brand.primary} 100%
    );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    color: #000;
    text-decoration: none;
    transition: background-size 0.2s;
  }

  a:hover {
    background-size: 4px 50px;
  }
`

const Container = ({ children, type, className }) => (
  <Wrapper className={className} type={type}>
    {children}
  </Wrapper>
)

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['base', 'text']),
  className: PropTypes.string
}

Container.defaultProps = {
  type: 'base',
  className: null
}
