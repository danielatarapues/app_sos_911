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
    alignItems: 'center',
  },
  mapContainer: {
    width: '90%',
    height: '70%',
    borderRadius: normalize(15),
    overflow: 'hidden',
    marginBottom: normalize(20),
    marginTop: normalize(20),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: normalize(20),
    marginTop: normalize(10),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ACAC',
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(10),
    marginBottom: normalize(10),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: normalize(230),
  },
  buttonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D64545',
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(10),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: normalize(230),
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(16),
    marginLeft: normalize(8),
    textAlign: 'center',
  },
});