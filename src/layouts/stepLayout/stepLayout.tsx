import { type FC } from "react";
import { StepLayoutProps } from "./stepLayout.interface";

export const StepLayout: FC<StepLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="step-layout">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="step-content">{children}</div>
    </div>
  );
};
