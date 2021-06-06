import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1.6rem;
  border-radius: 5px;
  height: 46px;
  min-width: 460px;
  max-width: 520px;
  padding: 14px 14px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.navy};
  border: none;
  background: ${({ theme }) => theme.color.offWhite};
  @media only screen and (max-width: 500px) {
    min-width: unset;
    padding: 0 22px;
  }
`;

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
