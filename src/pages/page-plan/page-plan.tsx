import { useState, type FC } from "react";
// components
import { PagePlanProps } from "./page-plan.interface";
import { useFormContext } from "react-hook-form";
import { FormTypes } from "../../types/form-types";
import { InputPlanCard } from "../../components/input-plan-card/input-plan-card";
//hooks
import { useDeviceType } from "../../hooks/use-device-type";
// assets
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

export const PagePlan: FC<PagePlanProps> = ({
  onBack,
  onContinue,
  isMonthly,
  toggleBilling,
}) => {
  const deviceType = useDeviceType();
  // state
  const [selectedPlan, setSelectedPlan] = useState("");

  // form
  const {
    register,
    trigger,
    formState: { errors },
    setValue,
  } = useFormContext<FormTypes>();

  const handlePlanChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    price: string
  ) => {
    e.preventDefault();
    const value = e.target.value;

    setSelectedPlan(value);
    setValue("plan", { value, price, isMonthly });
    trigger("plan");
  };

  const handleBack = () => {
    setValue("plan", {
      value: "",
      price: "",
      isMonthly: true,
    });

    onBack();
  };

  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger(["plan"]);

    if (isValid) {
      onContinue();
    }
  };

  return (
    <form
      onSubmit={handleContinue}
      className="bg-white h-full  flex flex-col justify-between w-full rounded-lg shadow-xl md:shadow-none py-8 px-7 md:ml-8 pt-6 md:mt-4"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-marine text-3xl font-semibold">Select your plan</h2>
        <p className="text-cool-gray leading-5">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <InputPlanCard
            img={arcade}
            alt="arcade"
            title="Arcade"
            price={isMonthly ? "$9/mo" : "$90/ur"}
            value="Arcade"
            checked={selectedPlan === "Arcade"}
            isMonthly={isMonthly}
            {...register("plan")}
            onChange={(e) =>
              handlePlanChange(e, isMonthly ? "$9/mo" : "$90/ur")
            }
          />
          <InputPlanCard
            img={advanced}
            alt="advanced"
            title="Advanced"
            price={isMonthly ? "$12/mo" : "$120/ur"}
            checked={selectedPlan === "Advanced"}
            value="Advanced"
            isMonthly={isMonthly}
            {...register("plan")}
            onChange={(e) =>
              handlePlanChange(e, isMonthly ? "$12/mo" : "$120/ur")
            }
          />
          <InputPlanCard
            img={pro}
            alt="Pro"
            title="Pro"
            price={isMonthly ? "$15/mo" : "$150/ur"}
            value="Pro"
            checked={selectedPlan === "Pro"}
            isMonthly={isMonthly}
            {...register("plan")}
            onChange={(e) =>
              handlePlanChange(e, isMonthly ? "$15/mo" : "$150/ur")
            }
          />
        </div>

        {errors.plan && (
          <p className="text-red-500 text-center font-semibold">
            {errors.plan.value?.message || "Select a plan"}
          </p>
        )}

        <div className="flex w-full gap-6 items-center justify-center py-4  bg-gray-100 rounded-lg">
          <span
            className={`font-semibold ${
              isMonthly ? "text-marine" : "text-cool-gray"
            }`}
          >
            Monthly
          </span>

          <label className="relative w-[48px] h-[22px] flex cursor-pointer items-center bg-marine rounded-full p-1 transition-colors duration-300">
            <input
              id="check"
              type="checkbox"
              className="sr-only peer"
              checked={!isMonthly}
              onChange={toggleBilling}
            />

            <div className=" w-4 h-4 absolute bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:left-[29px]"></div>
          </label>

          <span
            className={`font-semibold ${
              !isMonthly ? "text-marine" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      {deviceType !== "mobile" && (
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className=" px-7 py-3 w-fit text-cool-gray rounded-md hover:bg-light-gray duration-400 transition-colors font-medium"
          >
            Go Back
          </button>
          <button
            className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Next Step
          </button>
        </div>
      )}
      {deviceType === "mobile" && (
        <div className="flex justify-between fixed w-full bg-white px-5 py-5 bottom-0 left-0">
          <button
            onClick={handleBack}
            className=" py-3 w-fit text-cool-gray rounded-md duration-400 transition-colors font-medium"
          >
            Go Back
          </button>
          <button
            className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Next Step
          </button>
        </div>
      )}
    </form>
  );
};
