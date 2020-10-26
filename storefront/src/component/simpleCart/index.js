import React from "react";
import { connect } from "react-redux";
function SimpleCart(props) {
  let items = props.Cart.length ? (
    props.Cart.map((item, i) => <li key={i}>{item} </li>)
  ) : (
    <h3>there ate not items</h3>
  );

  return (
    <>
      <h3> there are {items.length} items in the </h3>
      <ul>{items}</ul>
    </>
  );
}
// send the state for props
const mapStateToProps = (state) => ({
  Cart: state.cart,
});
export default connect(mapStateToProps)(SimpleCart);
// connect
