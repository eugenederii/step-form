import { type FC } from "react";
import { PageFinishProps } from "./page-finish.interface";
import { useFormContext } from "react-hook-form";
//hooks
import { useDeviceType } from "../../hooks/use-device-type";
import { FormTypes, PickOns } from "../../types/form-types";

export const PageFinish: FC<PageFinishProps> = ({ onBack }) => {
  const deviceType = useDeviceType();
  // form
  const { watch, handleSubmit } = useFormContext<FormTypes>();
  const { pickOns, plan } = watch();

  const totalPrice = (planPrice: string, pickOns: PickOns) => {
    const cleanPrice = (price: string) =>
      parseFloat(price.replace(/[^0-9.]/g, "")) || 0;

    const planPriceNumber = cleanPrice(planPrice);
    const pickOnsTotal = pickOns.reduce(
      (total, item) => total + cleanPrice(item.price),
      0
    );

    return planPriceNumber + pickOnsTotal;
  };

  const onSubmit = (data: FormTypes) => {
    console.log("Submit", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white h-full flex flex-col justify-between w-full rounded-lg shadow-xl md:shadow-none  py-9 px-7 md:ml-8 pt-6 md:mt-4"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-marine text-3xl font-semibold">Finishing up</h2>
        <p className="text-cool-gray leading-5">
          Double-chek everything looks OK before confirming.
        </p>
        <div className="flex w-full bg-mongo flex-col rounded-md p-4 md:p-5">
          <div className="flex gap-1 justify-between items-center border-solid border-0 border-b border-light-gray z-10 pb-4">
            <div className="flex flex-col gap-1">
              <p className="text-marine font-medium">
                {plan.value} ({plan.isMonthly ? "Monthly" : "Yearly"})
              </p>
              <p className="text-cool-gray underline cursor-pointer">Change</p>
            </div>
            <p className="text-marine font-semibold">{plan.price}</p>
          </div>
          {pickOns.map((item, index) => (
            <div key={index} className="flex justify-between mt-4">
              <p className="text-cool-gray">{item.value}</p>
              <p className="text-marine font-normal">+{item.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center px-4 pt-3">
          <p className="text-cool-gray">Total(per month)</p>
          <p className="text-purp-blue font-semibold">
            ${totalPrice(plan.price, pickOns)}/yr
          </p>
        </div>
      </div>

      {deviceType !== "mobile" && (
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="py-3 w-fit text-cool-gray rounded-md hover:text-marine duration-400 transition-colors font-semibold"
          >
            Go Back
          </button>
          <button
            className="bg-purp-blue px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Confirm
          </button>
        </div>
      )}
      {deviceType === "mobile" && (
        <div className="flex justify-between fixed w-full bg-white px-5 py-5 bottom-0 left-0">
          <button
            onClick={onBack}
            className="py-3 w-fit text-cool-gray rounded-md duration-400 transition-colors font-medium"
          >
            Go Back
          </button>
          <button
            className="bg-purp-blue px-5 py-3 w-fit text-white rounded-md hover:bg-my-blue duration-400 transition-colors"
            type="submit"
          >
            Confirm
          </button>
        </div>
      )}
    </form>
  );
};
