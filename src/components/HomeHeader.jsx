import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  color: #fff;
  margin: 15rem 0rem 25rem 0rem;
  padding: 6rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  z-index: 1;
  h1 {
    margin-bottom: 0;
  }
`

const ImgWrapper = styled.div`
  position:relative;
  height: 70px;
  z-index: -1;
`

const HeaderImg = styled(Img)`
  position: absolute;
  overflow: visible;
  margin-top: -70px;
  z-index: -2;
  position: relative;
`

const Header = props => (
  <React.Fragment>
    <ImgWrapper>
      <HeaderImg fluid={props.headerImg.childImageSharp.fluid} />
    </ImgWrapper>
    <Wrapper>
      <h1>Louis Sanchez</h1>
    </Wrapper>
  </React.Fragment>
)

export default Header
