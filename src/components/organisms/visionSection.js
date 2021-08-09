import React from "react";
import styled from "styled-components";
import Founder from "../molecules/founder";
import PageSection from "./pageSection";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  h1 {
    font-size: 4.4rem;
  }
  h2 {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  @media only screen and (max-width: 1375px) {
    flex-direction: column;
    h1 {
      font-size: 4.4rem;
      line-height: 4.6rem;
      margin-bottom: 10px;
    }
    h2 {
      line-height: ${({ theme }) => theme.font.lineHeight.m};
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2.4rem;
      line-height: 2.6rem;
    }
    h2 {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

const StyledContainer = styled(PageSection)`
  width: 50%;
  padding: 14rem 3vw;
  @media only screen and (max-width: 1375px) {
    width: 100%;
    padding: 3rem;
  }
`;

const ValuesBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    .gatsby-image-wrapper {
      width: 50%;
      min-width: 120px;
    }
  }
`;

const VisionSection = ({ content, image, ...props }) => {
  const { values } = useStaticQuery(graphql`
    query MyQuery {
      values: allFile(filter: { name: { regex: "/value/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          name
        }
      }
    }
  `);
  console.log(values);
  return (
    <StyledSection {...props}>
      <StyledContainer section={content.values}>
        <section className="horizontal">
          <ValuesBlock>
            {values.nodes.map(value => (
              <GatsbyImage
                image={value.childImageSharp.gatsbyImageData}
                alt={value.name}
              />
            ))}
          </ValuesBlock>
        </section>
      </StyledContainer>
      <StyledContainer section={content.support}>
        <section>
          {content.support.founders.map(founder => (
            <Founder founder={founder} />
          ))}
        </section>
      </StyledContainer>
    </StyledSection>
  );
};

export default VisionSection;
