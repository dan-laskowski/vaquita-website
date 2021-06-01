import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import linkedin from "../../assets/images/linkedin.svg";

const MemberWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 236px;
  color: ${({ theme }) => theme.color.navy};
  .image {
    margin: 0 auto;
    width: 200px;
  }
  margin: 4rem;
`;
const InfoBox = styled.div`
  margin: 12px 6px;
  text-align: center;
`;

const MemberName = styled.h3`
  font-size: 1.8rem;
  margin-top: 2.4rem;
  margin-bottom: 0.4rem;
`;
const MemberPosition = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: rgb(141, 151, 173);
`;
const MemberTitle = styled.p`
  font-size: 1.6rem;
  color: rgb(141, 151, 173);
  margin-bottom: 1rem;
`;

const Member = ({ member, image }) => {
  return (
    <MemberWrapper>
      <div className="image">
        <GatsbyImage
          image={image}
          width={200}
          height={200}
          loading="lazy"
          alt="circle"
        />
      </div>
      <InfoBox>
        <MemberName>{member.name}</MemberName>
        <MemberPosition>{member.position}</MemberPosition>
        <MemberTitle>{member.title}</MemberTitle>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} width="18" alt="linkedin logo" />
        </a>
      </InfoBox>
    </MemberWrapper>
  );
};

export default Member;
