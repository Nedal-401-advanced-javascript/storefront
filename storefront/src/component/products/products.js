import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from "../../store/categories";
function Products(props) {
  console.log('>>>>>>>>>>>>>>>>>>>>',props);

  return (
    <ul>
      {props.Products.filteredProducts.map((ele, i) => {
        return <li key={i}>{ele}</li>;
      })}
    </ul>
  );
}
// state came from the reducer  combineReducers({ products, categories });
const mapStateToProps = state => ({
  Products: state.products
});
const mapDispatchToProps = {updateActive};
export default connect(mapStateToProps, mapDispatchToProps)(Products);