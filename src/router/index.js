import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Account,
  Cart,
  ForgotPasswordScreen,
  Home,
  SigninScreen,
  SignupScreen,
  Transactions,
} from '../screens';
import {BottomNavigator} from '../components';

const RouterStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <BottomTab.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          headerTitleStyle: {
            color: '#F75306',
          },
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: 'Transactions',
          headerTitleStyle: {
            color: '#F75306',
          },
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          headerTitleStyle: {
            color: '#F75306',
          },
        }}
      />
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
