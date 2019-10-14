import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../../assets/styles';
import Header from '../../navigation/Header';
import Eventos from '../../modules/eventos'

export default class fiestas extends React.Component { 
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
    this.getFiestas()
  }

  getFiestas()
  {
    Eventos.getFiestas().then((fiestas) => {
          if(fiestas && fiestas.valid){
            this.setState({
              fiestas : fiestas.result
            },() => this.getDetalleCotizacion())
          }else{
            this.setState({ isRefreshing : false})
            alert("Error obteniendo fiestas")
          }
    })
  }

  async getDetalleCotizacion(){
    let {fiestas} = this.state
    let cotizaciones = []
    for(key in fiestas)
    {
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
      <View style={{flex:1}}>
        <Header screenProps={{openMenu: ()=>this.props.screenProps.openMenu()}}/>
        <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
          <Text style={{color:'#8F4D93', fontSize:20, marginBottom:20, textAlign: 'center', fontWeight:'700'}}>Resumen de gastos</Text>
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
              renderItem={({ item }) => {
                return(
                  <TouchableOpacity 
                    style={{paddingVertical:25, paddingHorizontal: 40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}
                    onPress={() => this.props.navigation.navigate('servicio',{ 
                      tipoFiesta : item.categoria,
                      servicios : item.servicios_solicitados,
                      invitados : item.adultos + item.ninos,
                      cotizaciones : item.cotizaciones
                    })}   
                  >
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: '50%'}}>
                        <Text style={{color:'#C63275', fontSize:14, fontWeight: '700'}}>{item.nombre}</Text>
                        <Text style={{color:'#333333', fontSize:12}}>{item.categoria}</Text>
                      </View>
        
                      <View style={{width: '50%', alignItems: 'flex-end'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{color:'#333333', fontSize:10, marginRight:10}}>{item.fecha_del_evento}</Text>
                          <FeatherIcon name="calendar" size={10} color="#333"/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{color:'#333333', fontSize:10, marginRight:10}}>{item.hora_del_evento}</Text>
                          <FeatherIcon name="clock" size={10} color="#333"/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{color:'#333333', fontSize:10, marginRight:10}}>{item.direccion}</Text>
                          <MaterialIcons name="location-on" size={10} color="#333"/>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );}} />

        </ScrollView>
      </View>
    )
  }
}