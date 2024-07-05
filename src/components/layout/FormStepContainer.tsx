import { Box, Container } from "@mui/material";
import React from "react";
import ThoughtBubbleWrapper from "./ThoughtBubbleWrapper";

const FormStepContainer: React.FC<{
  children: JSX.Element;
  bubbleText: string;
  prompt: string;
}> = ({ children, bubbleText, prompt }) => {
  return (
    <Box display="flex" sx={{ width: "100%" }}>
      <Box flex={1}>{children}</Box>
      <Box flex={1}>
        <Box sx={{ position: "relative" }}>
          <ThoughtBubbleWrapper
            text={bubbleText}
            prompt={prompt}
          ></ThoughtBubbleWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default FormStepContainer;
