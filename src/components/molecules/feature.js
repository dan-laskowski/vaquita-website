import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5.8rem;
  padding-right: 5.8rem;
`;

const StyledIcon = styled.div`
  svg {
    width: 96px !important;
    height: 96px !important;
  }
  svg path {
    fill: ${({ theme }) => theme.color.lightBlue};
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin-bottom: 16px;
  margin-top: 6rem;
`;

const StyledParagraph = styled(Subheading)`
  color: ${({ theme }) => theme.color.lightBlue};
  font-size: 1.6rem;
  line-height: 2rem;
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
