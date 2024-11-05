import type { ChangeEvent } from "react";

export type CheckboxProps = {
  value?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
