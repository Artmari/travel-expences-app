import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TravelExpensesGeneral from "./TraveExpensesGeneral";
import TravelExpensesTrip from "./TravelExpensesTrip";
import { Box, Button, Container } from "@mui/material";

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

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(travelCostSchema),
    mode: "all",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Container maxWidth="sm">
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {step === 1 && <TravelExpensesGeneral onStepChange={handleNext} />}
          {step === 2 && <TravelExpensesTrip onStepChange={handleBack} />}
          <Button
            type="submit"
            variant="contained"
            style={{ visibility: step === 2 ? "visible" : "hidden" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default MultiStepForm;
