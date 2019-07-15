import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput ,
  Picker,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';
import DatePicker from 'react-native-datepicker'
import { RadioButton } from 'react-native-paper';
import styles from '../../assets/styles';

export default class FiestasScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = { 
      alquilarLocal: 'No', 
    };
  }
  render() {
    const { alquilarLocal } = this.state;
    return (
        <ScrollView>
          <View
           style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/armatufiestaGlobosIzquierda.png')}
              style={{
                resizeMode: 'contain', // or 'stretch'
                height: 70,
                marginVertical: 30

              }} 
            />
          </View> 
        </ScrollView>
    );
  }

}