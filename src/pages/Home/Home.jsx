import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../styles/GlobalStyle";
import {
  HomeWrapper,
  HomePattern,
  HomeIntro,
  HomeIntroIllustration,
  HomeIntroContent,
  IntroSubHeading,
  SubHeading,
  SubHeadingLabel,
  IntroHeading,
  IntroDescription,
  DemoButton,
  PreviewButton,
  IntroButtons,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      {/* Top Right Pattern : hsl(207, 33%, 95%) */}
      <HomePattern />
      <Container>
        <HomeIntro>
          <HomeIntroIllustration
            alt="illustration devices"
            src={require("../../images/illustration-devices.svg").default}
          />

          <HomeIntroContent>
            <IntroSubHeading>
              <SubHeading>
                <SubHeadingLabel>new</SubHeadingLabel>
                Monograph Dashboard
              </SubHeading>
            </IntroSubHeading>
            <IntroHeading>Powerful insights into your team</IntroHeading>
            <IntroDescription>
              Project planning and time tracking for agile teams
            </IntroDescription>
            <IntroButtons>
              <DemoButton primary to="/demo">
                Schedule a demo
              </DemoButton>
              <PreviewButton to="/preview">to see a live preview</PreviewButton>
            </IntroButtons>
          </HomeIntroContent>
        </HomeIntro>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
