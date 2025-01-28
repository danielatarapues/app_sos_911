import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  EmergencyContacts: undefined;
  AddContact: undefined;
  EditContact: { contactId: string };
};

export interface Contact {
  id: string;
  name: string;
  phone: string;
  relation: string;
}

export interface EmergencyContactsProps {
  navigation: NavigationProp<RootStackParamList, 'EmergencyContacts'>;
}