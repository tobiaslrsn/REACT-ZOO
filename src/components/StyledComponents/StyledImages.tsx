import styled from "styled-components";

export const StyledImage = styled.img`
  border-radius: 15px;

  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 3px solid #ffffff9c;
`;

export const HoverImage = styled(StyledImage)`
  :hover {
    background-color: orange;
  }
`;
