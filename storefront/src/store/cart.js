import superagent from "superagent";
let cart = [];
const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload.product];
    case "del":
      // should create module for cart
      // should use superagent to delete from cart database(delete)
      state.splice(action.payload, 1);
      console.log(state);
      return [...state];

    default:
      return state;
  }
};
let url = "https://productsandstuff.herokuapp.com/api/v1/products";

export const updateRemoteData = (product, i) => (dispatch) => {
  // return a fucntion that will call superagent API
  console.log("updateRemoteData : ", product, i);
  if (product.inventoryCount) {
    console.log(
      "product.inventoryCount before add << ",
      product.inventoryCount,
      " id: ",
      i
    );
    return superagent
      .get(`${url}/${product._id}`)
      .then((DBproduct) =>
        // console.log(' inventoryCount before put ===> ',DBproduct.body[0].inventoryCount)
        superagent.put(`${url}/${DBproduct.body[0]._id}`).send({
          ...DBproduct,
          inventoryCount: DBproduct.body[0].inventoryCount - 1,
        })
      )
      .then((data) => {
        // call my action after getting the API response.
        console.log(
          "product.inventoryCount after add >>",
          data.body.inventoryCount,
          " id: ",
          i
        );
        // dispatch(updateCart({ ...data, inventoryCount: data.body.inventoryCount - 1 },i));
        dispatch(updateCart(data.body, i));
      });
  }
};

export const updateCart = (product, i) => {
  // should use superagent to update cart database module(put)
  return {
    type: "addToCart",
    payload: { product, i },
  };
};
export const delItem = (itemId) => {
  return {
    type: "del",
    payload: itemId,
  };
};

export default cartReducer;
