// Login.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../../navigation/authNavigator';
import { LoginStyles } from './LoginStyles';

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../../../assets/fondo1.jpg')} // Imagen de fondo
      style={LoginStyles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={LoginStyles.container}>
        <View style={LoginStyles.logoContainer}>
          {/* Imagen del icono */}
          <Image
            source={require('../../../assets/logo/icon.png')} // Ruta de la imagen de tu ícono
            style={LoginStyles.logo}
            resizeMode="contain"
          />
          <Text style={LoginStyles.title}>
  <Text style={LoginStyles.sosText}>Sos</Text>
  <Text style={LoginStyles.nineElevenText}>911</Text>
</Text>

          <Text style={LoginStyles.subtitle}>Inicia sesión para continuar</Text>
        </View>

        <View style={LoginStyles.inputContainer}>
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={LoginStyles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={LoginStyles.input}
            autoCapitalize="none"
          />

          {/* Botón de inicio de sesión */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={LoginStyles.loginButton}
          >
            <Text style={LoginStyles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <View style={LoginStyles.registerContainer}>
            <Text style={LoginStyles.registerText}>¿No tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={LoginStyles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
