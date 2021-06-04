import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5.8rem;
  padding-right: 5.8rem;
  width: 560px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
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
  @media only screen and (max-width: 500px) {
    margin: 1rem 1rem 0 1rem;
  }
  @media only screen and (max-width: 370px) {
    svg {
      display: none;
    }
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: 2rem;
  line-height: 2.2rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 1035px) {
    text-align: left;
  }
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
