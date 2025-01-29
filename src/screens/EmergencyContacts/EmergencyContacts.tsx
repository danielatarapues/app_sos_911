import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import { Plus, Trash2 } from 'lucide-react-native';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { styles } from './EmergencyContactsStyles';
import { normalize } from '../../utils/dimensions';

const EmergencyContactsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [contacts, setContacts] = useState<any[]>([
    {
      id: '1',
      name: 'Ismael Vargas',
      phone: '+593 987 654 321',
      relation: 'Amigo',
      image: require('../../assets/ismael.jpg'),
    },
    {
      id: '2',
      name: 'Erick Iza',
      phone: '+593 986 543 210',
      relation: 'Compañero',
      image: require('../../assets/erick.jpg'),
    },
    {
      id: '3',
      name: 'Carlos Rivera',
      phone: '+593 985 432 109',
      relation: 'Vecino',
      image: require('../../assets/carlos.jpg'),
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

  const addContact = (contact: any) => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const renderContactCard = (contact: any) => (
    <View key={contact.id} style={styles.contactCard}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(contact.id)}>
        <Trash2 size={normalize(24)} color="#FFF" />
      </TouchableOpacity>

      <Image source={contact.image} style={styles.contactImage} />
      <View style={styles.contactOverlay}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => navigation.navigate('ContactDetails', { contact })}
        >
          <Text style={styles.infoButtonText}>Ver Información</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Contactos de Emergencia" />

        <ScrollView style={styles.content}>
          {contacts.map(renderContactCard)}
        </ScrollView>

        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AddContact', { addContact })}
        >
          <Plus size={normalize(24)} color="#FFF" />
        </TouchableOpacity>

        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EmergencyContactsScreen;
