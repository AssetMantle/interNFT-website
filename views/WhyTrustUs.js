import { Grid, Paper, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Carousel from "react-material-ui-carousel";

const sectionStyles = (theme) => ({
  display: "flex",
  overflow: "hidden",
  // bgcolor: theme.palette.secondary.light,
  bgcolor: "red",
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
  width: "100%",
};

const paperStyles = {
  width: "100%",
};

function WhyTrustUs() {
  const theme = useTheme();
  // console.log("theme: ", theme);

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Box component="section" sx={sectionStyles(theme)}>
      <Container sx={containerStyles}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Box sx={itemStyles}>
              <Carousel>
                {items.map((item, i) => (
                  <Paper key={i} sx={paperStyles}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </Paper>
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyTrustUs;
