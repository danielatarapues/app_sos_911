import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../utils/dimensions';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    padding: normalize(15),
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: normalize(20),
  },
  profilePicture: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(40),
  },
  profileName: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: normalize(10),
  },
  notificationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: normalize(15),
    borderRadius: normalize(10),
    marginBottom: normalize(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(5),
  },
  communityText: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: '#333',
  },
  timeText: {
    fontSize: normalize(12),
    color: '#666',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationInfo: {
    flex: 1,
    marginLeft: normalize(10),
  },
  notificationTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#bf662b', // Color por defecto
  },
  notificationDescription: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(2),
  },
  profileImage: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
  },
  communityText: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: '#ffffff', // Cambia este color al que desees
  },


  // Estilos específicos para cada tipo de alerta
  sosAlert: {
    color: '#d1440c', // Naranja para indicar advertencia
  },
  alert911: {
    color: '#bf1515', // Rojo para indicar emergencia 
  },
  unnecessaryAlert: {
    color: '#076b2c', // Verde para alertas innecesarias
  },
});
