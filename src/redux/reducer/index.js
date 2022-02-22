import {combineReducers} from 'redux';
import {registerReducer, signinReducer} from './auth';
import {globalReducer} from './global';
import {allProductsReducer} from './product';
import {
  allCategoriesReducer,
  allSubcategoriesReducer,
  productBySubcatReducer,
} from './categories';

// const reducer = combineReducers({registerReducer, globalReducer, photoReducer});
const reducer = combineReducers({
  registerReducer,
  globalReducer,
  signinReducer,
  allProductsReducer,
  allCategoriesReducer,
  allSubcategoriesReducer,
  productBySubcatReducer,
});
export default reducer;
