import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  //   console.log(action);
  if (action.type === "ADD_ITEM") {
    // console.log("second");
    // Add item logic
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingCartItemIndex > -1) {
      // Item already exists in cart

      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      return {
        ...state,
        items: updatedItems,
      };
    } else {
      // Item does not exist in cart
      const newItem = { ...action.item, quantity: 1 };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    }
  } else if (action.type === "REMOVE_ITEM") {
    // Remove item logic
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      const updatedItems = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: updatedItems,
      };
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      const updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      return {
        ...state,
        items: updatedItems,
      };
    }
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  const cartContext = {
    items: cart.items,
    addItem: (item) => {
      dispatch({ type: "ADD_ITEM", item: item });
    },
    removeItem: (id) => {
      dispatch({ type: "REMOVE_ITEM", id: id });
    },
  };

  console.log(cartContext.items);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
