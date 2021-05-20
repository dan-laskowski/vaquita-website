import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";
import Button from "../atoms/button";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ light, theme }) =>
    light ? theme.color.offWhite : theme.color.navy};
  height: 70vh;
  min-height: 640px;
`;

const PageSection = ({ children, id, heading, paragraph, light }) => {
  return (
    <StyledSection light={light} id={id}>
      <Heading light={light}>{heading}</Heading>
      <Subheading light={light}>{paragraph}</Subheading>
      {children}
    </StyledSection>
  );
};

export default PageSection;
