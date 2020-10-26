import products from "../component/products/products";

// Each product should have a category association, name, description, price, inventory count
let initalState = {
  products: [
    {
      category: "electronics",
      name: "PC",
      description: "it is kind of computers",
      price: "1000$",
      inventoryCount: "14511",
    },
    {
      category: "electronics",
      name: "PC2",
      description: "it is kind of computers",
      price: "1000$",
      inventoryCount: "14511",
    },
    {
      category: "tools",
      name: "Hammer",
      description: "it is small size ",
      price: "10$",
      inventoryCount: "11521",
    },
    {
      category: "tools",
      name: "screwdriver",
      description: "hand tool",
      price: "10$",
      inventoryCount: "1211",
    },
    {
      category: "tools",
      name: "drill",
      description: "made in jordan ",
      price: "25$",
      inventoryCount: "1",
    },
  ],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "updateAction":
      state = initalState;
      return {
        products: state.products.filter(
          (product) =>
            product.category === action.payload 
        ),
      };
    case "addToCart":
      let updatedCount = state.products.map((product) => {
        if (product.name == action.payload && product.inventoryCount ) {
          return { ...product, inventoryCount: product.inventoryCount - 1 };
        } else {
          return product;
        }

      });
      console.log("updatedCount", updatedCount);
      return {products:updatedCount};

    default:
      return state;
  }
};
