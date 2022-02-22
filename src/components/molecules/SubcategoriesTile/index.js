import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constant';

const SubcategoriesTile = ({name, onSelect}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default SubcategoriesTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: 6,
    borderWidth: 1,
    padding: 6,
    borderRadius: 8,
  },
});
