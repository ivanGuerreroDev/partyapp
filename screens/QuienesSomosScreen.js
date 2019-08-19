import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from '../assets/styles';
import Header from '../navigation/Header';
import { DrawerActions } from 'react-navigation';
var distritos = require('../datos/peruGeo/distritos.json');
export default class SoporteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = {
    }
  }
  render() {  
    return (
      <View style={styles.container}>
        <Header screenProps={{openMenu: ()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}}/>
        <ScrollView style={{paddingHorizontal:40}}>
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Quienes Somos</Text>
          <Text style={styles.questionTitle}>Que es PartyApp</Text>
          <Text style={styles.questionDescription}>Cada punto PartyApp te da una oportunidad para ganar los sorteos que realizamos para nuestros usuarios vigentes, donde podrás ganar descuentos significativos y hasta servicios gratis para tu próximo evento. </Text>
          <Text style={styles.questionTitle}>Como funciona PartyApp</Text>
          <Text style={styles.questionDescription}>Cada punto PartyApp te da una oportunidad para ganar los sorteos que realizamos para nuestros usuarios vigentes, donde podrás ganar descuentos significativos y hasta servicios gratis para tu próximo evento.  </Text>
          <Text style={styles.questionTitle}>Nuestro objetivo</Text>
          <Text style={styles.questionDescription}>Cada punto PartyApp te da una oportunidad para ganar los sorteos que realizamos para nuestros usuarios vigentes, donde podrás ganar descuentos significativos y hasta servicios gratis para tu próximo evento.  </Text>
      
        </ScrollView>
      </View>
    )
  }
}
