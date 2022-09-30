import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { ProductList } from "./components/ProductList/ProductList";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Container } from "./styles/global";

function App() {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const baseUrl =
      "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

    axios
      .get(baseUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const editCart = (currentProduct, callback) => {
    const newProductCartList = productsCart.map((product) => {
      if (product.id === currentProduct.id) {
        return callback(product);
      } else {
        return product;
      }
    });
    setProductsCart(newProductCartList);
  };

  const addToCart = (currentProduct) => {
    if (!productsCart.some((product) => product.id === currentProduct.id)) {
      const newProductCart = { ...currentProduct, counter: 1 };
      setProductsCart([...productsCart, newProductCart]);
    } else {
      editCart(currentProduct, (product) => {
        const newProduct = { ...product, counter: product.counter + 1 };
        return newProduct;
      });
    }
  };

  const reduceFromCart = (currentProduct) => {
    if (currentProduct.counter > 1) {
      editCart(currentProduct, (product) => {
        const newProduct = { ...product, counter: product.counter - 1 };
        return newProduct;
      });
    } else {
      alert("Para retirar o item do carrinho, clique em remover.");
    }
  };

  const filterSearch = products.filter((product) =>
    input === ""
      ? true
      : product.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="App">
      <Header setInput={setInput} input={input} />
      <Container>
        <ProductList filterSearch={filterSearch} addToCart={addToCart} />
        <Cart
          productsCart={productsCart}
          setProductsCart={setProductsCart}
          addToCart={addToCart}
          reduceFromCart={reduceFromCart}
        />
      </Container>
    </div>
  );
}

export default App;
