import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
  step: number;
  increase: () => void;
  decrease: () => void;
  setStep: (step: number) => void;
}
const maxStep = 4;
const initStep = 1;
export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      step: initStep,
      setStep: (step: number) => set({ step }),
      increase: () =>
        set((state) => ({
          step: state.step < maxStep ? state.step + 1 : maxStep,
        })),
      decrease: () =>
        set((state) => ({ step: state.step > initStep ? state.step - 1 : 1 })),
    }),
    {
      name: "step-storage",
    }
  )
);
