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
            <TextInput
              style={{
                height: 40, 
                width: 300, 
                borderWidth: 1, 
                textAlign: 'center',
                borderColor: '#78b7b6', 
                color:'#2d3332', 
                paddingHorizontal: 10, 
                borderRadius: 6,
                marginBottom: 15
              }}
              placeholder={"Nombre del evento"}
              onChangeText={(nombreEvento) => this.setState({nombreEvento})}
              value={this.state.nombreEvento}
            />
            <DatePicker
              style={{
                width: 300,
                marginBottom: 15
              }}
              date={this.state.fechaEvento}
              mode="date"
              placeholder="Fecha del evento"
              format="YYYY-MM-DD"
              minDate={new Date().toISOString().slice(0,10)}
              iconSource={require('../../assets/images/calendar-icon.png')}
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              customStyles={{
                dateIcon: {
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 4,
                  top: 4,
                  marginLeft: 0,
                  width: 20,
                },
                dateInput: {
                  height: 40, 
                  borderWidth: 1, 
                  borderColor: '#78b7b6', 
                  color:'#2d3332', 
                  paddingHorizontal: 10, 
                  borderRadius: 6
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({fechaEvento: date})}}
            />
            <DatePicker
              style={{
                width: 300,
                marginBottom: 15
              }}
              date={this.state.horaEvento} 
              mode="time"
              placeholder="Hora del evento"
              format="HH:mm"
              iconSource={require('../../assets/images/calendar-icon.png')}
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              customStyles={{
                dateIcon: {
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 4,
                  top: 4,
                  marginLeft: 0,
                  width: 20,
                },
                dateInput: {
                  height: 40, 
                  borderWidth: 1, 
                  borderColor: '#78b7b6', 
                  color:'#2d3332', 
                  paddingHorizontal: 10, 
                  borderRadius: 6
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({horaEvento: date})}}
            />
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                marginBottom: 10
              }}
            >¿Deseas alquilar un local para tu evento?</Text>
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: 300,
                marginBottom: 15
              }}
            >
              <RadioButton
                value="Si"
                color='#c63275'
                uncheckedColor="#78b7b6"
                status={alquilarLocal === 'Si' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ alquilarLocal: 'Si' }); }}
              />
              <Text> Si</Text>
              <RadioButton
                value="No"
                color='#c63275'
                uncheckedColor="#78b7b6"
                status={alquilarLocal === 'No' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ alquilarLocal: 'No' }); }}
              />
              <Text> No</Text>
            </View>
            <TextInput
              style={{
                height: 40, 
                width: 300, 
                borderWidth: 1, 
                textAlign: 'center',
                borderColor: '#78b7b6', 
                color:'#2d3332', 
                paddingHorizontal: 10, 
                borderRadius: 6,
                marginBottom: 15
              }}
              placeholder={"Dirección"}
              onChangeText={(direccion) => this.setState({direccion})}
              value={this.state.direccion}
            />
            <View
              style={{
                width: 300 ,
                borderWidth: 1, 
                borderColor: '#78b7b6', 
                color:'#2d3332', 
                paddingHorizontal: 10, 
                borderRadius: 6,
                marginBottom: 15
              }}
            >
              <Picker
              selectedValue={this.state.departamento}
              style={{ 
                height: 40, 
              }}
              onValueChange={(itemValue, itemIndex) => this.setState({departamento: itemValue})}>
                <Picker.Item label="Lima" value="Lima" />
              </Picker>
            </View>
            <View
              style={{
                width: 300 ,
                borderWidth: 1, 
                borderColor: '#78b7b6', 
                color:'#2d3332', 
                paddingHorizontal: 10, 
                borderRadius: 6,
                marginBottom: 15
              }}
            >
              <Picker
                selectedValue={this.state.distrito}
                style={{ 
                  height: 40, 
                }}
                onValueChange={(itemValue, itemIndex) => this.setState({distrito: itemValue})}>
                <Picker.Item label="Cercado de Lima" value="Cercado de Lima" />
              </Picker>
            </View>
          </View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                marginBottom: 10
              }}
            >Invitados</Text>
            <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <View
                style={{marginRight:10}}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    marginBottom: 10
                  }}
                >Adultos</Text>
                <TextInput
                  style={{
                    height: 40, 
                    width: 140, 
                    borderWidth: 1, 
                    textAlign: 'center',
                    borderColor: '#78b7b6', 
                    color:'#2d3332', 
                    paddingHorizontal: 10, 
                    borderRadius: 6,
                    marginBottom: 15
                  }} 
                  keyboardType = 'numeric'
                  onChangeText={(adultos) => this.setState({adultos})}
                  value={this.state.adultos}
                />
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    marginBottom: 10
                  }}
                >Niños</Text>
                <TextInput
                  style={{
                    height: 40, 
                    width: 140, 
                    borderWidth: 1, 
                    textAlign: 'center',
                    borderColor: '#78b7b6', 
                    color:'#2d3332', 
                    paddingHorizontal: 10, 
                    borderRadius: 6,
                    marginBottom: 30
                  }} 
                  onChangeText={(niños) => this.setState({niños})}
                  value={this.state.niños}
                  keyboardType = 'numeric'
                />
              </View>
              
            </View>
            <View style={styles.botonGradient}>
              <LinearGradient
                colors={['#8f4d93', '#c63275']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 40,
                }}
                start={[0, 0]}
                end={[1, 1]} 
              />
              <TouchableOpacity 
                  //onPress={() => this.menuPrincipal()}
                  onPress={() => this.props.navigation.navigate('FormularioFiesta2')} 
                >
                  <Text style={{color:'#fff'}}>EMPEZAR</Text> 
              </TouchableOpacity>
            </View> 
            <View style={{height:40}}></View> 
        </ScrollView>
    );
  }

}