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
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import DatePicker from 'react-native-datepicker';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../assets/styles';
import Header from '../navigation/Header';
import { Dropdown } from 'react-native-material-dropdown';
import { DrawerActions } from 'react-navigation';
var distritos = require('../datos/peruGeo/distritos.json');
var limaArr= distritos['3927'];
import Authentication from '../modules/authentication'

export default class ActualizarDatosScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = {
      usuario : '',
      nombreCompleto: '',
      fechaNacimiento: '',
      email: '' ,
      genero : '',
      telefono : '',
      celular: '',
      direccion: '',
      distrito: ''
    }
  }

  async componentDidMount()
  {
    Authentication.currentToken() .then((result) => {
      this.setState({
        usuario : result.username ? result.username : '',
        nombreCompleto: result.nombreCompleto ? result.nombreCompleto: '',
        fechaNacimiento: result.fechaNacimiento ? result.fechaNacimiento: '',
        email : result.email ? result.email : '',
        genero : result.genero ? result.genero : '',
        telefono : result.telefono ? result.telefono : '',
        celular: result.celular ? result.celular : '',
        direccion : result.direccion ? result.direccion : '',
        distrito : result.distrito ? result.distrito : ''

      })
    })
  }

  async updateUser()
  {
    this.setState({ email:this.state.email.toLowerCase(),loading:true });
    const { usuario, email, nombreCompleto , fechaNacimiento, genero, direccion , distrito, telefono , celular} = this.state;
    const username = usuario
    Authentication.update({username, email, nombreCompleto , fechaNacimiento, genero, direccion , distrito, telefono , celular})
        .then((result) => {
            console.log(result)
            if(result){
                alert("Actualizado con exito")
            }else{
                alert("Error al intentar actualizar")
            }
    })
  }

  render() {  
    arrayDistritos =[]
    limaArr.map((prop, key) => {
      arrayDistritos.push({value: prop['nombre_ubigeo']})
    })
    return (
      <View style={styles.container}>
        <Header screenProps={{openMenu: ()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}}/>
        <ScrollView style={{paddingHorizontal:40}}>
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Actualizar Datos</Text>
          <TextInput 
            style={estilo.inputElement}
            placeholder='Usuario' 
            value= { this.state.usuario}
            onChangeText={(text) => this.setState({usuario: text})}
            autoCapitalize = 'none'
          />
          <TextInput 
            style={estilo.inputElement}
            placeholder='Email' 
            value = {this.state.email}
            onChangeText={(text) => this.setState({email: text})}
            autoCapitalize = 'none'
          />
          <TextInput 
            style={estilo.inputElement}
            placeholder='Nombre y Apellido' 
            value = {this.state.nombreCompleto}
            onChangeText={(text) => this.setState({nombreCompleto: text})}
          />
          <View  style={{width:'100%'}}>
            <DatePicker 
              ref='inputFechaEvento'
              style={styles.dateInput}
              date={this.state.fechaNacimiento}
              mode="date"
              placeholder="Fecha de Nacimiento"
              format="YYYY-MM-DD"
              maxDate={new Date().toISOString().slice(0,10)}
              iconSource={require('../assets/images/calendar-icon.png')}
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
              onDateChange={(value) => this.setState({fechaNacimiento: value})}
            />
          </View>
          <View style={{marginTop: -20}}>
            <Dropdown
              label='Seleccionar genero'
              onChangeText={(value) => this.setState({genero: value})}
              data={[{value:'Masculino'},{value:'Femenino'}]}
            />
          </View>
          <TextInput 
            style={estilo.inputElement}
            placeholder='Teléfono' 
            value ={this.state.telefono}
            onChangeText={(text) => this.setState({telefono: text})}
            keyboardType = 'numeric'
          />
          <TextInput 
            style={estilo.inputElement}
            placeholder='Celular' 
            value ={ this.state.celular}
            onChangeText={(text) => this.setState({celular: text})}
            keyboardType = 'numeric'
          />
          <TextInput 
            style={estilo.inputElement}
            placeholder='Direccion' 
            value={this.state.direccion}
            onChangeText={(text) => this.setState({direccion: text})}
          />
          <View style={{marginTop: -20}}>
            <Dropdown
              label='Seleccionar distrito'
              onChangeText={(value) => this.setState({distrito: value})}
              data={arrayDistritos}
            />
          </View>
          <View style={{alignItems:'center', marginTop: 30}}>
            <TouchableOpacity
                onPress={() => this.updateUser()}
                style={[estilo.button,{marginBottom:20}]} 
            >
                <LinearGradient
                    colors={['#C63275', '#8F4D93']}
                    start={[1,1]}
                    end={[0,0]}
                    style={estilo.gradientButton}>
                    <Text style={{
                    fontWeight: '700',
                    color: '#fff'
                    }}>GUARDAR</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilo.button,{marginBottom:20}]}
                onPress={() => this.props.navigation.navigate('home')} 
            >
                <View
                style={[estilo.gradientButton, {backgroundColor: '#E9E9E9'}]}>
                    <Text style={{
                        fontWeight: '700',
                        color: '#333'
                    }}>CANCELAR</Text>
                </View>
            </TouchableOpacity>

        </View>
        </ScrollView>
      </View>
    )
  }
}
const estilo = StyleSheet.create({
  loginContainer: { 
      backgroundColor: '#f4f4f4',
      flex: 1,
      justifyContent: 'space-between',
      paddingLeft: 40,
      paddingRight: 40,
  },
  button:{
      marginBottom: 20,
      width: 200
  },
  gradientButton: {
      paddingVertical: 15, 
      paddingHorizontal: 30, 
      alignItems: 'center', 
      borderRadius: Platform.OS === 'android' ? 30 : 22 
  },
  inputElement: {
      marginBottom: 10,
      padding: 5,
      borderWidth: 1,
      borderColor: '#78B7B6',
      borderRadius: 6
  },
  googleButton: {
      backgroundColor: '#ffffff',
  }
});