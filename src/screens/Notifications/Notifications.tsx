import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Animated,
  PanResponder,
  ImageBackground,
} from 'react-native';
import { Bell } from 'lucide-react-native';
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
      title: 'Alerta : Innecesaria',
      description: 'John Smith: Se dio atención y ayuda a la persona.',
      time: 'Hace 1 hora',
    },
  ]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const renderNotificationCard = (notification: Notification) => {
    const translateX = new Animated.Value(0);
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        translateX.setValue(Math.max(0, gesture.dx));
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 100) {
          handleDelete(notification.id);
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    });

    let titleStyle = [styles.notificationTitle];
    if (notification.id === '1') titleStyle.push(styles.sosAlert);
    if (notification.id === '2') titleStyle.push(styles.alert911);
    if (notification.id === '3') titleStyle.push(styles.unnecessaryAlert);

    return (
      <Animated.View
        key={notification.id}
        style={[styles.notificationCard, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.notificationHeader}>
          <Text style={styles.communityText}>Comunidad San Jose</Text>
          <Text style={styles.timeText}>{notification.time}</Text>
        </View>
        <View style={styles.notificationContent}>
          <Bell size={normalize(30)} color="#000000" />
          <View style={styles.notificationInfo}>
            <Text style={titleStyle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
          </View>
          <Image source={require('../../assets/noti.jpg')} style={styles.profileImage} />
        </View>
      </Animated.View>
    );
  };

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Notificaciones" />
        <ScrollView style={styles.content}>
          {notifications.length > 0 ? notifications.map(renderNotificationCard) : <Text>No hay notificaciones</Text>}
        </ScrollView>
        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default NotificationsScreen;
