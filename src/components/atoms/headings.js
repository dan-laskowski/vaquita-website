import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.black};
  line-height: ${({ theme }) => theme.font.line.xxl};
  font-size: ${({ theme }) => theme.font.size.xxl};
  text-transform: uppercase;
  max-width: 760px;
  color: ${({ light, theme }) =>
    !light ? theme.color.offWhite : theme.color.navy};
  span {
    font-family: ${({ theme }) => theme.font.family.primary};
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjIuODg0IiBoZWlnaHQ9IjkwLjA1OSIgdmlld0JveD0iMCAwIDEyMi44ODQgOTAuMDU5Ij4NCiAgPGcgaWQ9IndhdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAyIDAuMDA0KSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMTEyIiBkYXRhLW5hbWU9IlBhdGggMTEyIiBkPSJNMTE4LjY0LDcwLjg3YTIuNTU4LDIuNTU4LDAsMSwxLDMuMzcsMy44NWMtMTUuNTcsMTMuNjItMjMuNDcsOC40NS0zMS41MywzLjE4QzYzLjExLDYwLDYxLjEzLDEwNS4xNiwyOS42LDg0LjU0Yy02LjQyLTQuMi0xMi43Mi04LjMyLTI1LjM2LDIuNzRBMi41NTgsMi41NTgsMCwxLDEsLjg3LDgzLjQzYzE1LjU3LTEzLjYyLDIzLjQ3LTguNDUsMzEuNTMtMy4xOCwyNy4zNywxNy45LDI5LjM1LTI3LjI2LDYwLjg3LTYuNjQsNi40Myw0LjIsMTIuNzMsOC4zMiwyNS4zNy0yLjc0Wk00LjI0LDE5LjE4QTIuNTU4LDIuNTU4LDAsMSwxLC44NywxNS4zM0MxNi40NCwxLjcxLDI0LjM0LDYuODgsMzIuNCwxMi4xNWMyNy4zNywxNy45LDI5LjM1LTI3LjI2LDYwLjg3LTYuNjQsNi40Miw0LjIsMTIuNzIsOC4zMiwyNS4zNi0yLjc0QTIuNTU4LDIuNTU4LDAsMCwxLDEyMiw2LjYyQzEwNi40MywyMC4yNCw5OC41MywxNS4wNyw5MC40Nyw5LjgsNjMuMTEtOC4xLDYxLjEzLDM3LjA3LDI5LjYsMTYuNDRjLTYuNDItNC4yLTEyLjcyLTguMzItMjUuMzYsMi43NFptMCwyMi43QTIuNTU4LDIuNTU4LDAsMCwxLC44NywzOC4wM2MxNS41Ny0xMy42MiwyMy40Ny04LjQ1LDMxLjUzLTMuMTgsMjcuMzcsMTcuOSwyOS4zNS0yNy4yNiw2MC44Ny02LjY0LDYuNDIsNC4yLDEyLjcyLDguMzIsMjUuMzYtMi43NEEyLjU1OCwyLjU1OCwwLDAsMSwxMjIsMjkuMzJjLTE1LjU3LDEzLjYyLTIzLjQ3LDguNDUtMzEuNTMsMy4xOEM2My4xMSwxNC42LDYxLjEzLDU5Ljc3LDI5LjYsMzkuMTRjLTYuNDItNC4yLTEyLjcyLTguMzItMjUuMzYsMi43NFptMCwyMi43QTIuNTU4LDIuNTU4LDAsMSwxLC44Nyw2MC43M2MxNS41Ny0xMy42MiwyMy40Ny04LjQ1LDMxLjUzLTMuMTgsMjcuMzcsMTcuOSwyOS4zNS0yNy4yNiw2MC44Ny02LjY0LDYuNDIsNC4yLDEyLjcyLDguMzIsMjUuMzYtMi43NEEyLjU1OCwyLjU1OCwwLDAsMSwxMjIsNTIuMDJjLTE1LjU3LDEzLjYyLTIzLjQ3LDguNDUtMzEuNTMsMy4xOEM2My4xMSwzNy4zLDYxLjEzLDgyLjQ3LDI5LjYsNjEuODRjLTYuNDItNC4yLTEyLjcyLTguMzItMjUuMzYsMi43NFoiIGZpbGw9IiMzMGE5ZDkiLz4NCiAgPC9nPg0KPC9zdmc+DQo=");
    background-position: 0 66%;
    background-size: auto 34px;
    background-repeat: repeat-x;
    text-decoration: none;
    color: ${({ theme }) => theme.color.orange};
  }
`;

const StyledSubheading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: ${({ theme }) => theme.font.size.m};
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ light, theme }) =>
    light ? theme.color.offWhite : theme.color.navy};
`;

export const Heading = ({ children, ...props }) => (
  <StyledHeading className="heading" {...props}>
    {children}
  </StyledHeading>
);

export const Subheading = ({ children, ...props }) => (
  <StyledSubheading className="subheading" {...props}>
    {children}
  </StyledSubheading>
);
