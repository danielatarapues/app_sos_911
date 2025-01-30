import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Auth/Login/Login';
import RegisterScreen from './src/screens/Auth/Register/Register';
import HomeScreen from './src/screens/Home/Home';
import EmergencyContactsScreen from './src/screens/EmergencyContacts/EmergencyContacts';
import GroupsScreen from './src/screens/Groups/Groups';


// Definimos los tipos de rutas
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Groups: undefined;
  EmergencyContacts: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // SafeAreaProvider es necesario para manejar el área segura en diferentes dispositivos
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#ffffff' },
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />
          <Stack.Screen name="Profile" component={HomeScreen} />
          <Stack.Screen name="Groups" component={GroupsScreen} />
          <Stack.Screen name="Settings" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}