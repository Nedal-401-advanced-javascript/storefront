import React from 'react';
import { connect } from 'react-redux';
import { updateCart } from "../../store/cart";
function Products(props) {
  console.log(props.Products);
  return (
    <ul>
      {props.Products.products.map((ele, i) => {
        return <li key={i}>{ele.name} <button onClick={()=>props.updateCart(ele.name)}>add to cart</button></li>;
      })}
    </ul>
  );
}
// state came from the reducer  combineReducers({ products, categories });
const mapStateToProps = state => ({
  Products: state.products
});
const mapDispatchToProps = {updateCart};
export default connect(mapStateToProps, mapDispatchToProps)(Products);