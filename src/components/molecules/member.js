import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import linkedin from "../../assets/images/linkedin.svg";

const MemberWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  width: 285px;
  color: ${({ theme }) => theme.color.navy};
  .image {
    margin: 0 auto;
    width: 255px;
  }
  .linkedin {
    left: 0;
  }
  margin: 4rem;
`;
const InfoBox = styled.div`
  margin: 12px 6px;
  text-align: center;
  max-width: 260px;
`;

const MemberName = styled.h3`
  font-size: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 0.6rem;
`;
const MemberPosition = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.lightBlue};
`;
const MemberTitle = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: rgb(141, 151, 173);
  margin-bottom: 1.4rem;
  text-align: left;
`;

const Member = ({ member, image, link }) => {
  return (
    <MemberWrapper>
      <div className="image">
        <GatsbyImage
          image={image}
          width={360}
          height={360}
          loading="lazy"
          alt="circle"
        />
      </div>
      <InfoBox>
        <MemberName>{member.name}</MemberName>
        <MemberPosition>{member.position}</MemberPosition>
        <MemberTitle>{member.title}</MemberTitle>
        {link && (
          <a
            className="linkedin"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} width="18" alt="linkedin logo" />
          </a>
        )}
      </InfoBox>
    </MemberWrapper>
  );
};

export default Member;
