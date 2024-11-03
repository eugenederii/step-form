import bg from "../../assets/images/bg-sidebar-desktop.svg";
import { useDeviceType } from "../../hooks/use-device-type";
import { StepIndicatorProps } from "./stepIndicator.interface";

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
}) => {
  const deviceType = useDeviceType();
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  return (
    <div className="relative w-full h-[25vh] md:h-[600px] md:max-w-[320px] ">
      <img
        className="absolute w-full h-full object-cover object-bottom z-0 md:rounded-xl"
        src={bg}
        alt="bg"
      />

      <div className="flex md:flex-col justify-center gap-1 md:gap-6 text-center top-0 left-0 p-6 relative z-10">
        {steps.map((step, index) => (
          <div className="flex pl-5 gap-7" key={index}>
            <div className="w-[40px] mt-5 text-xl h-[40px] z-40 flex items-center justify-center  text-white bg-transparent border border-solid rounded-full">
              {index + 1}
            </div>

            {deviceType !== "mobile" && (
              <div className="flex flex-col items-start mt-4 gap-1">
                <span className="text-pastel-blue font-medium text">
                  Step {index + 1}
                </span>
                <p className="text-xl text-white font-semibold">{step}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
