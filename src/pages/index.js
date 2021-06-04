import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import MainSection from "../components/organisms/mainSection";
import PageSection from "../components/organisms/pageSection";
import pageContent from "../data/pageContent";
import Member from "../components/molecules/member";
import Step from "../components/molecules/step";
import Feature from "../components/molecules/feature";
import Timeline from "../components/organisms/timeline";
import FaqBox from "../components/organisms/FaqBox";
import ContactSection from "../components/organisms/contactSection";
import app from "../assets/images/app.svg";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PicturesQuery {
      hero: file(name: { in: "hero" }) {
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
          <div className="features"></div>
        </section>
      </PageSection>
      <PageSection section={pageContent.app}>
        <section className="horizontal">
          <div className="image">
            <img
              src={app}
              width="600"
              loading="lazy"
              alt="person with a computer on a table"
            />
          </div>
          <div className="features">
            <Feature feature={pageContent.app.features[0]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12.537 2.592l-5.445 3.779c-1.504 1.043-1.877 3.108-.833 4.611l5.668 8.168c1.287 1.855 3.352 2.85 5.451 2.85 3.605 0 6.622-2.919 6.622-6.634 0-1.304-.384-2.621-1.182-3.773l-5.668-8.168c-.644-.927-1.676-1.425-2.726-1.425-.652 0-1.311.192-1.887.592zm.945 1.361c.751-.521 1.784-.334 2.307.416l1.415 2.042-3.912 2.693-2.36-3.403 2.55-1.748zm6.725 15.503c-2.252 1.563-5.356 1.002-6.919-1.25l-3.306-4.764 8.167-5.668 3.308 4.764c1.562 2.252 1.001 5.355-1.25 6.918zm-16.031-11.567l-2.499-1.74.62-.891 2.271 1.582c-.169.332-.3.681-.392 1.049zm.702 4.006l-2.299 1.615-.624-.888 2.414-1.699c.135.338.299.665.509.972zm-.778-1.906h-3.1v-1.085h3.029c-.013.366.005.729.071 1.085z" />
              </svg>
            </Feature>
            <Feature feature={pageContent.app.features[1]}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.75 18.805c-2.435-.564-5.204-2.006-4.107-4.086 3.341-6.333.886-9.719-2.642-9.719-3.599 0-5.994 3.516-2.644 9.719 1.131 2.092-1.724 3.534-4.107 4.086-2.175.504-2.257 1.588-2.25 3.484l.004.711h17.993l.003-.689c.007-1.909-.066-3-2.25-3.506zm-1.546-7.805c.397-.869.838-2.063.815-2.895-.535-.71-.837-1.625-.837-2.556 0-2.628 2.316-4.549 4.909-4.549 2.577 0 4.909 1.907 4.909 4.549 0 2.751-2.754 5.32-6.532 4.298-.686.468-2.2.939-3.264 1.153zm4.185-6.371l-1.592.22 1.159 1.114-.283 1.582 1.418-.758 1.417.758-.282-1.582 1.159-1.114-1.593-.22-.701-1.447-.702 1.447z" />
              </svg>
            </Feature>
            <Feature feature={pageContent.app.features[2]}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.5 7c.828 0 1.5.672 1.5 1.5v14c0 .826-.671 1.5-1.5 1.5h-7c-.829 0-1.5-.675-1.5-1.5v-14c0-.827.673-1.5 1.5-1.5h7zm-8.907 17h-9.593l2.599-3h6.401v1.804c0 .579.336 1.09.593 1.196zm5.407-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm4-3v-10.024h-8v10.024h8zm-1-14h-2v-4h-18v15h11v2h-13v-19h22v6zm-2.5 3c.275 0 .5-.224.5-.5s-.225-.5-.5-.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1z" />
              </svg>
            </Feature>
            <Feature feature={pageContent.app.features[3]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z" />
              </svg>
            </Feature>
          </div>
        </section>
      </PageSection>
      <PageSection section={pageContent.howItWorks}>
        <div className="steps">
          <Step step={pageContent.howItWorks.steps[0]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
            >
              <path d="M15.613 21.719c-1.443 1.409-3.424 2.281-5.613 2.281-4.421 0-8-3.547-8-7.925 0-4.376 3.13-8.878 8-16.075 2.473 3.653 4.493 6.61 5.887 9.211-.665.171-1.289.442-1.854.801-1.021-1.886-2.384-3.989-4.033-6.441-3.658 5.437-6 9.223-6 12.503 0 3.268 2.691 5.926 6 5.926 1.387 0 2.661-.471 3.678-1.254.581.424 1.231.759 1.935.973zm6.387-6.219c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" />
            </svg>
          </Step>
          <Step step={pageContent.howItWorks.steps[1]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
            >
              <path d="M8 24v-2h3v-2h2v2h3v2h-8zm9-2v2h3v-2h-3zm-10 0h-3v2h3v-2zm5.857-15.872c-.026-.05.257-.076.307-.076.057.007-.146.339-.307.076zm-1.613-2.304l.081-.023-.038.102c.064.116.017.186.006.249l-.111.069c-.04.05.193.057.195.064.009.025-.281.067-.228.128.072.102.618-.146.531-.132.169-.085.022-.094-.072-.143-.032-.161-.06-.41-.16-.51l.066-.076c-.155-.224-.27.272-.27.272zm9.756 5.176c0 4.971-4.029 9-9 9s-9-4.029-9-9 4.029-9 9-9 9 4.029 9 9zm-6.232-4.028c-.004-.11-.143-.213-.286-.023-.101.13-.083.33-.138.417-.078.131.426.254.426.13.019-.208.549-.048.652-.019.186.052.482-.169.158-.286-.268-.097-.407-.201-.432-.391 0 0 .142-.132.08-.125-.164.02-.46.59-.46.297zm4.722 4.028c0-.776-.133-1.56-.269-1.974-.043-.131-.142-.234-.27-.284-.192-.075-1.003.448-1.125.19l-.429.006c-.091-.05-.341-.386-.455-.345-.23.084.355.723.516.808.151-.114.639-.349.744-.029.201.603-.553 1.263-.938 1.612-.576.521-.469-.337-.861-.639-.206-.158-.204-.495-.412-.611-.093-.053-.52-.543-.516-.61l-.012.125c-.07.053-.221-.201-.237-.241 0 .221.36.573.479.751.203.304.312.746.561.994.134.134.645.686.776.674l.684-.324c.482.114-1.137 2.404-1.29 2.688-.127.238.103.825.084 1.106-.021.324-.277.43-.52.606-.26.189-.198.559-.417.693-.388.239-.666 1.015-1.217 1.011-.162 0-.854.271-.946.005-.07-.192-.164-.337-.264-.527-.098-.186-.012-.378-.13-.542-.082-.114-.356-.373-.381-.508-.001-.116.088-.47.21-.531.172-.088.033-.343.012-.492-.035-.265-.199-.484-.397-.638-.292-.224-.141-.403-.072-.723 0-.153-.093-.354-.299-.294-.424.123-.295-.33-.603-.31-.223.016-.404.156-.61.219-.26.078-.525-.062-.782-.094-1.055-.133-1.399-1.34-1.124-2.21.03-.142-.084-.406-.035-.516.119-.264.361-.561.572-.761.118-.112.271-.084.41-.171.215-.136.218-.415.429-.586.3-.244.71-.239 1.101-.291.209-.028 1.002-.199 1.127-.045 0 .029.145.454-.014.43.324.018.787.562 1.096.434.158-.066.101-.552.426-.317.196.141 1.076.204 1.26.052.113-.093.176-.697.039-.766.087.087-.459.093-.51.073-.09-.033-.174.086-.318.02.088.041-.484-.266-.163-.5l-.404.081c-.1.081.047.135-.096.206-.227.115-.397-.395-.483-.451-.087-.058-.76-.53-.576-.222l.592.589c-.029.02-.156-.214-.156-.044.04-.101.016.435-.078.26l.005-.201c0-.063-.171-.126-.204-.169-.094-.117-.344-.373-.479-.435-.037-.018-.572.065-.617.083l-.135.232c-.111.041-.215.095-.314.161l-.117.264c-.052.046-.574.219-.576.225.021-.056-.366-.128-.34-.241.028-.124.159-.51.125-.651-.035-.148.807.213.86-.177.022-.168.034-.365-.235-.394.052.006.521-.185.6-.271.109-.126.361-.332.543-.332.213 0 .166-.31.265-.461.099.039-.053.282.065.38-.008-.077.334.042.367.025.078-.042.513-.018.445-.222-.074-.208.038-.146.136-.189-.017.007.255-.464.302-.31-.032-.159-.315.056-.414.047-.229-.018-.133-.39-.046-.499.066-.087-.183-.192-.186-.027-.004.247-.233.47-.181.798.081.495-.552-.12-.606-.085-.21.127-.382-.161-.273-.333.111-.176.379-.167.489-.357.078-.133.169-.288.289-.39.401-.337.512-.067.912-.03.391.036.131.093.078.243-.053.143.215.193.307.074.053-.069.172-.243.224-.371.066-.166.676-.148.25-.402-.28-.167-1.503-.504-2.321-.504-.178 0-.301.197-.436.31-.268.221-.951.655-1.332.523-.389-.134-1.223.495-1.355.5-.05.002.001-.476.268-.511-.115.017.935-.53.906-.645-.034-.135-2.1.617-2.007.768.044.069.224.069-.012.221-.138.082-.283.601-.409.601-.379.165-.403-.326-.824.307l-.671.27c-.995 1.058-1.685 2.398-1.935 3.887-.009.06.251.169.284.21.085.101.085.534.126.676.103.358.36.558.555.885.116.194.308.686.247.889.081-.133.803.612.935.767.311.366.55.808.045 1.169-.162.116.248.846.036 1.025l-.271.07c-.267.164-.147.567.016.737 1.364 1.426 3.285 2.315 5.415 2.315 4.137 0 7.492-3.354 7.492-7.492zm-8.631-4.768c.094-.041.22-.04.233-.165l.06-.075c.026-.039-.051-.103-.082-.109l-.112.077-.055.014-.051.065.006.036-.065.08c-.063.064.002.105.066.077z" />
            </svg>
          </Step>
          <Step step={pageContent.howItWorks.steps[2]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
            >
              <path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
            </svg>
          </Step>
          <Step step={pageContent.howItWorks.steps[3]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 24 24"
            >
              <path d="M13 16h-2v-6h2v6zm-1-10.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm0-2.75c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z" />
            </svg>
          </Step>
        </div>
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
      <ContactSection section={pageContent.contact} />
    </Layout>
  );
};

export default IndexPage;
