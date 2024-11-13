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
import { FormTypes } from "./types/form-types";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  pickOns: [],
  plan: "",
};

const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number should be at least 10 digits"),
  pickOns: z.array(z.string()).min(1, "Please select at least one add-on"),
  plan: z.string().min(1, "Select plan"),
});

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<FormTypes>({
    defaultValues: defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageForm onContinue={handleNextStep} />;
      case 2:
        return <PagePlan onContinue={handleNextStep} onBack={handlePrevStep} />;
      case 3:
        return (
          <PageAddOns onContinue={handleNextStep} onBack={handlePrevStep} />
        );
      case 4:
        return (
          <PageFinish onBack={handlePrevStep} onContinue={handleNextStep} />
        );
      case 5:
        return <PageThankYou />;

      default:
        return <PageForm onContinue={handleNextStep} />;
    }
  };

  return (
    <PageLayout currentStep={currentStep}>
      <FormProvider {...methods}>{renderPage()}</FormProvider>
    </PageLayout>
  );
}

export default App;
