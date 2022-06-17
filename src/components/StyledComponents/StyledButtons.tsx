import styled from "styled-components";

interface IButtonProps {
  color?: string;
  background?: string;
}

export const Button = styled.button`
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  outline: none;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const FeederButton = styled(Button)`
  color: ${(props: IButtonProps) => props.color || "#4A2222"};
  background-color: orange;

  :hover {
    background-color: #4a2222;
    color: lightgray;
  }
`;

export const DisabledButton = styled(Button)`
  color: ${(props: IButtonProps) => props.color || "lightgray"};
  background-color: gray;
`;
