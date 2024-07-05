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
import { prompts, comments } from "../../data/prompts";
import SuccessScreen from "../layout/SuccessScreen";

const travelCostSchema = z.object({
  //general
  employeeName: z.string().min(1, { message: "Employee name is required" }),
  client: z.string().min(1, { message: "Client is required" }),
  project: z.string().min(1, { message: "Project is required" }),
  purposeOfTravel: z
    .string()
    .min(1, { message: "Purpose of travel is required" }),
  //Trip
  tripStartDate: z.date(),
  tripStartTime: z.date().optional(),

  departureAddress: z
    .string()
    .nonempty({ message: "Departure address is required" }),

  borderCrossingDestination: z.date().optional(),
  borderCrossingHome: z.date().optional(),

  tripEndDate: z.date(),
  tripEndTime: z.date().optional(),

  arrivalAddress: z
    .string()
    .nonempty({ message: "Departure address is required" }),

  comment: z.string().optional(),
  //transport
  transportType: z.string().nonempty("Transport type is required"),
  licensePlate: z.string().optional().nullable(),
  mileageStart: z.number().optional().nullable(),
  mileageEnd: z.number().optional().nullable(),
  accommodation: z.array(z.enum(["Hotel", "Private"])),
});

type TravelCostFormInputs = z.infer<typeof travelCostSchema>;

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(travelCostSchema),
    mode: "all",
  });

  const {
    formState: { isSubmitted },
  } = methods;

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(methods.getValues());

  return isSubmitted ? (
    <SuccessScreen formData={methods.getValues()} />
  ) : (
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
              <FormStepContainer
                bubbleText={"How can't I help you?"}
                prompt={prompts.generalDetailsPrompt}
              >
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
                prompt={prompts.tripDatesPrompt}
              >
                <TravelExpensesTrip onNext={handleNext} onBack={handleBack} />
              </FormStepContainer>
            </>
          )}
          {step === 3 && (
            <>
              <FromTitle title="Transportation" />
              <FormStepContainer
                bubbleText={"Lol, save the world! Choo choo"}
                prompt={prompts.travelDetailsPrompt}
              >
                <TravelExpensesTransport
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </FormStepContainer>
            </>
          )}
          {step === 4 && (
            <>
              <FromTitle title="Overnight Stay" />
              <FormStepContainer
                bubbleText={"Next time you can book a better hotel, I promise"}
                prompt={prompts.stayDetailsPrompt}
              >
                <TravelExpensesOvernightStay onBack={handleBack} />
              </FormStepContainer>
            </>
          )}

          <Button
            type="submit"
            variant="contained"
            style={{ visibility: step === 4 ? "visible" : "hidden" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default MultiStepForm;
