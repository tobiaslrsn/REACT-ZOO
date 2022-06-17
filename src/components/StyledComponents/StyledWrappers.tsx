import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const AnimalListWrapper = styled.div`
  width: 25%;
  min-width: 300px;
  flex-wrap: wrap;
  display: flex;

  justify-content: space-evenly;
`;
export const SingleAnimalListWrapper = styled(AnimalListWrapper)`
  width: 40%;
`;

export const AnimalListCard = styled.div`
  background-color: #0f4e44cd;
  border-radius: 10px;
  min-height: 500px;
  padding: 0 2rem;
  display: flex;
  padding-top: 2rem;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
`;

export const SingleAnimalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const StyledWrapperCol = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const StyledNotFoundWrapper = styled.div`
  display: flex;
  height: 50vh;
  font-size: 4rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;
