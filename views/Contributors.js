import { Box, Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Typography from "../components/Typography";

const sectionStyle = {
  mt: 13,
  paddingTop: "7px",
  color: "primary.light",
  "@media (max-width:900px)": {
    textAlign: "center",
  },
};

export default function Contributors() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography
              component="h2"
              variant="h2"
              color="inherit"
              sx={{
                paddingBottom: "33px",
                backgroundImage: "url(/static/line.svg)",
                backgroundPosition: "bottom right",
                backgroundRepeat: "no-repeat",
                width: "min(510px,100%)",
                "@media (max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              Contributors
            </Typography>
            <Box sx={{ mt: 8 }}>
              <Typography component="p" variant="body1">
                This open collaboration was initiated by the Interchain
                Foundation and is facilitated by ixo (The Internet of Impact)
                together with AssetMantle.
                <br />
                <br />
                <br />
                <Link underline="hover" sx={{ cursor: "pointer" }}>
                  Interchain Foundation
                </Link>{" "}
                grants along with the collaborative development of developers
                from{" "}
                <Link underline="hover" sx={{ cursor: "pointer" }}>
                  World Wide Web Consortium (W3C)
                </Link>{" "}
                and other development teams worked to further expand the
                capabilities of Cosmos SDK
                <br />
                <br />
                <br />
                <Link underline="none" sx={{ cursor: "pointer" }}>
                  LEARN MORE
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <img
              src="/static/InterNFTGraphic.png"
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
