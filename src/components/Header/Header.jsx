import { StyledContainer } from "../../components/Header/StyledHeader";
import { InputSearch } from "./InputSearch/InputSearch";
import { Logo } from "./Logo/Logo";
import { StyledHeader } from "./StyledHeader";

export const Header = ({ input, setInput }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <InputSearch input={input} setInput={setInput} />
      </StyledContainer>
    </StyledHeader>
  );
};
