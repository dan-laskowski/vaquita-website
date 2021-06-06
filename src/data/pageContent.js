import React from "react";
import theme from "../assets/style/theme";

const pageContent = {
  hero: {
    name: `hero`,
    heading: [
      <span>water</span>,
      " quality measured by technology of tommorow",
    ],
    paragraph: `We developed a quality monitoring system that predicts what will happen in a water reservoir. It is your chance to finally stay proactive to changes in the environment. Interested? Sign up to our beta program and learn more!`,
    background: theme.color.navy,
    color: theme.color.offWhite,
  },
  solution: {
    name: `solution`,
    heading: `Our solution`,
    paragraph: `Learn more about our system developed with newest technology available on the market.`,
    background: theme.color.lightBlue,
    color: theme.color.offWhite,
    features: [
      {
        heading: `Custom parameters`,
        paragraph: `We adjust the parameters in the station, based on the client’s needs and feedback.`,
      },
      {
        heading: `Optical sensor technology`,
        paragraph: `Our sensors react to changes in the environment with a delay of less than 0.1 second.`,
      },
      {
        heading: `Deployable everywhere`,
        paragraph: `Due to the use of renewables our stations can be powered even in far remote areas.`,
      },
      {
        heading: `Visual pollution free`,
        paragraph: `Sustainable masking technology let us blend our station in the environment so it does not disturb the wildlife.`,
      },
    ],
  },
  app: {
    name: `app`,
    heading: `Data Analysis & Forecasting Platform`,
    paragraph: ``,
    background: theme.color.offWhite,
    color: theme.color.lightBlue,
    features: [
      {
        heading: `Full station integration made with one click`,
        paragraph: `Log in via our website to your account, and access all your water quality data.`,
      },
      {
        heading: `Simple to operate`,
        paragraph: `Our platform can be used by both experienced professionals and individuals that just started their journey with water quality.`,
      },
      {
        heading: `Available on your desktop and mobile device (iOS and Android)`,
        paragraph: `Log in from any platform you want.`,
      },
      {
        heading: `Affordable licensing for everyone`,
        paragraph: `We offer both individual and group licenses depending on your needs!`,
      },
    ],
  },
  vision: {
    name: `vision`,
    heading: `Our vision`,
    paragraph: `We believe it is our responsibility to ensure the survival of water ecosystems worldwide. UN SDGs are in the core of our business`,
    background: theme.color.navy,
    color: theme.color.orange,
  },
  howItWorks: {
    name: `howItWorks`,
    heading: `How it works`,
    paragraph: `Get started with easy 4 steps`,
    background: theme.color.lightBlue,
    color: theme.color.offWhite,
    steps: [
      {
        heading: `Place a station in a water reservoir`,
        paragraph: `Make sure the station is fully submerged`,
      },
      {
        heading: `Connect the station to the web `,
        paragraph: `Wait for the light to turn green to indicate you successfully connected to the local network`,
      },
      {
        heading: `Log in to our software platform `,
        paragraph: `Verify if you can see the station on your dashboard`,
      },
      {
        heading: `Set notifications and enjoy! `,
        paragraph: `In the settings menu choose an option how often would you like to receive alerts`,
      },
    ],
  },
  team: {
    name: `team`,
    heading: `Meet our team`,
    paragraph: ``,
    background: theme.color.offWhite,
    color: theme.color.navy,
    members: [
      {
        name: `Emilio Asensi`,
        position: `CEO`,
        title: `MSc in Automation & Organizational Leadership for Sustainability. Ensuring never lose sight of our vision.`,
      },
      {
        name: `Nour Akel`,
        position: `Technical Lead`,
        title: `MSc in Electrical Power Engineering. Making sure our hardware is always functional and packed with top notch technology.`,
      },
      {
        name: `Vijaya Sekhar`,
        position: `Software Lead`,
        title: `PhD in Heat Transfer. Managing and developing our software system so it always keeps our client up to speed.`,
      },
      {
        name: `Dominik Wudarczyk`,
        position: `HR Lead`,
        title: `MSc in Entrepreneurship and Innovation. Constantly scouting for new clients and business opportunities.`,
      },
      {
        name: `Mysterious Stranger`,
        position: `CEO`,
        title: [
          "Check available opportunities and ",
          <a
            href="https://thehub.io/client/startups/vaquita-technologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            join our team!
          </a>,
        ],
      },
    ],
  },
  achievements: {
    name: `achievements`,
    heading: `What we have achieved?`,
    paragraph: ``,
    background: theme.color.orange,
    color: theme.color.navy,
    achievements: [
      {
        date: "March 2020",
        name: "Company Established",
        text:
          "We officially registered Vaquita Technologies in Sweden as ‘Aktiebolag’ (limited liability company). Our office is based in Ideon Incubator – one of the best technical workspaces in the southern part of Sweden. We took our company name from an endangered species to constantly remember our goal, which is to protect and make our planet better for everyone.",
      },
      {
        date: "June 2020",
        name: "Fully functional prototype completed",
        text:
          "After few months of constant work, we completed our first fully functional prototype: the Alpha VAQ 1. Monitoring station powered by solar and wind energy, that is capable to measure temperature, Ph and turbidity. We placed it in a river on the outskirts of Lund and monitored it for several months to verify its performance and adjust it accordingly.",
      },
      {
        date: "December 2020",
        name: "First major round of funding secured",
        text:
          "At the end of 2020 we had been greeted with a Christmas gift beyond our expectations – a verification grant of 150 000 SEK from Ideon Innovation, to help us further develop our product. This funding round helped us tremendously in building new prototypes and further improving our technology.",
      },
      {
        date: "March 2021",
        name: "Sign-off for three pilot projects",
        text:
          "Few months in 2021 we officially went into collaboration with three major stakeholders within the Swedish water industry. Each of the projects had been signed to last till the end of 2021 and target different market segments to ensure we properly scout various business opportunities.",
      },
    ],
  },
  faq: {
    name: `faq`,
    heading: "FAQ",
    paragraph: `How can we help you?`,
    background: theme.color.offWhite,
    color: theme.color.navy,
    faq: [
      {
        question: "Do you ship your station(s) internationally? ",
        answer: `We do but at this moment we tend to prioritize EU based clients due to the ongoing COVID-19 pandemic. International shipping can be discussed upon request.`,
      },
      {
        question: "Can you come and install the station(s) for me?",
        answer: `We cannot. We do not offer installation services, but provide each user with extensive yet simple manual how to set up the station on their own.`,
      },
      {
        question: "My station(s) does not work, what do I do?",
        answer: [
          `If your station does not work, please contact our technical team as soon as possible so we might assist you further. Please direct your inquiries directly to `,
          <a href="mailto:nour.akel@vaqtech.com">Nour</a>,
        ],
      },
      {
        question:
          "I wanted to place your station close to a lake where there is no electricity – will it still work?",
        answer: `It will! But you will have to ensure that the station is placed in correct conditions, such as being fully submerged or exposed to sunlight.`,
      },
      {
        question:
          "I forgot to cancel my subscription for the forecasting platform, what should I do?",
        answer: `You can cancel your subscription anytime trough your user profile, underneath the tab ‘Subscription’.`,
      },
    ],
  },
  contact: {
    name: `contact`,
    heading: "Contact us",
    paragraph: `For more information sign up with us here`,
    background: theme.color.lightBlue,
    color: theme.color.offWhite,
  },
};

export default pageContent;
