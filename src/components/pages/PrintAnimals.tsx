import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// MODELS
import { IAnimal } from "../../models/IAnimal";
/// STYLES
import { HoverImage } from "../StyledComponents/StyledImages";
import {
  StyledTextHeader,
  StyledTextSpan,
} from "../StyledComponents/StyledText";
import {
  AnimalListCard,
  AnimalListWrapper,
} from "../StyledComponents/StyledWrappers";

interface IPrintAnimal {
  animal: IAnimal;
}

export const PrintAnimal = (props: IPrintAnimal) => {
  const [startHungry, setStartHungry] = useState(props.animal.lastFed);

  useEffect(() => {
    if (startHungry.length === 0) return;
    setStartHungry(startHungry);
    let time = Date.now() - new Date(props.animal.lastFed).getTime();

    if (time >= 14400000) {
      console.log(props.animal.name + " " + "Måste matas!");
    } else {
      console.log(props.animal.name + " " + "mätt");
    }
  }, [startHungry]);

  return (
    <AnimalListWrapper>
      <AnimalListCard>
        <>
          <StyledTextHeader>{props.animal.name}</StyledTextHeader>
          <h5> {props.animal.latinName}</h5>

          <Link to={"/animal/" + props.animal.id}>
            <HoverImage
              src={props.animal.imageUrl}
              alt={props.animal.name + " " + props.animal.latinName}
              onError={(e) => {
                e.currentTarget.src =
                  "https://scontent.farn1-2.fna.fbcdn.net/v/t39.30808-6/287105035_10160827682071015_4038911532598030992_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oYWZK-o20DgAX-1MAWJ&tn=y1IS04Synxp2n8qy&_nc_ht=scontent.farn1-2.fna&oh=00_AT_1boibPiZRltJOqayqspCBDNuN97GLj8XvEh7uhAG6Cg&oe=62B1E906"; // Lägg i public
              }}
            />
          </Link>

          <StyledTextSpan>{props.animal.shortDescription}</StyledTextSpan>
        </>
      </AnimalListCard>
    </AnimalListWrapper>
  );
};
