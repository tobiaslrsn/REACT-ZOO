import { createContext } from "react";

interface IAnimalLocalStorage {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
}

export const theLocalStorage: IAnimalLocalStorage = {
  id: 0,
  name: "",
  latinName: "",
  yearOfBirth: 0,
  shortDescription: "",
  longDescription: "",
  imageUrl: "",
  medicine: "",
  isFed: false,
  lastFed: "",
};

export const theLocalStorageContext = createContext(theLocalStorage);
