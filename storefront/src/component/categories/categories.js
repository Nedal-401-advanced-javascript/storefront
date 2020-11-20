import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { connect } from "react-redux";
import { updateActive, getCategories } from "../../store/categories";
function Categories(props) {

  useEffect(() => {
    if(!props.categories.active)props.getCategories();
  });
  let activeIndex = 0;
  props.categories.categories.forEach((ele, i) => {
    if (props.categories.active === ele.name) activeIndex = i;
  });
  return (
    <Paper square>
      <Tabs
        value={activeIndex}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {props.categories.categories.map((ele, i) => {
          return (
            <Tab
              label={ele.name}
              key={i}
              onClick={() => props.updateActive(ele.name)}
            >
              {ele.name}
            </Tab>
          );
        })}
      </Tabs>
    </Paper>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});
const mapDispatchToProps = { updateActive, getCategories };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
