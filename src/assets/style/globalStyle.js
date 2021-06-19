import { createGlobalStyle } from "styled-components";
import breakpoint from "../../data/breakpoint";

const GlobalStyle = createGlobalStyle`
 *,*::before,*::after {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.secondary};
    padding: 0;
    margin: 0;
    border: 0;
}
*:focus {
  outline: none;
}
html {
    font-size: 62.5%;
}
body {
  background:${({ theme }) => theme.color.lightBlue};
}

ul li h2, ul li p, ul li::marker {
  color: ${({ theme }) => theme.color.lightBlue};
}

#solution {
  h1 {
    margin-top:0;
  }
  h1, h2 {
    color: ${({ theme }) => theme.color.offWhite};
  }
  .features {
    h1 {
      margin-top: 6vh;
    }
  }
  .features.solution {
    margin-left: 6rem;
    @media only screen and (max-width:840px) {
      margin-left: 0;
    }
  }
  div.image.solution img {
    width: 460px;
    @media only screen and (max-width:840px) {
     width:100%;
    }
  }
 
}
section > h1 {
  @media only screen and (max-width: 500px) {
    font-size: 3.4rem !important;
    line-height: 3.8rem !important;
    text-align: center;
  }
}

#achievements {
  h1 {
    margin-bottom: 22rem;
    @media only screen and (max-width:1035px) {
      margin-bottom: 11rem;
    }
  }
  @media only screen and (max-width: 990px) {
    padding-left:1rem;
    padding-right: 1rem;
  }
}

#faq {
  @media only screen and (max-width: 1050px) {
    .subheading {
      margin-bottom: 0;
    }
  }
}


.horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
 
}



.horizontal > * {
  margin:4rem;
  @media only screen and (max-width: 1200px) {
    margin: 0;
  }
}
.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:8rem;
  max-width: 1600px;
}

.features {
  color: ${({ theme }) => theme.color.navy};
  margin-top:6rem;
  @media only screen and (max-width: 1050px) {
   margin-bottom:6rem;
  }
}

.steps {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 160px;
  margin-bottom: 8rem;
  @media only screen and (max-width: 1380px) {
    margin-top: 140px;
  }
  @media only screen and (max-width: 1260px) {
    margin-top: 120px;
  }
  @media only screen and (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }
}

.CookieConsent {
  font-size: 1.6rem;
  /* border-top: 1px solid white; */
  background: lightgray;
}

#rcc-confirm-button, #rcc-decline-button {
  font-size: 1.6rem;
  border-radius: 28px !important;
  height: 42px;
  min-width: 128px;
  padding: 0 26px !important;
  border: none;
  transition: 0.1s ease-in;
  margin-left: 0 !important;
  cursor: pointer;
}

#rcc-confirm-button {
  background-color: #69B968 !important;
  color: white !important;
}
#rcc-decline-button {
  background-color: #F66E72 !important;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 5px;
  background-color: #222151;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  @media only screen and ${breakpoint.device.timeline} {
    left: 31px;
  }
}
/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  @media only screen and ${breakpoint.device.timeline} {
    width: 100%;
    padding-right: 25px;
  }
}
.container::before {
    @media only screen and ${breakpoint.device.timeline} {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
  }
}
/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: #F5AD45;
  border: 4px solid #E1F1F0;
  top: 28px;
  border-radius: 50%;
  z-index: 1;
}
/* Place the container to the left */
.left {
  left: 0;
}
/* Place the container to the right */
.right {
  left: 50%;
  @media only screen and ${breakpoint.device.timeline} {
        left: 0%;
  }
}
.left::after {
    @media only screen and ${breakpoint.device.timeline} {
        left:18px;
  }
}
/* Fix the circle for containers on the right side */
.right::after {
  left: -13px;
  @media only screen and ${breakpoint.device.timeline} {
        left:18px;
  }
}
/* The actual content */
.content {
  position: relative;
  padding: 20px 0px;
  @media only screen and ${breakpoint.device.tablet} {
    left:18px;
    padding: 20px 30px;
  }
}
.transparent {
  display:none
}
`;

export default GlobalStyle;
