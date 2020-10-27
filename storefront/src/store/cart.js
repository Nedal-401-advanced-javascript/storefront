let cart = [];

export default (state = cart, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "del":
      // should create module for cart 
      // should use superagent to delete from cart database(delete)
      state.splice(action.payload,1)
      console.log(state);
      return [...state]

    default:
      return state;
  }
};

export const updateCart = (product) => {
  // should use superagent to update cart database module(put)
  return {
    type: "addToCart",
    payload: product,
  };
};
export const delItem = (itemId) => {
  return {
    type: "del",
    payload: itemId,
  };
};
