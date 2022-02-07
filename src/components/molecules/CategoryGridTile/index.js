import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CategoryGridTile = props => {
  var TouchCompt = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchCompt = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchCompt style={styles.touchable} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {props.name}
          </Text>
        </View>
      </TouchCompt>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {flex: 1, margin: 10, width: 90, height: 70, overflow: 'hidden'},
  touchable: {flex: 1},
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 10,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
  },
});
