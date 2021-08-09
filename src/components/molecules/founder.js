import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 40px;
  flex-direction: row;
  margin-bottom: 4rem;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
  }
`;

const FounderName = styled.h3`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.black};
  color: ${({ theme }) => theme.color.offWhite};
  line-height: 2.6rem;
  font-size: 2rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    margin-bottom: 12px;
    text-transform: uppercase;
  }
`;
const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;
const Date = styled.p`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.color.navy};
  font-size: 1.2rem;
  line-height: 2.2rem;
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;
const Amount = styled.span`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.navy};
  font-size: 1.2rem;
  line-height: 2.6rem;
`;
const Logo = styled.img`
  width: 100%;
  align-self: center;
  @media only screen and (max-width: 480px) {
    width: 36%;
    margin-bottom: 24px;
    min-width: 110px;
  }
`;

const Founder = ({ founder }) => {
  return (
    <Wrapper>
      <Logo src={founder.logo} alt={founder.name} />
      <TextBox>
        <FounderName>{founder.name}</FounderName>
        <Date>Date received: {founder.date}</Date>
        <Amount>Grant value: {founder.amount} SEK</Amount>
      </TextBox>
    </Wrapper>
  );
};

export default Founder;
