import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    scrollContainer: {
        paddingBottom: normalize(20),
    },

    alertCard: {
        backgroundColor: '#FFFFFF',
        padding: normalize(15),
        marginVertical: normalize(10),
        borderRadius: normalize(12),
        borderLeftWidth: 5,
        borderLeftColor: '#00ACAC', // 📌 Color Figma
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },

    alertHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: normalize(5),
    },

    alertType: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: '#333',
    },

    alertStatus: {
        fontSize: normalize(14),
        fontWeight: 'bold',
        paddingVertical: normalize(3),
        paddingHorizontal: normalize(10),
        borderRadius: normalize(8),
        textAlign: 'center',
    },

    // 📌 Colores según estado
    status_resuelto: { backgroundColor: '#5CB85C', color: '#FFF' }, // Verde
    status_activo: { backgroundColor: '#D9534F', color: '#FFF' }, // Rojo

    alertText: {
        fontSize: normalize(15),
        color: '#444',
        marginBottom: normalize(5),
    },

    boldText: {
        fontWeight: 'bold',
        color: '#00ACAC', // Color Figma
    },

    noDataText: {
        fontSize: normalize(16),
        color: '#AAA',
        textAlign: 'center',
        marginTop: normalize(20),
        fontStyle: 'italic',
    },
});

export default styles;
