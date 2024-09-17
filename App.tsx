import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentacion/views/home/Home';

import { ProfileInfoScreen } from './src/Presentacion/views/profile/info/ProfileInfo';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined; 
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
          options={{
            headerShown: true,
            title: 'Solicitudes'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
