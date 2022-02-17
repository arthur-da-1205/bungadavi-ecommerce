import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, DIMENSIONS} from '../../../constant';
import {Button, Space} from '../../components';

const totalInput = Array(4).fill('');
const inputWidth = Math.round(DIMENSIONS.widthScreen / 6);
let newInputIndex = 0;

const OTPScreen = () => {
  const inputs = useRef();
  const [OTP, setOTP] = useState({0: '', 1: '', 2: '', 3: ''});
  const [nextInput, setNextInput] = useState(0);
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

  return (
    <KeyboardAvoidingView style={{flex: 1, paddingTop: 20}}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 18,
          color: COLORS.black,
          textAlign: 'center',
        }}>
        ENTER YOUR OTP
      </Text>
      <Space height={10} />
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
          color: COLORS.black,
          textAlign: 'center',
        }}>
        OTP has been sent to your email
      </Text>
      <Space height={80} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 40,
        }}>
        {totalInput.map((input, index) => {
          return (
            <View
              key={index.toString()}
              style={{
                flexDirection: 'row',
                width: inputWidth,
                height: inputWidth - 10,
                borderBottomWidth: 1,
                borderColor: COLORS.primary2,
                marginRight: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                ref={nextInput === index ? inputs : null}
                value={OTP[index]}
                placeholder="-"
                keyboardType="numeric"
                maxLength={1}
                onChangeText={input => {
                  handleChangeText(input, index);
                }}
                style={{
                  textAlign: 'center',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 22,
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={{flex: 1, paddingHorizontal: 60, alignItems: 'center'}}>
        <Button labelBtn="SUBMIT" btnColor={COLORS.primary2} />
        <Space height={18} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
                color: COLORS.primary2,
              }}>
              Resend
            </Text>
          </TouchableOpacity>
          <Space width={10} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 17,
              color: COLORS.black,
            }}>
            (10:00)
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPScreen;
