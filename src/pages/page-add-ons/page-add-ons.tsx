import { type FC } from "react";
// components
import { AddOnsCard } from "../../components/add-ons-card/add-ons-card";
// types
import { PageAddOnsProps } from "./page-add-ons.interface";

export const PageAddOns: FC<PageAddOnsProps> = ({ onBack, onContinue }) => {
  return (
    <div className="bg-white h-full flex flex-col justify-between gap-5 w-full rounded-lg shadow-xl md:shadow-none px-6 pt-6 md:px-8 md:pt-8">
      <div className="flex flex-col gap-5">
        <h2 className="text-marine text-3xl font-semibold">Pick add-ons</h2>
        <p className="text-cool-gray leading-5">
          Add-ons help enhance your gaming experiance
        </p>

        <AddOnsCard
          price="+10/yr"
          subtitle="Access to multiplayer games"
          title="Online service"
        />
        <AddOnsCard
          price="+10/yr"
          subtitle="Access to multiplayer games"
          title="Online service"
        />
        <AddOnsCard
          price="+10/yr"
          subtitle="Access to multiplayer games"
          title="Online service"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className=" px-7 py-3 w-fit text-cool-gray rounded-md hover:bg-light-gray duration-400 transition-colors font-medium"
        >
          Go Back
        </button>
        <button
          onClick={onContinue}
          className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-500 transition-colors"
          type="submit"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
