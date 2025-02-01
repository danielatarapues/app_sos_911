import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  BackHandler,
  Image,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LogOut, Home, User, PhoneCall, Users, Info, MapPin, Bell, BellRing } from 'lucide-react-native';
import { styles } from './SidebarStyles';
import { CustomSidebarProps, MenuItem, RootStackParamList } from './types';
import { normalize } from '../../utils/dimensions';

const CustomSidebar: React.FC<CustomSidebarProps> = ({ isOpen, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(-styles.sidebar.width));
  const [overlayAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const menuItems: MenuItem[] = [
    { title: 'Inicio', screen: 'Home' },
    { title: 'Contactos de Emergencia', screen: 'EmergencyContacts' },
    { title: 'Perfil', screen: 'Profile' },
    { title: 'Grupos', screen: 'Groups' },
    { title: 'Ubicación', screen: 'Location' },
    { title: 'Notificaciónes', screen: 'Notifications' },
    { title: 'Historial de Alarma', screen: 'AlertHistory' },
    { title: 'Información', screen: 'Information' },
  ];

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isOpen) {
          onClose();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [isOpen, onClose]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: isOpen ? 0 : -styles.sidebar.width,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnim, {
        toValue: isOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isOpen, slideAnim, overlayAnim]);

  const renderIcon = (title: string) => {
    const iconSize = normalize(20);
    const iconColor = '#ffff';

    switch (title) {
      case 'Inicio':
        return <Home size={iconSize} color={iconColor} />;
      case 'Contactos de Emergencia':
        return <PhoneCall size={iconSize} color={iconColor} />;
      case 'Perfil':
        return <User size={iconSize} color={iconColor} />;
      case 'Grupos':
        return <Users size={iconSize} color={iconColor} />;
      case 'Ubicación':
        return <MapPin size={iconSize} color={iconColor} />;
      case 'Notificaciónes':
        return <Bell size={iconSize} color={iconColor} />;
      case 'Información':
        return <Info size={iconSize} color={iconColor} />;
      case 'Historial de Alarma': // 📌 Se agrega ícono para este elemento
        return <BellRing size={iconSize} color={iconColor} />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    onClose();
    navigation.navigate('Login');
  };

  return (
    <>
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: overlayAnim,
            pointerEvents: isOpen ? 'auto' : 'none',
          },
        ]}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={onClose}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/logo/icon.png')}
              style={styles.headerImage}
              resizeMode="contain"
            />
            <View style={styles.headerContent}>
              <Text style={styles.headerText}>SOS 911</Text>
              <Text style={styles.headerSubText}>Emergencias</Text>
            </View>
          </View>

          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate(item.screen);
                  onClose();
                }}
              >
                {renderIcon(item.title)}
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <LogOut size={normalize(20)} color="#ff3b30" />
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default CustomSidebar;