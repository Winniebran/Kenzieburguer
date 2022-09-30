import { StyledSpan, StyledTitle } from "../../../styles/typographt";
import { StyledButtonsCard, StyledCardItem, StyledDescriptionCard, StyledImgCard, StyledInformationCard } from "./StyledCartProduts";

export const CartProducts = ({
  productCart,
  removeFromCart,
  addToCart,
  reduceFromCart,
}) => {
  const { category, img, name, counter } = productCart;

  return (
    <StyledCardItem>
      <StyledImgCard>
        <img src={img} alt={name} />
      </StyledImgCard>
      <StyledDescriptionCard>
        <StyledInformationCard>
          <StyledTitle tag="h2" ellipsis="one">{name}</StyledTitle>
          <StyledSpan color="one" fontSize="three">
            {category}
          </StyledSpan>
        </StyledInformationCard>
        <StyledButtonsCard>
          <div>
            <button onClick={() => reduceFromCart(productCart)}>-</button>
            <StyledSpan color="three" fontSize="two">{counter}</StyledSpan>
            <button onClick={() => addToCart(productCart)}>+</button>
          </div>
          <button className="removeButton" onClick={() => removeFromCart(productCart)}>Remover</button>
        </StyledButtonsCard>
      </StyledDescriptionCard>
    </StyledCardItem>
  );
};
