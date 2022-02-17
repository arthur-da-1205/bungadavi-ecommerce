import {setLoading} from '.';
import {API_USER_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {storeData} from '../../utils/storage';

export const registerAction = (dataRegister, navigation) => dispatch => {
  dispatch(setLoading(true));
  API_USER_HOST.post('/register', dataRegister)
    .then(res => {
      dispatch(setLoading(false));
      console.log(res.data);
      const userId = res.data.User;
      console.log(userId);
      storeData('USER_ID', {value: userId});
      dispatch({type: 'SET_REGISTER', value: dataRegister});
      navigation.navigate('SigninScreen');
    })
    .catch(err => {
      dispatch(setLoading(false));
      toastMessage('Email or Username already exist', 'danger');
      console.log(err);
    });
};

export const siginAction = (dataUser, navigation) => dispatch => {
  dispatch(setLoading(true));
  API_USER_HOST.post('/login', dataUser)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: 'SET_SIGNIN', value: dataUser});
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
