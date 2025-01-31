import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { styles } from './InformationStyles';
import { normalize } from '../../utils/dimensions';

const userData = {
  id: 1,
  name: 'María López g',
  profileImage: 'https://revistaseguridad360.com/wp-content/uploads/2022/07/depositphotos_79190948-stock-illustration-emergency-concept-design.webp',
  presionesBoton: 12, // Presiones del botón de pánico
  notificaciones: 35, // Número de notificaciones
  respuestas: 37, // Respuestas dadas
  evaluacionesSOS: 8, // Evaluaciones de SOS
  evaluacionesEmergencia: 18, // Evaluaciones de emergencias
  respuestasInnecesarias: 3, // Respuestas innecesarias
};

const ReportsScreen: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderInfoCard = (key: string, value: any) => (
    <View key={key} style={styles.contactCard}>
      <Image source={{ uri: userData.profileImage }} style={styles.contactImage} />
      <View style={styles.contactOverlay}>
        <Text style={styles.contactName}>{userData.name}</Text>
        <Text style={styles.contactName}>{`${key}: ${value.toString()}`}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Informes" />

        <ScrollView style={styles.content}>
          {Object.entries(userData).map(([key, value]) => (
            key !== 'name' && key !== 'profileImage' && renderInfoCard(key, value)
          ))}
        </ScrollView>

        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ReportsScreen;
