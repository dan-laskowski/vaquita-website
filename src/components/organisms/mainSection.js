import React, { useState, useRef } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import addToMailChimp from "gatsby-plugin-mailchimp";
import CTAButton from "../atoms/button";
import { Heading, Subheading } from "../atoms/headings";
import Input from "../atoms/input";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  background: ${({ background }) => background};
  min-height: 100vh;
  .wrapper {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1100px) {
      flex-direction: column-reverse;
    }
  }
  .text {
    width: 50%;
    max-width: 600px;
    margin: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 4.8rem;
      line-height: 5.5rem;
    }
    h2 {
      font-size: 1.6rem;
      margin-bottom: 12px;
      max-width: 420px;
    }
    @media only screen and (max-width: 1100px) {
      width: auto;
      max-width: 416px;
      margin-top: 0;
      padding-bottom: 6rem;
      h1 {
        margin-top: 0;
        text-align: left;
      }
    }
    @media only screen and (max-width: 600px) {
      margin: 3rem;
    }
    @media only screen and (max-width: 480px) {
      h1 {
        font-size: 2.4rem;
        line-height: 3.5rem;
      }
      h2 {
        font-size: 1.4rem;
      }
      padding-left: 0;
      padding-right: 0;
    }
    @media only screen and (max-width: 360px) {
      h1 {
        font-size: 2rem;
        line-height: 3rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 414px;
  }

  input {
    min-width: unset;
    margin-top: 1rem;
    margin-bottom: 1.4rem;
    padding: 0 46px;
    border-radius: 28px;
    @media only screen and (max-width: 500px) {
      min-width: unset;
      padding: 0 22px;
    }
  }

  button {
    margin-right: 0;
    min-width: unset;
  }

  .buttons {
    margin-top: 34px;
  }
  .image {
    @media only screen and (max-width: 1100px) {
      margin-top: 8rem;
      margin-bottom: 4rem;
    }
    @media only screen and (max-width: 370px) {
      width: 86%;
    }
  }
`;

const MainSection = ({
  section: { background, name, color, heading, paragraph },
  children,
  image,
}) => {
  const [email, setEmail] = useState("");
  const [submitText, setSubmitText] = useState("Sign up to beta");
  const formEl = useRef(null);

  const handleSubmit = e => {
    setSubmitText("Subscribing..");
    e.preventDefault();
    addToMailChimp(email).then(() => {
      setSubmitText(`✓ Thank you for subscribing!`);
      formEl.current.reset();
    });
  };
  return (
    <StyledSection id={name} key={name} background={background}>
      <div className="wrapper">
        <div className="text">
          <Heading color={color}>{heading}</Heading>
          {paragraph && <Subheading color={color}>{paragraph}</Subheading>}
          <form onSubmit={handleSubmit} ref={formEl}>
            <Input
              aria-label="email"
              type="email"
              placeholder="Enter your email"
              maxLength="100"
              name="reply_to"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <CTAButton>{submitText}</CTAButton>
          </form>
          {/* <CTAButton primary>
            Show more <span>⤳</span>
          </CTAButton> */}
          {children}
        </div>
        <div className="image">
          <GatsbyImage
            loading="eager"
            className="image"
            image={image}
            alt="hero"
          />
        </div>
      </div>
    </StyledSection>
  );
};

export default MainSection;
