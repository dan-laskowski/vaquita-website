import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";

const StyledWrapper = styled.div`
  max-width: 560px;
  cursor: pointer;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.navy};
  border-radius: 5px;
  margin-bottom: 24px;
  div.question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledIcon = styled.p`
  border: none;
  align-self: center;
  cursor: pointer;
  margin-right: 10px;
`;

const StyledQuestion = styled.h2`
  margin: 10px 6px 4px 10px;
  user-select: none;
`;
const StyledAnswer = styled.h2`
  margin: 0px 10px 10px 10px;
  user-select: none;
`;

const FaqElement = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledWrapper onClick={() => setIsOpened(prevState => !prevState)}>
      <div className="question">
        <StyledQuestion>{question}</StyledQuestion>
        <StyledIcon>{isOpened ? `-` : `+`}</StyledIcon>
      </div>
      <AnimateHeight
        duration={500}
        animateOpacity
        aria-hidden
        height={isOpened ? "auto" : 0}
      >
        <StyledAnswer>{answer}</StyledAnswer>
      </AnimateHeight>
    </StyledWrapper>
  );
};

FaqElement.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqElement;
