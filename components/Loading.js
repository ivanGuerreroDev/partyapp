import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { Asset } from 'expo-asset'
import Constants from 'expo-constants'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'

export default class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  } 
  render() {
    return (
      <View style={!(this.props.screenProps.getState().espera)?styles.invisible:[styles.visible,
        {
          position: 'absolute',
          zIndex:2,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          opacity: .9,
          justifyContent: 'center', alignItems: 'center',
        }]}>
          <Image
            style={{
                marginBottom: 80, 
                alignSelf: 'center', 
                width: 64,
                height: 64,
                resizeMode: 'contain'
            }}
            source={require('../assets/loader.gif')}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  invisible:{display:'none'},
  visible: {display: 'flex', flex:1}
});  
   