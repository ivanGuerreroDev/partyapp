import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
  Button,
  ImageBackground
} from 'react-native';
import HeaderInt from '../../navigation/HeaderInt'; 
import TabProveedores from '../../navigation/TabProveedores'; 
import styles from '../../assets/styles'; 
import { Ionicons } from '@expo/vector-icons';

export default class CotizacionScreen extends React.Component {
  static navigationOptions = {
    header: null,
};
  render() {   
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderInt 
          screenProps={{
            prevNav: ()=> this.props.navigation.goBack(),
            titulo: 'Mis Fiestas'
          }}
        />
        
        <ImageBackground source={require('../../assets/images/BgGradientAzul.jpg')} style={{marginBottom: -50, width: '100%', height: 220, paddingTop: 20}}>
          <Image 
            style={{
              alignSelf: 'center', 
              width: 100,
              height: 100,
              resizeMode: 'contain',
              backgroundColor:'#fff',
              marginBottom: 10
            }} 
            source={require('../../assets/images/logoProveedor.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 18}}>Proveedor</Text>
        </ImageBackground>
        <TabProveedores 
          screenProps={{
            contenido: [
              {
                type: 'titulo',
                content:'Show y Camara'
              },
              {
                type: 'tipo',
                content:'Animación'
              }, 
              {  
                type: 'descripcion',
                content:'Duración: 2 horas'
              },
              {
                type: 'precio',
                content:'S/.300'
              },
              {
                type: 'separador'
              }
            ]
          }}    
        />

        <View style={{position:'absolute', alignItems:'center', bottom:0, backgroundColor:'#c63275', width:'100%', padding:15, flexDirection: 'row'}}>
          <Text style={{color:'white', fontSize:18}}>COSTO TOTAL DEL SERVICIO</Text>
          <Text style={{color:'white', fontSize:20, fontWeight: '700', marginLeft: 'auto'}}>S/.300</Text>
        </View>
      </View>
    )
  }
}