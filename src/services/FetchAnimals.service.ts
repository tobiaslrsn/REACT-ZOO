import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export async function getAnimal(): Promise<IAnimal[]> {
  let response = await axios.get<IAnimal[]>(
    `${process.env.REACT_APP_GET_ANIMALS}`
  );

  console.log(response.data);
  return response.data;
}
