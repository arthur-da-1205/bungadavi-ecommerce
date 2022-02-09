import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {COLORS} from '../../../../constant';

const ListMenu = ({label, iconName}) => {
  return (
    <TouchableOpacity>
      <View style={styles.pageContainer}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={25} color={COLORS.primary2} />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Icon name="chevron-right" size={25} color={COLORS.primary2} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListMenu.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
export default ListMenu;

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 16,
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  iconContainer: {flex: 1},
  labelContainer: {flex: 3},
  labelText: {fontSize: 14, fontFamily: 'Poppins-Regular', color: COLORS.black},
  arrowContainer: {flex: 0.3},
  iconArrow: {color: COLORS.primary2},
});
