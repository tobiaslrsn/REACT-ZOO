import { AboutHeadings } from "../StyledComponents/about/StyledAbout";
import { StyledTextHeader } from "../StyledComponents/StyledText";
import {
  AnimalListCard,
  AnimalListWrapper,
  StyledNotFoundWrapper,
  StyledWrapper,
  StyledWrapperCol,
} from "../StyledComponents/StyledWrappers";

export const NotFound = () => (
  <>
    {" "}
    <StyledNotFoundWrapper>
      <AboutHeadings>
        404 <br />
        PAGE NOT FOUND
      </AboutHeadings>
    </StyledNotFoundWrapper>
  </>
);
