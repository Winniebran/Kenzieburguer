import { StyledSpan, StyledTitle } from "../../../styles/typographt";
import { StyleData, StyledImg, StyledItem } from "./StyledProduct";

export const Product = ({ product, addToCart }) => {
  const { category, img, name, price } = product;

  return (
    <StyledItem>
      <StyledImg>
        <img src={img} alt={name} />
      </StyledImg>
      <StyleData>
        <StyledTitle tag="h2" ellipsis="one">{name}</StyledTitle>
        <StyledSpan fontSize="three" color="one">
          {category}
        </StyledSpan>
        <StyledSpan fontSize="one" color="two">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledSpan>
        <button onClick={() => addToCart(product)}>Adicionar</button>
      </StyleData>
    </StyledItem>
  );
};
