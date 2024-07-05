import { Box, Typography } from "@mui/material";
import React from "react";

const FromTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default FromTitle;
