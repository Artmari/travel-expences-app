import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const travelCostSchema = z.object({
  employeeName: z.string().min(1, { message: "Employee name is required" }),
  client: z.string().min(1, { message: "Client is required" }),
  project: z.string().min(1, { message: "Project is required" }),
  purposeOfTravel: z
    .string()
    .min(1, { message: "Purpose of travel is required" }),
  tripStartTime: z.date(),
  tripEndTime: z.date(),
  departureAddress: z
    .string()
    .nonempty({ message: "Departure address is required" }),
  firstTimeField: z.date(),
  secondTimeField: z.date(),
  comment: z.string().optional(),
});

type TravelCostFormInputs = z.infer<typeof travelCostSchema>;

const TravelExpensesGeneral: React.FC<{ onStepChange: () => void }> = ({
  onStepChange,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Trip
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
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
                //helperText={errors.employeeName?.message}
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
                //helperText={errors.client?.message}
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
                //helperText={errors.project?.message}
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
                //helperText={errors.purposeOfTravel?.message}
              />
            )}
          />
          <Button onClick={onStepChange} variant="contained">
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TravelExpensesGeneral;
