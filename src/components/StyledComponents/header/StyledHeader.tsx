import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  width: 100%;

  height: 75px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`;

export const HeaderLinkContainer = styled.div`
  text-decoration: none;
  display: flex;
  gap: 1rem;
  /* margin-right: 1rem; */
  background-color: #0f4e44cd;
  padding: 1rem;
  border-radius: 20px;
  width: 200px;
  justify-content: center;
`;

export const HeaderLink = styled(Link)`
  color: orange;
  text-decoration: none;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px #0f4e43;

  :hover {
    color: #047360;
    text-shadow: none;
  }
`;
