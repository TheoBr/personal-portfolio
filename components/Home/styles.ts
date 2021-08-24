import styled from "styled-components";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const HomeSection = styled.section`
  height: 43rem;
  width: 100vw;
  background-color: ${theme.DarkBrown};
  position: relative;
`;

export const HomeWrapper = styled.div`
  height: 30rem;
  width: 26rem;
  top: 43%;
  left: 53%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-areas:
    "title"
    "subtitle"
    "description"
    "."
    "link";
  grid-template-rows: 20% 10% 40% 5% 20%;
  align-items: flex-end;
  justify-items: flex-start;
  justify-content: space-between;
`;

export const HomeTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Montserrat};
  font-weight: bold;
  font-size: 4rem;
  color: ${theme.Red};
`;

export const HomeSubtitle = styled.h2`
  grid-area: subtitle;
  font-size: 2rem;
  font-family: ${theme.Montserrat};
  font-weight: 600;
  color: ${theme.Pink};
`;

export const HomeDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Montserrat};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme.Orange};
`;

export const HomeLink = styled.a`
  grid-area: link;
  color: ${theme.Orange};
  text-decoration: none;
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;
  border: 0.1rem solid var(--orange);
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.2rem;
  ${focusStyles}
`;

export const DescriptionLink = styled.a`
  color: ${theme.Pink};
  text-decoration: underline;
  ${secondFocusStyles}
`;