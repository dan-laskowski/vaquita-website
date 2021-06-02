import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Heading, Subheading } from "../atoms/headings";

const StyledWrapper = styled.div`
  width: 25%;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.offWhite};
  font-size: 3rem;
  line-height: 4rem;
`;

const StyledParagraph = styled(Subheading)``;

const Step = ({ image, step }) => {
  return (
    <StyledWrapper>
      <GatsbyImage className="image" image={image} alt="feature" />
      <StyledHeading>{step.heading}</StyledHeading>
      <StyledParagraph>{step.paragraph}</StyledParagraph>
    </StyledWrapper>
  );
};

export default Step;
