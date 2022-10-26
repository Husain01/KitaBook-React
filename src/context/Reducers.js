export const cartReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id != action.payload._id),
      };
    case "INC_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty + 1) : c.qty
        ),
      };
    case "DEC_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty - 1) : c.qty
        ),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
        toast: true,
        toastContent: "Added to Wishtlist",
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((c) => c._id != action.payload._id),
        toast: true,
        toastContent: "Removed from Wishtlist",
      };
    case "EMPTY":
      return {
        ...state,
        cart: [],
        wishlist: [],
      };
    case "EMPTY_TOAST":
      return {
        ...state,
        toast: false,
        toastContent: "",
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortBy: action.payload };
    case "SORT_BY_RATING":
      return { ...state, rating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "SLIDER":
      return { ...state, sliderValue: action.payload };
    case "SELFHELP":
      return { ...state, categorySelfHelp: !state.categorySelfHelp };
    case "FICTION":
      return { ...state, categoryFiction: !state.categoryFiction };
    case "NONFICTION":
      return { ...state, categoryNonFiction: !state.categoryNonFiction };
    case "CLEAR_FILTERS":
      return {
        sortBy: null,
        categorySelfHelp: false,
        categoryFiction: false,
        categoryNonFiction: false,
        rating: 0,
        searchQuery: "",
        sliderValue: 500,
      };
    default:
      return state;
  }
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    case "CHECKUSER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      state;
  }
};
