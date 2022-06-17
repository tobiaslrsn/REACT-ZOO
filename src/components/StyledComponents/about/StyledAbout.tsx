import styled from "styled-components";

export const StyledAboutSpan = styled.span`
  width: 30%;
  min-width: 300px;
  color: white;
  background-color: #022602;
  padding: 1rem;
  border-radius: 6px;
  border: 5px solid orange;
  line-height: 1.5rem;
`;

export const StyledAboutSpanWide = styled(StyledAboutSpan)`
  width: 60%;
  min-width: 300px;
`;

export const StyledAboutImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledAboutImage = styled.img`
  min-width: 300px;
  width: 20%;
`;

export const AboutHeadings = styled.h2`
  color: orange;
  margin-bottom: -3rem;
  text-shadow: 1px 1px 4px #0f4e43;
`;
