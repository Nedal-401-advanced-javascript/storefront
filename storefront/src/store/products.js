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
  ],
};

export default (state = initalState,action)=>{
  return state.products.filter((product)=>product.category===action.payload)
}