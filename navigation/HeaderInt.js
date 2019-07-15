
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
 
export default class HeaderInt extends React.Component {
  constructor(props) {
    super(props);    
    this.state = { 
    };
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
            onPress={() => this.props.screenProps.prevNav()}
            style={{flexDirection: 'row'}}
          >
            <MaterialIcon
              name={'keyboard-arrow-left'}
              size={20}
              color="#fff"
            /> 
            <Text style={{color:'#fff', marginLeft: 5, fontSize: 14}}>Anterior</Text>
        </TouchableOpacity>
        <View style={styles.logoTopCenter}>
          <Text style={{color:'#fff', fontSize:18, textAlign: 'center'}}>
            {this.props.screenProps.titulo}
          </Text>
        </View>
          
      </View>
    );
  }
}


