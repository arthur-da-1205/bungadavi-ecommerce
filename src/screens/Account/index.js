import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import {COLORS} from '../../../constant';
import {profileDummy} from '../../assets/dummy';
import {Button, ListMenu, Space} from '../../components';

const heightScreen = Dimensions.get('screen').height;

const Account = ({navigation}) => {
  const handleSginOut = () => {
    AsyncStorage.removeItem('TOKEN').then(() => {
      navigation.reset({index: 0, routes: [{name: 'SigninScreen'}]});
    });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.photoContainer}>
        <Image source={profileDummy} style={styles.photo} />
        <Space width={20} />
        <View>
          <Text style={styles.text}>John Doe</Text>
          <Space height={6} />
          <Text style={styles.textEmail}>john@app.com</Text>
        </View>
      </View>
      <Space height={20} />
      <View style={styles.menuContainer}>
        <ListMenu label="Change Account Info" iconName="account-outline" />
        <ListMenu label="Bank Account Info" iconName="bank" />
        <ListMenu label="My Address" iconName="map-marker-radius" />
        <ListMenu label="Change My Password" iconName="shield-account" />
      </View>
      <View style={styles.btnContainer}>
        <Button
          labelBtn="Sign Out"
          btnColor={COLORS.primary2}
          onPress={handleSginOut}
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  pageContainer: {flex: 1, padding: 6},
  photoContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 10,
    height: heightScreen / 4,
    borderRadius: 10,
  },
  photo: {
    height: 70,
    width: 70,
    borderRadius: 70,
    padding: 24,
    backgroundColor: '#F0F0F0',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  textEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#808080',
  },
  menuContainer: {flex: 3, backgroundColor: '#FFFF', padding: 20},
  btnContainer: {flex: 1, padding: 30},
});
