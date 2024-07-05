import React from "react";

import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Typography,
  Button,
  Box,
  Container,
  Grid,
} from "@mui/material";
import TransportChipsArray from "../components/TransportChipsArray";
import FormFieldTitle from "../../layout/FormFieldTitle";

const TravelExpensesTransport: React.FC<{
  onBack: () => void;
  onNext: () => void;
}> = ({ onBack, onNext }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  console.log("errors", errors);

  const selectedTransport = watch("transportType");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormFieldTitle title="What transport method do you use?" />
      <Controller
        name="transportType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TransportChipsArray value={field.value} onChange={field.onChange} />
        )}
      />
      <Box>
        <FormFieldTitle title="Please fill out if you travel by car (optional)" />
      </Box>
      <>
        <Controller
          name="licensePlate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="License Plate"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="mileageStart"
          control={control}
          //defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Mileage at Beginning"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="mileageEnd"
          control={control}
          //defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Mileage at End"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <FormFieldTitle title=" Describe the car travel in detail" />

        <Controller
          name="description"
          control={control}
          render={({ field }) => <TextField label="Comment" {...field} />}
        />
      </>
      <Button onClick={onBack} variant="contained">
        Back
      </Button>
      <Button onClick={onNext} variant="contained">
        Next
      </Button>
    </Box>
  );
};

export default TravelExpensesTransport;
