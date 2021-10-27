import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "../shared/NavBar";
import HeroSection from "../shared/HeroSection";
import HeaderText from "../shared/HeaderText";
import BenefitCol from "../shared/BenefitCol";
import FaqSection from "../shared/FaqSection";
import TeamCard from "../shared/TeamCard";

const Index = () => {
  return (
    <div className="index-root">
      <HeroSection />

      <div className="header-div">
        <HeaderText
          slogan="Mint an Artifact"
          text="5th Nov, 2021"
          color="#FF7676"
          align="center"
        />
      </div>

      <div className="mint-dapp"></div>

      <div className="benefit-div">
        <HeaderText
          slogan="Get it All!"
          text="Digital | Physical NFT"
          color="white"
          align="center"
        />
        <BenefitCol />
      </div>

      <div className="faq-team-div">
        <Container maxWidth="lg">
          <Grid>
            <Grid item xl={7} sm={12}>
              <div className="team">
                <TeamCard
                  img="/assets/images/teams/ape.png"
                  name="@jpskonee"
                  color1="blue"
                  color2="aqua"
                />
              </div>
            </Grid>
            <Grid item xl={5} sm={12}>
              <div className="faq">
                <FaqSection />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Index;
