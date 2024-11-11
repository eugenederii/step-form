import { ChangeEvent } from "react";

export type InputPlanCardProps = {
  img: string;
  alt: string;
  title: string;
  price: string;
  name: string;
  value: string;
  isMonthly: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};
