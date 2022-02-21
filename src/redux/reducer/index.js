import {combineReducers} from 'redux';
import {registerReducer, signinReducer} from './auth';
import {globalReducer} from './global';
import {allProductsReducer} from './product';
import {allcategoriesReducer} from './categories';

// const reducer = combineReducers({registerReducer, globalReducer, photoReducer});
const reducer = combineReducers({
  registerReducer,
  globalReducer,
  signinReducer,
  allProductsReducer,
  allcategoriesReducer,
});
export default reducer;
