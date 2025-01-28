//EmergencyContacts.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import { Plus, UserCircle, Edit2, Trash2 } from 'lucide-react-native';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { styles } from './EmergencyContactsStyles';
import { Contact, EmergencyContactsProps } from './types';
import { normalize } from '../../utils/dimensions';

const EmergencyContactsScreen: React.FC<EmergencyContactsProps> = ({ navigation }) => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'María García',
      phone: '+593 985 345 678',
      relation: 'Madre',
    },
    {
      id: '2',
      name: 'Juan Pérez',
      phone: '+593 987 456 789',
      relation: 'Hermano',
    },
  ]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleDelete = (id: string) => {
    Alert.alert(
      'Eliminar contacto',
      '¿Estás seguro de que quieres eliminar este contacto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setContacts(contacts.filter(contact => contact.id !== id));
          },
        },
      ],
    );
  };

  const handleEdit = (contact: Contact) => {
    navigation.navigate('EditContact', { contactId: contact.id });
  };

  const handleAdd = () => {
    navigation.navigate('AddContact');
  };

  const renderContactCard = (contact: Contact) => (
    <View key={contact.id} style={styles.contactCard}>
      <UserCircle size={normalize(40)} color="#666" />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactRelation}>{contact.relation}</Text>
        <Text style={styles.contactPhone}>{contact.phone}</Text>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          onPress={() => handleEdit(contact)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Edit2 size={normalize(20)} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleDelete(contact.id)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Trash2 size={normalize(20)} color="#ff3b30" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <UserCircle size={normalize(50)} color="#666" />
      <Text style={styles.emptyStateText}>
        No tienes ningún contacto de emergencia.{'\n'}
        Añade uno pulsando el botón +
      </Text>
    </View>
  );

  return (
    <ImageBackground 
      source={require('../../assets/fondo.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Header 
          onMenuPress={() => setSidebarOpen(true)}
          customTitle="Contactos de Emergencia" 
        />

        <ScrollView style={styles.content}>
          {contacts.length > 0 ? contacts.map(renderContactCard) : renderEmptyState()}
        </ScrollView>

        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAdd}
          activeOpacity={0.8}
        >
          <Plus size={normalize(24)} color="#FFF" />
        </TouchableOpacity>

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EmergencyContactsScreen;