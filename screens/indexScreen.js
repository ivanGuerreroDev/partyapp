import React, { Component } from 'react';
import {
    Text,
    Image, 
    TextInput,
    TouchableOpacity,
    View,
    Button,
    StyleSheet,
    Platform
} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'


export default class Index extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
              marginBottom: 80, 
              alignSelf: 'center', 
              width: 300,
              height: 300,
              resizeMode: 'contain'
          }}
          source={require('../assets/images/logo.png')}
        />
        <TouchableOpacity
          style={[styles.button,{marginBottom:20}]}
          onPress={() => this.props.navigation.navigate('Login')} 
        >
          <LinearGradient
            colors={['#C63275', '#8F4D93']}
            start={[1,1]}
            end={[0,0]}
            style={styles.gradientButton}>
            <Text style={{
              fontWeight: '700',
              color: '#fff'
            }}>INGRESAR</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')} 
        >
          <LinearGradient
            colors={['#C63275', '#8F4D93']}
            start={[1,1]}
            end={[0,0]}
            style={styles.gradientButton}>
            <Text style={{
              fontWeight: '700',
              color: '#fff'
            }}>REGISTRO</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
      backgroundColor: '#f4f4f4',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 40,
      paddingRight: 40,
  },
  button:{
    marginBottom: 20,
    width: 200,
  },
  gradientButton: {
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    alignItems: 'center', 
    borderRadius: Platform.OS === 'android' ? 30 : 22 
  },
  inputElement: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#e4e4e4',
      borderRadius: 6
  },
  googleButton: {
      backgroundColor: '#ffffff',
  }
});