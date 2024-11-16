import { FormEvent, type FC } from "react";
import { useFormContext } from "react-hook-form";
// components
import { Input } from "../../components/input/input";
//hooks
import { useDeviceType } from "../../hooks/use-device-type";
// types
import { FormTypes } from "../../types/form-types";
import { PageFormProps } from "./page-form.interface";

export const PageForm: FC<PageFormProps> = ({ onContinue }) => {
  const deviceType = useDeviceType();
  // form
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormTypes>();

  const handleContinue = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger(["name", "email", "phone"]);

    if (isValid) {
      onContinue();
    }
  };

  return (
    <form
      className="bg-white h-full flex flex-col justify-between w-full rounded-lg shadow-xl md:shadow-none md:pt-10 py-9 md:py-6 px-7 md:px-12"
      onSubmit={handleContinue}
    >
      <div className="flex flex-col">
        <h2 className="text-marine text-3xl font-semibold mb-4 md:mb-5">
          Personal info
        </h2>
        <p className="text-cool-gray leading-5 mb-6 md:mb-0">
          Please provide your name, email address, and phone number
        </p>

        <div className="flex flex-col gap-5 md:gap-8 md:mt-12">
          <Input
            placeholder="e.g Stephen King"
            type="text"
            label="Name"
            error={errors.name?.message}
            {...register("name", {
              onChange: () => trigger("name"),
            })}
          />

          <Input
            placeholder="e.g stephenking@lorem.com"
            type="text"
            label="Email Address"
            error={errors.email?.message}
            {...register("email", {
              onChange: () => trigger("email"),
            })}
          />
          <Input
            placeholder="e.g +1 234 567 890"
            type="tel"
            label="Phone number"
            error={errors.phone?.message}
            {...register("phone", {
              onChange: () => trigger("phone"),
            })}
          />
        </div>
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
        <div className="flex justify-end md:justify-normal fixed w-full bg-white px-5 py-5 bottom-0 left-0">
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
