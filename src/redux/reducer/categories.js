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

const initProductBySubcat = {
  productBySubcat: [],
};

export const productBySubcatReducer = (state = initProductBySubcat, action) => {
  if (action.type === 'SET_PRODUCT_BY_SUBCATEGORY') {
    return {
      ...state,
      productBySubcat: action.value,
    };
  }
  return state;
};
