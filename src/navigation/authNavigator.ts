import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definimos los parámetros de navegación para toda la aplicación
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

// Tipos de navegación específicos para cada pantalla
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
