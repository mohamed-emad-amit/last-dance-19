import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Initial State
const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];

const totalAmount = cartItems.reduce(
  (sum, curr) => sum + curr.price * curr.quantity,
  0
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    // Items
    cartItems,
    totalAmount, // order,
  },
  reducers: {
    addToCart: (state, action) => {
      // Product
      const item = action.payload;

      // Check Item Exist or Not
      const exstingProduct = state.cartItems.find((p) => p.id == item.id);

      if (exstingProduct) {
        // Before Increase: Check Stock
        if (exstingProduct.stock == exstingProduct.quantity) {
          toast.error("Operation Cancelled, due Reached Limit");
          return;
        }

        // Increase Qty
        exstingProduct.quantity++;

        toast.success(
          `You Added This Product: ${exstingProduct.quantity} Times`
        );
      } else {
        // Qty: 1 - Push
        state.cartItems.push({ ...item, quantity: 1 });
        toast.success("Product Added Successfully");
      }

      // Store LocalStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Update TotalAmount - Action
      cartSlice.caseReducers.calcTotal(state);
    },

    removeFromCart: (state, action) => {
      // Product #ID
      const id = action.payload;
      // Update Fliter
      state.cartItems = state.cartItems.filter((p) => p.id != id);

      // Update LocalStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Update TotalAmount - Action
      cartSlice.caseReducers.calcTotal(state);
    },

    increateQty: (state, action) => {
      // Product #ID
      const id = action.payload;

      // Find Product
      const product = state.cartItems.find((p) => p.id == id);

      // Increase Qty
      product.quantity++;

      // Update LocalStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Update TotalAmount - Action
      cartSlice.caseReducers.calcTotal(state);
    },
    decreaseQty: (state, action) => {
      // Product #ID
      const id = action.payload;

      // Find Product
      const product = state.cartItems.find((p) => p.id == id);

      // Decrease Qty
      product.quantity--;

      // Update LocalStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // Update TotalAmount - Action
      cartSlice.caseReducers.calcTotal(state);
    },

    clearCart: (state) => {
      // Reset States
      state.cartItems = [];
      state.totalAmount = 0;
    },

    calcTotal: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (sum, curr) => sum + curr.price * curr.quantity,
        0
      );
    },
  },
});

export const {
  clearCart,
  calcTotal,
  addToCart,
  removeFromCart,
  increateQty,
  decreaseQty,
} = cartSlice.actions;
export default cartSlice.reducer;
