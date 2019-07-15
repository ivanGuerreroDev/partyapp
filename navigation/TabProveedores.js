import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, ScrollView } from 'react-navigation';

class CotizacionTab extends React.Component {
  _renderInformacion = (informacionArr) =>{
    var components = [];
    informacionArr.map((data) => {
      if(data.type =='titulo'){
        components.push(
          <Text style={{textAlign:'center', fontSize: 20, marginBottom:20}}>{data.content}</Text>
        )
      }else if(data.type =='tipo'){
        components.push(
          <Text style={{fontSize: 16, marginBottom:15, textTransform: 'uppercase', fontWeight: '700'}}>{data.content}</Text>
        )
      }else if(data.type =='descripcion'){
        components.push(
          <Text style={{fontSize: 12, marginBottom:5}}>{data.content }</Text>
        )
      }else if(data.type =='precio'){
        components.push(
          <Text style={{fontSize: 14, fontWeight:'700', marginBottom:5}}>{data.content }</Text>
        )
      }else if(data.type =='separador'){
        components.push(
          <View style={{borderBottomColor:'#727272', borderBottomWidth: .7, marginVertical:30}}></View>
        ) 
      }
    }); 
    return components;
  }
  render() {
    return (
        <View style={{ flex: 1, padding: 20}}>
         {this._renderInformacion(this.props.screenProps.contenido)}
        </View>
    );
    
  }
  
  
}
class InformacionTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
      </View>
    );
  }
}

class GaleriaTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Collected!</Text>
      </View>
    );
  }
}

class PuntuacionTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Collected!</Text>
      </View>
    );
  }
}

const TabProveedores = createMaterialTopTabNavigator({
  Cotización: CotizacionTab,
  Información: InformacionTab,
  Galeria: GaleriaTab,
  Puntuación: PuntuacionTab
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    activeTintColor: '#333',
    inactiveTintColor: '#333',
    style: {
      backgroundColor: 'transparent',
      shadowOpacity: 0,
      elevation: 0,
      shadowColor: 'transparent',
      
    },
    indicatorStyle: {
      backgroundColor: '#c63275',
    },
    upperCaseLabel: false,
    tabStyle:{paddingHorizontal:3}
  }
});
export default createAppContainer(TabProveedores);