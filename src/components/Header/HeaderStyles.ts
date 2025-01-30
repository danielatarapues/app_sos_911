// HeaderStyles.ts
import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/dimensions';

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(16),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  menuButton: {
    padding: normalize(4),
  },
  headerTitle: {
    fontSize: normalize(18),
    fontWeight: '600',
    marginLeft: normalize(16),
    color: '#000',
  },
});