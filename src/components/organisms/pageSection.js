import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  height: 100vh;
  min-height: 940px;
`;

const PageSection = ({
  section: { background, name, color, heading, paragraph },
  children,
}) => {
  return (
    <StyledSection id={name} key={name} background={background}>
      <Heading color={color}>{heading}</Heading>
      {paragraph && <Subheading color={color}>{paragraph}</Subheading>}
      {children}
    </StyledSection>
  );
};

export default PageSection;
