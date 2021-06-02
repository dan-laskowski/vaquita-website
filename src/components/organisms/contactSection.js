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
