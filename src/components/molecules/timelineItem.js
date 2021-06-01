import React from "react";
import { Heading, Subheading } from "../atoms/headings";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDate = styled.h2`
  margin-right: 20px;
  margin-bottom: 14px;
  margin-left: 26px;
  white-space: nowrap;
  align-self: flex-start;
`;
const StyledEventName = styled(Heading)`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: 3rem;
  line-height: 4rem;
  color: ${({ theme }) => theme.color.navy};
  margin-right: 20px;
  margin-left: 26px;
  margin-bottom: 14px;
  align-self: flex-start;
  max-width: none;
`;
const StyledParagraph = styled(Subheading)`
  margin-left: 26px;
  font-size: 2.2rem;
  max-width: none;
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
