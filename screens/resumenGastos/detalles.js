import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Font,
  View,
} from 'react-native';
import styles from '../../assets/styles';
import HeaderInt from '../../navigation/HeaderInt';
import Eventos from '../../modules/eventos'

export default class detalles extends React.Component {
  static navigationOptions = {
    header: null,
  };


  constructor(props){
    super(props)
    this.state = {
      cotizaciones : this.props.navigation.getParam("cotizaciones",[]),
      data: []
    }
  }

  async componentDidMount()
  {
    let { cotizaciones } = this.state
    const servicio = this.props.navigation.getParam('servicio',"")
    let proveedores = [] , data = []
    for(key in cotizaciones) {
      let cotizacion = cotizaciones[key].cotizacion
      for(i in cotizacion) {
        if(cotizacion[i][servicio])
        {
          proveedores.push({
            id: cotizaciones[key].id_proveedor,
            costo : cotizacion[i][servicio].costo
          })
        }
      }
    }
    //get proveedores
    for(key in proveedores)
    {
      let id_proveedor = proveedores[key].id
      let costo = proveedores[key].costo
      await Eventos.getProveedorProfile({ id_proveedor }).then( (result) =>{
        let obj = result.data
        obj.costo = costo
        data.push(obj)
      })
    }
    this.setState({
      data
    })
  }

  render() {  
    return (
      <View style={{flex:1}}>
        <HeaderInt 
          screenProps={{
            prevNav: ()=> this.props.navigation.goBack(),
            titulo: this.props.navigation.getParam('tipoFiesta',"")
          }}
        />
        <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
          <Text style={{fontSize:20, color: '#8F4D93', fontWeight:'700', textAlign: 'center'}}>{this.props.navigation.getParam('servicio',"")}</Text>
          <FlatList 
            data={this.state.data}
            extraData={this.state.data}
            keyExtractor = { (item, index) => item.id_proveedor}
            renderItem={({ item }) => {
              return(
                <View style={{paddingHorizontal: 40, paddingVertical:40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}>
                  <Text style={{fontSize:16, color: '#333', fontWeight:'700',}}>{item.nombreEmpresa}</Text>
                  <Text style={{fontSize:14, color: '#333',}}>{item.direccionEmpresa}</Text>
                  <Text style={{fontSize:20, color: '#C63275', fontWeight:'700', textAlign:'right'}}>S/. {item.costo}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
    )
  }
}