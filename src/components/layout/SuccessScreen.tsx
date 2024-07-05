// src/Footer.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ThoughtBubbleWrapper from "./ThoughtBubbleWrapper";
import ExportPdfButton from "../PdfRenderer";

const SuccessScreen: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography variant="h4"> Success!!!!</Typography>
      </Box>
      <Box position="relative" mt={15}>
        <ThoughtBubbleWrapper
          text="Good Job!"
          prompt="congratulate employee with accomlishing task"
        ></ThoughtBubbleWrapper>
      </Box>
      <ExportPdfButton formData={formData} />
    </Box>
  );
};

export default SuccessScreen;
