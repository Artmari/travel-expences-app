import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ThoughtBubble from "./ThoughtBubble";
import { generateText } from "../OpenAIIntegration";
import photo from "../../assets/image.png";

const ThoughtBubbleWrapper: React.FC<{ text: string; prompt: string }> = ({
  text,
  prompt,
}) => {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getGneratedText = async (prompt: string) => {
    setLoading(true);
    try {
      const generatedText = await generateText(prompt);
      setResponse(generatedText);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box position="relative">
      <ThoughtBubble
        text={response ? response : text}
        isLoading={loading}
      ></ThoughtBubble>
      <Box m={4}>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            getGneratedText(prompt);
          }}
        >
          <img src={photo} alt="kathi_photo"></img>
        </button>
      </Box>
    </Box>
  );
};

export default ThoughtBubbleWrapper;
