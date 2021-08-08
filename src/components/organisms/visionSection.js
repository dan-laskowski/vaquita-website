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
`;

const StyledContainer = styled(PageSection)`
  width: 50%;
  padding: 14rem 3vw;
`;

const ValuesBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
