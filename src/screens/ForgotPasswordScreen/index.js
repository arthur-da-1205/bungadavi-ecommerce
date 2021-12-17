import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icGoogle, Logo} from '../../assets';
import {Button, InputField, Space} from '../../components';

const ForgotPasswordScreen = ({navigation}) => {
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
          <Icon name="lock" size={80} color="#F75306" />
          <Space height={18} />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            FORGOT PASSWORD
          </Text>
        </View>
        <Space height={50} />
        <View style={{flex: 2, justifyContent: 'center'}}>
          <InputField iconName="email-outline" placeholder="Your email" />
          <Space height={28} />
          <Button labelBtn="Send Email" btnColor="#F26522" />
        </View>
        <Space height={30} />

        <Space height={50} />
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>
              Back to {''} {''}
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
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
