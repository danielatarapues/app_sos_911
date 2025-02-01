import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import CustomSidebar from '../../components/Sidebar/Sidebar'; // 📌 Importamos el Sidebar
import styles from './AlertHistoryStyles';

// Lista de alertas simuladas
const alertHistory = [
    { id: 1, type: 'SOS', date: '10-11-24 / 7:53:36 pm', location: 'Av. 6 de Diciembre y Patria, Quito, Ecuador', status: 'Inactivo' },
    { id: 2, type: 'SOS', date: '28-09-24 / 8:28:49 pm', location: 'Av. 6 de Diciembre y Patria, Quito, Ecuador', status: 'Inactivo' },
];

const AlertHistoryComponent = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // 📌 Estado para abrir/cerrar el Sidebar

    return (
        <ImageBackground 
            source={require('../../assets/fondo.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                {/* 📌 Encabezado con menú funcional */}
                <Header onMenuPress={() => setSidebarOpen(true)} /> 

                {/* 📌 Título de la pantalla */}
                <Text style={styles.title}>Historial de Alertas</Text>

                {/* 📌 Contenedor de alertas */}
                <ScrollView>
                    {alertHistory.length > 0 ? (
                        alertHistory.map(alert => (
                            <View key={alert.id} style={styles.alertCard}>
                                {/* 📌 Información de la alerta */}
                                <Text style={styles.alertText}><Text style={styles.boldText}>Fecha:</Text> {alert.date}</Text>
                                <Text style={styles.alertText}><Text style={styles.boldText}>Ubicación:</Text> {alert.location}</Text>
                                <Text style={styles.alertText}><Text style={styles.boldText}>Estado:</Text> {alert.status}</Text>
                                <Text style={styles.alertText}><Text style={styles.boldText}>Tipo:</Text> {alert.type}</Text>
                            </View>
                        ))
                    ) : (
                        /* 📌 Mensaje en caso de que no haya alertas */
                        <Text style={styles.noDataText}>No hay alertas disponibles.</Text>
                    )}
                </ScrollView>

                {/* 📌 Sidebar para la navegación */}
                <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default AlertHistoryComponent;
