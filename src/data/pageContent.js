import React from "react";
import theme from "../assets/style/theme";

const pageContent = {
  hero: {
    name: `hero`,
    heading: [<span>water</span>, "quality measured by technology of tommorow"],
    paragraph: `We developed water quality monitoring system that predicts what will happen in the environment. It is your chance to finally stay proactive to changes in the environment. Interested? Sign up to our beta program and learn more! `,
    background: theme.color.navy,
    color: theme.color.offWhite,
  },
  solution: {
    name: `solution`,
    heading: `Our solution`,
    paragraph: `Learn more about our system developed with newest technology available on the market.`,
    background: theme.color.lightBlue,
    color: theme.color.offWhite,
    features: {
      feature1: {
        heading: `Custom parameters`,
        paragraph: `We adjust the parameters in the station, based on the client’s needs and feedback.`,
      },
      feature2: {
        heading: `Optical sensor technology`,
        paragraph: `Our sensors react to changes in the environment with a delay of less than 0.1 second.`,
      },
      feature3: {
        heading: `Deployable everywhere`,
        paragraph: `Due to the use of renewables our stations can be powered even in far remote areas.`,
      },
      feature4: {
        heading: `Visual pollution free`,
        paragraph: `Sustainable masking technology let us blend our station in the environment so it does not disturb the wildlife.`,
      },
    },
  },
  app: {
    name: `app`,
    heading: `Data Analysis & Forecasting Platform`,
    paragraph: ``,
    background: theme.color.offWhite,
    color: theme.color.navy,
    features: {
      feature1: {
        heading: `Full station integration made with one click`,
        paragraph: `Log in via our website to your account, and access all your water quality data.`,
      },
      feature2: {
        heading: `Simple to operate`,
        paragraph: `Our platform can be used by both experienced professionals and individuals that just started their journey with water quality.`,
      },
      feature3: {
        heading: `Available on your desktop and mobile device (iOS and Android)`,
        paragraph: `Log in from any platform you want.`,
      },
      feature4: {
        heading: `Affordable licensing for everyone`,
        paragraph: `We offer both individual and group licenses depending on your needs!`,
      },
    },
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
    heading: ``,
    steps: {
      step1: {
        heading: `Place a station in a water reservoir`,
        paragraph: `Make sure the station is fully submerged`,
      },
      step2: {
        heading: `Connect the station to the web `,
        paragraph: `Wait for the light to turn green to indicate you successfully connected to the local network`,
      },
      step3: {
        heading: `Log in to our software platform `,
        paragraph: `Verify if you can see the station on your dashboard`,
      },
      step4: {
        heading: `Set notifications and enjoy! `,
        paragraph: `In the settings menu choose an option how often would you like to receive alerts`,
      },
    },
  },
  team: {
    name: `team`,
    heading: `Meet our team`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    background: theme.color.offWhite,
    color: theme.color.navy,
    members: {
      member1: {
        name: `Emilio Asensi`,
        position: `CEO`,
        title: `MSc in`,
      },
      member2: {
        name: `Nour Akel`,
        position: `Technical Lead`,
        title: `MSc in`,
      },
      member3: {
        name: `Vijaya Sekhar`,
        position: `Software Lead`,
        title: `PhD in`,
      },
      member4: {
        name: `Dominik Wudarczyk`,
        position: `HR Lead`,
        title: `MSc in Entrepreneurship and Innovation`,
      },
      member5: {
        name: `Mysterious Stranger`,
        position: `CEO`,
        title: `Check available opportunities and join our team!`,
      },
    },
  },
  achievements: {
    name: `achievements`,
    heading: "What we have achieved?",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    background: theme.color.orange,
    color: theme.color.navy,
    achievements: [
      {
        date: "March 2020",
        name: "Company Established",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      },
      {
        date: "June 2020",
        name: "Fully functional prototype completed",
        text:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita.",
      },
      {
        date: "December 2020",
        name: "First major round of funding secured",
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      },
      {
        date: "March 2021",
        name: "Sign-off for three pilot projects",
        text:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.",
      },
    ],
  },
  faq: {
    name: `faq`,
    heading: "FAQ",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing.`,
    background: theme.color.offWhite,
    color: theme.color.navy,
    faq: [
      {
        question: "Do you ship your station(s) internationally? ",
        answer: `International shipping can be discussed upon request.`,
      },
      {
        question: "Can you come and install the station(s) for me?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`,
      },
      {
        question: "My station(s) does not work, what do I do?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`,
      },
      {
        question:
          "I wanted to place your station close to a lake where there is no electricity – will it still work?",
        answer: `Lorem ipsum dolor sit amet, consecte di emo adipiscing elit...`,
      },
      {
        question:
          "I forgot to cancel my subscription for the forecasting platform, what should I do?",
        answer: `Lorem ipsum dolor sit amet, consecte di emo adipiscing elit...`,
      },
    ],
  },
  contact: {
    name: `contact`,
    heading: "Contact us",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing.`,
    background: theme.color.lightBlue,
    color: theme.color.orange,
  },
};

export default pageContent;
