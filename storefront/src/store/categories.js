import superagent from "superagent";
let initalState = {
  categories: [],
  active: null,
};
const catReducer = (state = initalState, action) => {
  switch (action.type) {
    case "updateAction":
      return { ...state, active: action.payload };
    case "GetCategories":
      return { active: action.payload[0], categories: action.payload };
    default:
      return state;
  }
};

export const updateActive = (name) => {
  return {
    type: "updateAction",
    payload: name,
  };
};

export const updateCategoriesState = (categories) => {
  return {
    type: "GetCategories",
    payload: categories,
  };
};
//create middleware to get categories from the API
let url = "https://productsandstuff.herokuapp.com/api/v1/categories";
export const getCategories = () => (dispatch) => {
  return superagent.get(url).then((data) => {
    dispatch(updateCategoriesState(data.body));
  });
};
// update
export default catReducer;
