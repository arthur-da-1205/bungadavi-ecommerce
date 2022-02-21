const initCategories = {
  categories: [],
};

export const allCategoriesReducer = (state = initCategories, action) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      ...state,
      categories: action.value,
    };
  }
  return state;
};

const initSubcategories = {
  subcategories: [],
};

export const allSubcategoriesReducer = (state = initSubcategories, action) => {
  if (action.type === 'SET_SUBCATEGORIES') {
    return {
      ...state,
      subcategories: action.value,
    };
  }
  return state;
};
