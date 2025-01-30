import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { Bell, Edit2, Trash2 } from 'lucide-react-native';
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
      description: 'John Smith: Se dio atención y ayuda a la persona.',
      time: 'Hace 30 minutos',
    },
    {
      id: '2',
      title: 'Alerta : 911',
      description: 'John Smith: Se dio atención y ayuda a la persona.',
      time: 'Hace 40 minutos',
    },
    {
      id: '3',
      title: 'Alerta : 911',
      description: 'John Smith: Se dio atención y ayuda a la persona.',
      time: 'Hace 1 hora',
    },
    {
      id: '4',
      title: 'Alerta : 911',
      description: 'John Smith: Persona acogida por comunidad.',
      time: 'Hace 2 horas',
    },
  ]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleDelete = (id: string) => {
    Alert.alert('Eliminar notificación', '¿Estás seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: () => setNotifications(notifications.filter(n => n.id !== id)),
      },
    ]);
  };

  const renderNotificationCard = (notification: Notification) => (
    <View key={notification.id} style={styles.notificationCard}>
      <View style={styles.notificationHeader}>
        <Text style={styles.communityText}>Comunidad San Jose</Text>
        <Text style={styles.timeText}>{notification.time}</Text>
      </View>
      <View style={styles.notificationContent}>
        <Bell size={normalize(30)} color="#ff6600" />
        <View style={styles.notificationInfo}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationDescription}>{notification.description}</Text>
        </View>
        <Image source={require('../../assets/noti.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleDelete(notification.id)}>
          <Trash2 size={normalize(20)} color="#ff3b30" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Notificaciones" />
      <ScrollView style={styles.content}>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/noti.jpg')} style={styles.profilePicture} />
          <Text style={styles.profileName}>Pamela Ruiz</Text>
        </View>
        {notifications.length > 0 ? notifications.map(renderNotificationCard) : <Text>No hay notificaciones</Text>}
      </ScrollView>
      <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
