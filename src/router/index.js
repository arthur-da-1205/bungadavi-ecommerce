import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Account,
  Cart,
  Explore,
  ForgotPasswordScreen,
  Home,
  SigninScreen,
  SignupScreen,
} from '../screens';
import {BottomNavigator} from '../components';

const RouterStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomNavigator {...props} />}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Explore" component={Explore} />
      <BottomTab.Screen name="Cart" component={Cart} />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
};

const Router = () => {
  return (
    <RouterStack.Navigator>
      <RouterStack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown: false}}
      />
      <RouterStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <RouterStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <RouterStack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </RouterStack.Navigator>
  );
};

export default Router;
