import React from "react";
import styled from "styled-components/macro";

const Information = () => {
  return (
    <Wrapper>
      <SectionTitleContainer>
        <TitleLine />
        <SectionTitle>Information</SectionTitle>
      </SectionTitleContainer>

      <InfoContainer>
        <InfoTitle>/ Operations</InfoTitle>
        <p>
          We operate every Tuesday, Thursday and most Saturdays at 19:00
          CET/CEST.
        </p>
      </InfoContainer>

      <InnerDivider />

      <InfoContainer>
        <InfoTitle>/ Organization</InfoTitle>
        <p>
          Our organization is built on transparency and openness. We allow all
          members of Viking to contribute to the unit's growth and success. We
          have an Operations department that is solely focused on creating
          Zeus-scenarios for the community. There is also a Personnel department
          that handles recruiting, PR and promotions.{" "}
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

const InnerDivider = styled.hr`
  width: 325px;
  height: 1px;
  background: #7ef0b3;
`;

const InfoContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const InfoTitle = styled.h3`
  color: #fff;
  font-family: Assistant;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
`;
