import { useState } from "react";
// assets
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
// components
import { InputPlanCard } from "../../components/input-plan-card/input-plan-card";

export const PagePlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleBilling = () => setIsMonthly(!isMonthly);

  return (
    <div className="bg-white h-full max-h-[700px] flex flex-col gap-5 p-7 w-full rounded-lg shadow-xl md:shadow-none">
      <h2 className="text-marine text-3xl font-semibold">Select your plan</h2>
      <p className="text-cool-gray leading-5">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3">
        <InputPlanCard
          img={arcade}
          alt="arcade"
          title="Arcade"
          price={isMonthly ? "$9/mo" : "$90/ur"}
          name="arcade"
          value="arcade"
          isMonthly={isMonthly}
        />
        <InputPlanCard
          img={advanced}
          alt="advanced"
          title="Advanced"
          price={isMonthly ? "$12/mo" : "$120/ur"}
          name="plan-advanced"
          value="advanced"
          isMonthly={isMonthly}
        />
        <InputPlanCard
          img={pro}
          alt="Pro"
          title="Pro"
          price={isMonthly ? "$15/mo" : "$150/ur"}
          name="plan-pro"
          value="pro"
          isMonthly={isMonthly}
        />
      </div>

      <div className="flex w-full gap-6 items-center justify-center py-4  bg-gray-100 rounded-lg">
        <span
          className={`font-medium ${
            isMonthly ? "text-marine" : "text-gray-400"
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
          className={`font-medium ${
            !isMonthly ? "text-marine" : "text-gray-400"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};
