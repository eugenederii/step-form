import { type CheckboxProps } from "./chackbox.interface";

export const Checkbox = ({ value = false, onChange }: CheckboxProps) => {
  return (
    <label className="flex relative cursor-pointer select-none p-2 w-fit rounded-full duration-150 ">
      <input
        className="absolute opacity-0 cursor-pointer h-0 w-0"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span className="relative flex ite" />
    </label>
  );
};
