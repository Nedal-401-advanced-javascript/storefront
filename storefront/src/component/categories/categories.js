import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from "../../store/categories";
function Categories(props) {
  return (
    <ul>
      {props.categories.map((ele,i) => {
        return <li key={i} onClick={()=>props.activate(ele)}>{ele}</li>;
      })}
    </ul>
  );
}
const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = {updateActive};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);