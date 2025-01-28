//EmergencyContactsStyles.ts

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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    padding: normalize(15)
  },
  contactCard: {
    flexDirection: 'row',
    padding: normalize(15),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: normalize(10),
    marginBottom: normalize(10),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  contactInfo: {
    flex: 1,
    marginLeft: normalize(15),
  },
  contactName: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#333',
  },
  contactRelation: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(2),
  },
  contactPhone: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(2),
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10),
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(20),
  },
  emptyStateText: {
    fontSize: normalize(16),
    color: '#fff',
    textAlign: 'center',
    marginTop: normalize(10),
  },
  addButton: {
    position: 'absolute',
    right: normalize(20),
    bottom: normalize(20),
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(28),
    backgroundColor: '#FF7E7B',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});