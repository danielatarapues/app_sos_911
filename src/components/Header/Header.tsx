//Header.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { headerStyles } from './HeaderStyles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ onMenuPress, customTitle }) => {
  const route = useRoute();
  
  const getTitleByRoute = (): string => {
    if (customTitle) return customTitle;
    
    switch (route.name) {
      case 'Home':
        return 'Inicio';
      case 'EmergencyContacts':
        return 'Contactos de Emergencia';
      case 'Profile':
        return 'Mi Perfil';
      case 'Settings':
        return 'Configuración';
      case 'HomeEmergencia':
        return 'Emergencia';
      default:
        return 'Inicio';
    }
  };

  return (
    <View style={headerStyles.header}>
      <TouchableOpacity
        onPress={onMenuPress}
        style={headerStyles.menuButton}
      >
        <Text style={headerStyles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <Text style={headerStyles.headerTitle}>{getTitleByRoute()}</Text>
    </View>
  );
};

export default Header;