import { create } from "zustand";

interface SkillStoreState {
  skill: string;
  setSkill: (skill: string) => void;
  storeSkills: string[];
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export const useSkillStore = create<SkillStoreState>((set) => ({
  skill: "",
  setSkill: (sk: string) => set(() => ({ skill: sk })),
  storeSkills: [],
  addSkill: (skill) =>
    set((state) => ({ storeSkills: [...state.storeSkills, skill] })),
  removeSkill: (skill) =>
    set((state) => ({
      storeSkills: state.storeSkills.filter((s) => s !== skill),
    })),
}));
