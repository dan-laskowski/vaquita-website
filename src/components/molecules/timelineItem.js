import React from "react";
import { Heading, Subheading } from "../atoms/headings";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDate = styled.h2`
  font-size: 1.2rem;
  margin-right: 20px;
  margin-bottom: 14px;
  margin-left: 26px;
  text-transform: uppercase;
  white-space: nowrap;
  align-self: flex-start;
  color: ${({ theme }) => theme.color.navy};
`;
const StyledEventName = styled(Heading)`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: 3rem;
  line-height: 3.6rem;
  color: ${({ theme }) => theme.color.offWhite};
  margin-right: 20px;
  margin-left: 26px;
  margin-bottom: 14px;
  align-self: flex-start;
  max-width: none;
  @media only screen and (max-width: 990px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;
const StyledParagraph = styled(Subheading)`
  margin-left: 26px;
  font-size: 1.6rem;
  line-height: 2.6rem;
  max-width: none;
  color: ${({ theme }) => theme.color.navy};
  @media only screen and (max-width: 990px) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`;

const SteplineItem = ({ date, name, text, index }) => (
  <div className={`container ${index % 2 ? `right` : `left`}`}>
    <div className="content">
      <StyledDate>{date}</StyledDate>
      <StyledEventName as="h2">{name}</StyledEventName>
      <StyledParagraph>{text}</StyledParagraph>
    </div>
  </div>
);

SteplineItem.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SteplineItem;
