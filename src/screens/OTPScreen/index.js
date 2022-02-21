import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, DIMENSIONS} from '../../../constant';
import {Button, Space} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getData} from '../../utils/storage';
import {useDispatch} from 'react-redux';
import {verifyOTP} from '../../redux/action';

const totalInput = Array(6).fill('');
const inputWidth = Math.round(DIMENSIONS.widthScreen / 6);
let newInputIndex = 0;

// TODO: check and validation the input
const isOTPValid = obj => {
  return Object.values(obj).every(val => val.trim());
};

const OTPScreen = ({navigation}) => {
  const inputs = useRef();
  const [OTP, setOTP] = useState({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
  const [nextInput, setNextInput] = useState(0);
  const [userId, setUserId] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [token, setToken] = useState('');

  const dispatch = useDispatch();
  //  TODO: get input value, set to var OTP and auto next OTP field
  const handleChangeText = (input, index) => {
    const newOTP = {...OTP};
    newOTP[index] = input;
    setOTP(newOTP);

    const lastInput = totalInput.length - 1;
    if (!input) {
      newInputIndex = index === 0 ? 0 : index - 1;
    } else {
      newInputIndex = index === lastInput ? lastInput : index + 1;
    }
    setNextInput(newInputIndex);
  };
  console.log(OTP);

  useEffect(() => {
    inputs.current.focus();
  }, [nextInput]);

  useEffect(() => {
    getData('USER_ID').then(res => {
      setUserId(res.value);
      console.log(userId);
    });
    getData('TIMESTAMP').then(res => {
      setTimestamp(res.value);
      console.log(timestamp);
    });
    getData('TOKEN').then(res => {
      setToken(res.value);
      console.log(token);
    });
  }, [userId, timestamp, token]);
  var date = new Date(timestamp);
  const verified =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  console.log(verified);

  const bearerToken = `Bearer ${token}`;

  // TODO: send OTP to BE and Login to Home if Verified
  const onSubmitOTP = () => {
    Keyboard.dismiss();
    let otpCode = '';
    if (isOTPValid(OTP)) {
      Object.values(OTP).forEach(v => {
        otpCode += v;
      });
    }

    console.log(bodyFormOTP);
    console.log(bearerToken);
    var bodyFormOTP = {user_id: userId, verified: timestamp, otp_code: otpCode};
    dispatch(verifyOTP(bodyFormOTP, bearerToken, navigation));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="lock-check" size={75} color={COLORS.primary2} />
      </View>
      <Text style={styles.textHeader}>ENTER YOUR OTP</Text>
      <Space height={10} />
      <Text style={styles.textHeader}>OTP has been sent to your email</Text>
      <Space height={80} />
      <View style={styles.inputContainer}>
        {totalInput.map((input, index) => {
          return (
            <View key={index.toString()} style={styles.inputField}>
              <TextInput
                ref={nextInput === index ? inputs : null}
                value={OTP[index]}
                placeholder="-"
                keyboardType="numeric"
                maxLength={1}
                onChangeText={inputVal => {
                  handleChangeText(inputVal, index);
                }}
                style={styles.textOTP}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.btnContainer}>
        <Button
          labelBtn="SUBMIT"
          btnColor={COLORS.primary2}
          onPress={onSubmitOTP}
        />
        <Space height={18} />
        <View style={styles.resendBtn}>
          <TouchableOpacity disabled>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
          <Space width={10} />
          <Text style={styles.timer}>(10:00)</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 25},
  iconContainer: {flex: 0.7, alignItems: 'center', marginBottom: 8},
  textHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  inputField: {
    flexDirection: 'row',
    width: inputWidth - 20,
    height: inputWidth - 10,
    borderBottomWidth: 1,
    borderColor: COLORS.primary2,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOTP: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
  },
  btnContainer: {flex: 1, paddingHorizontal: 60, alignItems: 'center'},
  resendBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resendText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: COLORS.primary2,
  },
  timer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: COLORS.black,
  },
});
