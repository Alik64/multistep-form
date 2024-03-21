import React from "react";
import { useFormStore } from "../../store/store";

type Props = {
  stepNumber: number;
  title: string;
};

const SidebarTab = ({ stepNumber, title }: Props) => {
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  return (
    <div onClick={() => setStep(stepNumber)}>
      <div className={step === stepNumber ? "active" : "default"}>{stepNumber}</div>
      <div>{title}</div>
    </div>
  );
};

export default SidebarTab;
