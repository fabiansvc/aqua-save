import { create } from "zustand";

const useSlider = create((set) => ({
    slider: false,
    setSlider: (value) => set({ slider: value }),
    }));

export default useSlider;