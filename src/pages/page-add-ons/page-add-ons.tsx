import { AddOnsCard } from "../../components/add-ons-card/add-ons-card";

export const PageAddOns = () => {
  return (
    <div className="bg-white h-full max-h-[700px] flex flex-col gap-5 p-6 md:p-7 w-full rounded-lg shadow-xl md:shadow-none">
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
  );
};
