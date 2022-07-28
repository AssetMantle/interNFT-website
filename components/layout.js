import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Logo from "../public/static/Logo.svg";
import AppFooter from "../views/AppFooter";

export default function Layout({ children }) {
  const containerStyles = {
    // mx: 0,
    px: 0,
    // mb: 10,
    // ml: 4,
    // mr: 4,
    // display: "flex",
    // position: "relative",
    backgroundColor: "red",
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container sx={containerStyles} disableGutters maxWidth="lg">
          <Toolbar disableGutters>
            <Image src={Logo} layout="intrinsic" alt="logo" />
          </Toolbar>
        </Container>
      </AppBar>
      <main>{children}</main>
      <AppFooter />
    </>
  );
}
