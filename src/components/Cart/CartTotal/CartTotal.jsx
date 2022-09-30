import { StyledSpan} from "../../../styles/typographt";
import { StyledCartTotal } from "./StyledCartTotal";

export const CartTotal = ({ productsCart, setProductsCart }) => {
  const cartTotal = productsCart.reduce(
    (acc, act) => acc + act.price * act.counter,
    0
  );

  const removeAll = () => {
    setProductsCart([]);
  };

  return (
    <StyledCartTotal>
      <div>
        <StyledSpan color="three" fontSize="one">Total:</StyledSpan>
        <StyledSpan color="one" fontSize="three">
          {cartTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledSpan>
      </div>

      <button onClick={() => removeAll()}>Remover Todos</button>
    </StyledCartTotal>
  );
};
