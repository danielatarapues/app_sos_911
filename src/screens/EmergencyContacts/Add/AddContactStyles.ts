import { StyleSheet } from 'react-native';
import { normalize } from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingTop: normalize(20),
  },
  backButton: {
    position: 'absolute',
    top: normalize(25), // Movido un poco más abajo
    left: normalize(15),
    zIndex: 10,
    backgroundColor: '#F3F4F6', // Color actualizado
    padding: normalize(10),
    borderRadius: normalize(5),
  },
  form: {
    flex: 1,
    padding: normalize(20),
    marginTop: normalize(50),
  },
  label: {
    fontSize: normalize(16),
    marginBottom: normalize(8),
    fontWeight: 'bold',
  },
  input: {
    height: normalize(40),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: normalize(5),
    paddingLeft: normalize(10),
    marginBottom: normalize(15),
    backgroundColor: '#fff',
  },
  textarea: {
    height: normalize(80),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: normalize(5),
    paddingLeft: normalize(10),
    paddingTop: normalize(8),
    marginBottom: normalize(20),
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
  saveButton: {
    flexDirection: 'row', // Alineación horizontal para ícono y texto
    backgroundColor: '#00ACAC',
    paddingVertical: normalize(12),
    borderRadius: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginLeft: normalize(8), // Espacio entre ícono y texto
  },
  saveIcon: {
    marginRight: normalize(8), // Espacio entre ícono y texto
  },
  imagePicker: {
    alignSelf: 'center',
    marginBottom: normalize(20),
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contactImage: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(50),
  },
  imagePlaceholder: {
    color: '#666',
    fontSize: normalize(12),
    textAlign: 'center',
  },
});
