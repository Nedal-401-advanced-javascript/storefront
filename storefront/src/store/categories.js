let initalState = {
  categories: [
    {
      name: "electronics",
      display_name: "true",
      description: "collection of the domistic and industrial tools "
    },
    {
      name: "tools",
      display_name: "true",
      description: "collection of hand tools for technican"
    },
  ],
  active: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "updateAction":
      return {...state, active: action.payload} ;
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
