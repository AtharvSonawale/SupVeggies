import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/SplashScreen';
import SelectionScreen from '../components/SelectionScreen';
import SignUpScreen from '../components/SignUpScreen';
import LoginScreen from '../components/LoginScreen';
import SellerPage from '../components/SellerPage';
import BuyerPage from '../components/BuyerPage';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SellerPage" component={SellerPage} />
      <Stack.Screen name="BuyerPage" component={BuyerPage} />
    </Stack.Navigator>
  );
}
