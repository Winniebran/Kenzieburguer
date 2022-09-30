import { StyledSpan} from "../../../styles/typographt";
import { StyledCartTotal } from "./StyledCartTotal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const CartTotal = ({ productsCart, setProductsCart }) => {
  const cartTotal = productsCart.reduce(
    (acc, act) => acc + act.price * act.counter,
    0
  );

  const removeAll = () => {
    setProductsCart([]);
    toast.success("Todos os itens foram removidos do carrinho", {
      position: "top-center",
      autoClose: 3000})
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

      <button className="removeAllButton" onClick={() => removeAll()}>Remover Todos</button>
    </StyledCartTotal>
  );
};
