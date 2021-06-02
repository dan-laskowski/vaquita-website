import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-size: 1.6rem;
  border-radius: 5px;
  height: 46px;
  min-width: 460px;
  max-width: 520px;
  min-height: 180px;
  padding: 14px 14px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.navy};
  border: none;
  background: ${({ theme }) => theme.color.offWhite};
`;

const Input = ({ ...props }) => {
  return <StyledTextArea {...props} />;
};

export default Input;
