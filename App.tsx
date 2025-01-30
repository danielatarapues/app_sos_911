import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Contact } from './src/screens/EmergencyContacts/types'; // Importa la definición correcta

import LoginScreen from './src/screens/Auth/Login/Login';
import RegisterScreen from './src/screens/Auth/Register/Register';
import HomeScreen from './src/screens/Home/Home';
import EmergencyContactsScreen from './src/screens/EmergencyContacts/EmergencyContacts';
import ContactDetailsScreen from './src/screens/EmergencyContacts/ContactDetails';
import AddContactScreen from './src/screens/EmergencyContacts/AddContact';
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
  ContactDetails: { contact: Contact };
  AddContact: { addContact: (contact: Contact) => void };  // Agrega el tipo para addContact
  EditContact: { contactId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
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
          <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
          <Stack.Screen name="AddContact" component={AddContactScreen} />
          <Stack.Screen name="Groups" component={GroupsScreen} />

          <Stack.Screen name="Profile" component={HomeScreen} />
          <Stack.Screen name="Settings" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
