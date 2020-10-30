import { connect } from "react-redux";
import { updateRemoteData } from "../../store/cart";
function ProductDetails(props) {
  let item = props.product.filter((ele) => {
    return ele._id === window.location.pathname.split("/")[2];
  });
  return (
    <div>
      <h2>{item[0].name}</h2>
      <p>{item[0].discrption}</p>
      <h3>Price: {item[0].price}</h3>
      <h3>In Stock: {item[0].inventoryCount}</h3>
      <button onClick={() => props.updateCart(item[0], 1)}>Buy</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.products.products,
});
const mapDispatchToProps = (dispatch) => ({
  updateCart: (product, i) => dispatch(updateRemoteData(product, i)),
});
// export default ProductDetails
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
