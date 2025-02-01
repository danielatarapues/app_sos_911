import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Animated,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { XCircle } from 'lucide-react-native';
import { ArrowRight } from 'lucide-react-native';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { styles } from './NotificationsStyles';
import { Notification, NotificationsProps } from './types';
import { normalize } from '../../utils/dimensions';

const NotificationsScreen: React.FC<NotificationsProps> = ({ navigation }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Alerta : SOS',
      description: 'Pablo Vera: Me cai de la moto.',
      time: 'Hace 30 minutos',
    },
    {
      id: '2',
      title: 'Alerta : 911',
      description: 'Axel Loja: Ayuda me matan.',
      time: 'Hace 40 minutos',
    },
    {
      id: '3',
      title: 'Alerta : Innecesaria',
      description: 'Leo Perez: Aplaste mal botón.',
      time: 'Hace 1 hora',
    },
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const confirmDelete = (id: string) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Seguro que deseas eliminar esta notificación?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", onPress: () => handleDelete(id), style: "destructive" },
      ]
    );
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const renderNotificationCard = (notification: Notification) => {
    const translateX = new Animated.Value(0);

    let titleStyle = [styles.notificationTitle];
    if (notification.id === '1') titleStyle.push(styles.sosAlert);
    if (notification.id === '2') titleStyle.push(styles.alert911);
    if (notification.id === '3') titleStyle.push(styles.unnecessaryAlert);

    return (
      <TouchableWithoutFeedback key={notification.id} onLongPress={() => confirmDelete(notification.id)}>
        <Animated.View style={[styles.notificationCard, { transform: [{ translateX }] }]}>
          <View style={styles.notificationHeader}>
            <Text style={styles.communityText}>Comunidad San Jose</Text>
            <Text style={styles.timeText}>{notification.time}</Text>
          </View>

          <View style={styles.notificationContent}>
            <View style={styles.notificationInfo}>
              <Text style={titleStyle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
            </View>
            <Image source={require('../../assets/noti.jpg')} style={styles.profileImage} />
          </View>

          <View style={styles.notificationActions}>
            {notification.id !== '3' && (
              <View style={styles.deleteButton}>
                <Text style={styles.deleteText}>Ver dirección de usuario</Text>
                <ArrowRight size={normalize(20)} color="#fff" />
              </View>
            )}
            {notification.id === '3' && (
              <View style={styles.innecesarioButton}>
                <XCircle size={normalize(20)} color="#fff" />
                <Text style={styles.innecesarioText}>Innecesario</Text>
              </View>
            )}
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Notificaciones" />
        <ScrollView style={styles.content}>
          {notifications.length > 0 ? (
            notifications.map(renderNotificationCard)
          ) : (
            <Text>No hay notificaciones</Text>
          )}
        </ScrollView>
        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NotificationsScreen;
