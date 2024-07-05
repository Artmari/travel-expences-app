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

const TravelExpensesTransport: React.FC<{
  onBack: () => void;
}> = ({ onBack }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  console.log("errors", errors);

  const selectedTransport = watch("transportType");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box marginY={3}>
        <Typography>What transport method do you use?</Typography>
      </Box>
      <Controller
        name="transportType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TransportChipsArray value={field.value} onChange={field.onChange} />
        )}
      />
      {selectedTransport === "Car" && (
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
          <Typography>Describe the car travel in detail</Typography>

          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextField label="Comment" {...field} />}
          />
        </>
      )}
      {/* <Button onClick={onNext} variant="contained">
        Next
      </Button> */}
      <Button onClick={onBack} variant="contained">
        Back
      </Button>
    </Box>
  );
};

export default TravelExpensesTransport;
