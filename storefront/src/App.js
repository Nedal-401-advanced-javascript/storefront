import Header from "./component/header";
import Footer from "./component/footer";
import Categories from "./component/categories/categories";
import Products from "./component/products/products";
import SimpleCart from "./component/simpleCart/index";
import ProductDetails from "./component/products/details";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <Switch>
        <Route exact path="/">
          <Categories />
          <Products />
        </Route>

        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
