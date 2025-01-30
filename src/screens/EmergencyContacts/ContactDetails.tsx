import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../screens/EmergencyContacts/types'; // Importación corregida
import { styles } from './ContactDetailsStyles';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

type ContactDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ContactDetails'>;
type ContactDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactDetails'>;

type ContactDetailsProps = {
  route: ContactDetailsScreenRouteProp;
  navigation: ContactDetailsScreenNavigationProp;
};

const ContactDetailsScreen: React.FC<ContactDetailsProps> = ({ route, navigation }) => {
  const { contact } = route.params; // Recibimos el contacto seleccionado desde EmergencyContacts
  const [modalVisible, setModalVisible] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se necesita permiso para acceder a la galería.');
      }
    })();
  }, []);

  const handleEdit = () => setModalVisible(true);
  const handleSave = () => setModalVisible(false);

  const handleImageChange = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setEditedContact({ ...editedContact, image: { uri: result.assets[0].uri } });
      }
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  };

  return (
    <ImageBackground source={require('../../assets/fondo2.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={editedContact.image} // Aquí mostramos directamente la imagen del contacto
              style={styles.contactImage}
            />

            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Feather name="edit" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{editedContact.name}</Text>
          <Text style={styles.phone}>{editedContact.phone}</Text>
          <Text style={styles.relation}>{editedContact.relation}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal de Edición */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Contacto</Text>
            <TouchableOpacity onPress={handleImageChange} style={styles.imageContainer}>
              <Image
                source={editedContact.image} // Muestra la imagen actual en el modal
                style={styles.modalImage}
              />
              <TouchableOpacity style={styles.editIcon} onPress={handleImageChange}>
                <Feather name="camera" size={22} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={editedContact.name}
              onChangeText={(text) => setEditedContact({ ...editedContact, name: text })}
              placeholder="Nombre"
            />
            <TextInput
              style={styles.input}
              value={editedContact.phone}
              onChangeText={(text) => setEditedContact({ ...editedContact, phone: text })}
              placeholder="Teléfono"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={editedContact.relation}
              onChangeText={(text) => setEditedContact({ ...editedContact, relation: text })}
              placeholder="Relación"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Feather name="save" size={20} color="white" style={styles.icon} />
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ContactDetailsScreen;
