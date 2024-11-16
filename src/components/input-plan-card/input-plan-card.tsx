import { type FC } from "react";
import { InputPlanCardProps } from "./input-plan-card.interface";

export const InputPlanCard: FC<InputPlanCardProps> = ({
  img,
  alt,
  title,
  checked,
  price,
  name,
  value,
  isMonthly,
  onChange,
}) => {
  return (
    <label
      className={`w-full flex md:flex-col gap-4 p-4 md:p-6 rounded-md border border-solid border-light-gray transition-all duration-800 cursor-pointer hover:border-purp-blue  ${
        checked ? "border-purp-blue" : "border-light-gray "
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      <img className="w-[45px] h-[45px] md:mb-7" src={img} alt={alt} />
      <div className="flex flex-col gap-[2px] md:gap-2">
        <p className="font-medium text-lg">{title}</p>
        <span className="text-gray-500">{price}</span>

        <span
          className={`overflow-hidden text-marine font-medium transition-all duration-800 ${
            isMonthly ? "h-[0px]" : "h-[16px]"
          }`}
        >
          2 months free
        </span>
      </div>
    </label>
  );
};
