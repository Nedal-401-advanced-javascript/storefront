// import products from "../component/products/products";
import superagent from "superagent";

// Each product should have a category association, name, description, price, inventory count
let initalState = {
  products: [],
  listOnActive: ["choose The categorey you want"],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "updateAction":
      // state = initalState;
      return {
        ...state,
        listOnActive: state.products.filter(
          (product) => product.category === action.payload
        ),
      };

    case "addToCart":
      let { product, id } = action.payload;
      return {
        listOnActive: state.listOnActive.map((ele) =>
        ele._id === product._id ? product : ele
        ),
        products: state.products.map((ele) =>
          ele._id === product._id ? product : ele
        ),
      };
    // add new case to handle get
    case "GET":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

let url = "https://productsandstuff.herokuapp.com/api/v1/products";

// getRemotedata ---> superageny and despatch getAction
export const getRemoteData = () => (dispatch) => {
  // return a fucntion that will call superagent API
  return superagent.get(url).then((data) => {
    // call my action after getting the API response.
    dispatch(getAction(data.body));
  });
};
// getRemotedata ---> superageny and despatch getAction

// getAction ---> send the response to component
// acton creator function
const getAction = (payload) => {
  return {
    type: "GET",
    payload: payload,
  };
};
