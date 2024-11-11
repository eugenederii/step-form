import { FormEvent, type FC } from "react";
import { Input } from "../../components/input/input";

import { useFormContext } from "react-hook-form";
import { PageFormProps } from "./page-form.interface";
import { useDeviceType } from "../../hooks/use-device-type";
import { FormTypes } from "../../types/form-types";

export const PageForm: FC<PageFormProps> = ({ onContinue }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormTypes>();

  const deviceType = useDeviceType();

  const handleContinue = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger(["name", "email", "phone"]);

    if (isValid) {
      onContinue();
    }
  };

  return (
    <form
      className="bg-white h-full flex flex-col justify-between pt-6 px-6 md:px-8 md:pt-8 w-full rounded-lg shadow-xl md:shadow-none"
      onSubmit={handleContinue}
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-marine text-3xl font-semibold">Personal info</h2>
        <p className="text-cool-gray leading-5">
          Please provide your name, email address, and phone number
        </p>

        <Input
          placeholder="e.g Stephen King"
          type="text"
          label="Name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          placeholder="e.g stephenking@lorem.com"
          type="text"
          label="Email Address"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          placeholder="e.g +1 234 567 890"
          type="number"
          label="Phone number"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
      {deviceType !== "mobile" && (
        <div className="flex justify-end">
          <button
            className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Next Step
          </button>
        </div>
      )}
      {deviceType === "mobile" && (
        <div className="flex justify-end relative bg-white px-5 py-5 bottom-[-200px]">
          <button
            className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Next Step
          </button>
        </div>
      )}
    </form>
  );
};
