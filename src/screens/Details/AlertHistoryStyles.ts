// Importamos los módulos necesarios desde React Native
import { StyleSheet, Platform, StatusBar } from 'react-native'; 

// Importamos la función normalize para adaptar los tamaños según la pantalla del dispositivo
import { normalize } from '../../utils/dimensions'; 

// Definimos los estilos de la pantalla
const styles = StyleSheet.create({
    // 📌 Contenedor principal de la pantalla
    container: {
        flex: 1, // Ocupa todo el espacio disponible en la pantalla
        padding: 20, // Agrega espacio alrededor de los elementos
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Evita que el contenido se superponga con la barra de estado en Android
    },

    // 📌 Estilos de la imagen de fondo
    backgroundImage: {
        flex: 1, // Hace que la imagen cubra toda la pantalla
        width: '100%', // Ajusta el ancho de la imagen al 100% del contenedor
        height: '100%', // Ajusta la altura de la imagen al 100% del contenedor
    },

    // 📌 Contenedor del título con fondo rojo
    titleContainer: {
        backgroundColor: 'red', // Fondo rojo para la caja del título
        padding: normalize(10), // Espaciado interno del título
        borderTopLeftRadius: normalize(10), // Redondea la esquina superior izquierda
        borderTopRightRadius: normalize(10), // Redondea la esquina superior derecha
        marginBottom: normalize(10), // Espacio entre el título y las alertas
    },

    // 📌 Estilos del título de la pantalla
    title: {
        fontSize: normalize(23), // Tamaño de fuente más legible
        fontWeight: 'bold', // Hace que el texto sea más grueso
        color: 'red', // Cambia el color del texto a blanco
        textAlign: 'center', // Centra el texto en la caja
    },

    // 📌 Contenedor general de todas las alertas
    alertContainer: {
        backgroundColor: 'white', // Color de fondo blanco
        padding: normalize(15), // Espaciado interno
        borderRadius: normalize(10), // Bordes redondeados
        borderWidth: 2, // Grosor del borde
        borderColor: 'red', // Color del borde en rojo
        shadowColor: '#000', // Sombra en color negro
        shadowOpacity: 0.2, // Opacidad de la sombra
        shadowRadius: 4, // Tamaño de la sombra
        elevation: 5, // Sombra en Android
    },

    // 📌 Caja individual de cada alerta
    alertCard: {
        backgroundColor: '#fff', // Color de fondo blanco dentro de la alerta
        padding: normalize(10), // Espaciado interno de cada alerta
        marginVertical: normalize(0), // Espaciado vertical entre alertas
        borderRadius: normalize(10), // Bordes redondeados
        borderWidth: 1.5, // Grosor del borde
        borderColor: 'red', // Borde gris claro
        shadowColor: '#000', // Color de la sombra
        shadowOpacity: 0.1, // Opacidad de la sombra
        shadowRadius: 5, // Tamaño de la sombra
        elevation: 3, // Sombra en Android para efecto elevado
    },

    // 📌 Estilos del texto dentro de las alertas
    alertText: {
        fontSize: normalize(14), // Tamaño de la fuente más pequeño
        color: '#444', // Color gris oscuro para mejor lectura
        marginBottom: normalize(3), // Espacio entre cada línea de texto
    },

    // 📌 Estilos para resaltar palabras clave como "Fecha", "Ubicación", etc.
    boldText: {
        fontWeight: 'bold', // Hace que el texto sea más grueso
        color: '#000', // Mantiene el color en negro para contraste
    },

    // 📌 Texto cuando no hay alertas disponibles
    noDataText: {
        fontSize: normalize(16), // Tamaño de la fuente para que sea legible
        color: '#999', // Color gris claro
        textAlign: 'center', // Centra el texto
        marginTop: normalize(20), // Espacio superior
    },
});

// Exportamos los estilos para ser usados en otros archivos
export default styles;
