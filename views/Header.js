import { AppBar, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "/public/static/Logo.svg";

const containerStyles = {
  padding: "0 6px",
  px: 3,
};

export default function Header() {
  return (
    <AppBar
      // position="static"
      color="primary"
      sx={{ backgroundColor: "navBg", backdropFilter: "blur(2px)" }}
    >
      <Container sx={containerStyles} disableGutters maxWidth="lg">
        <Toolbar disableGutters>
          <Image src={Logo} layout="intrinsic" alt="logo" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
