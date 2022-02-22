import {setLoading} from '.';
import {API_PRODUCT_HOST} from '../../config';

export const getAllCategories = () => dispatch => {
  dispatch(setLoading(true));
  API_PRODUCT_HOST.get('/category_product')
    .then(res => {
      dispatch(setLoading(false));
      console.log(res.data);
      dispatch({type: 'SET_CATEGORIES', value: res.data});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err.response);
    });
};

export const getAllSubcategories = () => dispatch => {
  dispatch(setLoading(true));
  API_PRODUCT_HOST.get('/subcategory_product')
    .then(res => {
      dispatch(setLoading(false));
      console.log(res);
      dispatch({type: 'SET_SUBCATEGORIES', value: res.data});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err.response);
    });
};

export const getProductBySubcat = (subcategoryId, bearerToken) => dispatch => {
  dispatch(setLoading(true));
  API_PRODUCT_HOST.get('/product_by_subcategory', {
    params: {subcategory_id: subcategoryId},
    headers: {
      Authorization: bearerToken,
    },
  })
    .then(res => {
      dispatch(setLoading(false));
      console.log(res.data);
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err.response);
    });
};
