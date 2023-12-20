import React from 'react';
import { styled } from 'styled-components/macro';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage>
        <h1>
          A <span>private military company</span> (PMC) provides armed combat or
          security services for financial gain.{' '}
        </h1>
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 135px;
    overflow: hidden;
    flex-shrink: 0;
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
  }
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 575px;
    overflow: hidden;
    transform: rotate(180deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 778px;
  background-size: cover;
  background-image: url('/assets/hero.png');
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Assistant', sans-serif;
    z-index: 1;

    @media screen and (min-width: 320px) {
      font-size: 2em;
      width: 80%;
    }

    @media screen and (min-width: 780px) {
      font-size: 2.8em;
      width: 60%;
    }
    @media screen and (min-width: 1400px) {
      font-size: 3.5em;
      width: 50%;
    }
  }

  span {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1.4px #7ef0b3;
  }
`;
