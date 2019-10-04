import React from 'react';
import {
  View,
} from 'react-native';
import styles from '../assets/styles';
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
        <View style={styles.container}>
          <FormularioArmaTuFiesta
            screenProps={{
              openMenu: () => this.props.navigation.dispatch(DrawerActions.openDrawer()),
              setDatosFiesta: (datos) => this.setState({datosNuevaFiesta: datos}),
              getDatosFiesta: () => this.state.datosNuevaFiesta,
              setState: (arr)=> this.props.screenProps.setState(arr),
              getState: ()=> this.props.screenProps.getState(),
              cargando: ()=> this.props.screenProps.cargando(),
              cargado: ()=> this.props.screenProps.cargado(),

            }}
            
          />
        </View>
      </View>
    );
  }

}


