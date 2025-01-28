// LoginStyles.ts

import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logo: {
    width: 100, // Tamaño ajustable del ícono
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  sosText: {
    fontWeight: 'bold',
    color: '#333', // Color oscuro para "Sos"
  },
  nineElevenText: {
    fontWeight: 'bold',
    color: '#00ACAC', // Color celeste para el título "Sos911"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400', // Peso más delgado para un estilo sutil
    color: '#220', // Gris oscuro fuerte para mayor visibilidad
    marginBottom: 30,
    textAlign: 'center',
  },
  
  inputContainer: {
    width: '85%',
    maxWidth: 400,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: '#00ACAC', // Color del botón "Iniciar Sesión"
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  registerLink: {
    color: '#007B9E',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
});