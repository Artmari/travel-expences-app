import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TravelExpensesGeneral from "./steps/TravelExpensesGeneral";
import TravelExpensesTrip from "./steps/TravelExpensesTrip";
import { Box, Button, Container } from "@mui/material";
import FormStepContainer from "../layout/FormStepContainer";
import FromTitle from "../layout/FormTitle";
import TravelExpensesTransport from "./steps/TravelExpensesTransportation";
import TravelExpensesOvernightStay from "./steps/TravelExpensesOvernightStay";

const travelCostSchema = z
  .object({
    //general
    employeeName: z.string().min(1, { message: "Employee name is required" }),
    client: z.string().min(1, { message: "Client is required" }),
    project: z.string().min(1, { message: "Project is required" }),
    purposeOfTravel: z
      .string()
      .min(1, { message: "Purpose of travel is required" }),
    //Trip
    tripStartTime: z.date(),
    tripEndTime: z.date(),
    departureAddress: z
      .string()
      .nonempty({ message: "Departure address is required" }),
    firstTimeField: z.date(),
    secondTimeField: z.date(),
    comment: z.string().optional(),
    //transport
   transportType: z.string().nonempty("Transport type is required"),
    licensePlate: z.string().optional().nullable(),
    mileageStart: z.number().optional().nullable(),
    mileageEnd: z.number().optional().nullable(),
  })
  .refine(
    (data) => {
      if (data.transportType === "Car") {
        return (
          data.licensePlate &&
          data.mileageStart !== null &&
          data.mileageEnd !== null
        );
      }
      return true;
    },
    {
      message: "License plate and mileage fields are required for Car",
      path: ["licensePlate"],
    }
  );

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
      <Container maxWidth="md">
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {step === 1 && (
            <>
              <FromTitle title="General" />
              <FormStepContainer bubbleText={"How can't I help you?"}>
                <TravelExpensesGeneral onNext={handleNext} />
              </FormStepContainer>
            </>
          )}
          {step === 2 && (
            <>
              <FromTitle title="Trip" />
              <FormStepContainer
                bubbleText={
                  "Oh, wow the time management is not your thing, huh?"
                }
              >
                <TravelExpensesTrip onNext={handleNext} onBack={handleBack} />
              </FormStepContainer>
            </>
          )}
          {step === 3 && (
            <>
              <FromTitle title="Transportation" />
              <FormStepContainer bubbleText={"Lol, save the world! Choo choo"}>
                <TravelExpensesTransport onBack={handleBack} />
              </FormStepContainer>
            </>
          )}
          {/* {step === 4 && (
            <>
              <FromTitle title="Overnight Stay" />
              <FormStepContainer
                bubbleText={"Next time you can book a better hotel, I promise"}
              >
                <TravelExpensesOvernightStay onStepChange={handleBack} />
              </FormStepContainer>
            </>
          )} */}

          <Button
            type="submit"
            variant="contained"
            style={{ visibility: step === 3 ? "visible" : "hidden" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default MultiStepForm;
