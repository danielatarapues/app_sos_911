//HomeStyles.ts

import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize, screenWidth } from '../../utils/dimensions';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // Ajustamos el padding superior solo para Android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(15),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'rgba(248, 248, 248, 0.9)',
  },
  menuButton: {
    padding: normalize(5),
  },
  menuIcon: {
    fontSize: normalize(24),
    color: '#333',
  },
  headerTitle: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginLeft: normalize(15),
    color: '#333',
  },
  title: {
    color: '#FFF',
    fontSize: normalize(24),
    fontWeight: '300',
    textAlign: 'center',
    marginTop: normalize(30),
    marginBottom: normalize(20),
  },
  content: {
    flex: 1,
    padding: normalize(20),
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  outerButton: {
    width: normalize(260),
    height: normalize(260),
    borderRadius: normalize(300),
    backgroundColor: '#F5F5FA',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  innerButton: {
    width: normalize(200),
    height: normalize(200),
    borderRadius: normalize(200),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(70),
    fontWeight: 'bold',
  },
  emergencyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: normalize(12),
    borderRadius: normalize(30),
    marginTop: normalize(20),
    width: screenWidth * 0.4, // 40% del ancho de la pantalla
    elevation: 5,
    gap: normalize(10),
    justifyContent: 'center',
  },
  emergencyText: {
    color: '#B30202',
    fontSize: normalize(26),
    fontWeight: 'bold',
    marginLeft: normalize(10),
  },
  profileButton: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(20),
    elevation: 5,
  },
});