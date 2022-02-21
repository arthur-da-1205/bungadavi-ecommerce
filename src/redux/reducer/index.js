import {combineReducers} from 'redux';
import {registerReducer, signinReducer} from './auth';
import {globalReducer} from './global';
import {allProductsReducer} from './product';
import {allCategoriesReducer, allSubcategoriesReducer} from './categories';

// const reducer = combineReducers({registerReducer, globalReducer, photoReducer});
const reducer = combineReducers({
  registerReducer,
  globalReducer,
  signinReducer,
  allProductsReducer,
  allCategoriesReducer,
  allSubcategoriesReducer,
});
export default reducer;
