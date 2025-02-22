import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import './global.css';
import { HomeScreen } from 'screens/HomeScreen';
import { LoginScreen } from 'screens/LoginScreen';
import { OnBoardingScreen } from 'screens/OnBoardingScreen';
import { RegisterScreen } from 'screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
