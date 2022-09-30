import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { ProductList } from "./components/ProductList/ProductList";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Container } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
      toast.success("Item adicionado ao carrinho", {
        position: "top-center",
        autoClose: 3000,
      });
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
      toast.warning("Para retirar o item do carrinho, clique em remover.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const filterSearch = products.filter((product) =>
    input === ""
      ? true
      : product.name.toLowerCase()
      .normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
      .includes(input.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "").trim()) ||
        product.category
          .toLowerCase()
          .normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
          .includes(input.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "").trim())
  );

  return (
    <div className="App">
      <Header setInput={setInput} input={input} />
      <Container>
        <ProductList filterSearch={filterSearch} addToCart={addToCart} input={input}/>
        <ToastContainer />
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
