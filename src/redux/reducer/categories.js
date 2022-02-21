const initCategories = {
  categories: [],
};

export const allcategoriesReducer = (state = initCategories, action) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      ...state,
      products: action.value,
    };
  }
  return state;
};
