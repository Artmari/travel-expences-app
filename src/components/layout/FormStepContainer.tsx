import { Box, Container } from "@mui/material";
import React from "react";
import photo from "../../assets/image.png";
import ThoughtBubble from "./ThoughtBubble";

const FormStepContainer: React.FC<{
  children: JSX.Element;
  bubbleText: string;
}> = ({ children, bubbleText }) => {
  return (
    <Box display="flex" sx={{ width: "100%" }}>
      <Box flex={1}>{children}</Box>
      <Box flex={1}>
        <Box sx={{ position: "relative" }}>
          <ThoughtBubble text={bubbleText} />
          <Box m={4}>
            <img src={photo} alt="kathi_photo"></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormStepContainer;
