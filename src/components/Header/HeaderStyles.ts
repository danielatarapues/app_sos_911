// headerStyles.ts

import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/dimensions';

export const headerStyles = StyleSheet.create({
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
});