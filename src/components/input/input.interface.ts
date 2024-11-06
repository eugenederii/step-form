import { InputHTMLAttributes } from "react";

export type InputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
