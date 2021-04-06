import styled from "styled-components";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

export const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
`;

export const HomePattern = styled(motion.div)`
  position: absolute;
  width: 50%;
  height: 75vh;
  background: ${({ theme }) => theme.lightGrayishBlue};
  top: 0;
  right: 0;
  z-index: -44;
  border-radius: 0 0 0 5rem;
`;

export const HomeIntro = styled.section`
  padding: 7rem 0 0 0;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  position: relative;
  height: 100vh;
`;

export const HomeIntroIllustration = styled.img`
  width: 160%;
  margin-right: -65%;

  @media screen and (min-width: 999px) {
    width: 90%;
    margin-right: -35%;
    position: absolute;
  }
`;

export const HomeIntroContent = styled.div`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 999px) {
    width: 50%;
    margin-right: auto;
  }
`;

export const IntroSubHeading = styled.div`
  margin-bottom: 0.7rem;
`;

export const SubHeading = styled.h4`
  font-family: ${({ theme }) => theme.headingNavigationFont};
  color: ${({ theme }) => theme.GrayishBlue};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

export const SubHeadingLabel = styled.span`
  background: ${({ theme }) => theme.veryDarkBlue};
  letter-spacing: 1px;
  color: white;
  padding: 2px 10px;
  border-radius: 4rem;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
`;

export const IntroHeading = styled.h1`
  color: ${({ theme }) => theme.veryDarkBlue};
  font-family: ${({ theme }) => theme.headingNavigationFont};
  text-transform: uppercase;
  font-size: 3rem;
`;

export const IntroDescription = styled.p`
  color: ${({ theme }) => theme.darkGrayishBlue};
  margin: 1rem 0;
  font-size: 1.3rem;
  line-height: 1.5;
`;

export const IntroButtons = styled.div`
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const DemoButton = styled(Button)``;

export const PreviewButton = styled(Button)`
  position: relative;
  left: 2rem;
`;
