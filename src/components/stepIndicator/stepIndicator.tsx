import bg from "../../assets/images/bg-sidebar-desktop.svg";
// type
import { StepIndicatorProps } from "./stepIndicator.interface";
// hooks
import { useDeviceType } from "../../hooks/use-device-type";

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
}) => {
  const deviceType = useDeviceType();
  // steps
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  return (
    <div className="relative w-full h-[25vh] md:h-[600px] md:max-w-[320px] ">
      <img
        className="absolute w-full h-full object-cover object-[0%_87%] z-0 md:rounded-xl"
        src={bg}
        alt="bg"
      />

      <div className="flex md:flex-col justify-center gap-1 md:gap-6 text-center top-3 left-[-14px] p-6 relative z-10">
        {steps.map((step, index) => (
          <div className="flex pl-5 gap-7" key={index}>
            <div
              className={`${
                currentStep === index + 1
                  ? "bg-light-blue border-light-blue text-marine"
                  : "bg-transparent text-white"
              } w-[40px] font-medium mt-5 text-xl h-[40px] z-40 flex items-center justify-center border border-solid rounded-full`}
            >
              {index + 1}
            </div>

            {deviceType !== "mobile" && (
              <div className="flex flex-col items-start mt-4 gap-1">
                <span className="text-pastel-blue font-medium text">
                  Step {index + 1}
                </span>
                <p className="text-xl text-white font-semibold ">{step}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
