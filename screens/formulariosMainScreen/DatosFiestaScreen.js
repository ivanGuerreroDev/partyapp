import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
  PickerIOS,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import IconAntDesign from '@expo/vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker';
import { RadioButton   } from 'react-native-paper';
import ValidationComponent from 'react-native-form-validator';
import styles from '../../assets/styles'; 
import Header from '../../navigation/Header'; 
import { Dropdown } from 'react-native-material-dropdown';
import * as Animatable from 'react-native-animatable';
var distritos = require('../../datos/peruGeo/distritos.json');
var limaArr= distritos['3927'];

export default class DatosFiestaScreen extends ValidationComponent  {
  
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = { 
      isLoading : false,
      alquilarLocal: 'No', 
      errorPopup: false,
      errorPopupTexto: new Array,
      inputNombreEvento: {
        value: '',
        name: 'Nombre de mi evento'
      },
      inputFechaEvento: {
        value: '',
        name: 'Fecha del Evento'
      },
      inputHoraEvento: {
        value: '',
        name: 'Hora del evento'
      },
      inputDireccion: {        
        value: '',
        name: 'Dirección'
      },
      inputDistrito: {
        value: '',
        name: 'Distrito'
      },
      inputAdultos: {
        value: '',
        name: 'Adultos'
      },
      inputNinos: {
        value: '',
        name: 'Niños'
      },
      locales : [
        {
          input: 'local0',
          value: ''
        }
      ]
    };
  }

  SiguientePantalla = () => {
    // Call ValidationComponent validate method
    var datos = this.props.screenProps.getDatosFiesta;
    const validateNombreEvento = this.validateNombreEvento()
    const validateFechaEvento = this.validateFechaEvento()
    const validateHoraEvento = this.validateHoraEvento()
    const validateAdultos = this.validateAdultos()
    const validateNinos = this.validateNinos()
    if (validateNombreEvento && validateFechaEvento && validateHoraEvento && validateAdultos && validateNinos) {
      this.setState({isLoading: true});
      this.props.screenProps.setState(this.state)
      datos['nombreEvento']=this.state.inputNombreEvento.value;
      datos["fechaEvento"]=this.state.inputFechaEvento.value;
      datos["horaEvento"]=this.state.inputHoraEvento.value;
      datos["adultos"]=this.state.inputAdultos.value;
      datos["ninos"]=this.state.inputNinos.value;
      this.props.screenProps.setDatosFiesta(datos);
      this.props.navigation.navigate('TipoFiesta');
    }else{
      this.setState({errorPopup: false});
    }
  }

  validateNombreEvento(){
    const { inputNombreEvento } = this.state;
    const nombreEventoValid = (inputNombreEvento.value != null && inputNombreEvento.value.length > 3 && inputNombreEvento.value.length <15);
    LayoutAnimation.easeInEaseOut()
    this.setState({ nombreEventoValid })
    return nombreEventoValid
  }

  validateFechaEvento(){
    const { inputFechaEvento } = this.state;
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    var parts   = inputFechaEvento.value.split("-");
    var day     = parseInt(parts[2], 10);
    var month   = parseInt(parts[1], 10);
    var year    = parseInt(parts[0], 10);

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    {
        monthLength[1] = 29;
    }

    const fechaEventoValid = (inputFechaEvento.value != null && regex_date.test(inputFechaEvento.value) && (year > 1000 || year < 3000 || month !== 0 || month <= 12) && day > 0 && day <= monthLength[month - 1]);
    LayoutAnimation.easeInEaseOut()
    this.setState({ fechaEventoValid })
    return fechaEventoValid
  }

  validateHoraEvento(){
    const { inputHoraEvento } = this.state;
    var regex_date = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
    const horaEventoValid = (inputHoraEvento.value != null && regex_date.test(inputHoraEvento.value));
    LayoutAnimation.easeInEaseOut()
    this.setState({ horaEventoValid })
    return horaEventoValid
  }

  validateAdultos(){
    const { inputAdultos } = this.state;
    const adultosValid = (inputAdultos.value != null && inputAdultos.value.length > 0 && !isNaN(inputAdultos.value));
    LayoutAnimation.easeInEaseOut()
    this.setState({ adultosValid })
    return adultosValid
  }

  validateNinos(){
    const { inputNinos } = this.state;
    const ninosValid = (inputNinos.value != null && inputNinos.value.length > 0 && !isNaN(inputNinos.value));
    LayoutAnimation.easeInEaseOut()
    this.setState({ ninosValid })
    return ninosValid
  }

  ChangeInput = (input, value, name) => {
    this.setState( { [input] :{value: value, name: name}})
  }

  errorPopup = (errors) =>{
    this.state.errorPopupTexto = errors;
    this.setState({errorPopup : true});
  }

  agregarLocal = () => {
    actual = this.state.locales;
    numero = actual.length;
    if(numero <= 4){
      actual.push({
        input: 'local'+numero+1,
        value: '',
      });
      this.setState({locales: actual});
    }
  }

  eliminarLocal = () => {
    actual = this.state.locales;
    if(actual.length > 1){
      actual.length = actual.length - 1;
      this.setState({locales: actual});
    }
  }

 
  
  render() {
    let { errors = {} } = this.state;
    const { alquilarLocal } = this.state;
    arrayDistritos =[]
    limaArr.map((prop, key) => {
      arrayDistritos.push({value: prop['nombre_ubigeo']})
    })
    var locales = this.state.locales.map((local, i) =>{
      return(
        <View key={i}>
          <View style={styles.formContainer}>
              <Dropdown
                style={{width:100}}
                label='Seleccionar distrito'
                onChangeText={(value, index) => {
                  this.state.locales[i].value=value;
                  this.setState({isLoading: false})
                }}
                data={arrayDistritos}
              />
          </View>
        </View>
      )
    })
    if(!this.state.isLoading){
      return (
          <View>
            <Header screenProps={{openMenu: ()=>this.props.screenProps.openMenu()}}/>
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
                <View style={styles.formContainer}>
                  <TextInput
                    ref="inputNombreEvento"
                    placeholder='Dale un nombre a tu evento'
                    style={styles.input}
                    onChangeText={(value) => this.ChangeInput('inputNombreEvento', value, 'Nombre de mi Evento')}
                    value={this.state.inputNombreEvento.value}   
                  />
                  <TouchableOpacity 
                    style={errors.inputNombreEvento?styles.errorForm:styles.novisible}
                    onPress={() => this.errorPopup(this.getErrorsInField('inputNombreEvento'))}
                  >
                    <IconAntDesign
                      name="questioncircleo"
                      fontSize={26}
                      color='#ff2222'
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width:300}}> 
                  <View style={[styles.formContainer, {width: 145}]}>
                    <DatePicker 
                      ref="inputFechaEvento"
                      style={styles.dateInput}
                      date={this.state.inputFechaEvento.value}
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
                          right: -10,
                          top: 0,
                          marginLeft: 0,
                          width: 20,
                        },
                        dateInput: { 
                          top: -5,
                          borderColor: 'transparent', 
                          color:'#2d3332', 
                          height: 20,
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(value) => this.ChangeInput('inputFechaEvento', value, 'Fecha del evento')}
                    />
                    <TouchableOpacity 
                      style={this.isFieldInError('inputFechaEvento')?styles.errorForm:styles.novisible}
                      onPress={() => this.errorPopup(this.getErrorsInField('inputFechaEvento'))}
                    >
                      <IconAntDesign
                        name="questioncircleo"
                        fontSize={26}
                        color='#ff2222'
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.formContainer, {width: 145}]}> 
                    <DatePicker
                      ref="inputHoraEvento"
                      style={styles.dateInput}
                      date={this.state.inputHoraEvento.value} 
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
                          right: -10,
                          top: 0,
                          marginLeft: 0,
                          width: 20,
                        },
                        dateInput: {
                          top: -5,
                          color:'#2d3332',  
                          borderColor: 'transparent',
                          height: 20,
                          
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(value) => this.ChangeInput('inputHoraEvento',value, 'Hora del evento')}
                    />
                    <TouchableOpacity 
                      style={this.isFieldInError('inputHoraEvento')?styles.errorForm:styles.novisible}
                      onPress={() => this.errorPopup(this.getErrorsInField('inputHoraEvento'))}
                    >
                      <IconAntDesign
                        name="questioncircleo"
                        fontSize={26}
                        color='#ff2222'
                      />
                    </TouchableOpacity>
                  </View>
                  
                </View>
                <View style={{
                  borderTopColor: '#cbcbcb',
                  borderTopWidth: 1,
                  width:300,
                  marginVertical:30

                }}></View>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: '700',
                    marginBottom: 10
                  }}
                >¿Ya sabes donde se llevará a cabo tu evento?</Text>
                <View 
                  style={Platform.OS === 'ios'?{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: 300,
                    marginBottom: 15
                  }:styles.novisible}
                >
                  <RadioButton.IOS
                    value="Si"
                    color='#c63275'
                    uncheckedColor="#78b7b6"
                    status={this.state.alquilarLocal === 'Si' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ alquilarLocal: 'Si' }); }}
                  />
                  <Text> Si</Text>
                  <RadioButton.IOS
                    value="No"
                    color='#c63275'
                    uncheckedColor="#78b7b6"
                    status={this.state.alquilarLocal === 'No' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ alquilarLocal: 'No' }); }}
                  />
                  <Text> Aún no</Text>
                </View>
                <View 
                  style={Platform.OS === 'android'?{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: 300,
                    marginBottom: 15
                  }:styles.novisible}
                >
                  <RadioButton.Android
                    value="Si"
                    color='#c63275'
                    uncheckedColor="#78b7b6"
                    status={this.state.alquilarLocal === 'Si' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ alquilarLocal: 'Si' }); }}
                  />
                  <Text> Si</Text>
                  <RadioButton.Android
                    value="No"
                    color='#c63275'
                    uncheckedColor="#78b7b6"
                    status={this.state.alquilarLocal === 'No' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ alquilarLocal: 'No' }); }}
                  />
                  <Text> Aún no</Text>
                </View>
                
                <View style={this.state.alquilarLocal == 'No'?styles.visible:styles.novisible}>
                  <View style={styles.formContainer}>
                    <TextInput
                      ref='inputDireccion'
                      style={styles.input}
                      placeholder={"Dirección"}
                      onChangeText={(value) => this.ChangeInput('inputDireccion',value, 'Dirección')}
                      value={this.state.inputDireccion.value}
                    />
                    <TouchableOpacity 
                      style={this.isFieldInError('inputDireccion')?styles.errorForm:styles.novisible}
                      onPress={() => this.errorPopup(this.getErrorsInField('inputDireccion'))}
                    >
                      <IconAntDesign
                        name="questioncircleo"
                        fontSize={26}
                        color='#ff2222'
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.formContainer}>
                      <Dropdown
                        style={{width:100}}
                        label='Seleccionar distrito'
                        onChangeText={(value, index) => this.ChangeInput('inputDistrito',value, 'Distrito')}
                        data={arrayDistritos}
                      />
                    <TouchableOpacity 
                      style={this.isFieldInError('inputDistrito')?styles.errorForm:styles.novisible}
                      onPress={() => this.errorPopup(this.getErrorsInField('inputDistrito'))}
                    >
                      <IconAntDesign
                        name="questioncircleo"
                        fontSize={26}
                        color='#ff2222'
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={this.state.alquilarLocal == 'Si'?styles.visible:styles.novisible}>
                  {locales}
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <TouchableOpacity
                      style={estilos.buttonSmall}
                      onPress={() => this.eliminarLocal()} 
                    >
                      <View
                        style={[estilos.paddingButton, {backgroundColor:'#cbcbcb'}]}>
                        <Text style={{
                          fontWeight: '700',
                          color: '#333'
                        }}>ELIMINAR</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={estilos.buttonSmall}
                      onPress={() => this.agregarLocal()} 
                    >
                      <View
                        style={[estilos.paddingButton, {backgroundColor:'#78b7b6'}]}>
                        <Text style={{
                          fontWeight: '700',
                          color: '#333'
                        }}>AGREGAR</Text>
                      </View>
                    </TouchableOpacity>
                    
                  </View>
                </View>
                 
                <View style={{
                  borderTopColor: '#cbcbcb',
                  borderTopWidth: 1,
                  width:300,
                  marginVertical:30
                  
                }}></View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    marginBottom: 10
                  }}
                >Mis invitados</Text>
                <View 
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >

                  <View style={{marginRight:60, width: 120}} >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        marginBottom: 10
                      }}
                    >Adultos</Text>
                    <TextInput
                      ref="inputAdultos"
                      style={styles.input} 
                      keyboardType = 'numeric'
                      onChangeText={(value) => this.ChangeInput('inputAdultos',value, 'Adultos')}
                      value={this.state.inputAdultos.value}
                    />
                    <TouchableOpacity 
                      style={this.isFieldInError('inputAdultos')?styles.errorForm:styles.novisible}
                      onPress={() => this.errorPopup(this.getErrorsInField('inputAdultos'))}
                    >
                      <IconAntDesign
                        name="questioncircleo"
                        fontSize={26}
                        color='#ff2222'
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{width: 120}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        marginBottom: 10
                      }}
                    >Niños</Text>
                    <TextInput
                      ref="inputNinos"
                      style={styles.input} 
                      onChangeText={(value) => this.ChangeInput('inputNinos',value, 'Niños')}
                      value={this.state.inputNinos.value}
                      keyboardType = 'numeric'
                    />
                    <TouchableOpacity 
                      style={this.isFieldInError('inputNinos')?styles.errorForm:styles.novisible}
                      onPress={() => this.errorPopup(this.getErrorsInField('inputNinos'))}
                    >
                      <IconAntDesign
                        name="questioncircleo"
                        fontSize={26}
                        color='#ff2222'
                      />
                    </TouchableOpacity>
                  </View>
                  
                </View>
                <View style={{alignSelf: 'center', justifyContent: 'center', marginTop: 50}}>
                  <TouchableOpacity
                    style={estilos.button}
                    onPress={() => this.SiguientePantalla()} 
                  >
                    <LinearGradient
                      colors={['#C63275', '#8F4D93']}
                      start={[1,1]}
                      end={[0,0]}
                      style={estilos.gradientButton}>
                      <Text style={{
                        fontWeight: '700',
                        color: '#fff'
                      }}>EMPEZAR</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={{height:80}}></View>      
              </View>    
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.errorPopup}>
                  <TouchableWithoutFeedback onPress={()=>this.setState({errorPopup: false})}>
                  <Animatable.View animation={'fadeIn'}
                  style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.cerrarPopup}  
                            onPress={()=>this.setState({errorPopup: false})}>
                            <Text style={{color:'#fff'}}>X</Text>
                        </TouchableOpacity> 
                        {
                            this.state.errorPopupTexto.map(function(mensaje) { return <Text style={{color:'#ff2222', fontSize: 10, marginBottom: 15}}>- {mensaje}</Text>})
                        }
                    </View>
                  </Animatable.View>
                  </TouchableWithoutFeedback>
                </Modal>   

          </View>
      );
    }else{
      return (
        <View style={styles.cargandoContainer}> 
          <Image
            source={require('../../assets/images/armatufiestaGlobosIzquierda.png')}
            style={{
              resizeMode: 'contain', // or 'stretch'
              height: 70,
              marginVertical: 30

            }} 
          /> 
        </View>
      );
    }
  }
 
}

const estilos = StyleSheet.create({
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
    width: 200
  },
  buttonSmall:{
    marginBottom: 20,
    width: 140
  },
  paddingButton: {
    paddingVertical: 15, 
    paddingHorizontal: 15, 
    alignItems: 'center', 
    borderRadius: 30 
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
