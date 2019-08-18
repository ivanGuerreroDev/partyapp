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
export default class PreguntasFrecuentesScreen extends React.Component {
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
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Preguntas Frecuentes</Text>
          <Text style={styles.questionTitle}>Nuestra cobertura</Text>
          <Text style={styles.questionDescription}>Actualmente PartyApp opera en todos los distritos de la ciudad de Lima</Text>
          <Text style={styles.questionTitle}>Para que sirven los puntos PartyApp</Text>
          <Text style={styles.questionDescription}>Cada punto PartyApp te da una oportunidad para ganar los sorteos que realizamos para nuestros usuarios vigentes, donde podrás ganar descuentos significativos y hasta servicios gratis para tu próximo evento. </Text>
          <Text style={styles.questionTitle}>Tu opinión nos importa</Text>
          <Text style={styles.questionDescription}>Te agradecemos por tu tiempo y creer en este gran proyecto. Tus comentarios serán tomados en cuenta. Como muestra de nuestro agradecimiento te ofrecemos X puntos PartyApp al completar esta pequeña encuesta</Text>
          <Text style={styles.questionTitle}>Quiero ser proveedor de PartyApp</Text>
          <Text style={styles.questionDescription}>Muchas gracias por tu interés en PartyApp. Por favor envíanos un correo a @partyapp.com. Nos pondremos en contacto lo antes posible</Text>
          <Text style={styles.questionTitle}>Cómo pedir un servicio para mi evento</Text>
          <Text style={styles.questionDescription}> </Text>        
          <Text style={styles.questionTitle}>Solicita a un conductor específico</Text>
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
          <Text style={styles.questionTitle}>Como se calcula el presupuesto total de mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como se calcula el presupuesto de mi servicio</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que beneficios obtengo con PartyApp Prime</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo ser miembro de PartyApp Prime</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Tarifas de cancelación</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Calificar a un proveedor</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Obtener un recibo por mis servicios</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como actualizar la información de mi cuenta</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como cotizar un servicio para mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que pasa si quiero modificar mi servicio una vez que ya recibí cotizaciones</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo aumentar servicios a mi evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Cual es el horario de atención de PartyApp</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Porque sigo recibiendo cotizaciones de un servicio que ya he adjudicado</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo copiar los detalles de un evento anterior a mi nuevo evento</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Que tipos de tarjetas aceptamos</Text>
          <Text style={styles.questionDescription}> </Text>
          <Text style={styles.questionTitle}>Como puedo comunicarme con PartyApp</Text>
          <Text style={styles.questionDescription}>Puedes contactarnos llamando a Servicio al Cliente  O escríbenos al correo informes@partyapp.com </Text>
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
  },
  
});