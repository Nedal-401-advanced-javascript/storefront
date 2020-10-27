// import products from "../component/products/products";
import superagent from "superagent";

// Each product should have a category association, name, description, price, inventory count
let initalState = {
  products: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "updateAction":
      state = initalState;
      return {
        products: state.products.filter(
          (product) => product.category === action.payload
        ),
      };

    case "addToCart":
      let updatedCount = state.products.map((product) => {
        if (product.name == action.payload && product.inventoryCount) {
          return { ...product, inventoryCount: product.inventoryCount - 1 };
        } else {
          return product;
        }
      });
      console.log("updatedCount", updatedCount);
      return { products: updatedCount };
    // add new case to handle get
    case "GET":
      console.log('reached the GET case,', action);
      return {products:action.payload};

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
    console.log(data);
    dispatch(getAction(data.body));
  });
};
// getAction ---> send the response to component
// acton creator function
const getAction = (payload) => {
  return {
    type: "GET",
    payload: payload,
  };
};



// {
//   category: "electronics",
//   name: "PC",
//   description: "it is kind of computers",
//   price: "1000$",
//   inventoryCount: "14511",
// },
// {
//   category: "electronics",
//   name: "PC2",
//   description: "it is kind of computers",
//   price: "1000$",
//   inventoryCount: "14511",
// },
// {
//   category: "tools",
//   name: "Hammer",
//   description: "it is small size ",
//   price: "10$",
//   inventoryCount: "11521",
// },
// {
//   category: "tools",
//   name: "screwdriver",
//   description: "hand tool",
//   price: "10$",
//   inventoryCount: "1211",
// },
// {
//   category: "tools",
//   name: "drill",
//   description: "made in jordan ",
//   price: "25$",
//   inventoryCount: "1",
// },
