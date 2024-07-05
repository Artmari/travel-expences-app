import React from "react";

import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Typography,
  Button,
  Box,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const TravelExpensesOvernightStay: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormGroup>
        <Controller
          name="accommodation"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value.includes("Hotel")}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      field.onChange(
                        checked
                          ? [...field.value, "Hotel"]
                          : field.value.filter(
                              (value: string) => value !== "Hotel"
                            )
                      );
                    }}
                  />
                }
                label="Hotel"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value.includes("Private")}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      field.onChange(
                        checked
                          ? [...field.value, "Private"]
                          : field.value.filter(
                              (value: string) => value !== "Private"
                            )
                      );
                    }}
                  />
                }
                label="Private"
              />
            </>
          )}
        />
      </FormGroup>
      <Button onClick={onBack} variant="contained">
        Back
      </Button>
    </Box>
  );
};

export default TravelExpensesOvernightStay;
