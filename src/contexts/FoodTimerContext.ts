import { createContext } from "react";

interface IFoodTimer {
  timer: {
    hour: number;
    minutes: number;
    seconds: number;
  };
}

export const foodTimer: IFoodTimer = {
  timer: {
    hour: 1,
    minutes: 2,
    seconds: 3,
  },
};

export const FoodTimerContext = createContext(foodTimer.timer);
