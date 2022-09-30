import { StyledTitle } from "../../styles/typographt";
import { Product } from "./Product/Product";
import { StyledList, StyledSection } from "./StyledProductList";

export const ProductList = ({ filterSearch, addToCart }) => {
  return (
    <StyledSection>
      {filterSearch.length ? (
        <StyledList>
          {filterSearch.map((product) => {
            const { id } = product;
            return <Product product={product} key={id} addToCart={addToCart} />;
          })}
        </StyledList>
      ) : (
        <StyledTitle tag="h2">Produto não encontrado</StyledTitle>
      )}
    </StyledSection>
  );
};
