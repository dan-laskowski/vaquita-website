import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 2px inset ${({ theme }) => theme.color.lightBlue};
  color: ${({ theme }) => theme.color.offWhite};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1.1rem 2rem;
  cursor: pointer;
  margin-top: 30px;
  transition: 0.2s ease-in;
  &:hover {
    border: 2px inset ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.orange};
    transition: 0.2s ease-in;
  }
  span {
    font-size: 17px;
  }
`;

const CTAButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default CTAButton;
