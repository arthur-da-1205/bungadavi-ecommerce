import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomIcon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="home" size={25} color="#F26522" />
          <Text style={styles.textActive}>Home</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="home" size={25} />
          <Text style={styles.textInActive}>Home</Text>
        </View>
      );
    case 'Explore':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="note-text-outline" size={25} color="#F26522" />
          <Text style={styles.textActive}>Transactions</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="note-text-outline" size={25} />
          <Text style={styles.textInActive}>Transactions</Text>
        </View>
      );
    case 'Account':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="account-outline" size={25} color="#F26522" />
          <Text style={styles.textActive}>Account</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="account-outline" size={25} />
          <Text style={styles.textInActive}>Account</Text>
        </View>
      );
    case 'Cart':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="cart-outline" size={25} color="#F26522" />
          <Text style={styles.textActive}>Cart</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="cart-outline" size={25} />
          <Text style={styles.textInActive}>Cart</Text>
        </View>
      );
    default:
      return null;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomTabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.bottomTabBtn}>
            <BottomIcon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  containerActive: {alignItems: 'center'},
  textActive: {color: '#F26522'},
  containerInActive: {alignItems: 'center'},
  textInActive: {color: '#FFFF'},
  bottomTabContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomTabBtn: {flex: 1, alignItems: 'center'},
});
