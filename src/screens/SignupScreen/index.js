import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Logo} from '../../assets';
import {Button, InputField, Space} from '../../components';

const SignupScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 70,
      }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Logo />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#F75306',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Let's Get Started
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#9098B1',
              fontSize: 16,
            }}>
            Create a new account
          </Text>
        </View>
        <Space height={30} />
        <View style={{flex: 3, justifyContent: 'center'}}>
          <InputField iconName="account-outline" placeholder="Full Name" />
          <Space height={8} />
          <InputField iconName="email-outline" placeholder="Your Email" />
          <Space height={16} />
          <InputField iconName="lock-outline" placeholder="Password" />
          <Space height={16} />
          <InputField
            iconName="lock-outline"
            placeholder="Type Password Again"
          />
          <Space height={16} />
          <Button labelBtn="Sign Up" btnColor="#F26522" />
        </View>
        <Space height={50} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'Poppins-Regular'}}>
            Already have account? {''}
            {''}{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SigninScreen');
            }}>
            <Text style={{fontFamily: 'Poppins-Regular', color: '#F26522'}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupScreen;
