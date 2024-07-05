import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const TravelExpensesGeneral: React.FC<{
  onNext: () => void;
}> = ({ onNext }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Controller
          name="employeeName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Employee Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.employeeName}
            />
          )}
        />
        <Controller
          name="client"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Client"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.client}
            />
          )}
        />
        <Controller
          name="project"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Project"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.project}
            />
          )}
        />
        <Controller
          name="purposeOfTravel"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Purpose of Travel"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.purposeOfTravel}
            />
          )}
        />

        <Button onClick={onNext} variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default TravelExpensesGeneral;
