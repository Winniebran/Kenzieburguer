import { StyledSpan, StyledTitle } from "../../styles/typographt";
import { StyledCart, StyledCardList, StyledCartEmpty } from "./StyledCart";
import { CartProducts } from "./CartProduts/CartProduts";
import { CartTotal } from "./CartTotal/CartTotal";

export const Cart = ({
  productsCart,
  setProductsCart,
  addToCart,
  reduceFromCart,
}) => {
  const removeFromCart = (remove) => {
    const removeItem = productsCart.filter((product) => product !== remove);
    setProductsCart(removeItem);
  };

  return (
    <StyledCart>
      <StyledTitle tag="h2" color="one">
        Carrinho de Compras
      </StyledTitle>

      {!productsCart.length ? (
        <StyledCartEmpty>
          <StyledTitle tag="h3">Sua sacola está vazia</StyledTitle>
          <StyledSpan color="one" fontSize="one">
            Adicione Itens
          </StyledSpan>
        </StyledCartEmpty>
      ) : (
        <>
          <StyledCardList>
            {productsCart?.map((productCart) => {
              const { id } = productCart;
              return (
                <CartProducts
                  productCart={productCart}
                  key={id}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  reduceFromCart={reduceFromCart}
                />
              );
            })}
          </StyledCardList>
          <CartTotal
            productsCart={productsCart}
            setProductsCart={setProductsCart}
          />
        </>
      )}
    </StyledCart>
  );
};
