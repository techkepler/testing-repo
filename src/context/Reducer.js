export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
      };

    case "CHANGE_CART_ITEM_QTY":
      return {
        ...state,
        carts: state.carts.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "Filter_By_Price":
      return { ...state, sort_by: action.payload };

    case "Filter_Fast_Delivery":
      return { ...state, fast_delivery: !state.fast_delivery };

    case "Filter_Out_Of_Stock":
      return { ...state, out_of_stock: !state.out_of_stock };

    case "Filter_By_Rating":
      return { ...state, rating: action.payload };

    case "Filter_By_Search_Query":
      return { ...state, search_query: action.payload };

    case "Clear_Filter":
      return {
        sort_by: "",
        fast_delivery: false,
        out_of_stock: false,
        rating: 0,
        search_query: "",
      };

    default:
      return state;
  }
};
