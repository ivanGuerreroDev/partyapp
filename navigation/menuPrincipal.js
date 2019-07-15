import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';

import FiestasScreen from '../screens/FiestasScreen';
import ListaFiestasScreen from '../screens/MisFiestas/ListaFiestasScreen';
import ListaProveedoresScreen from '../screens/MisFiestas/ListaProveedoresScreen';
import CotizacionScreen from '../screens/MisFiestas/CotizacionScreen';
import resumenGastoScreen from '../screens/resumenGastoScreen';
import ActualizarDatosScreen from '../screens/ActualizarDatosScreen';
import CambiarContrasenaScreen from '../screens/CambiarContrasenaScreen';
import PreguntasFrecuentesScreen from '../screens/PreguntasFrecuentesScreen';
import TerminosCondicionesScreen from '../screens/TerminosCondicionesScreen';
import SoporteScreen from '../screens/SoporteScreen';

import styles from '../assets/styles';



export default createAppContainer(createDrawerNavigator (
  {
    Home:{
      screen:FiestasScreen,
      navigationOptions: {
        drawerLabel: ()=>null
      }
    },
    ListaFiestas:{ 
      screen:ListaFiestasScreen,
      navigationOptions: {
        title: 'Mis Fiestas', 
      },
    }, 
          ListaProveedores:{
            screen:ListaProveedoresScreen,
            navigationOptions: {
              drawerLabel: ()=>null
            }
          },
          Cotizacion:{
            screen:CotizacionScreen,
            navigationOptions: {
              drawerLabel: ()=>null
            }
          },
    ResumenGasto:{ 
      screen:resumenGastoScreen,
      navigationOptions: {
        title: 'Resumen de gastos',
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
    <Text style={styles.menuPrincipalUserName}>
      {
        props.screenProps.getState().datosUsuario.nombreCompleto
      }</Text>
    <DrawerItems {...props} /> 
    <TouchableOpacity
      onPress={()=>{props.screenProps._logout()}}
    ><Text
      style={{
        padding:20,
        color: '#C63275'
      }}
    >Cerrar Sesión</Text></TouchableOpacity>
    
  </ScrollView>
}));
