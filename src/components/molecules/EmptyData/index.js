import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Space} from '../..';

const EmptyData = ({iconName}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={100} color="#F26522" />
      <Space height={20} />
      <Text style={styles.text}>No Transactions You've Made</Text>
    </View>
  );
};

export default EmptyData;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontFamily: 'Poppins-Regular', fontSize: 18, color: '#000'},
});
