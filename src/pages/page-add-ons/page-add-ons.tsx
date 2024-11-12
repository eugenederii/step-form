import { useState, type FC } from "react";
// components
import { AddOnsCard } from "../../components/add-ons-card/add-ons-card";
// types
import { PageAddOnsProps } from "./page-add-ons.interface";
import { useFormContext } from "react-hook-form";

export const PageAddOns: FC<PageAddOnsProps> = ({ onBack, onContinue }) => {
  const {
    setValue,
    trigger,
    formState: { errors },
    watch,
  } = useFormContext();

  const { selectedPickOns } = watch("pickOns") || [];

  const handleBack = () => {
    setValue("plan", "");
    setValue("pickOns", "");
    onBack();
  };

  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger(["pickOns"]);
    if (isValid) {
      onContinue();
    }
  };

  return (
    <form
      onSubmit={handleContinue}
      className="bg-white h-full flex flex-col justify-between gap-5 w-full rounded-lg shadow-xl md:shadow-none px-6 pt-6 md:px-8 md:pt-8"
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-marine text-3xl font-semibold">Pick add-ons</h2>
        <p className="text-cool-gray leading-5">
          Add-ons help enhance your gaming experiance
        </p>

        <AddOnsCard
          onChange={() => {
            const pickOns = selectedPickOns.includes("Online service")
              ? selectedPickOns.filter(
                  (item: string) => item !== "Online Service"
                )
              : [...selectedPickOns, "Online service"];

            setValue("pickOns", pickOns);
          }}
          title="Online service"
          subtitle="Access to multiplayer games"
          price="+10/yr"
          value="Online service"
          checked={selectedPickOns.includes("Online service")}
        />
        <AddOnsCard
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price="+20/yr"
          value="Larger storage"
          checked={selectedPickOns.includes("Larger storage")}
        />
        <AddOnsCard
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price="+20/yr"
          value="Customizable profile"
          checked={selectedPickOns.includes("Customizable profile")}
        />
        {typeof errors.pickOns?.message === "string" && (
          <p className="text-berry-red font-semibold pl-8">
            {errors.pickOns.message}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className=" px-7 py-3 w-fit text-cool-gray rounded-md hover:bg-light-gray duration-400 transition-colors font-medium"
        >
          Go Back
        </button>
        <button
          className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-500 transition-colors"
          type="submit"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};
