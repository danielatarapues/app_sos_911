// Register.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RegisterStyles } from './RegisterStyles';
import { RegisterScreenNavigationProp } from '../../../navigation/Navigator';
import { Ionicons } from '@expo/vector-icons'; // Importa los íconos de Ionicons

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false); // Control de visibilidad de la contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    Keyboard.dismiss();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={RegisterStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00ACAC" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={RegisterStyles.scrollContent}
            bounces={false}
          >
            <View style={RegisterStyles.headerContainer}>
              <Text style={RegisterStyles.title}>Crear Cuenta</Text>
              <Text style={RegisterStyles.subtitle}>
                Completa tus datos para comenzar
              </Text>
            </View>

            <View style={RegisterStyles.formContainer}>
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Nombre completo</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Ej: Juan Pérez"
                  placeholderTextColor="#999"
                  value={formData.fullName}
                  onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                  returnKeyType="next"
                  autoCorrect={false}
                />
              </View>

              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Correo electrónico</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="tu@email.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                  returnKeyType="next"
                />
              </View>

              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Dirección</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Tu dirección completa"
                  placeholderTextColor="#999"
                  value={formData.address}
                  onChangeText={(text) => setFormData({ ...formData, address: text })}
                  returnKeyType="next"
                />
              </View>

              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Contraseña</Text>
                <View style={RegisterStyles.passwordContainer}>
                  <TextInput
                    style={RegisterStyles.passwordInput}
                    placeholder="Mínimo 8 caracteres"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPassword}
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    returnKeyType="next"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off' : 'eye'}
                      size={24}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Confirmar contraseña</Text>
                <View style={RegisterStyles.passwordContainer}>
                  <TextInput
                    style={RegisterStyles.passwordInput}
                    placeholder="Repite tu contraseña"
                    placeholderTextColor="#999"
                    secureTextEntry={!showConfirmPassword}
                    value={formData.confirmPassword}
                    onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                    returnKeyType="done"
                  />
                  <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Ionicons
                      name={showConfirmPassword ? 'eye-off' : 'eye'}
                      size={24}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Mensaje de Términos y Política de Datos */}
              <View style={RegisterStyles.termsContainer}>
                <Text style={RegisterStyles.termsText}>
                  Al hacer clic en Registrarse, aceptas nuestros{' '}
                  <Text style={RegisterStyles.linkText}>Términos</Text> y has leído nuestra{' '}
                  <Text style={RegisterStyles.linkText}>Política de datos</Text>, incluido nuestro{' '}
                  <Text style={RegisterStyles.linkText}>Uso de cookies</Text>.
                </Text>
              </View>

              <TouchableOpacity
                style={RegisterStyles.registerButton}
                onPress={handleRegister}
                activeOpacity={0.7}
              >
                <Text style={RegisterStyles.registerButtonText}>Registrarse</Text>
              </TouchableOpacity>

              <View style={RegisterStyles.loginContainer}>
                <Text style={RegisterStyles.loginText}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={RegisterStyles.loginLink}>Iniciar sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}