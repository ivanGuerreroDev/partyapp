import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Icon } from 'expo';
import Colors from '../constants/Colors';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default class EstrellasPuntuacion extends React.Component {
  _Estrellas = (puntaje) =>{
    var estrellas = [];
    for(var i = 0; i < puntaje; i++){
      estrellas.push(
        <AntDesign
          key={i}
          name='star'
          color='#f4e950'
          size={20}
          style={{marginRight:5}}
        />
      );
    }
    restante = 5 - puntaje;
    for(var i = 0; i < restante; i++){
      estrellas.push(
        <AntDesign
          key={i}
          name='star'
          color='#c4c4c4'
          size={20}
          style={{marginRight:5}}
        />
      );
    }
    return estrellas;
  }
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        {this._Estrellas(this.props.puntaje)}
      </View>      
    );
  }
}