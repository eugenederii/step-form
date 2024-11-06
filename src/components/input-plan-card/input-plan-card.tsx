import { type FC } from "react";
import { InputPlanCardProps } from "./input-plan-card.interface";

export const InputPlanCard: FC<InputPlanCardProps> = ({
  img,
  alt,
  title,
  price,
  name,
  value,
  isMonthly,
}) => {
  return (
    <label className="w-full flex md:flex-col gap-4 p-4 md:p-6 rounded-md border border-solid border-light-gray cursor-pointer hover:border-purp-blue focus-within:border-purp-blue">
      <input type="checkbox" className="hidden" name={name} value={value} />
      <img className="w-[50px] h-[50px] md:mb-7" src={img} alt={alt} />
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="font-medium text-lg">{title}</p>
        <span className="text-gray-500">{price}</span>
        {!isMonthly && (
          <span className="text-marine font-medium">2 months free</span>
        )}
      </div>
    </label>
  );
};
