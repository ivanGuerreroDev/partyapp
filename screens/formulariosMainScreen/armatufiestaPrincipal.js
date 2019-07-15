
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
import styles from '../../assets/styles';
import Header from '../../navigation/Header';

export default class armatufiestaPrincipal extends React.Component { 
  static navigationOptions = {
    header: null,
  };
  render() {  
  return (
    <View style={{flex:1}}>
      <Header screenProps={{openMenu: ()=>this.props.screenProps.openMenu()}}/>
      <ScrollView style={styles.containerScroll} contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity
          style={styles.nuevaFiesta}
          onPress={() => this.props.navigation.navigate('DatosFiesta')} 
        >
          <Image
            source={require('../../assets/images/armatufiestaGlobos.png')}
            style={styles.imgFondo}
          />
          <View style={[styles.nuevaFiestaTexto]}>
            <Text style={styles.botonText}>¡Arma tu fiesta!</Text>  
            <FeatherIcon
              name={'arrow-right'}  
              color="#78b7b6"
              size={45}
            />  
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
}