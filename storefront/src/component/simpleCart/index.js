import React from "react";
import { connect } from "react-redux";
import { delItem } from "../../store/cart";
import { Link } from "react-router-dom";
function SimpleCart(props) {
  let items = props.Cart.length ? (
    props.Cart.map((item, i) => (
      <li key={i} id={i}>
        {item.name}
        <button onClick={(e) => props.delItem(e.target.parentNode.id)}>
          X
        </button>
      </li>
    ))
  ) : (
    <h3>there are not any items</h3>
  );
  return (
    <>
      <h3>
        <Link to="/cart">({items.length}) items in Cart</Link>
      </h3>
      <ul>{items}</ul>
    </>
  );
}
// send the state for props

const mapStateToProps = (state) => ({
  Cart: state.cart,
});
const mapDispatchToProps = (dispatch) => {
  return {
    delItem: (id) => dispatch(delItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
// connect
