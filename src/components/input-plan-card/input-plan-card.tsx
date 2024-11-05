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
    <label className="w-full flex gap-4 p-4 rounded-md border border-solid border-light-gray cursor-pointer hover:border-purp-blue focus-within:border-purp-blue">
      <input type="checkbox" className="hidden" name={name} value={value} />
      <img src={img} alt={alt} />
      <div className="flex flex-col gap-1">
        <p className="font-medium">{title}</p>
        <span className="text-gray-500">{price}</span>
        {!isMonthly && <span className="text-marine">2 months free</span>}
      </div>
    </label>
  );
};
