import { create } from "zustand";
import { IProfile } from "../types";
import client from "../sanityConfig";

interface ShuffledState {
  loading: boolean;
  shuffledArr: IProfile[];
  getShuffuled: () => Promise<void>;
}

export const useShuffledArr = create<ShuffledState>((set) => ({
  loading: true,
  shuffledArr: [],
  getShuffuled: async () => {
    try {
      await client
        .fetch<IProfile[]>(
          `*[_type == "profiles" && accepted == true]{
            _id,
            name,
            email,
            location,
            picture,
            bio,
            skills,
            github,
            linkedIn,
            twitter,
            portfolio
          }`
        )
        .then((data: IProfile[]) => {
          const shuffledArray = [...data];
          for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
              shuffledArray[j],
              shuffledArray[i],
            ];
          }
          set({
            shuffledArr: shuffledArray,
            loading: false,
          });
        });
    } catch (error) {
      console.log(error);
    }
  },
}));
