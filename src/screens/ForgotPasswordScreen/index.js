import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
      <View style={{flex: 0.5, marginBottom: 24}}>
        <Text
          style={{fontSize: 22, fontFamily: 'Poppins-Medium', color: '#000'}}>
          FORGOT PASSWORD
        </Text>
        <Text style={{fontSize: 14, fontFamily: 'Poppins-Regular'}}>
          Enter your email or phone number to request a password reset
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          padding: 6,
          borderRadius: 20,
        }}>
        <InputField placeholder="name@app.com" />
        <Space height={14} />

        <View
          style={{
            flex: 1,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}></View>
        <View style={{flex: 2}}>
          <Button labelBtn="SEND NOW" onPress={() => {}} btnColor="#F26522" />
        </View>
      </View>
      <View style={{flex: 1.5, marginTop: 30}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'Poppins-Regular'}}>Having Problem ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SigninScreen');
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#F26522',
              }}>
              {' '}
              Need Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
