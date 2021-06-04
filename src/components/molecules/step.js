import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledWrapper = styled.div`
  width: 25%;
  text-align: center;
  padding-left: 5.8rem;
  padding-right: 5.8rem;
  max-width: 350px;
  @media only screen and (max-width: 1380px) {
    padding-left: 3.6rem;
    padding-right: 3.6rem;
  }
  @media only screen and (max-width: 1100px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media only screen and (max-width: 930px) {
    width: 100%;
    margin-bottom: 6rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledIcon = styled.div`
  svg {
    width: 96px !important;
    height: 96px !important;
  }
  svg path {
    fill: ${({ theme }) => theme.color.offWhite};
  }

  @media only screen and (max-width: 1260px) {
    svg {
      width: 64px !important;
      height: 64px !important;
    }
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.offWhite};
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin-bottom: 16px;
  margin-top: 6rem;
  @media only screen and (max-width: 1260px) {
    font-size: 2rem;
    line-height: 2.2rem;
    margin-top: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

const StyledParagraph = styled(Subheading)`
  color: ${({ theme }) => theme.color.offWhite};
  font-size: 1.6rem;
  line-height: 2rem;
  @media only screen and (max-width: 1100px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  @media only screen and (max-width: 930px) {
    margin-bottom: 12px;
  }
`;

const Step = ({ children, step }) => {
  return (
    <StyledWrapper>
      <StyledIcon>{children}</StyledIcon>
      <StyledHeading>{step.heading}</StyledHeading>
      <StyledParagraph>{step.paragraph}</StyledParagraph>
    </StyledWrapper>
  );
};

export default Step;
