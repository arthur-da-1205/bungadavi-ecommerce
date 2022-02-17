import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constant';
import {Logo} from '../../assets';
import {Button, InputField, Space} from '../../components';

const SigninScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Logo />
          <Space height={18} />
          <View style={styles.logoContainer}>
            <Icon name="login" size={25} color={COLORS.primary2} />
            <Space width={8} />
            <Text style={styles.title}>Sign In to Continue</Text>
          </View>
        </View>
        <Space height={50} />
        <View style={styles.inputContainer}>
          <InputField iconName="email-outline" placeholder="Your email" />
          <Space height={25} />
          <InputField iconName="lock-outline" placeholder="Password" />
          <Space height={50} />
          <Button
            labelBtn="Sign In"
            btnColor={COLORS.primary2}
            onPress={() => {
              navigation.navigate('OTPScreen');
            }}
          />
        </View>
        <Space height={30} />
        {/* <View style={styles.textOR}>
          <Text>OR</Text>
        </View> */}
        <Space height={30} />
        {/* <View style={styles.googleBtn}>
          <Button
            image={icGoogle}
            labelBtn="Sign In with Google"
            btnColor={COLORS.white}
            textColor={COLORS.black}
          />
        </View> */}
        <Space height={50} />
        <View style={styles.forgotContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPasswordScreen');
            }}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Space height={10} />
          <View style={styles.dontHaveContainer}>
            <Text style={styles.dontHaveText}>
              Don't have an account? {''} {''}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignupScreen');
              }}>
              <Text style={styles.registText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {flex: 1, alignItems: 'center'},
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {flex: 3, justifyContent: 'center'},
  forgotContainer: {flex: 0.2, alignItems: 'center'},
  forgotText: {fontFamily: 'Poppins-Regular', color: COLORS.primary2},
  dontHaveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontHaveText: {fontFamily: 'Poppins-Regular'},
  registText: {fontFamily: 'Poppins-Regular', color: COLORS.primary2},
});
