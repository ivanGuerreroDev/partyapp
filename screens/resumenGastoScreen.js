import React from 'react';
import {
  View,
} from 'react-native';
import styles from '../assets/styles';
import { DrawerActions } from 'react-navigation';
import ResumenGasto from '../navigation/ResumenGasto';
export default class ResumenGastosScreen extends React.Component {
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
          <ResumenGasto
            screenProps={{
              openMenu: () => this.props.navigation.dispatch(DrawerActions.openDrawer()),
              setState: (arr)=> this.props.screenProps.setState(arr),
              getState: ()=> this.props.screenProps.getState(),
            }}
            
          />
        </View>
      </View>
    );
  }
}