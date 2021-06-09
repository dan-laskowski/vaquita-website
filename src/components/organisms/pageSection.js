import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? `center` : `unset`)};
  align-items: center;
  background: ${({ background }) => background};
  min-height: 100vh;
  padding: 10rem;
  h1 {
    text-transform: none;
  }
  @media only screen and (max-width: 1501px) {
    padding: 3rem;

    .image {
      width: 50%;
    }
    .image img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1050px) {
    .image {
      width: 75%;
      margin-top: 10rem;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 2rem;
    .image {
      width: 90% !important;
      margin-top: 6rem;
    }
  }
`;

const PageSection = ({
  section: { background, name, color, heading, paragraph },
  children,
  center,
}) => {
  return (
    <StyledSection center={center} id={name} key={name} background={background}>
      <Heading color={color}>{heading}</Heading>
      {paragraph && <Subheading color={color}>{paragraph}</Subheading>}
      {children}
    </StyledSection>
  );
};

export default PageSection;
