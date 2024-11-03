import { type FC } from "react";
import { type PageLayoutProps } from "./pageLayout.interface";
import { StepIndicator } from "../../components/stepIndicator/stepIndicator";
import { Input } from "../../components/input/input";

export const PageLayout: FC<PageLayoutProps> = ({ children, currentStep }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full max-w-[1100px] md:bg-white bg-mongo rounded-[20px] md:shadow-lg md:p-6  mx-auto md:mt-8">
      <StepIndicator currentStep={currentStep} />
      <div className="w-full px-6 relative -top-[80px] md:top-0 ">
        {/* <div className="bg-red-500 h-[500px] w-full rounded-lg">{children}</div> */}
        <form
          className="bg-white h-[400px] flex flex-col justify-between z- p-8 w-full rounded-lg shadow-xl md:shadow-none"
          action="#"
        >
          <h2 className="text-marine text-3xl font-semibold">Personal info</h2>
          <p className="text-cool-gray leading-5">
            Please provide your name, email address, and phone number
          </p>
          <Input
            placeholder="e.g Stephen King"
            htmlFor="Name"
            type="text"
            label="Name"
          />
          <Input
            placeholder="e.g stephenking@lorem.com"
            htmlFor="Email Address"
            type="text"
            label="Email Address"
          />
          <Input
            placeholder="e.g +1 234 567 890"
            htmlFor="Phone number"
            type="text"
            label="Phone number"
          />
        </form>
        <div className="md:absolute md:bottom-0 flex justify-between items-center p-10 md:pr-20 w-full h-6 bg-white">
          <button>Go back</button>
          <button className="bg-marine px-5 py-3 text-white rounded-md hover:bg-my-blue duration-400 transition-colors">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
