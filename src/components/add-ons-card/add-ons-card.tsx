import { FC } from "react";
import { Checkbox } from "@mui/material";
// type
import { AddOnsCardProps } from "./add-ons-card.interface";
// import { Checkbox } from "../checkbox/checkbox";

export const AddOnsCard: FC<AddOnsCardProps> = ({
  title,
  subtitle,
  price,
  onChange,
  value,
  checked,
}) => {
  return (
    <label
      style={{
        backgroundColor: checked ? "#f0f6ff" : "transparent",
      }}
      className={`${
        checked ? "border-purp-blue" : "border-light-gray"
      } flex justify-between items-center py-3 px-2 md:p-5 rounded-md border border-solid transition cursor-pointer`}
    >
      <div className="flex gap-2 md:gap-5 items-center">
        <Checkbox
          size="medium"
          classes={{ sizeMedium: "!w-10 !h-10", checked: "!text-purp-blue" }}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <div className="flex flex-col gap-1">
          <p className="text-marine font-semibold">{title}</p>
          <span className="text-cool-gray">{subtitle}</span>
        </div>
      </div>
      <span className="text-purp-blue font-medium">{price}</span>
    </label>
  );
};
