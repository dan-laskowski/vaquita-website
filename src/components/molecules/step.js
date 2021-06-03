import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledWrapper = styled.div`
  width: 25%;
  text-align: center;
  padding-left: 5.8rem;
  padding-right: 5.8rem;
  max-width: 350px;
`;

const StyledIcon = styled.div`
  svg {
    width: 96px !important;
    height: 96px !important;
  }
  svg path {
    fill: ${({ theme }) => theme.color.offWhite};
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.offWhite};
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin-bottom: 16px;
  margin-top: 6rem;
`;

const StyledParagraph = styled(Subheading)`
  color: ${({ theme }) => theme.color.offWhite};
  font-size: 1.6rem;
  line-height: 2rem;
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
