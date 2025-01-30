import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from './AddContactStyles';

// Definir el tipo de las props correctamente
type AddContactProps = StackScreenProps<RootStackParamList, 'AddContact'>;

const AddContact = ({ navigation, route }: AddContactProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [detail, setDetail] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleSave = () => {
    if (!name.trim() || !phone.trim()) {
      Alert.alert('Error', 'Por favor, completa todos los campos obligatorios.');
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      phone,
      relation: detail,
      image: image ? { uri: image } : require('../../../assets/default-avatar.jpg'),
    };

    if (route.params?.addContact) {
      route.params.addContact(newContact);
    }

    Alert.alert('Éxito', 'Contacto guardado correctamente.');
    navigation.goBack();
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso requerido', 'Se necesita acceso a la galería.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={require('../../../assets/fondito.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.form}>
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.contactImage} />
            ) : (
              <Text style={styles.imagePlaceholder}>Seleccionar foto</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} placeholder="Ej. Juan Pérez" value={name} onChangeText={setName} />

          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            style={styles.input}
            placeholder="+593 987 654 321"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Detalle:</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Ej. Médico de confianza, compañero de trabajo, etc."
            value={detail}
            onChangeText={setDetail}
            multiline
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Ionicons name="save" size={20} color="white" style={styles.saveIcon} />
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddContact;
