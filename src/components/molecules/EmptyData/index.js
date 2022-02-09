import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Space} from '../..';
import {COLORS} from '../../../../constant';

const EmptyData = ({iconName, text}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={100} color={COLORS.primary2} />
      <Space height={20} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

EmptyData.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EmptyData;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontFamily: 'Poppins-Regular', fontSize: 18, color: COLORS.black},
});
