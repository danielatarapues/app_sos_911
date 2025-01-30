// GroupsStyles.ts
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize, screenWidth } from '../../utils/dimensions';

export default StyleSheet.create({
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
  groupItem: {
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
  groupImageContainer: {
    marginRight: normalize(15),
  },
  groupImage: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
  },
  groupImagePlaceholder: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupImagePlaceholderText: {
    fontSize: normalize(20),
    fontWeight: '600',
    color: '#666666',
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#333',
  },
  groupMembers: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(2),
  },
  fab: {
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
  emptyStateSubtext: {
    fontSize: normalize(14),
    color: '#fff',
    textAlign: 'center',
    marginTop: normalize(5),
  },
  createGroupForm: {
    flex: 1,
    padding: normalize(15),
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: normalize(10),
    padding: normalize(12),
    marginBottom: normalize(15),
    fontSize: normalize(16),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  sectionTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: normalize(15),
    color: '#fff',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(12),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: normalize(10),
    marginBottom: normalize(8),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  contactImage: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
    marginRight: normalize(12),
  },
  contactName: {
    flex: 1,
    fontSize: normalize(16),
    color: '#333',
  },
  selectedIcon: {
    marginLeft: normalize(12),
  },
  createButton: {
    backgroundColor: '#FF7E7B',
    padding: normalize(16),
    borderRadius: normalize(10),
    alignItems: 'center',
    marginTop: normalize(16),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  createButtonDisabled: {
    backgroundColor: '#A8A8A8',
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
});