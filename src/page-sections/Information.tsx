import React from 'react';
import styled from 'styled-components/macro';

const Information = () => {
  return (
    <Wrapper>
      <SectionTitleContainer>
        <TitleLine />
        <SectionTitle>Information</SectionTitle>
      </SectionTitleContainer>

      <InfoContainer>
        <InfoTitle>
          <span>/</span> Operations
        </InfoTitle>
        <p>
          We operate every Tuesday, Thursday and most Saturdays at 19:00
          CET/CEST.
        </p>
      </InfoContainer>

      <InnerDivider />

      <InfoContainer>
        <InfoTitle>
          <span>/</span> Organization
        </InfoTitle>
        <p>
          Our organization is built on transparency and openness. We allow all
          members of Viking to contribute to the unit's growth and success. We
          have an Operations department that is solely focused on creating
          Zeus-scenarios for the community. There is also a Personnel department
          that handles recruiting, PR and promotions.{' '}
        </p>
        <p>
          Our Tech department deals with running the machines that fuel our
          operations. We also have a Roundtable where any Viking apply to be
          part of the decision-making process in the unit.
        </p>
      </InfoContainer>

      <InnerDivider />
    </Wrapper>
  );
};

export default Information;

const Wrapper = styled.div`
  margin: 200px 0;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  max-width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 90%;
  }
`;

const TitleLine = styled.hr`
  width: 102px;
  height: 1px;
  margin: 0 43px 0 0;
  background: #7ef0b3;

  @media screen and (min-width: 320px) {
    width: 60px;
    margin: 0 23px 0 0;
  }

  @media screen and (min-width: 768px) {
    width: 80px;
    margin: 0 33px 0 0;
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-family: 'Assistant', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  text-transform: uppercase;

  @media screen and (min-width: 320px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5em;
  }
`;

const InnerDivider = styled.hr`
  width: 325px;
  height: 1px;
  background: #7ef0b3;
  margin: 30px auto;
`;

const InfoContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;

  p {
    font-size: 1.2em;
    line-height: 32px;
  }
`;

const InfoTitle = styled.h3`
  color: #fff;
  font-family: Assistant;
  font-size: 2.5em;
  font-style: normal;
  font-weight: 700;

  span {
    color: #7ef0b3;
  }
`;
