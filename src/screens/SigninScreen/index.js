import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icGoogle, Logo} from '../../assets';
import {Button, InputField, Space} from '../../components';

const SigninScreen = ({navigation}) => {
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
          <Space height={18} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="login" size={25} color="#F75306" />
            <Space width={8} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#F75306',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Sign In to Continue
            </Text>
          </View>
        </View>
        <Space height={50} />
        <View style={{flex: 2, justifyContent: 'center'}}>
          <InputField iconName="email-outline" placeholder="Your email" />
          <Space height={12} />
          <InputField iconName="lock-outline" placeholder="Password" />
          <Space height={28} />
          <Button
            labelBtn="Sign In"
            btnColor="#F26522"
            onPress={() => {
              navigation.navigate('MainApp');
            }}
          />
        </View>
        <Space height={30} />
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Text>OR</Text>
        </View>
        <Space height={30} />
        <View style={{flex: 1}}>
          <Button
            image={icGoogle}
            labelBtn="Sign In with Google"
            btnColor="#FFFF"
            textColor="#000"
          />
        </View>
        <Space height={50} />
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPasswordScreen');
            }}>
            <Text style={{fontFamily: 'Poppins-Regular', color: '#F26522'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <Space height={10} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>
              Don't have an account? {''} {''}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignupScreen');
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#F26522'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SigninScreen;
