import { FC } from "react";
import { ToogleSwitchProps } from "./toogle-switch.interface";

export const ToogleSwitch: FC<ToogleSwitchProps> = ({
  isMonthly,
  toggleBilling,
}) => {
  return (
    <div className="flex w-full md:mt-5 gap-6 items-center justify-center py-4  bg-gray-100 rounded-lg">
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
  );
};
