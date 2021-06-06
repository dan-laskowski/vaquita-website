import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "../atoms/headings";
import Map from "../atoms/map";
import ContactForm from "./contactForm";

const StyledSection = styled.section`
  display: flex;
  min-height: 80vh;
  max-height: 780px;
  div {
    width: 50%;
  }
  @media only screen and (max-width: 950px) {
    min-height: 670px;
    max-height: 800px;
  }
  @media only screen and (max-width: 880px) {
    flex-direction: column;
    div {
      width: 100%;
    }
    .map-wrapper iframe {
      min-width: 100%;
      height: 100vw;
      min-height: 450px;
    }
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-transform: none;
    }
    h2 {
      margin-bottom: 76px;
    }

    @media only screen and (max-width: 880px) {
      padding-bottom: 4rem;
    }
  }
`;

const ContactSection = ({
  section: { background, name, color, heading, paragraph },
}) => {
  return (
    <StyledSection id={name} key={name} background={background}>
      <div className="form-wrapper">
        <Heading color={color}>{heading}</Heading>
        {paragraph && <Subheading color={color}>{paragraph}</Subheading>}
        <ContactForm />
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
    </StyledSection>
  );
};

export default ContactSection;
