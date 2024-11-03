import { Input } from "../../components/input/input";

export const PageForm = () => {
  return (
    <form
      className="bg-white h-[400px] flex flex-col justify-between z- p-8 w-full rounded-lg shadow-xl md:shadow-none"
      action="#"
    >
      <h2 className="text-marine text-3xl font-semibold">Personal info</h2>
      <p className="text-cool-gray leading-5">
        Please provide your name, email address, and phone number
      </p>
      <Input
        placeholder="e.g Stephen King"
        htmlFor="Name"
        type="text"
        label="Name"
      />
      <Input
        placeholder="e.g stephenking@lorem.com"
        htmlFor="Email Address"
        type="text"
        label="Email Address"
      />
      <Input
        placeholder="e.g +1 234 567 890"
        htmlFor="Phone number"
        type="number"
        label="Phone number"
      />
    </form>
  );
};
