import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';  // Usando MaterialIcons desde expo-vector-icons
import { styles } from './SeeLocationsStyles';

// Definir una interfaz para las ubicaciones
interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const SeeLocations = ({ closeModal }: { closeModal: () => void }) => {
  const savedLocations: Location[] = [
    { id: '1', name: 'San Juan de Calderón', latitude: -0.15, longitude: -78.48 },
    { id: '2', name: 'La Mariscal', latitude: -0.19, longitude: -78.45 },
    { id: '3', name: 'Quito Centro', latitude: -0.22, longitude: -78.51 },
    { id: '4', name: 'El Ejido', latitude: -0.21, longitude: -78.49 },
    // Agregar más ubicaciones si es necesario
  ];

  const [visibleLocations, setVisibleLocations] = useState<Location[]>([]); // Estado para las ubicaciones visibles
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga
  const [loadingMore, setLoadingMore] = useState<boolean>(false); // Estado para cargar más ubicaciones

  // Función para cargar más ubicaciones
  const loadMoreLocations = () => {
    if (loadingMore || visibleLocations.length >= savedLocations.length) return; // No cargar más si ya se cargaron todas las ubicaciones
    setLoadingMore(true);
    
    setTimeout(() => {
      const nextLocations = savedLocations.slice(visibleLocations.length, visibleLocations.length + 2); // Cargar de 2 en 2
      setVisibleLocations((prev) => [...prev, ...nextLocations]);
      setLoadingMore(false);
    }, 1000); // Simular un retraso de carga
  };

  useEffect(() => {
    setVisibleLocations(savedLocations.slice(0, 2)); // Cargar las primeras 2 ubicaciones al inicio
    setLoading(false); // Después de configurar las ubicaciones, cambia el estado de carga
  }, []);

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <ImageBackground
        source={require('../../../assets/fondo.png')} // Fondo de pantalla
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.modalContainer}>
          {loading ? (
            // Muestra el indicador de carga mientras las ubicaciones están siendo configuradas
            <ActivityIndicator size="large" color="#00ACAC" />
          ) : (
            <>
              <MapView
                style={styles.modalMap}
                initialRegion={{
                  latitude: -0.1807, // Coordenadas de Quito
                  longitude: -78.4678,
                  latitudeDelta: 0.05, // Zoom del mapa
                  longitudeDelta: 0.05, // Zoom del mapa
                }}
              >
                {visibleLocations.map((location) => (
                  <Marker
                    key={location.id}
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    title={location.name}
                    pinColor="red" // Color rojo para las ubicaciones
                  />
                ))}
              </MapView>

              <View style={styles.locationsList}>
                {/* Título "Mis Ubicaciones" */}
                <Text style={styles.locationsTitle}>Mis Ubicaciones:</Text>

                <FlatList
                  data={visibleLocations}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.locationItem}>
                      <MaterialIcons name="location-on" style={styles.locationItemIcon} />
                      <Text style={styles.locationText}>{item.name}</Text>
                    </View>
                  )}
                  onEndReached={loadMoreLocations} // Llama a la función para cargar más cuando el usuario llega al final
                  onEndReachedThreshold={0.1} // 10% antes de llegar al final
                  ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color="#00ACAC" /> : null} // Mostrar indicador de carga al cargar más
                />
              </View>
            </>
          )}

          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default SeeLocations;
