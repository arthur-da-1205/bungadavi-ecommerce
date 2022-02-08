import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constant';
import {Button, InputField, Space} from '../../components';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Icon name="account-plus-outline" size={70} color={COLORS.primary2} />
          <Space height={12} />
          <Text style={styles.startedText}>Let's Get Started</Text>
          <Text style={styles.createText}>Create a new account</Text>
        </View>
        <Space height={30} />
        <View style={styles.inputContainer}>
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
          <Button labelBtn="Sign Up" btnColor={COLORS.primary2} />
        </View>
        <Space height={50} />
        <View style={styles.footer}>
          <Text style={styles.alreadyText}>
            Already have account? {''}
            {''}{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SigninScreen');
            }}>
            <Text style={styles.sigInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {flex: 1, alignItems: 'center'},
  startedText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
    fontSize: 20,
    fontWeight: 'bold',
  },
  createText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.gray,
    fontSize: 16,
  },
  inputContainer: {flex: 3, justifyContent: 'center'},
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyText: {fontFamily: 'Poppins-Regular'},
  sigInText: {fontFamily: 'Poppins-Regular', color: COLORS.primary2},
});
