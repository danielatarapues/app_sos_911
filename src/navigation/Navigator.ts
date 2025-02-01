import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Contact } from '../screens/EmergencyContacts/types';

// Definición de los parámetros de navegación para toda la aplicación
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Groups: undefined;
  EmergencyContacts: undefined;
  Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
  ContactDetails: { contact: Contact };
  AddContact: { addContact: (contact: Contact) => void };
  EditContact: { contactId: string };
};

// Tipos de navegación específicos para cada pantalla
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type GroupsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Groups'>;
export type EmergencyContactsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EmergencyContacts'>;
export type ContactDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactDetails'>;
export type AddContactScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddContact'>;
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;
export type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

// Tipos para las props de ruta específicas
export type ContactDetailsRouteProp = RouteProp<RootStackParamList, 'ContactDetails'>;
export type AddContactRouteProp = RouteProp<RootStackParamList, 'AddContact'>;
export type EditContactRouteProp = RouteProp<RootStackParamList, 'EditContact'>;