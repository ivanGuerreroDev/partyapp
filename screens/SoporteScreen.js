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
export default class SoporteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = {
    }
  }
  render() {  
    return (
      <View style={styles.container}>
        <Header screenProps={{openMenu: ()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}}/>
        <ScrollView style={{paddingHorizontal:40}}>
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Soporte</Text>
          <Text style={styles.questionTitle}>Nuestra cobertura</Text>
          <Text style={styles.questionDescription}>Actualmente PartyApp opera en todos los distritos de la ciudad de Lima </Text>
          <Text style={styles.questionTitle}>Quiero ser proveedor de PartyApp</Text>
          <Text style={styles.questionDescription}>Muchas gracias por tu interés en PartyApp{"\n"}Por favor envíanos un correo a @partyapp.com{"\n"}Nos pondremos en contacto lo antes posible</Text>          
          <Text style={styles.questionTitle}>Cómo pedir un servicio para mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Solicita a un proveedor específico</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Con cuanto tiempo de anticipación debo cotizar mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Puedo cotizar un servicio para dentro de 2 días</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Quiero contactar al proveedor de mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como cancelar mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Quiero ver el presupuesto total de mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Quiero ver el presupuesto de un servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que beneficios obtengo con PartyApp Prime</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo ser miembro de PartyApp Prime</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como cotizar un servicio para mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que pasa si quiero modificar mi servicio una vez que ya recibí cotizaciones</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo aumentar servicios a mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo copiar los detalles de un evento anterior a mi nuevo evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo comunicarme con PartyApp</Text>
          <Text style={styles.questionDescription}>Puedes contactarnos llamando a Servicio al Cliente{"\n"}O escríbenos al correo: informes@partyapp.com</Text>          
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