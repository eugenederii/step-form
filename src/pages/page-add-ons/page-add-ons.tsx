import { type FC } from "react";
import { useFormContext } from "react-hook-form";
// components
import { AddOnsCard } from "../../components/add-ons-card/add-ons-card";
//hooks
import { useDeviceType } from "../../hooks/use-device-type";
// types
import { type PageAddOnsProps } from "./page-add-ons.interface";
import { type PickOn } from "../../types/form-types";

export const PageAddOns: FC<PageAddOnsProps> = ({
  onBack,
  onContinue,
  isMonthly,
}) => {
  const deviceType = useDeviceType();
  //form
  const {
    setValue,
    trigger,
    formState: { errors },
    watch,
  } = useFormContext();
  const pickOns = watch("pickOns") || [];

  const handleBack = () => {
    setValue("plan", {
      value: "",
      price: "",
      billingType: "",
      isMonthly: true,
    });
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

  const handleAddOnChange = (value: string, price: string) => {
    const isAlreadySelected = pickOns.some(
      (item: PickOn) => item.value === value
    );

    const updatedPickOns = isAlreadySelected
      ? pickOns.filter((item: PickOn) => item.value !== value)
      : [...pickOns, { value, price }];

    setValue("pickOns", updatedPickOns);
    trigger("pickOns");
  };

  // price
  const priceOnline = isMonthly ? "1/yr" : "10/yr";
  const priceLagere = isMonthly ? "2/yr" : "20/yr";
  const priceCusmom = isMonthly ? "2/yr" : "20/yr";

  return (
    <form
      onSubmit={handleContinue}
      className="bg-white h-full flex flex-col justify-between gap-5 w-full rounded-lg shadow-xl md:shadow-none py-9 px-7 md:ml-8 pt-6 md:mt-4"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-marine text-3xl font-semibold">Pick add-ons</h2>
        <p className="text-cool-gray leading-5">
          Add-ons help enhance your gaming experiance
        </p>

        <AddOnsCard
          onChange={() => handleAddOnChange("Online service", priceOnline)}
          title="Online service"
          subtitle="Access to multiplayer games"
          price={priceOnline}
          value="Online service"
          checked={pickOns.some(
            (item: PickOn) => item.value === "Online service"
          )}
        />
        <AddOnsCard
          onChange={() => handleAddOnChange("Larger storage", priceLagere)}
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price={priceLagere}
          value="Larger storage"
          checked={pickOns.some(
            (item: PickOn) => item.value === "Larger storage"
          )}
        />
        <AddOnsCard
          onChange={() =>
            handleAddOnChange("Customizable profile", priceCusmom)
          }
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price={priceCusmom}
          value="Customizable profile"
          checked={pickOns.some(
            (item: PickOn) => item.value === "Customizable profile"
          )}
        />
        {typeof errors.pickOns?.message === "string" && (
          <p className="text-berry-red font-semibold text-center">
            {errors.pickOns.message}
          </p>
        )}
      </div>

      {deviceType !== "mobile" && (
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="py-3 w-fit text-cool-gray rounded-md hover:text-marine duration-400 transition-colors font-semibold"
          >
            Go Back
          </button>
          <button
            className="bg-marine px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Next Step
          </button>
        </div>
      )}
      {deviceType === "mobile" && (
        <div className="flex justify-between fixed w-full bg-white px-5 py-5 bottom-0 left-0">
          <button
            onClick={handleBack}
            className="py-3 w-fit text-cool-gray rounded-md duration-400 transition-colors font-medium"
          >
            Go Back
          </button>
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
