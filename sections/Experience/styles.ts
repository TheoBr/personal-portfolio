import styled, { css } from "styled-components";
import { focusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";
import RightArrowSVG from "../../assets/right-arrow.svg";
import DownArrowSVG from "../../assets/down-arrow.svg";
import UpArrowSVG from "../../assets/up-arrow.svg";
import { media } from "../../theme/media";

export const ExperienceSection = styled.section<{ shouldFadeIn: boolean }>`
  width: 100%;
  display: grid;
  grid-template-areas: "title" "description" "items" ".";
  grid-template-rows: 5rem 4rem auto 10rem;
  align-items: center;
  justify-items: center;
  ${media.tablet} {
    grid-template-areas:
      "title"
      "description"
      "."
      "items";
    grid-template-rows: 10rem 7rem 5rem auto;
    margin-top: 15rem;
  }
  ${media.desktop} {
    grid-template-rows: 13rem 8rem 8rem auto;
  }
  transition: transform 1s, opacity 2s;
  opacity: 0;
  transform: translateY(2rem);
  ${(props) =>
    props.shouldFadeIn &&
    css`
      transform: translateY(-2rem);
      opacity: 1;
    `};
`;

export const ExperienceTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Oxanium};
  font-size: 3rem;
  font-weight: 600;
  color: ${theme.Pink};
  ${media.tablet} {
    font-size: 6rem;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
`;

export const ExperienceDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Oxanium};
  font-size: 1.4rem;
  font-weight: 400;
  width: 27ch;
  text-align: center;
  color: ${theme.Orange};
  ${media.tablet} {
    font-size: 3rem;
    width: 29ch;
  }
  ${media.desktop} {
    font-size: 3rem;
    width: 40ch;
  }
`;

export const ExperienceItemList = styled.ul`
  grid-area: items;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 4rem;
  ${media.tablet} {
    margin: 0;
  }
`;

export const ExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25.8rem;
  position: relative;
  left: 0.75rem;
  ${media.tablet} {
    width: 47rem;
  }
  ${media.desktop} {
    width: 50rem;
  }
`;

export const AccordionButton = styled.button`
  width: 100%;
  height: 5rem;
  position: relative;
  z-index: 5;
  border-radius: 0.7rem;
  background-color: ${theme.Orange};
  display: grid;
  grid-template-areas: "text arrow";
  grid-template-columns: 70% 30%;
  grid-template-rows: 80%;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  font-family: ${theme.Oxanium};
  font-weight: 400;
  font-size: 1rem;
  color: ${theme.DarkBrown};
  border: none;
  &[aria-expanded="true"] {
    font-weight: bold;
  }
  ${focusStyles}
  ${media.tablet} {
    font-weight: 500;
    border-radius: 0.5rem;
    grid-template-columns: 73% 27%;
    height: 6.3rem;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &[aria-expanded="false"] {
      &:hover {
        box-shadow: 0 0.3rem 0.2rem black;
        transform: translateY(-0.2rem);
      }
    }
  }
  ${media.desktop} {
    height: 8rem;
    grid-template-rows: 85%;
  }
`;

export const AccordionContent = styled.ul`
  visibility: hidden;
  position: relative;
  bottom: 0.5rem;
  height: 2rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  li {
    visibility: hidden;
  }
  &[aria-hidden="false"] {
    visibility: visible;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 23rem;
    width: 100%;
    border: 0.2rem solid ${theme.Orange};
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    box-shadow: 0 0.2rem 0.2rem black;
    transition: all 0.2s ease-in-out;
    ${media.tablet} {
      height: 45rem;
      border: 0.3rem solid ${theme.Orange};
    }
    ${media.desktopL} {
      height: 51rem;
    }
    li {
      visibility: visible;
    }
  }
`;

export const AccordionButtonTextWrapper = styled.div`
  grid-area: text;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  ${media.tablet} {
    font-size: 1.4rem;
  }
  ${media.desktop} {
    font-size: 1.7rem;
  }
`;

export const AccordionButtonText = styled.span`
  padding-left: 0.75rem;
`;

export const AccordionOpenArrow = styled(DownArrowSVG)`
  width: 3rem;
  height: 1.6rem;
  grid-area: arrow;
  ${media.tablet} {
    width: 6rem;
    height: 3rem;
  }
  ${media.desktop} {
    width: 7rem;
    height: 4rem;
  }
`;

export const AccordionCloseArrow = styled(UpArrowSVG)`
  width: 3rem;
  height: 1.6rem;
  fill: ${theme.DarkBrown};
  grid-area: arrow;
  ${media.tablet} {
    height: 3rem;
    width: 6rem;
  }
  ${media.desktop} {
    height: 4rem;
    width: 7rem;
  }
`;

export const AccordionContentItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  padding-left: 1rem;
  ${media.tablet} {
    padding-left: 2rem;
  }
`;

export const AccordionRightArrow = styled(RightArrowSVG)`
  width: 1rem;
  height: 1rem;
  ${media.tablet} {
    width: 1.5rem;
    height: 1.5rem;
  }
  ${media.desktop} {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const AccordionContentText = styled.p`
  font-family: ${theme.Montserrat};
  color: ${theme.Orange};
  font-weight: 500;
  padding-left: 0.5rem;
  font-size: 0.8rem;
  align-self: center;
  max-width: 43ch;
  ${media.tablet} {
    position: relative;
    bottom: 0.2rem;
    padding-left: 1rem;
    font-size: 1.4rem;
  }
  ${media.desktop} {
    font-size: 1.5rem;
  }
`;