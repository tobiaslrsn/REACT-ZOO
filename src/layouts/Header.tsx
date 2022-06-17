import {
  HeaderLink,
  HeaderLinkContainer,
  StyledHeaderContainer,
} from "../components/StyledComponents/header/StyledHeader";

export const Header = () => {
  return (
    <>
      <StyledHeaderContainer>
        <HeaderLinkContainer>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/about">about</HeaderLink>
        </HeaderLinkContainer>
      </StyledHeaderContainer>
    </>
  );
};
