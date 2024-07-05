import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Typography, Button, Box, Container } from "@mui/material";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import FormFieldTitle from "../../layout/FormFieldTitle";

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
        <FormFieldTitle title="When did your trip started?" />
        <Controller
          name="tripStartDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Starting Date"
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
          name="tripStartTime"
          control={control}
          render={({ field }) => (
            <TimePicker
              label="Starting Time"
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

        <FormFieldTitle title="International trip" />

        <Box display="flex" gap={2}>
          <Controller
            name="borderCrossingDestination"
            control={control}
            render={({ field }) => (
              <TimePicker
                label="Enter time"
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
            name="borderCrossingHome"
            control={control}
            render={({ field }) => (
              <TimePicker
                label="Enter time"
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
        </Box>

        <FormFieldTitle title="When did your trip ended?" />

        <Controller
          name="tripEndDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="End Date"
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
          name="tripEndTime"
          control={control}
          render={({ field }) => (
            <TimePicker
              label="Arrival Time"
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
          name="arrivalAddress"
          control={control}
          render={({ field }) => (
            <TextField
              label="Arrival Address"
              error={!!errors.departureAddress}
              {...field}
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
