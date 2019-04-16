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
import styles from '../assets/styles';
import Header from '../navigation/Header'; 
import { DrawerActions } from 'react-navigation';
import FormularioArmaTuFiesta from '../navigation/AppNavigator';

export default class FiestasScreen extends React.Component {
  
 

  constructor(props){
    super(props);
    this.state ={
      menuPrincipal : false,
    }
  } 
  render() {  
    return (
      <View style={styles.container}>
        <Header openMenu={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
        <View style={styles.container}>
          <FormularioArmaTuFiesta />
        </View>
      </View>
    );
  }

}


