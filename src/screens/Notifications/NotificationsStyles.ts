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
  notificationCard: {
    backgroundColor: '#ffffff',
    padding: normalize(20),
    borderRadius: normalize(15),
    marginBottom: normalize(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(10),
  },
  communityText: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#2d2d2d',
    textAlign: 'left', // Alineación ajustada
  },
  timeText: {
    fontSize: normalize(14),
    color: '#9b9b9b',
    textAlign: 'right',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  notificationInfo: {
    flex: 1,
    marginLeft: normalize(15),
  },
  notificationTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(4),
  },
  profileImage: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  notificationActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
    width: '100%',
  },
  deleteButton: {
    backgroundColor: '#00ACAC',
    padding: normalize(10),
    borderRadius: normalize(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  innecesarioButton: {
    backgroundColor: '#FF7F7F',
    padding: normalize(10),
    borderRadius: normalize(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  deleteText: {
    fontSize: normalize(14),
    color: '#fff',
    fontWeight: 'bold',
    marginRight: normalize(5),
  },
  sosAlert: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#FF9E5D',
  },
  alert911: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#FF4D4D',
  },
  unnecessaryAlert: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#2F7E70',
  },
  innecesarioText: {
    fontSize: normalize(14),
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: normalize(10),
  },
});
