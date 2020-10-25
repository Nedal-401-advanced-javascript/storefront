import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from "../../store/categories";
function Products(props) {
  return (
    <ul>
      {props.Products.map((ele, i) => {
        return <li key={i}>{ele}</li>;
      })}
    </ul>
  );
}
const mapStateToProps = state => ({
  Products: state.products
});
const mapDispatchToProps = {updateActive};
export default connect(mapStateToProps, mapDispatchToProps)(Products);