import styled from "styled-components";

export const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const LoaderSvg = styled.svg`
  fill: #894f34c5;
  animation: rotateLoader 4.5s infinite linear;

  @keyframes rotateLoader {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
export const LoaderSpan = styled.span`
  animation: fadeIn 2.5s infinite linear;

  @keyframes fadeIn {
    from {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
`;
export const LoaderText = styled.h3`
  color: white;
`;
