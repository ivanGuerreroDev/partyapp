import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import HeaderInt from '../../navigation/HeaderInt'; 
import styles from '../../assets/styles'; 
import { Ionicons } from '@expo/vector-icons';
import Eventos from '../../modules/eventos'

export default class ListaFiestasScreen extends React.Component {
  static navigationOptions = {
    header: null,
};

  constructor(props)
  {
    super(props)
    this.state = {
      fiestas : [],
      isRefreshing : true
    }
  }

  async componentDidMount()
  {
    this.props.navigation.addListener ('willFocus', () =>{
      this.getFiestas()
    })
  }

  async getFiestas()
  {
    this.setState({isRefreshing : true})
    Eventos.getFiestas().then((fiestas) => {
          if(fiestas && fiestas.valid){
            this.setState({
              fiestas : fiestas.result
            },() => this.getDetalleCotizacion())
          }else{
              alert("Error obteniendo fiestas")
          }
    })
  }

  async getDetalleCotizacion(){
    let {fiestas} = this.state
    let cotizaciones = []
    for(key in fiestas)
    {
      console.log(fiestas[key])
      let id_evento = fiestas[key]._id
      if(fiestas[key]._id)
      {
        await Eventos.getCotizaciones({ id_evento }).then( (result) =>{
          if( result && result.valid) 
          {
            let cotizacion = result.result
            fiestas[key].cotizaciones = cotizacion
            //cotizaciones.push(cotizacion)
          }
        })
      }
    }
    this.setState({
      fiestas,
      isRefreshing : false
    })
  }

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
            <FlatList 
              data = {this.state.fiestas}
              extraData = {this.state.fiestas}
              keyExtractor = { (item, index) => item._id}
              refreshControl={
              <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => this.getFiestas()}
                    colors={["#C63275"]}
                 />
              }
              renderItem={({ item,index }) => {
                return(
                  <TouchableOpacity 
                    style={estilos.itemFiestaContainer}
                    onPress={() => this.props.navigation.navigate('ListaProveedores', {
                      cotizaciones : item.cotizaciones ? item.cotizaciones : []
                    })} 
                  >
                    <View style={{width:250}}>
                      <Text style={{fontSize:18, fontWeight: '700'}}>{item.nombre}</Text>
                      <Text style={{marginBottom:30}}>{item.fecha_del_evento}</Text>
                      <Text style={{marginTop:'auto'}}>{item.categoria}</Text>
                    </View>
                    <View style={{width:50}}>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="ios-document" size={18} color="#333" 
                          style={{marginRight:5}}
                        />
                        <Text style={{color: '#333'}}>{item.cotizaciones ? item.cotizaciones.length : 0}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons
                          name="ios-checkmark" size={22} color="#333" 
                          style={{marginRight:5}}
                        />
                        <Text style={{color: '#333'}}>{item.servicios.length}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}

            />
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