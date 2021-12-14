import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  Home,
  SigninScreen,
  SignupScreen,
} from '../screens';

const RouterStack = createNativeStackNavigator();

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
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </RouterStack.Navigator>
  );
};

export default Router;
