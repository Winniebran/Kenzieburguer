import { Product } from "./Product/Product";
import { StyledList, StyledSection } from "./StyledProductList";

export const ProductList = ({ filterSearch, addToCart }) => {
  return (
    <StyledSection>
      <StyledList>
        {filterSearch.map((product) => {
          const { id } = product;
          return <Product product={product} key={id} addToCart={addToCart} />;
        })}
      </StyledList>
    </StyledSection>
  );
};
