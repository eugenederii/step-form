import { Checkbox } from "@mui/material";
import { FC, useState } from "react";
// type
import { AddOnsCardProps } from "./add-ons-card.interface";

export const AddOnsCard: FC<AddOnsCardProps> = ({ title, subtitle, price }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label
      style={{
        backgroundColor: checked ? "#f0f6ff" : "transparent",
      }}
      className="flex justify-between items-center py-3 px-3 md:p-5 rounded-md border border-solid border-light-gray cursor-pointer"
    >
      <div className="flex gap-2 md:gap-5 items-center">
        <Checkbox checked={checked} onChange={handleChange} />
        <div className="flex flex-col gap-2">
          <p className="text-marine font-semibold">{title}</p>
          <span className="text-cool-gray">{subtitle}</span>
        </div>
      </div>
      <span className="text-purp-blue font-medium">{price}</span>
    </label>
  );
};
