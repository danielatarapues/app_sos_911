//Home.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Phone, User } from 'lucide-react-native';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { styles } from './HomeStyles';
import { normalize } from '../../utils/dimensions';
import { HomeScreenProps } from './types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleEmergency = () => {
    // Implementar lógica de emergencia
    console.log('Emergencia activada');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <ImageBackground 
      source={require('../../assets/fondo.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} />

        <Text style={styles.title}>Un toque para tu seguridad</Text>

        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.outerButton} 
            onPress={handleEmergency}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={['#FFAD59', '#FF7E7B']}
              style={styles.innerButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.buttonText}>SOS</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <View style={styles.emergencyTag}>
            <Phone size={normalize(26)} color="#B30202" />
            <Text style={styles.emergencyText}>911</Text>
          </View>

          <TouchableOpacity onPress={handleProfilePress}>
            <LinearGradient
              colors={['#FFF', 'rgba(255, 255, 255, 0.35)']}
              style={styles.profileButton}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 1, y: 1 }}
            >
              <User size={normalize(30)} color="#313A51" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;