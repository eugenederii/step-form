import { type FC } from "react";
import { type PageLayoutProps } from "./pageLayout.interface";
import { StepIndicator } from "../../components/stepIndicator/stepIndicator";

export const PageLayout: FC<PageLayoutProps> = ({ children, currentStep }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full max-w-[1100px] md:bg-white bg-mongo rounded-[20px] md:shadow-lg md:p-6  mx-auto md:mt-8">
      <StepIndicator currentStep={currentStep} />
      <div className="bg-white h-full max-h-[700px] flex flex-col gap-4 p-6 md:px-[40px] lg:px-[70px] w-full rounded-lg shadow-xl md:shadow-none ">
        {children}
      </div>
    </div>
  );
};
