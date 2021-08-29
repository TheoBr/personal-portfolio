import Link from "next/link";
import LinkedinSVG from "../../assets/linkedin.svg";
import GithubSVG from "../../assets/github.svg";
import PenSVG from "../../assets/pen.svg";
import TwitterSVG from "../../assets/twitter.svg";
import HammerSVG from "../../assets/hammer.svg";
import FaceSVG from "../../assets/face.svg";
import TimelineSVG from "../../assets/timeline.svg";
import MailSVG from "../../assets/mail.svg";
import {
  LogoLink,
  NarutoFace,
  NavigationWrapper,
  IconsWrapper,
  IconLink,
  MobileNavigationWrapper,
  NavLink,
  LinkText,
  SkipLink,
  IntersectingElement,
} from "./styles";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useMedia } from "../../hooks/useMedia";

export const Navigation = () => {
  const { isVisible, setIntersectingElement } = useOnScreen();
  const isTabletLayout = useMedia("min", "768");
  return (
    <>
      <IntersectingElement ref={setIntersectingElement} />
      <NavigationWrapper shouldShowShadow={!isVisible}>
        <Link href="#home" passHref>
          <SkipLink>Skip The Navigation</SkipLink>
        </Link>
        <Link href="/" passHref>
          <LogoLink>Tiger Abrodi</LogoLink>
        </Link>
        {isTabletLayout && (
          <>
            <Link href="#about" passHref>
              <NavLink>
                <FaceSVG aria-hidden="true" />
                <LinkText>About</LinkText>
              </NavLink>
            </Link>
            <Link href="#experience" passHref>
              <NavLink>
                <TimelineSVG aria-hidden="true" />
                <LinkText>Experience</LinkText>
              </NavLink>
            </Link>
            <Link href="#work" passHref>
              <NavLink>
                <HammerSVG aria-hidden="true" />
                <LinkText>Work</LinkText>
              </NavLink>
            </Link>
            <Link href="#contact" passHref>
              <NavLink>
                <MailSVG aria-hidden="true" />
                <LinkText>Contact</LinkText>
              </NavLink>
            </Link>
          </>
        )}
        <NarutoFace aria-hidden="true" />
        <IconsWrapper>
          <Link
            href="https://www.linkedin.com/in/tiger-abrodi-467695195/"
            passHref
          >
            <IconLink target="_blank" rel="noopener noreferrer">
              <LinkedinSVG aria-hidden="true" />
            </IconLink>
          </Link>
          <Link href="https://twitter.com/TAbrodi" passHref>
            <IconLink target="_blank" rel="noopener noreferrer">
              <TwitterSVG aria-hidden="true" />
            </IconLink>
          </Link>
          <Link href="https://github.com/tigerabrodi" passHref>
            <IconLink target="_blank" rel="noopener noreferrer">
              <GithubSVG aria-hidden="true" />
            </IconLink>
          </Link>
          <Link href="https://tigerabrodi.hashnode.dev/" passHref>
            <IconLink target="_blank" rel="noopener noreferrer">
              <PenSVG aria-hidden="true" />
            </IconLink>
          </Link>
        </IconsWrapper>
        <MobileNavigationWrapper>
          <Link href="#about" passHref>
            <NavLink>
              <FaceSVG aria-hidden="true" />
              <LinkText>About</LinkText>
            </NavLink>
          </Link>
          <Link href="#experience" passHref>
            <NavLink>
              <TimelineSVG aria-hidden="true" />
              <LinkText>Experience</LinkText>
            </NavLink>
          </Link>
          <Link href="#work" passHref>
            <NavLink>
              <HammerSVG aria-hidden="true" />
              <LinkText>Work</LinkText>
            </NavLink>
          </Link>
          <Link href="#contact" passHref>
            <NavLink>
              <MailSVG aria-hidden="true" />
              <LinkText>Contact</LinkText>
            </NavLink>
          </Link>
        </MobileNavigationWrapper>
      </NavigationWrapper>
    </>
  );
};
