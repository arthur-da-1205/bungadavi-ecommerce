import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../../constant';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.counterBox}
        onPress={() => onCount('minus')}>
        <Icon name="minus" size={20} color={COLORS.primary2} />
      </TouchableOpacity>
      <Text style={styles.qtyLabel}>{value}</Text>
      <TouchableOpacity
        style={styles.counterBox}
        onPress={() => onCount('plus')}>
        <Icon name="plus" size={20} color={COLORS.primary2} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  counterBox: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.primary2,
  },
  qtyLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 25,
  },
});
