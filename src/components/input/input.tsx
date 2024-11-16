import { forwardRef } from "react";
import { InputProps } from "./input.interface";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, ...props }, ref) => {
    return (
      <div>
        <label className="block text-marine" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          ref={ref}
          className={`w-full border placeholder:text-cool-gray font-medium placeholder:focus:text-marine border-solid  mt-1 duration-400 transition-colors outline-none shadow-none hover:border-marine rounded-md ease-linear focus:border-purp-blue px-3 py-3 ${
            error ? "border-berry-red" : "border-light-gray"
          }`}
          {...props}
        />
        {error && (
          <p className="text-berry-red mt-[2px] pl-3 font-medium">{error}</p>
        )}
      </div>
    );
  }
);
