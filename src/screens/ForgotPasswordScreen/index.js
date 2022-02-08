import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constant';
import {Button, InputField, Space} from '../../components';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Icon name="lock" size={80} color={COLORS.primary2} />
          <Space height={18} />
          <Text style={styles.forgotPassText}>FORGOT PASSWORD</Text>
        </View>
        <Space height={50} />
        <View style={styles.inputContainer}>
          <InputField iconName="email-outline" placeholder="Your email" />
          <Space height={28} />
          <Button labelBtn="Send Email" btnColor={COLORS.primary2} />
        </View>
        <Space height={30} />

        <Space height={50} />
        <View style={styles.footer}>
          <View style={styles.backTextContainer}>
            <Text style={styles.backText}>
              Back to {''} {''}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SigninScreen');
              }}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {flex: 1, alignItems: 'center'},
  forgotPassText: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {flex: 2, justifyContent: 'center'},
  footer: {flex: 0.2, alignItems: 'center'},
  backTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {fontFamily: 'Poppins-Regular'},
  signInText: {fontFamily: 'Poppins-Regular', color: COLORS.primary2},
});
