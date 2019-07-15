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
import HeaderInt from '../../navigation/HeaderInt';
export default class detalles extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {  
    return (
      <View style={{flex:1}}>
        <HeaderInt 
          screenProps={{
            prevNav: ()=> this.props.navigation.goBack(),
            titulo: 'Baby Shower'
          }}
        />
        <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
          <Text style={{fontSize:20, color: '#8F4D93', fontWeight:'700', textAlign: 'center'}}>Animación</Text>
        
          <View style={{paddingHorizontal: 40, paddingVertical:40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}>
            <Text style={{fontSize:16, color: '#333', fontWeight:'700',}}>Nombre Proveedor</Text>
            <Text style={{fontSize:14, color: '#333',}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <Text style={{fontSize:20, color: '#C63275', fontWeight:'700', textAlign:'right'}}>S/.100</Text>
          </View>
          <View style={{paddingHorizontal: 40, paddingVertical:40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}>
            <Text style={{fontSize:16, color: '#333', fontWeight:'700',}}>Nombre Proveedor</Text>
            <Text style={{fontSize:14, color: '#333',}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <Text style={{fontSize:20, color: '#C63275', fontWeight:'700', textAlign:'right'}}>S/.100</Text>
          </View>
          <View style={{paddingHorizontal: 40, paddingVertical:40, borderBottomColor: '#C1C1C1', borderBottomWidth:1}}>
            <Text style={{fontSize:16, color: '#333', fontWeight:'700',}}>Nombre Proveedor</Text>
            <Text style={{fontSize:14, color: '#333',}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <Text style={{fontSize:20, color: '#C63275', fontWeight:'700', textAlign:'right'}}>S/.100</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}