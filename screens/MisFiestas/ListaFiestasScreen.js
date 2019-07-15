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
import styles from '../../assets/styles'; 
import { Ionicons } from '@expo/vector-icons';

export default class ListaFiestasScreen extends React.Component {
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
          <View style={{backgroundColor:'#fff', alignItems: 'center', padding:20, flex:1}}>
            <Text style={{fontSize: 22, marginBottom:30}}>Selecciona tu fiesta del listado</Text>
            <TouchableOpacity 
              style={estilos.itemFiestaContainer}
              onPress={() => this.props.navigation.navigate('ListaProveedores')} 
            >
              <View style={{width:250}}>
                <Text style={{fontSize:18, fontWeight: '700'}}>Nombre de la fiesta</Text>
                <Text style={{marginBottom:30}}>02/02/2019</Text>
                <Text style={{marginTop:'auto'}}>Baby Shower</Text>
              </View>
              <View style={{width:50}}>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="ios-document" size={18} color="#333" 
                    style={{marginRight:5}}
                  />
                  <Text style={{color: '#333'}}>3</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="ios-checkmark" size={22} color="#333" 
                    style={{marginRight:5}}
                  />
                  <Text style={{color: '#333'}}>3</Text>
                </View>
              </View>
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