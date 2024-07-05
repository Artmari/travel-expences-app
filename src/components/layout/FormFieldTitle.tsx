// src/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const FormFieldTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box m={2}>
      <Typography fontWeight={"bold"}>{title}</Typography>
    </Box>
  );
};

export default FormFieldTitle;
