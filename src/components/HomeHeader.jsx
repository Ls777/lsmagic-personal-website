import React from 'react'
import styled from 'react-emotion'
import {
  CustomView,
  isMobile,
  isMobileSafari,
  isChrome
} from 'react-device-detect'
import { css } from 'emotion'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'
import { Trail, config, animated } from 'react-spring'

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  margin-top: -92px;
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

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 12rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 0.5em;
    margin-top: 13rem;
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

const HeaderImg = styled(Img)`
  position: absolute;
  z-index: 0;
  min-height: 715px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 0px;
  ${parallaxSupport() && generateMediaQueries()}
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 715px;
  }
`

const HeaderImg2 = styled(Img)`
  position: absolute;
  margin: auto;
  margin-top: 0;
  margin-bottom: -40vw;
  z-index: 0;
  min-height: 385px;
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

const specialties = ['web developer', 'designer', 'artist']

const Specialties = () => (
  <Trail
    native
    from={{ opacity: 0, x: 10 }}
    to={{ opacity: 1, x: 0 }}
    keys={specialties}
  >
    {specialties.map(item => ({ x, opacity }) => (
      <animated.div
        style={{
          opacity,
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
        }}
      >
        {item}
      </animated.div>
    ))}
  </Trail>
)

function parallaxSupport () {
  return !isMobile || isMobileSafari || isChrome
}

const Header = props => {
  const background = (
    <React.Fragment>
      <HeaderImg fluid={props.headerImg.childImageSharp.fluid} />
      <HeaderImg2 fluid={props.headerImg2.childImageSharp.fluid} />
    </React.Fragment>
  )

  const parallax = (
    <Parallax
      className={css`z-index: -5;`}
      offsetYMax={'300px'}
      offsetYMin={'-200px'}
      slowerScrollRate
      tag='figure'
    >
      {background}
    </Parallax>
  )

  return (
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
      <CustomView condition={parallaxSupport()} renderWithFragment>
        {parallax}
      </CustomView>
      <CustomView condition={!parallaxSupport()} renderWithFragment>
        {background}
      </CustomView>
    </React.Fragment>
  )
}

export default Header
