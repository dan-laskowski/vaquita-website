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

.horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
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
