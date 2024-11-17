import { useState } from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// pages
import { PageLayout } from "./layouts/pageLayuot/pageLayout";
import { PageForm } from "./pages/page-form/page-form";
import { PageAddOns } from "./pages/page-add-ons/page-add-ons";
import { PageFinish } from "./pages/page-finish/page-finish";
import { PagePlan } from "./pages/page-plan/page-plan";
import { PageThankYou } from "./pages/page-thank-you/page-thank-you";
// types
import { type FormTypes } from "./types/form-types";
import { type PickOns } from "./types/form-types";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  pickOns: [] as PickOns,
  plan: { value: "", price: "", billingType: "", isMonthly: true },
};

const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      phoneRegex,
      `Phone number should start with + and contain at least 10 digits`
    ),
  pickOns: z
    .array(
      z.object({
        value: z.string(),
        price: z.string(),
      })
    )
    .min(1, "Please select at least one add-on"),
  plan: z.object({
    value: z.string().min(1, "Select a plan"),
    price: z.string(),
    isMonthly: z.boolean().optional(),
  }),
});

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  // form
  const methods = useForm<FormTypes>({
    defaultValues: defaultValues,
    resolver: zodResolver(validationSchema),
  });
  // methods
  const {
    watch,
    setValue,
    formState: { isSubmitSuccessful },
  } = methods;

  const isMonthly = watch("plan.isMonthly");

  const toggleBilling = () => {
    const currentBilling = watch("plan.isMonthly");
    setValue("plan.isMonthly", !currentBilling);
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageForm onContinue={handleNextStep} />;
      case 2:
        return (
          <PagePlan
            toggleBilling={toggleBilling}
            isMonthly={isMonthly}
            onContinue={handleNextStep}
            onBack={handlePrevStep}
          />
        );
      case 3:
        return (
          <PageAddOns
            isMonthly={isMonthly}
            onContinue={handleNextStep}
            onBack={handlePrevStep}
          />
        );
      case 4:
        if (isSubmitSuccessful) {
          return <PageThankYou />;
        }
        return <PageFinish onBack={handlePrevStep} />;

      default:
        return <PageForm onContinue={handleNextStep} />;
    }
  };

  return (
    <main>
      <PageLayout currentStep={currentStep}>
        <FormProvider {...methods}>{renderPage()}</FormProvider>
      </PageLayout>
    </main>
  );
}

export default App;
