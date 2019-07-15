import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Font,
  View,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../../assets/styles';
import Header from '../../navigation/Header';

export default class fiestas extends React.Component { 
  static navigationOptions = {
    header: null,
  };
  render() {  
    return (
      <View style={{flex:1}}>
        <Header screenProps={{openMenu: ()=>this.props.screenProps.openMenu()}}/>
        <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
          <Text style={{color:'#8F4D93', fontSize:20, marginBottom:20, textAlign: 'center', fontWeight:'700'}}>Resumen de gastos</Text>

          <TouchableOpacity 
            style={{paddingVertical:25, paddingHorizontal: 40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}
            onPress={() => this.props.navigation.navigate('servicio')}   
          >
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                <Text style={{color:'#C63275', fontSize:14, fontWeight: '700'}}>Nombre de la Fiesta</Text>
                <Text style={{color:'#333333', fontSize:12}}>Baby Shower</Text>
              </View>

              <View style={{width: '50%', alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color:'#333333', fontSize:10, marginRight:10}}>25/12/2019</Text>
                  <FeatherIcon name="calendar" size={10} color="#333"/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color:'#333333', fontSize:10, marginRight:10}}>23:00</Text>
                  <FeatherIcon name="clock" size={10} color="#333"/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color:'#333333', fontSize:10, marginRight:10}}>Santiago de Surco</Text>
                  <MaterialIcons name="location-on" size={10} color="#333"/>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}