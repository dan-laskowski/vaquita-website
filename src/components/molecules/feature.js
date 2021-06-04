import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5.8rem;
  padding-right: 5.8rem;
  max-width: 560px;
`;

const StyledIcon = styled.div`
  margin: 1rem 3rem 0 3rem;
  svg {
    width: 48px !important;
    height: 48px !important;
  }
  svg path {
    fill: ${({ theme }) => theme.color.lightBlue};
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: 2rem;
  line-height: 2.2rem;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled(Subheading)`
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin-bottom: 24px;
`;

const Feature = ({ children, feature }) => {
  return (
    <StyledWrapper>
      <StyledIcon>{children}</StyledIcon>
      <div className="text">
        <StyledHeading>{feature.heading}</StyledHeading>
        <StyledParagraph>{feature.paragraph}</StyledParagraph>
      </div>
    </StyledWrapper>
  );
};

export default Feature;
