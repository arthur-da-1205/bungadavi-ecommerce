import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
        <Space height={25} />
        <View style={{flex: 2, justifyContent: 'center'}}>
          <InputField iconName="email-outline" placeholder="Your email" />
          <Space height={8} />
          <InputField iconName="lock-outline" placeholder="Password" />
          <Space height={16} />
          <Button labelBtn="Sign In" btnColor="#F26522" />
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
