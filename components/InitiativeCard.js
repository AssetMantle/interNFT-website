import { Box } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import Typography from "./Typography";

const ContainerStyle = {
  width: "min(248px,100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  heigh: "100%",
  textAlign: "center",
  mx: "auto",
  gap: "42px",
  "&:first-child": {
    mx: 0,
  },
  "&:last-child": {
    mx: 0,
  },
  "@media (max-width:900px)": {
    mx: 0,
  },
};

const textStyle = {
  color: "warning.main",
  textTransform: "uppercase",
};

export default function InitiativeCard({ image, text, iWidth }) {
  return (
    <Box sx={ContainerStyle}>
      <Box sx={{ display: "flex", flex: "1" }}>
        <img
          src={`/static/${image}.svg`}
          alt={image}
          style={{
            width: `min(${iWidth}, 100%)`,
            height: "auto",
            margin: "auto",
          }}
        />
      </Box>
      <Typography
        component="p"
        variant="subtitle1"
        color="inherit"
        sx={textStyle}
      >
        {text}
      </Typography>
    </Box>
  );
}
