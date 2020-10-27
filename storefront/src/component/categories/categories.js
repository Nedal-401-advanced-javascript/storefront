import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from "../../store/categories";
function Categories(props) {
  console.log("at categories>> ",props);
  return (
    <ul>
      {props.categories.categories.map((ele,i) => {
        return <li key={i} onClick={()=>props.updateActive(ele.name)}>{ele.name}</li>;
      })}
    </ul>
  );
}
const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = {updateActive};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);