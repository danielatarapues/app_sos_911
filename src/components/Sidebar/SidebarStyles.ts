import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import { normalize, screenWidth } from '../../utils/dimensions';

// Calculamos el ancho del sidebar y el padding superior para el área segura
const SIDEBAR_WIDTH = Math.min(screenWidth * 0.8, 300);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight || 0;

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, // El overlay sí debe cubrir toda la pantalla
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT, // Ajustamos el top para respetar la barra de estado
    left: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: '#ffffff',
    zIndex: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    flex: 1,
    // Removemos el paddingTop ya que ahora el sidebar mismo respeta el área segura
    backgroundColor: '#ffffff',
  },
  header: {
    padding: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    flex: 1,
    paddingTop: normalize(20),
  },
  menuItem: {
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: normalize(16),
    color: '#333',
    marginLeft: normalize(10),
  },
  logoutButton: {
    padding: normalize(20),
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: normalize(16),
    color: '#ff3b30',
    marginLeft: normalize(10),
  },
});