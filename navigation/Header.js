
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
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo';
import styles from '../assets/styles';
 
export default class headerScreen extends React.Component {
  abrirMenu = () => {
    // Need to check to prevent null exception. 
    this.props.openMenu(); // Same as this.props.onPress && this.props.onPress();
  }
  render() {   
    return (
      <View style={styles.header}>
        <LinearGradient
          colors={['#8f4d93', '#c63275']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 60,
          }}
          start={[0, 0]}
          end={[1, 1]}
        />
        <TouchableOpacity 
            //onPress={() => this.menuPrincipal()}
            onPress={() => this.abrirMenu()}
          >
            <MaterialIcon
              name={'menu'}
              size={25}
              color="#f4e950"
            /> 
        </TouchableOpacity>
        <Image 
          source={require('../assets/images/logoTop.png')}
          style={styles.logoTop}
        />   
        <TouchableOpacity 
          >
            <MaterialIcon
              name={'notifications-none'}
              size={25}
              color="#f4e950"
            /> 
        </TouchableOpacity>
      </View>
    );
  }
}


