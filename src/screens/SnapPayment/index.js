import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const SnapPaymentScreen = ({route}) => {
  const url = route.params;
  return <WebView source={{uri: url}} style={styles.pos} />;
};

export default SnapPaymentScreen;

const styles = StyleSheet.create({
  pos: {paddingVertical: 20},
});
