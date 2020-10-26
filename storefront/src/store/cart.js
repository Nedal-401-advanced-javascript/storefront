let cart = [];

export default (state = cart, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];

    default:
      return state;
  }
};

export const updateCart = (name) => {
  return {
    type: "addToCart",
    payload: name,
  };
};
