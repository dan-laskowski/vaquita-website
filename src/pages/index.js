import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import PageSection from "../components/organisms/pageSection";
import pageContent from "../data/pageContent";
import CTAButton from "../components/atoms/button";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PicturesQuery {
      hero: file(name: { in: "hero" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      app: file(name: { in: "app" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      solution: file(name: { in: "solution" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  return (
    <Layout>
      <PageSection section={pageContent.hero}>
        <GatsbyImage
          image={data.hero.childImageSharp.gatsbyImageData}
          alt="hand with the planet"
        />
        <CTAButton>
          Show me <span>⤳</span>
        </CTAButton>
      </PageSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222151"
          fillOpacity="1"
          d="M0,32L60,74.7C120,117,240,203,360,213.3C480,224,600,160,720,117.3C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <PageSection section={pageContent.solution}>
        <section className="horizontal">
          <GatsbyImage
            image={data.solution.childImageSharp.gatsbyImageData}
            alt="water sensors"
          />
          <ol>
            {pageContent.solution.features.map(feature => (
              <li>{feature}</li>
            ))}
          </ol>
        </section>
      </PageSection>
      <PageSection section={pageContent.app}>
        <section className="horizontal">
          <GatsbyImage
            image={data.app.childImageSharp.gatsbyImageData}
            alt="person with a computer on a table"
          />
          <ul>
            <li>Full station integration made with one click</li>
            <li>Simple to operate </li>
            <li>Available on your mobile device (iOS and Android)</li>
            <li>Affordable licensing for everyone</li>
          </ul>
        </section>
      </PageSection>
      <PageSection section={pageContent.vision}></PageSection>
    </Layout>
  );
};

export default IndexPage;
