import React, { useState } from "react";
import styled from "styled-components";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import logo from "../../assets/images/logo.svg";
import CTAButton from "../atoms/button";

const StyledWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 89px;
  z-index: 10;
  position: fixed;
  opacity: ${props => (props.sticky ? 1 : 0)};
  transform: ${props =>
    props.sticky ? "translateY(0%)" : "translateY(-100%)"};
  transition: 0.3s cubic-bezier(0.4, 0, 1, 1);
  background-color: ${({ theme }) => theme.color.offWhite};
  backdrop-filter: blur(10px);
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
`;

const StyledButton = styled(CTAButton)`
  margin: 0;
  border: 1px solid orange;
`;

const Header = () => {
  const [sticky, setSticky] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );
  return (
    <StyledWrapper sticky={sticky}>
      <StyledHeader>
        <img src={logo} width="165" alt="vaquita logo" />
        <StyledButton>Join beta</StyledButton>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default Header;