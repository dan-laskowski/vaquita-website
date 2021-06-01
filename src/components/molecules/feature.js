import React from "react";
import styled from "styled-components";
import { Subheading } from "../atoms/headings";

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.color.offWhite};
  margin-left: 9%;
  margin-bottom: 16px;
  width: 400px;
  h2,
  ::marker {
    font-family: ${({ theme }) => theme.font.family.primary};
    margin-bottom: 4px;
    font-size: 2.4rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

const Feature = ({ heading, paragraph }) => {
  return (
    <StyledListItem>
      <Subheading>{heading}</Subheading>
      <p>{paragraph}</p>
    </StyledListItem>
  );
};

export default Feature;
