import { type FC } from "react";
// components
import { StepIndicator } from "../../components/stepIndicator/stepIndicator";
// types
import { type PageLayoutProps } from "./pageLayout.interface";

export const PageLayout: FC<PageLayoutProps> = ({ children, currentStep }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full max-w-[1100px] md:bg-white bg-mongo rounded-[20px] md:shadow-lg md:p-6  mx-auto md:mt-8">
      <StepIndicator currentStep={currentStep} />
      <div className="md:bg-white flex flex-col relative bg-transparent md:static -top-[88px] md:top-0 gap-4 px-[20px] md:px-14 w-full rounded-lg ">
        {children}
      </div>
    </div>
  );
};
