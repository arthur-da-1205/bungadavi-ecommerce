import {setLoading} from '.';
import {API_USER_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {storeData} from '../../utils/storage';

export const registerAction = (dataRegister, navigation) => dispatch => {
  dispatch(setLoading(true));
  if (dataRegister) {
    API_USER_HOST.post('/register', dataRegister)
      .then(res => {
        dispatch(setLoading(false));
        console.log(res.data);
        dispatch({type: 'SET_REGISTER', value: dataRegister});
        navigation.reset({index: 0, routes: [{name: 'SigninScreen'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        toastMessage('Email or Username already exist', 'danger');
        console.log(err);
      });
  }
};

export const signinAction = (dataUser, navigation) => dispatch => {
  dispatch(setLoading(true));
  API_USER_HOST.post('/login', dataUser)
    .then(res => {
      dispatch(setLoading(false));
      console.log(res.data);
      const userId = res.data.User;
      console.log(userId);
      const timestamp = res.data.Details.timestamp;
      console.log(timestamp);
      const token = res.data.Token;
      console.log(token);

      storeData('USER_ID', {value: userId});
      storeData('TIMESTAMP', {value: timestamp});
      storeData('TOKEN', {value: token});

      dispatch({type: 'SET_SIGNIN', value: dataUser});
      navigation.navigate('OTPScreen');
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err.response.data);
      if (err.response.status === 500) {
        toastMessage(err.response.data);
      }
    });
};

export const verifyOTP = (bodyFormOTP, bearerToken, navigation) => dispatch => {
  dispatch(setLoading(true));
  API_USER_HOST.put(
    '/verify_otp',
    bodyFormOTP,
    // {user_id: userId, verified: timestamp, otp_code: otpCode},
    {
      headers: {
        Authorization: bearerToken,
        'content-type': 'application/json',
      },
    },
  )
    .then(res => {
      dispatch(setLoading(false));
      console.log(res.data);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err.response);
      toastMessage(err.response.data);
    });
};
