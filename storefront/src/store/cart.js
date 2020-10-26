let cart=[];

export default (state=cart,action)=>{
    console.log(state,action);
    switch (action.type) {
        case "addToCart":
            console.log('reached cart',[...state.cart,action.payload]);
            return {...state,cart:[...state.cart,action.payload]}
    
        default: return state
    }
}

export const updateCart=(name)=>{
    return{
        type:"addToCart",
        payload:name
    }
}