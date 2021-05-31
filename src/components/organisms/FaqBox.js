import React from "react";
import styled from "styled-components";
import FaqElement from "../molecules/faqElement";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
`;

const FaqBox = ({ faq }) => (
  <StyledWrapper>
    {faq.map(({ question, answer }) => (
      <FaqElement key={question} question={question} answer={answer} />
    ))}
  </StyledWrapper>
);

export default FaqBox;
