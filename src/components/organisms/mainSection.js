import React, { useState, useRef } from "react";
import styled from "styled-components";
import addToMailChimp from "gatsby-plugin-mailchimp";
import CTAButton from "../atoms/button";
import { Heading, Subheading } from "../atoms/headings";
import Input from "../atoms/input";
import hero from "../../assets/images/hero.svg";

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
    @media only screen and (max-width: 720px) {
      width: 100%;
    }
    @media only screen and (max-width: 520px) {
      justify-content: center;
    }
  }
  .text {
    width: 40%;
    min-width: 500px;
    max-width: 600px;
    margin: 6rem;
    margin-right: 0;
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
      width: 80%;
      max-width: unset;
      margin-top: 7rem;
      padding-bottom: 6rem;
      h1 {
        margin-top: 0;
        text-align: left;
      }
      h2 {
        width: 88%;
        margin-bottom: 36px;
        max-width: unset;
      }
    }
    @media only screen and (max-width: 945px) {
      h1 {
        font-size: 4.4rem;
        line-height: 5.4rem;
      }
      h2 {
        font-size: 1.4rem;
      }
      padding-left: 0;
      padding-right: 0;
    }
    @media only screen and (max-width: 870px) {
      margin-left: 0;
      margin-right: 0;
      h1 {
        font-size: 3.8rem;
        line-height: 4.8rem;
      }
    }
    @media only screen and (max-width: 755px) {
      min-width: unset;
      h1 {
        font-size: 3.6rem;
        line-height: 4.6rem;
      }
      h2 {
        width: 100%;
      }
    }
    @media only screen and (max-width: 720px) {
      width: 90%;
      h2 {
        width: 90%;
      }
    }
    @media only screen and (max-width: 635px) {
      h1 {
        font-size: 3rem;
        line-height: 4rem;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 414px;
    @media only screen and (max-width: 1100px) {
      align-self: center;
      width: 80%;
      max-width: 506px;
    }
    @media only screen and (max-width: 870px) {
      align-self: flex-start;
    }
    @media only screen and (max-width: 790px) {
      width: 100%;
    }
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
    width: 700px;

    @media only screen and (max-width: 1410px) {
      width: 600px;
    }
    @media only screen and (max-width: 1240px) {
      width: 500px;
    }
    @media only screen and (max-width: 1100px) {
      display: flex;
      justify-content: center;
      margin-top: calc(70px + 2rem);
      width: 80%;
    }
    @media only screen and (max-width: 720px) {
      width: 90%;
      margin-top: 70px;
    }
  }
`;

const MainSection = ({
  section: { background, name, color, heading, paragraph },
}) => {
  const [email, setEmail] = useState("");
  const [submitText, setSubmitText] = useState("Sign up for beta");
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
        </div>
        <div className="image">
          <img src={hero} className="image" alt="hero" />
        </div>
      </div>
    </StyledSection>
  );
};

export default MainSection;
