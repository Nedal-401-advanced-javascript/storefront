import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateActive,getCategories } from "../../store/categories";
function Categories(props) {
  useEffect(()=>{
    props.getCategories()
  },[])
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
const mapDispatchToProps = {updateActive,getCategories};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);