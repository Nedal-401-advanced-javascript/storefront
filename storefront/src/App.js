import Header from "./component/header";
import Footer from "./component/footer";
import Categories from "./component/categories/categories";
import Products from "./component/products/products";
import SimpleCart from "./component/simpleCart/index";
import superagent from "superagent";

function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
