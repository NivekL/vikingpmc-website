import React from "react";
import { styled } from "styled-components/macro";

const About = () => {
  return (
    <Wrapper>
      <SectionTitleContainer>
        <TitleLine />
        <SectionTitle>About us</SectionTitle>
      </SectionTitleContainer>

      <ImageTextWrapper>
        <img
          src="/assets/arma-image.png"
          alt="A group of soldiers in a field"
        />
        <TextContainer>
          <p>
            In 2014 a group of individuals decided that they were tired of the
            poor command and structure of the official armed forces groups in
            the ArmA community. Today VIKING PMC is one of the most well-known
            units out there.
          </p>
        </TextContainer>
      </ImageTextWrapper>

      <MapSection>
        <InnerContainer>
          <BlockQuote>
            <h2>
              Viking operators are prepared to fight in <br />{" "}
              <span>any condition </span> at <span> any time</span>
            </h2>
          </BlockQuote>

          <p>
            The unit specializes in many things regarding armed engagements.
            Thanks to the international and diverse background of its members,
            there is a contractor for every job. Operations that are conducted
            in the unit are of a global scale.
          </p>
        </InnerContainer>
      </MapSection>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin-top: 300px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  max-width: 80%;
  margin: 0 auto;
`;

const TitleLine = styled.hr`
  width: 102px;
  height: 1px;
  margin: 0 43px 0 0;
  background: #7ef0b3;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-family: "Assistant", sans-serif;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  text-transform: uppercase;
`;

const ImageTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 80%;
`;

const TextContainer = styled.div`
  transform: translate(-50%, 50%);
  max-width: 45rem;
  p {
    font-size: 40px;
    line-height: 60px;
  }
`;

const MapSection = styled.div`
  background-image: url("/assets/gradientmap.png");
  width: 100%;
  height: 785px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
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

const InnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  z-index: 999;

  p {
    color: #fff;
    font-family: Roboto;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 136.188%;
    width: 75%;
  }
`;

const BlockQuote = styled.div`
  width: 55%;
  border-left: 1px solid #7ef0b3;
  h2 {
    color: #fff;
    font-family: Assistant;
    font-size: 98px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 40px;
  }

  span {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1.4px #7ef0b3;
  }
`;
