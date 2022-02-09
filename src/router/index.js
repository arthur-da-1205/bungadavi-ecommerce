import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Account,
  Cart,
  DetailProductScreen,
  ForgotPasswordScreen,
  Home,
  OrderSummaryScreen,
  SigninScreen,
  SignupScreen,
  SnapPaymentScreen,
  Transactions,
} from '../screens';
import {BottomNavigator} from '../components';
import {COLORS} from '../../constant';

const RouterStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainApp = () => {
  const bottomColor = COLORS.primary2;
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
            color: bottomColor,
          },
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: 'Transactions',
          headerTitleStyle: {
            color: bottomColor,
          },
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          headerTitleStyle: {
            color: bottomColor,
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
      <RouterStack.Screen
        name="DetailProductScreen"
        component={DetailProductScreen}
        options={{headerShown: false}}
      />
      <RouterStack.Screen
        name="OrderSummaryScreen"
        component={OrderSummaryScreen}
        options={{
          title: 'Order Summary Screen',
          headerTintColor: COLORS.primary2,
        }}
      />
      <RouterStack.Screen
        name="SnapPaymentScreen"
        component={SnapPaymentScreen}
        options={{
          title: 'Payment',
        }}
      />
    </RouterStack.Navigator>
  );
};

export default Router;
