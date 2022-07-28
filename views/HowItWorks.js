import { Button, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import * as React from "react";
import HeroArtwork from "../public/static/HeroArtwork.svg";

const sectionStyles = (theme) => ({
  display: "flex",
  overflow: "hidden",
  bgcolor: theme.palette.secondary.light,
  // backgroundImage: `url(${HeroArtwork})`,
});

const containerStyles = {
  mt: 15,
  mb: 15,
  ml: 4,
  mr: 4,
  display: "flex",
  position: "relative",
  // backgroundColor: "red",
};

const itemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "blue",
  height: "100%",
};

function HowItWorks() {
  const theme = useTheme();
  // console.log("theme: ", theme);
  return (
    <Box component="section" sx={sectionStyles}>
      <Container sx={containerStyles} maxWidth="false">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={itemStyles}>
              <Image src={HeroArtwork} layout="intrinsic" alt="logo" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={itemStyles}>
              <Typography
                variant="h4"
                color={"white"}
                align="center"
                sx={{ my: 5 }}
              >
                Guarding Your Staked Assets
              </Typography>
              <Typography variant="h5" color={"white"} align="center">
                The enterprise-grade blockchain infrastructure of Asgaurd
                enables you to grow your cryptocurrency holdings securely. Boost
                your earnings by taking advantage of decentralized
                proof-of-stake consensus networks.
              </Typography>
              <Button
                color="primary"
                variant="contained"
                size="large"
                sx={{ my: 5 }}
              >
                Stake Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={itemStyles}>
              <Image src={HeroArtwork} layout="intrinsic" alt="logo" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorks;
