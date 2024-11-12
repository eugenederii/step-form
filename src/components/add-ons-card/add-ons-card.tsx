import { Checkbox } from "@mui/material";
import { FC, useState } from "react";
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
  // const [checked, setChecked] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <label
      style={{
        backgroundColor: checked ? "#f0f6ff" : "transparent",
      }}
      className={`${
        checked ? "border-purp-blue" : "border-light-gray"
      } flex justify-between items-center py-3 px-3 md:p-5 rounded-md border border-solid transition   cursor-pointer`}
    >
      <div className="flex gap-2 md:gap-5 items-center">
        <Checkbox
          size="medium"
          classes={{ sizeMedium: "!w-10 !h-10" }}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {/* <Checkbox /> */}
        <div className="flex flex-col gap-2">
          <p className="text-marine font-semibold">{title}</p>
          <span className="text-cool-gray">{subtitle}</span>
        </div>
      </div>
      <span className="text-purp-blue font-medium">{price}</span>
    </label>
  );
};
