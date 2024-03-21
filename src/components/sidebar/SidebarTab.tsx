import React from "react";
import { useFormStore } from "../../store/store";
import s from "./Sidebar.module.css";
type Props = {
  stepNumber: number;
  title: string;
};

const SidebarTab = ({ stepNumber, title }: Props) => {
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  return (
    <div className={s.sidebarTab} onClick={() => setStep(stepNumber)}>
      <div className={`${step === stepNumber && s.active} ${s.stepNumber}`}>
        {stepNumber}
      </div>
      <div className={s.sidebarTab_info}>
        <div>
          <span>Step </span>
           {stepNumber}
        </div>
        <div className={s.sidebarTab_title}>{title}</div>
      </div>
    </div>
  );
};

export default SidebarTab;
