import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {COLORS} from '../../../constant';
import {Button, InputField, Space} from '../../components';
import {registerAction} from '../../redux/action';
import {toastMessage, useForm} from '../../utils';

const SignupScreen = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });
  const isFormValid = obj => {
    return Object.values(obj).every(val => val.trim());
  };

  const dispatch = useDispatch();
  //TODO: Register action
  const onRegister = () => {
    if (!isFormValid(form)) {
      toastMessage('All Fields Must be Filled', 'danger');
    } else {
      console.log('form:', form);
      dispatch(registerAction(form, navigation));
    }
  };

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
          <InputField
            iconName="account-outline"
            placeholder="Username"
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Space height={8} />
          <InputField
            iconName="card-account-details-outline"
            placeholder="Full Name"
            value={form.fullname}
            onChangeText={value => setForm('fullname', value)}
          />
          <Space height={8} />
          <InputField
            iconName="email-outline"
            placeholder="Your Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Space height={8} />
          <InputField
            iconName="phone-outline"
            placeholder="Your Phone Number"
            value={form.phone}
            onChangeText={value => setForm('phone', value)}
          />
          <Space height={8} />
          <InputField
            iconName="lock-outline"
            placeholder="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />

          <Space height={30} />
          <Button
            labelBtn="Sign Up"
            btnColor={COLORS.primary2}
            onPress={onRegister}
          />
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
