import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import MainSection from "../components/organisms/mainSection";
import PageSection from "../components/organisms/pageSection";
import pageContent from "../data/pageContent";
import FeatureBox from "../components/organisms/featureBox";
import Timeline from "../components/organisms/timeline";
import FaqBox from "../components/organisms/FaqBox";
import Member from "../components/molecules/member";

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
      nour: file(name: { in: "nour" }) {
        childImageSharp {
          gatsbyImageData(
            width: 260
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      emilio: file(name: { in: "emilio" }) {
        childImageSharp {
          gatsbyImageData(
            width: 260
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      vijaya: file(name: { in: "vijaya" }) {
        childImageSharp {
          gatsbyImageData(
            width: 260
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      dominik: file(name: { in: "dominik" }) {
        childImageSharp {
          gatsbyImageData(
            width: 260
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      vision: file(name: { in: "vision" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  return (
    <Layout>
      <MainSection
        section={pageContent.hero}
        image={data.hero.childImageSharp.gatsbyImageData}
      />
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
            <FeatureBox features={pageContent.solution.features} />
          </ol>
        </section>
      </PageSection>
      <PageSection section={pageContent.app}>
        <section className="horizontal">
          <div className="image">
            <GatsbyImage
              image={data.app.childImageSharp.gatsbyImageData}
              alt="person with a computer on a table"
            />
          </div>
          <ul>
            <FeatureBox features={pageContent.app.features} />
          </ul>
        </section>
      </PageSection>
      <PageSection section={pageContent.vision} center>
        <section className="horizontal">
          <GatsbyImage
            image={data.vision.childImageSharp.gatsbyImageData}
            alt="hand with the planet"
          />
        </section>
      </PageSection>
      <PageSection section={pageContent.team}>
        <div className="members">
          <Member
            image={data.emilio.childImageSharp.gatsbyImageData}
            member={pageContent.team.members[0]}
          />
          <Member
            image={data.nour.childImageSharp.gatsbyImageData}
            member={pageContent.team.members[1]}
          />
          <Member
            image={data.vijaya.childImageSharp.gatsbyImageData}
            member={pageContent.team.members[2]}
          />
          <Member
            image={data.dominik.childImageSharp.gatsbyImageData}
            member={pageContent.team.members[3]}
          />
          <Member
            image={data.vijaya.childImageSharp.gatsbyImageData}
            member={pageContent.team.members[4]}
          />
        </div>
      </PageSection>
      <PageSection section={pageContent.achievements}>
        <Timeline achievements={pageContent.achievements.achievements} />
      </PageSection>
      <PageSection section={pageContent.faq}>
        <section className="horizontal">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_G5TBf4.json"
            background="transparent"
            speed="1"
            style={{ width: "600px", height: "600px" }}
            loop
            autoplay
          />
          <FaqBox faq={pageContent.faq.faq} />
        </section>
      </PageSection>
      <PageSection section={pageContent.contact}></PageSection>
    </Layout>
  );
};

export default IndexPage;
