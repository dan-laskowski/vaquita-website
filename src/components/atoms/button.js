import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.6rem;
  border-radius: 28px;
  height: 46px;
  min-width: 148px;
  padding: 0 46px;
  color: ${({ primary, theme }) =>
    primary ? theme.color.orange : theme.color.navy};
  border: ${({ primary, theme }) =>
    primary ? `1px solid ${theme.color.orange}` : `none`};
  background: ${({ primary, theme }) =>
    primary ? ` none` : theme.color.orange};
  transition: 0.1s ease-in;
  margin-right: 14px;
  cursor: pointer;
  &:hover {
    /* border: none;
    color: ${({ primary, theme }) =>
      primary ? theme.color.orange : theme.color.navy};
    transition: 0.1s ease-in; */
  }
  span {
    font-size: 17px;
  }
`;

const CTAButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CTAButton;
