import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './LocationStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SeeLocations from './SeeLocations/SeeLocations'; // Importamos el componente que mostramos en el modal

type RootStackParamList = {
  LocationScreen: undefined;
  OtherScreen: undefined;
};

type LocationScreenNavigationProp = NavigationProp<RootStackParamList>;

const LocationScreen = () => {
  const navigation = useNavigation<LocationScreenNavigationProp>();

  // Definimos el estado para las ubicaciones visibles y el tipo Location[]
  const [visibleLocations, setVisibleLocations] = useState<Location[]>([]); // Cambié el tipo a Location[]
  const [currentLocation, setCurrentLocation] = useState({
    latitude: -0.180653,
    longitude: -78.467834,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permiso de ubicación denegado.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const handleShowCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const handleShowSavedLocations = () => {
    setModalVisible(true);
  };

  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>

        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={currentLocation}>
            <Marker coordinate={currentLocation} />
          </MapView>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleShowCurrentLocation}>
            <Ionicons name="locate-outline" size={20} color="white" />
            <Text style={styles.buttonText}>Ver mi ubicación actual</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={handleShowSavedLocations}>
            <Ionicons name="location-outline" size={20} color="white" />
            <Text style={styles.buttonText}>Ver mis ubicaciones</Text>
          </TouchableOpacity>
        </View>

        {/* Modal que contiene SeeLocations */}
        {modalVisible && <SeeLocations closeModal={() => setModalVisible(false)} />}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LocationScreen;
