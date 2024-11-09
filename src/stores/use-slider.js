import { create } from "zustand";

const useSlider = create((set) => ({
    slider: false,
    data:[],
    setSlider: (value) => set({ slider: value }),
    setData:(value) => set({ data: value}),
    }));

export default useSlider;