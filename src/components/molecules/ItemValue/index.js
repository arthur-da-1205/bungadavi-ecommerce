import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomNumber} from '../..';
import {COLORS} from '../../../../constant';

const ItemValue = ({label, value, valueColor = COLORS.black, type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {type === 'currency' ? (
        <View style={styles.valueContainer}>
          <CustomNumber number={value} style={styles.value(valueColor)} />
        </View>
      ) : (
        <View style={styles.valueContainer}>
          <Text style={styles.value(valueColor)}>{value}</Text>
        </View>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between', flex: 1},
  labelContainer: {flex: 1},
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: COLORS.gray},
  valueContainer: {flex: 2},
  value: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color,
    textAlign: 'right',
  }),
});
