import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from "../../store/categories";
import { updateCart } from "../../store/cart";
function Products(props) {
  return (
    <ul>
      {props.Products.products.map((ele, i) => {
        return <li key={i}>{ele.name} <button onClick={()=>updateCart(ele.name)}>add to cart</button></li>;
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