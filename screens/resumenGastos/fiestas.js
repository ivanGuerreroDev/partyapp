import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
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
          this.setState({isRefreshing : false})
          if(fiestas && fiestas.valid){
            this.setState({
              fiestas : fiestas.result
            })
          }else{
              alert("Error obteniendo fiestas")
          }
    })
  }

  onRefresh()
  {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    //Send local data (actions) to server
    this.getFiestas()
  }


  render() {  
    return (
      <View style={{flex:1}}>
        <Header screenProps={{openMenu: ()=>this.props.screenProps.openMenu()}}/>
        <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
          <Text style={{color:'#8F4D93', fontSize:20, marginBottom:20, textAlign: 'center', fontWeight:'700'}}>Resumen de gastos</Text>
          <FlatList 
              data = {this.state.fiestas}
              keyExtractor = { (item, index) => item._id}
              refreshing={this.state.isRefreshing}
              onRefresh={() => this.onRefresh()}
              renderItem={({ item }) => {
                return(
                  <TouchableOpacity 
                    style={{paddingVertical:25, paddingHorizontal: 40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}
                    onPress={() => this.props.navigation.navigate('servicio',{ 
                      tipoFiesta : item.categoria,
                      servicios : item.servicios_solicitados,
                      invitados : item.adultos + item.ninos
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