import * as React from "react";
import Layout from "../components/layout";
import PageSection from "../components/organisms/pageSection";
import pageContent from "../data/pageContent";

const IndexPage = () => (
  <Layout>
    <PageSection
      id={pageContent}
      heading={pageContent.hero.heading}
      paragraph={pageContent.hero.paragraph}
    ></PageSection>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#222151"
        fill-opacity="1"
        d="M0,32L60,74.7C120,117,240,203,360,213.3C480,224,600,160,720,117.3C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  </Layout>
);

export default IndexPage;
