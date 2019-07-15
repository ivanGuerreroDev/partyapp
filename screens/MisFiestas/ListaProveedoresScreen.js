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
  Button
} from 'react-native';
import HeaderInt from '../../navigation/HeaderInt'; 
import EstrellasPuntuacion from '../../components/EstrellasPuntuacion'; 
import styles from '../../assets/styles'; 
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class ListaProveedoresScreen extends React.Component {
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
        <ScrollView style={{flex:1}}>
          <View style={{backgroundColor:'#fff', padding:20, flex:1}}>
            <View style={{flexDirection:'row', alignItems: 'center', paddingBottom: 20, marginBottom:40, borderBottomColor: '#969696', borderBottomWidth: 0.7}}>
              <View>
                <Text style={{fontSize: 22, marginBottom:3}}>Mi Fiesta</Text>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome  
                    name={'calendar-o'}
                    size={16}
                    style={{marginRight:5}}
                    color="#333"
                  />
                  <Text>02/02/2019</Text>
                </View>
              </View>
              <TouchableOpacity style={{marginLeft: 'auto'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 20, marginRight: 5}}>Filtrar</Text>
                  <FontAwesome  
                    name={'filter'}
                    size={20}
                    style={{marginRight:5}}
                    color="#333"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity 
              style={estilos.itemFiestaContainer}
              onPress={() => this.props.navigation.navigate('Cotizacion')} 
            >
              <View style={{width:200}}>
                <Text style={{fontSize:18, fontWeight: '700'}}>Nombre del Proveedor</Text>
                <EstrellasPuntuacion 
                  puntaje={4} 
                />
                <Text style={{marginTop: 10}}>Servicios</Text>
                <Text style={{fontSize: 10}}>-Animación</Text>
                <Text style={{fontSize: 10}}>-Filmación</Text>
                <Text style={{fontSize: 10}}>-Catering</Text>
              </View>
              <Text style={{color:'#333', fontWeight: '700', fontSize:20, marginLeft: 'auto'}}>S/.300</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
      
const estilos = StyleSheet.create({
  row: {
    width:300, marginBottom: 20, alignItems: 'center', flexDirection: 'row'
  },

  itemFiestaContainer: {
    width:300,
    flexDirection: 'row',
    padding: 15,
    borderColor: '#c63275',
    borderWidth: 2,
    backgroundColor: '#f4f4f4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  }
});  