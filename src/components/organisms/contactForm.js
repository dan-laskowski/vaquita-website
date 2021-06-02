import React, { useState, useRef } from "react";
import styled from "styled-components";
import Input from "../atoms/input";
import emailjs from "emailjs-com";
import Button from "../atoms/button";
import TextArea from "../atoms/textArea";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const StyledTextArea = styled(TextArea)``;

const StyledButton = styled(Button)`
  min-width: 320px;
  margin-right: 0;
`;

const ContactForm = () => {
  const [submitText, setSubmitText] = useState("Send us a message");
  const inputEl = useRef(null);
  const handleEmailSend = e => {
    e.preventDefault();
    setSubmitText("Sending...");
    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        e.target,
        process.env.GATSBY_USER_ID
      )
      .then(
        () => {
          setSubmitText("✓ Your message has been sent");
        },
        error => {
          setSubmitText(error);
        }
      );
  };
  return (
    <StyledForm onSubmit={handleEmailSend} ref={inputEl}>
      <Input
        aria-label="name"
        type="text"
        placeholder="Name"
        name="from_name"
        required
      />
      <Input
        aria-label="email"
        type="email"
        placeholder="Email"
        name="reply_to"
        required
      />
      <StyledTextArea
        aria-label="message"
        placeholder="Message"
        name="message"
        required
      />
      <StyledButton type="submit" value="Send">
        {submitText}
      </StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
