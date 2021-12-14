import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  image,
  labelBtn,
  onPress,
  btnColor = '#FF61C7',
  textColor = '#FFFFFF',
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer(btnColor)} onPress={onPress}>
      <Image source={image} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          flex: 2,
        }}>
        <Text style={styles.textBtn(textColor)}>{labelBtn}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: btnColor => ({
    backgroundColor: btnColor,
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 9,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }),
  textBtn: textColor => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: textColor,
  }),
});
