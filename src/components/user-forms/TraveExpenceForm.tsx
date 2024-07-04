import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const travelCostSchema = z.object({
  employeeName: z.string().min(1, { message: "Employee name is required" }),
  client: z.string().min(1, { message: "Client is required" }),
  project: z.string().min(1, { message: "Project is required" }),
  purposeOfTravel: z.string().min(1, { message: "Purpose of travel is required" }),
});

type TravelCostFormInputs = z.infer<typeof travelCostSchema>;

const TravelCostForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<TravelCostFormInputs>({
    resolver: zodResolver(travelCostSchema),
  });

  const onSubmit = (data: TravelCostFormInputs) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Travel Cost Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                helperText={errors.employeeName?.message}
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
                helperText={errors.client?.message}
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
                helperText={errors.project?.message}
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
                helperText={errors.purposeOfTravel?.message}
              />
            )}
          />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default TravelCostForm;
