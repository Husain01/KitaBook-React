export const cartReducer = (state, action) => {
    switch (action.type) {
        case "INITIALIZE_PRODUCTS":
            return{
                ...state,
                products: action.payload,
            }
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart,{...action.payload, qty:1}]}
        case "REMOVE_FROM_CART":
            return {...state, cart:state.cart.filter(c=>c._id != action.payload._id)}
            case "INC_QTY":
                return {...state,cart: state.cart.filter((c)=>c.id === action.payload.id ?( c.qty = action.payload.qty + 1): c.qty)}
            case "DEC_QTY":
                return {...state,cart: state.cart.filter((c)=>c.id === action.payload.id ?( c.qty = action.payload.qty - 1): c.qty)}
        default:
            return state;
    }
}