import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';

import FiestasScreen from '../screens/FiestasScreen';
import MisFiestasScreen from '../screens/MisFiestasScreen';
import MisFavoritosScreen from '../screens/MisFavoritosScreen';
import ActualizarDatosScreen from '../screens/ActualizarDatosScreen';
import CambiarContrasenaScreen from '../screens/CambiarContrasenaScreen';
import PreguntasFrecuentesScreen from '../screens/PreguntasFrecuentesScreen';
import TerminosCondicionesScreen from '../screens/TerminosCondicionesScreen';
import SoporteScreen from '../screens/SoporteScreen';
import CerrarSesionScreen from '../screens/CerrarSesionScreen';

import styles from '../assets/styles';

export default createAppContainer(createDrawerNavigator (
  {
    Home:{
      screen:FiestasScreen,
      navigationOptions: {
        drawerLabel: ()=>null
      }
    },
    MisFiestas:{ 
      screen:MisFiestasScreen,
      navigationOptions: {
        title: 'Mis Fiestas', 
      },
      
    }, 
    MisFavoritos:{ 
      screen:MisFavoritosScreen,
      navigationOptions: {
        title: 'Mis Favoritos',
      }
    } , 
    ActualizarDatos:{ 
      screen:ActualizarDatosScreen,
      navigationOptions: {
        title: 'Actualizar Datos',
      }
    } , 
    CambiarContrasena:{ 
      screen:CambiarContrasenaScreen,
      navigationOptions: {
        title: 'Cambiar Contraseña',
      }
    } , 
    PreguntasFrecuentes:{ 
      screen:PreguntasFrecuentesScreen,
      navigationOptions: {
        title: 'Preguntas Frecuentes',
      }
    } , 
    TerminosCondiciones:{ 
      screen:TerminosCondicionesScreen,
      navigationOptions: {
        title: 'Términos y Condiciones',
      }
    } , 
    Soporte:{ 
      screen:SoporteScreen,
      navigationOptions: {
        title: 'Soporte',
      }
    } ,
    CerrarSesion:{ 
      screen:CerrarSesionScreen,
      navigationOptions: {
        title: 'Cerrar Sesión',
      }
    } 
}, {
  // define customComponent here
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#c63275'
  },
  contentComponent: props => 
  <ScrollView style={styles.menuPrincipal}>
    <Text style={styles.menuPrincipalUserName}>Nombre de Usuario</Text>
    <DrawerItems {...props} />
    
  </ScrollView>
}));
