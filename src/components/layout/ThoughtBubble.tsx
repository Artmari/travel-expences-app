import { Box, Typography } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";

const Bubble = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "40%",
  top: "-30px",
  minWidth: "200px",
  minHeight: "50px",
  border: "2px solid black",
  backgroundColor: "white",
  borderRadius: "10px",
  "&::after": {
    content: "''",
    display: "block",
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    border: "2px solid black",
    transform: "rotate(45deg)",
    bottom: "-12px",
    left: "30%",
    borderLeft: 0,
    borderTop: 0,
  },
}));

const ThoughtBubble: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <Bubble>
      <Box display="flex" justifyContent="center" alignItems="center" p={3}>
        <Typography>{text}</Typography>
      </Box>
    </Bubble>
  );
};

export default ThoughtBubble;
