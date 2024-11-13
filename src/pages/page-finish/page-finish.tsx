import { type FC } from "react";
import { PageFinishProps } from "./page-finish.interface";
import { useFormContext } from "react-hook-form";
import { FormTypes } from "../../types/form-types";

export const PageFinish: FC<PageFinishProps> = ({ onBack }) => {
  const { register, getValues, watch } = useFormContext<FormTypes>();

  const formValue = watch();

  const plan = getValues("plan");

  console.log(plan);

  return (
    <form className="bg-white h-full flex flex-col justify-between px-6 pt-6 md:px-8 md:pt-8  w-full rounded-lg shadow-xl md:shadow-none">
      <div className="flex flex-col gap-4">
        <h2 className="text-marine text-3xl font-semibold">Finishing up</h2>
        <p className="text-cool-gray leading-5">
          Double-chek everything looks OK before confirming.
        </p>
        <div className="flex w-full bg-mongo flex-col rounded-md p-4 md:p-5">
          <div className="flex gap-1 justify-between items-center border-solid border-0 border-b border-light-gray z-10 pb-4">
            <div className="flex flex-col gap-1">
              <p className="text-marine font-medium">Arcade (Monthly)</p>
              <p className="text-cool-gray underline cursor-pointer">Change</p>
            </div>
            <p className="text-marine font-semibold">$9/mo</p>
          </div>
          <div className="flex justify-between mt-4">
            <p>{formValue.email}</p>
            <p>+$1/mo</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 pt-3">
          <p className="text-cool-gray">Total(per month)</p>
          <p className="text-purp-blue font-semibold">+$12/mo</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className=" px-7 py-3 w-fit text-cool-gray rounded-md hover:bg-light-gray duration-400 transition-colors font-medium"
        >
          Go Back
        </button>
        <button
          className="bg-purp-blue px-5 py-3 w-fit text-white rounded-md hover:bg-[#8b8ff4] duration-400 transition-colors"
          type="submit"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};
