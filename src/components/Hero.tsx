import React from "react";
import { styled } from "styled-components/macro";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src="/assets/hero.png" alt="" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 785px;
    overflow: hidden;
    flex-shrink: 0;
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
  }
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 785px;
    overflow: hidden;
    transform: rotate(180deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  display: block;
`;
