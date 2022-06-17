import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { useParams } from "react-router-dom";
// COMPONENTS
import { Loader } from "../Loader";
import { defaultAnimalValues, IAnimal } from "../../models/IAnimal";
// SERVICES
import { sendToStorage } from "../../services/LocalStorage.service";
/// STYLES
import {
  DisabledButton,
  FeederButton,
} from "../StyledComponents/StyledButtons";
import { StyledImage } from "../StyledComponents/StyledImages";
import { StyledTextHeader } from "../StyledComponents/StyledText";
import {
  AnimalListCard,
  SingleAnimalListWrapper,
  SingleAnimalWrapper,
} from "../StyledComponents/StyledWrappers";

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>(defaultAnimalValues);
  const [isLoading, setIsLoading] = useState(true);
  const [allAnimals, setAllAnimals] = useState<IAnimal[]>([]);

  let params = useParams();

  useEffect(() => {
    sendToStorage().then((response) => {
      localStorage.setItem("animals", JSON.stringify(response));

      setIsLoading(false);
      setAllAnimals(response);
    });
  }, []);

  useEffect(() => {
    if (allAnimals.length === 0) return;

    setIsLoading(false);
    const index = allAnimals.findIndex(
      (animal) => animal.id.toString() === params.id
    );

    if (index > -1) {
      let localAnimal = { ...allAnimals[index] };
      // let localAnimal = allAnimals[index];

      let time = Date.now() - new Date(localAnimal.lastFed).getTime();

      if (time >= 10800000) {
        localAnimal.isFed = false;
        console.log(" " + "Börjar bli hungrig");

        let animals = [...allAnimals];
        animals[index] = localAnimal;

        localStorage.setItem("animals", JSON.stringify(animals));
        setAnimal(localAnimal);
      } else {
        console.log(" " + "är " + " " + "Mätt");
      }

      setAnimal(allAnimals[index]);
    }
  }, [allAnimals]);

  const toggleHungerStatus = () => {
    let updAnimal = {
      ...animal,
      lastFed: DateTime.now().toString(),
      isFed: true,
    };

    let storedAnimals: string | null = localStorage.getItem("animals");
    if (storedAnimals) {
      let foundAnimals: IAnimal[] = JSON.parse(storedAnimals);

      for (let i = 0; i < foundAnimals.length; i++) {
        const changeStatus = foundAnimals[i];

        if (animal.id === changeStatus.id) {
          changeStatus.isFed = updAnimal.isFed;
          changeStatus.lastFed = updAnimal.lastFed;

          localStorage.setItem("animals", JSON.stringify(foundAnimals));

          window.location.reload();

          break;
        }
      }
    } else {
      console.log("Error");
    }

    let extAnimal = { ...animal };
    extAnimal.isFed = !extAnimal.isFed;

    if (extAnimal.isFed === true) {
      console.log("Animal is fed" + Date(), extAnimal.isFed);
    } else {
      console.log("Animal is starving");
    }
    setAnimal(extAnimal);
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loader />{" "}
        </>
      ) : (
        <SingleAnimalWrapper>
          <SingleAnimalListWrapper>
            <AnimalListCard>
              <>
                <StyledTextHeader>{animal.name}</StyledTextHeader>

                <StyledImage
                  src={animal.imageUrl}
                  alt={animal.name + " " + animal.latinName}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://scontent.farn1-2.fna.fbcdn.net/v/t39.30808-6/287105035_10160827682071015_4038911532598030992_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oYWZK-o20DgAX-1MAWJ&tn=y1IS04Synxp2n8qy&_nc_ht=scontent.farn1-2.fna&oh=00_AT_1boibPiZRltJOqayqspCBDNuN97GLj8XvEh7uhAG6Cg&oe=62B1E906";
                  }}
                />
                <span>{animal.longDescription}</span>

                {animal.isFed ? (
                  <>
                    Matad senast:
                    <br />
                    {DateTime.fromISO(animal.lastFed).toLocaleString(
                      DateTime.DATE_HUGE
                    )}
                    <br />
                    {"Klockan: "}
                    {DateTime.fromISO(animal.lastFed).toLocaleString(
                      DateTime.TIME_24_SIMPLE
                    )}
                    <p>{animal.name} är mätt som en plätt!</p>
                    <DisabledButton
                      disabled={true}
                      onClick={() => {
                        toggleHungerStatus();
                      }}
                    >
                      <p>{animal.name} är mätt.</p>
                    </DisabledButton>
                  </>
                ) : (
                  <>
                    <p>
                      {animal.name} behöver matas och mår inte jättebra just nu
                      😢
                    </p>
                    <FeederButton
                      onClick={() => {
                        toggleHungerStatus();
                      }}
                    >
                      <p>Mata {animal.name}</p>
                    </FeederButton>
                  </>
                )}
              </>
            </AnimalListCard>
          </SingleAnimalListWrapper>
        </SingleAnimalWrapper>
      )}
    </>
  );
};
