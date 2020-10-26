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
  console.log('categories here >>', state);
  switch (action.type) {
    case "updateAction":
      let active =action.payload
      return active ;

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
