import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NeedToPay from './NeedToPay';
import InProcess from './InProcess';
import Done from './Done';
import Canceled from './Canceled';
import {COLORS} from '../../../constant';

const Tab = createMaterialTopTabNavigator();

const Transactions = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'none',
          fontFamily: 'Poppins-Regular',
        },
        tabBarActiveTintColor: COLORS.primary1,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarIndicatorStyle: {backgroundColor: COLORS.primary1},
        tabBarStyle: {marginTop: 8},
      }}
      backBehavior="none">
      <Tab.Screen name="Need to Pay" component={NeedToPay} />
      <Tab.Screen name="In Process" component={InProcess} />
      <Tab.Screen name="Done" component={Done} />
      <Tab.Screen name="Canceled" component={Canceled} />
    </Tab.Navigator>
  );
};

export default Transactions;
