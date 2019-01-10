import React from 'react'
import styled from 'react-emotion'
import { isMobile } from 'react-device-detect'
import { css } from 'emotion'
import Img from 'gatsby-image'
import { Trail, animated } from 'react-spring'
import Rellax from 'rellax'

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  margin-top: -92px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`

const Title = styled.div`
  position: absolute;
  margin-top: 19vw;
  display: flex;
  padding-right: 0.6em;
  font-size: 1.3vw;

  @media (max-width: 1000px) {
    margin-top: 14rem;
  }

  @media (max-width: 800px) {
    margin-top: 15.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 0.47em;
    margin-top: 17rem;
    margin-top: 38vh;
  }
`
const LeftSide = styled.div`
  flex: 1;
  margin-right: 1.3em;
  text-align: right;

  div {
    display: inline-block;
  }

  h1 {
    font-size: 5em;
    line-height: 0.9em;
    margin-bottom: 0px;
  }
`
const RightSide = styled.div`
  flex: 1;
  margin-left: 1.3em;
  div {
    font-size: 2.8em;
    line-height: 1.05em;
    font-weight: 400;
    letter-spacing: 0px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    div {
      letter-spacing: 2px;
      font-size: 3em;
      margin-top: -1px;
    }
  }
`

const HeaderImg = styled(Img)`
  z-index: 0;
  min-height: 715px;
  margin: 0;
  margin-top: 0px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 715px;
    height: 100vh;
    min-height: 500px;
  }
`

const HeaderImg2 = styled(Img)`
  margin-top: 0;
  margin-bottom: -20em;
  z-index: 0;
  min-height: 385px;
`

const animStyle = (x, opacity) => ({
  opacity,
  transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
})

const Name = () => (
  <h1>
    <Trail
      native
      from={{ opacity: 0, x: -50 }}
      to={{ opacity: 1, x: 0 }}
      keys={specialties}
      delay={0}
    >
      {[
        ({ x, opacity }) => (
          <animated.div style={animStyle(x, opacity)}>
            LOU
            <span
              className={css`
                margin-left: -0.01em;
                margin-right: 0.01em;
              `}
            >
              I
            </span>
            S
          </animated.div>
        ),
        ({ x, opacity }) => (
          <animated.div style={animStyle(x, opacity)}>
            SANCH
            <span
              className={css`
                margin-left: -0.05em;
                margin-right: 0.02em;
              `}
            >
              E
            </span>
            Z
          </animated.div>
        )
      ]}
    </Trail>
  </h1>
)

const specialties = ['web developer', 'designer', 'artist']

const Specialties = () => (
  <Trail
    native
    from={{ opacity: 0, x: 10 }}
    to={{ opacity: 1, x: 0 }}
    keys={specialties}
    delay={400}
  >
    {specialties.map(item => ({ x, opacity }) => (
      <animated.div style={animStyle(x, opacity)}>{item}</animated.div>
    ))}
  </Trail>
)

class Header extends React.Component {
  componentDidMount () {
    if (!isMobile) {
      // eslint-disable-next-line
      const rellax = new Rellax('.rellax')
    }
  }

  render () {
    const { headerImg, headerImg2 } = this.props

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
        <div className={!isMobile && 'rellax'} data-rellax-speed='-10'>
          <HeaderImg fluid={headerImg.childImageSharp.fluid} />
          <HeaderImg2 fluid={headerImg2.childImageSharp.fluid} />
        </div>
      </React.Fragment>
    )
  }
}

export default Header
