import { useEffect, useState } from "react";
// MODELS
import { IAnimal } from "../../models/IAnimal";
// COMPONENTS
import { Loader } from "../Loader";
import { PrintAnimal } from "./PrintAnimals";
// SERVICES
import { sendToStorage } from "../../services/LocalStorage.service";
/// STYLES
import { StyledWrapper } from "../StyledComponents/StyledWrappers";

export const Animals = () => {
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sendToStorage().then((response) => {
      localStorage.setItem("animals", JSON.stringify(response));
      setIsLoading(false);
      setAnimalList(response);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <StyledWrapper>
          <>
            {animalList.map((animal) => {
              return (
                <PrintAnimal animal={animal} key={animal.id}></PrintAnimal>
              );
            })}
          </>
        </StyledWrapper>
      )}
    </>
  );
};
