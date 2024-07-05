import React from "react";

import { useFormContext, Controller } from "react-hook-form";
import { TextField, Typography, Button, Box, Container } from "@mui/material";

const TravelExpensesOvernightStay: React.FC<{ onStepChange: () => void }> = ({
  onStepChange,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Button onClick={onStepChange} variant="contained">
        Next
      </Button>
    </Box>
  );
};

export default TravelExpensesOvernightStay;
