export const PageFinish = () => {
  return (
    <div className="bg-white h-full max-h-[700px] flex flex-col gap-4 p-6 md:px-[40px]  w-full rounded-lg shadow-xl md:shadow-none">
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
          <p>Online service</p>
          <p>+$1/mo</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 pt-3">
        <p className="text-cool-gray">Total(per month)</p>
        <p className="text-purp-blue font-semibold">+$12/mo</p>
      </div>
    </div>
  );
};
