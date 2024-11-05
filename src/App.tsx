import { PageLayout } from "./layouts/pageLayuot/pageLayout";
import { PageForm } from "./pages/page-form/page-form";
import { PageAddOns } from "./pages/page-add-ons/page-add-ons";
import { PageFinish } from "./pages/page-finish/page-finish";
import { PagePlan } from "./pages/page-plan/page-plan";
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageForm />;
      case 2:
        return <PagePlan />;
      case 3:
        return <PageAddOns />;
      case 4:
        return <PageFinish />;
      // Add other cases if more steps are needed
      default:
        return <PageForm />;
    }
  };

  return (
    <PageLayout currentStep={currentStep}>
      {renderPage()}
      <div
        className={`flex ${
          currentStep > 1 ? "justify-between" : "justify-end"
        }`}
      >
        {currentStep > 1 && <button onClick={handlePrevStep}>Go Back</button>}

        <button
          className="bg-marine px-5 py-3 text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
          onClick={handleNextStep}
        >
          {currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </PageLayout>
  );
}

export default App;
