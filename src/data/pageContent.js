import React from "react";
import theme from "../assets/style/theme";

const pageContent = {
  hero: {
    name: `hero`,
    heading: ["New generation ", <span>water</span>, " sensors"],
    paragraph: ``,
    background: theme.color.navy,
    color: theme.color.offWhite,
  },
  solution: {
    name: `solution`,
    heading: `Our solution`,
    paragraph: ``,
    background: theme.color.lightBlue,
    color: theme.color.offWhite,
    features: [`feature 1`, `feature 2`, `feature 3`, `feature 4`],
  },
  app: {
    name: `app`,
    heading: `Modern app`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    background: theme.color.offWhite,
    color: theme.color.navy,
  },
  vision: {
    name: `vision`,
    heading: `Our vision`,
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    background: theme.color.lightBlue,
    color: theme.color.offWhite,
  },
  team: {},
  achievements: {},
  faq: {},
  contact: {},
};

export default pageContent;
