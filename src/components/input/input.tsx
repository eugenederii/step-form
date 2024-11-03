import { type FC } from "react";
import { InputProps } from "./input.interface";

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  type,
  htmlFor,
}) => {
  return (
    <div>
      <label className="block text-marine" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border placeholder:text-cool-gray font-medium placeholder:focus:text-marine border-solid border-light-gray mt-1 duration-400 transition-colors outline-none shadow-none hover:border-marine rounded-md ease-linear focus:border-purp-blue px-3 py-3 "
        type={type}
      />
    </div>
  );
};
