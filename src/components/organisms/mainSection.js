import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import CTAButton from "../atoms/button";
import { Heading, Subheading } from "../atoms/headings";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  background: ${({ background }) => background};
  min-height: 100vh;
  .wrapper {
    display: flex;
    width: 80%;
    align-items: center;
  }
  .image-wrapper,
  .text {
    width: 50%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 4.6rem;
      line-height: 5.6rem;
    }
    h2 {
      font-size: 1.6rem;
      margin-bottom: 12px;
    }
  }
  .image-wrapper {
    align-items: center;
  }
  .image {
    width: 400px;
  }

  .buttons {
    margin-top: 34px;
  }
`;

const MainSection = ({
  section: { background, name, color, heading, paragraph },
  children,
  image,
}) => {
  return (
    <StyledSection id={name} key={name} background={background}>
      <div className="wrapper">
        <div className="image-wrapper">
          <GatsbyImage className="image" image={image} alt="hero" />
        </div>
        <div className="text">
          <Heading color={color}>{heading}</Heading>
          {paragraph && <Subheading color={color}>{paragraph}</Subheading>}
          <div className="buttons">
            <CTAButton>Sign up to beta</CTAButton>
            <CTAButton primary>
              Show more <span>⤳</span>
            </CTAButton>
          </div>
          {children}
        </div>
      </div>
    </StyledSection>
  );
};

export default MainSection;
