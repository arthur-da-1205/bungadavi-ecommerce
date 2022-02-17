import {combineReducers} from 'redux';
import {registerReducer, signinReducer} from './auth';
import {globalReducer} from './global';

// const reducer = combineReducers({registerReducer, globalReducer, photoReducer});
const reducer = combineReducers({
  registerReducer,
  globalReducer,
  signinReducer,
});
export default reducer;
