const initPorducts = {
  products: [],
};

export const allProductsReducer = (state = initPorducts, action) => {
  if (action.type === 'SET_PRODUCT') {
    return {
      ...state,
      products: action.value,
    };
  }
  return state;
};
