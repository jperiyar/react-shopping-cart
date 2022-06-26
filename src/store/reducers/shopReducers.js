export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => {
  // alert(`add to cart ${JSON.stringify(product)}`);
  return {
    type: ADD_TO_CART,
    payload: { product }
  };
};

const initialState = {
  cart: []
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {
        payload: { product: newProduct }
      } = action;
      let updatedCart = [...state.cart];
      const itemIndex = updatedCart.findIndex((c) => c.id === newProduct.id);

      if (itemIndex > -1) {
        const itemToUpdate = { ...updatedCart[itemIndex] };
        itemToUpdate.qty += 1;
        updatedCart[itemIndex] = itemToUpdate;
      } else {
        newProduct.qty = 1;
        updatedCart.push(newProduct);
      }
      return {
        ...state,
        cart: updatedCart
      };
    case REMOVE_FROM_CART:
      return;
    default:
      return state;
  }
};

export default shopReducer;
