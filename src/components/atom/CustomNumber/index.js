import {Text} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';

const CustomNumber = ({number, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        displayType="text"
        renderText={value => <Text style={style}>{value}</Text>}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      displayType="text"
      prefix="IDR "
      renderText={value => <Text style={style}>{value}</Text>}
      decimalSeparator=","
    />
  );
};

export default CustomNumber;
