import {setLoading} from '.';
import {API_PRODUCT_HOST} from '../../config';

export const getAllProducts = () => dispatch => {
  dispatch(setLoading(true));
  API_PRODUCT_HOST.get('/all_product')
    .then(res => {
      dispatch(setLoading(false));
      console.log(res.data);
      dispatch({type: 'SET_PRODUCT', value: res.data});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err.response);
    });
};
