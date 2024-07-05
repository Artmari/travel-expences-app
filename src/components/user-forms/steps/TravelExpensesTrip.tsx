import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Typography, Button, Box, Container } from "@mui/material";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const TravelExpensesTrip: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Controller
          name="tripStartTime"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Trip Start Time"
              value={field.value}
              onChange={field.onChange}
              slots={{
                textField: (params: any) => (
                  <TextField
                    {...params}
                    error={!!errors.tripStartTime}
                    helperText={errors.tripStartTime?.message}
                  />
                ),
              }}
            />
          )}
        />

        <Controller
          name="tripEndTime"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Trip End Time"
              value={field.value}
              onChange={field.onChange}
              slots={{
                textField: (params: any) => (
                  <TextField
                    {...params}
                    error={!!errors.tripEndTime}
                    helperText={errors.tripEndTime?.message}
                  />
                ),
              }}
            />
          )}
        />

        <Controller
          name="departureAddress"
          control={control}
          render={({ field }) => (
            <TextField
              label="Departure Address"
              error={!!errors.departureAddress}
              {...field}
            />
          )}
        />

        <Controller
          name="firstTimeField"
          control={control}
          render={({ field }) => (
            <TimePicker
              label="First Time Field"
              value={field.value}
              onChange={field.onChange}
              slots={{
                textField: (params: any) => (
                  <TextField
                    {...params}
                    error={!!errors.firstTimeField}
                    helperText={errors.firstTimeField?.message}
                  />
                ),
              }}
            />
          )}
        />

        <Controller
          name="secondTimeField"
          control={control}
          render={({ field }) => (
            <TimePicker
              label="Second Time Field"
              value={field.value}
              onChange={field.onChange}
              slots={{
                textField: (params: any) => (
                  <TextField
                    {...params}
                    error={!!errors.secondTimeField}
                    helperText={errors.secondTimeField?.message}
                  />
                ),
              }}
            />
          )}
        />

        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <TextField label="Comment" multiline rows={4} {...field} />
          )}
        />
        <Button onClick={onBack} variant="contained">
          Back
        </Button>
        <Button onClick={onNext} variant="contained">
          Next
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default TravelExpensesTrip;