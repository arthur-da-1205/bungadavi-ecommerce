import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomIcon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <View
          style={{marginRight: 6, flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="home" size={20} color="#F26522" />
          <Text style={{color: '#F26522', marginLeft: 4}}>Home</Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="home" size={20} />
          <Text style={{color: '#FFFF'}}>Home</Text>
        </View>
      );
    case 'Explore':
      return focus ? (
        <View
          style={{marginRight: 6, flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="magnify" size={20} color="#F26522" />
          <Text style={{color: '#F26522', marginLeft: 4}}>Explore</Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="magnify" size={20} />
          <Text style={{color: '#FFFF'}}>Explore</Text>
        </View>
      );
    case 'Account':
      return focus ? (
        <View
          style={{marginRight: 6, flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="account-outline" size={20} color="#F26522" />
          <Text style={{color: '#F26522', marginLeft: 4}}>Account</Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="account-outline" size={20} />
          <Text style={{color: '#FFFF'}}>Account</Text>
        </View>
      );
    case 'Cart':
      return focus ? (
        <View
          style={{marginRight: 6, flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="cart-outline" size={20} color="#F26522" />
          <Text style={{color: '#F26522', marginHorizontal: 4}}>My Cart</Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconMC name="cart-outline" size={20} />
          <Text style={{color: '#FFFF'}}>My Cart</Text>
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
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 13,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
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
            style={{flex: 1, alignItems: 'center'}}>
            <BottomIcon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;
