import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
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
  @media only screen and (max-width: 555px) {
    height: 120px;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  @media only screen and (max-width: 1520px) {
    margin: 0 4rem;
  }
  @media only screen and (max-width: 370px) {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 555px) {
    flex-direction: column;
    justify-content: space-around;
    .buttons {
      margin-top: 10px;
    }
  }
`;

const StyledImg = styled.img``;

const StyledButton = styled(CTAButton)`
  margin: 0;
  border: 1px solid orange;
  @media only screen and (max-width: 520px) {
    padding: 8px 16px;
    min-width: unset;
    height: 42px;
  }
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
        <StyledImg src={logo} width="165" alt="vaquita logo" />
        <div className="buttons">
          <Link to="hero" smooth>
            <StyledButton>Join beta</StyledButton>
          </Link>
          <Link to="contact" smooth>
            <CTAButton primary>Contact us</CTAButton>
          </Link>
        </div>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default Header;
