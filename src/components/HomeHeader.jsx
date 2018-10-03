import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'
import { Spring } from 'react-spring'

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  margin-top: -70px;
  position:relative;
  height: 0px;
  display: flex;
  justify-content: center;
  z-index: 1;
`

const Title = styled.div`
  position: absolute;
  margin-top: 17vw;
  display: flex;
  padding-right: 0.6em;
  font-size: 1.3vw;
  
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 0.5em;
    margin-top: 8rem;
  }

`
const LeftSide = styled.div`
  flex: 1;
  margin-right: 1.3em;
  text-align: right;
  h1 {
    font-size: 5em;
    line-height: 0.9em;
  }
`
const RightSide = styled.div`
  flex: 1;
  margin-left: 1.3em;
  div {
    font-size: 2.8em;
    line-height: 1.05em;
    font-weight: 400;
  }
`

const HeaderImg = styled(Img)`
  position: absolute;
  z-index: -2;
  min-height: 520px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 0px;
  ${generateMediaQueries()}
  
`

function generateMediaQueries () {
  let string = ``
  for (let i = 1350; i >= 800; i -= 25) {
    string += `@media (max-width: ${i}px) {
  margin-top: ${(i - 1350) * 0.2}px;
}
`
  }
  return string
}

const HeaderImg2 = styled(Img)`
  position: absolute;
  margin: auto;
  margin-top: 0;
  margin-bottom: -40vw;
  z-index: -2;
  min-height: 280px;
`

const Name = () => (
  <h1>
    LOU
    <span className={css`margin-left: -0.01em;margin-right: 0.01em;`}>I</span>
    S SANCH
    <span className={css`margin-left: -0.05em;margin-right: 0.02em;`}>E</span>
    Z
  </h1>
)

const Specialties = () => (
  <React.Fragment>
    <div>web developer</div>
    <div>designer</div>
    <div>artist</div>
  </React.Fragment>
)

const Header = props => (
  <React.Fragment>
    <Wrapper>
      <Title>
        <LeftSide>
          <Name />
        </LeftSide>
        <RightSide>
          <Specialties />
        </RightSide>
      </Title>
    </Wrapper>
    <Parallax
      className={css`z-index: -5;`}
      offsetYMax={'300px'}
      offsetYMin={'-200px'}
      slowerScrollRate
      tag='figure'
    >
      <HeaderImg fluid={props.headerImg.childImageSharp.fluid} />
      <HeaderImg2 fluid={props.headerImg2.childImageSharp.fluid} />
    </Parallax>
  </React.Fragment>
)

export default Header
