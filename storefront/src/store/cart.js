let cart = [];

export default (state = cart, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload.name];

    default:
      return state;
  }
};

export const updateCart = (product) => {
  return {
    type: "addToCart",
    payload: product,
  };
};
