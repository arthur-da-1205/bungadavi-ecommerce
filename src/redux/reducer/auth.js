const initStateRegister = {
  username: '',
  fullname: '',
  email: '',
  phone: '',
  passsword: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      username: action.value.username,
      fullname: action.value.fullname,
      email: action.value.email,
      phone: action.value.phone,
      passsword: action.value.passsword,
    };
  }
  return state;
};

const initStateSignin = {
  email: '',
  phone: '',
  expiredToken: '9999h',
  expiration_otp: '15',
};

export const signinReducer = (state = initStateSignin, action) => {
  if (action.type === 'SET_SIGNIN') {
    return {
      ...state,
      email: action.value.email,
      passsword: action.value.passsword,
      expiredToken: action.value.expiredToken,
      expiration_otp: action.value.expiration_otp,
    };
  }
  return state;
};

const initVerifyOTP = {
  user_id: '',
  verified: '',
  otp_code: '',
};

export const otpReducer = (state = initVerifyOTP, action) => {
  if (action.type === 'SET_OTP') {
    return {
      ...state,
      user_id: action.value.user_id,
      verified: action.value.verified,
      otp_code: action.value.otp_code,
    };
  }
  return state;
};
