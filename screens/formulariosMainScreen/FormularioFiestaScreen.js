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
  Button,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'
import {  Portal, Provider, Checkbox, RadioButton , Switch  } from 'react-native-paper';
import HeaderFormulario from '../../navigation/HeaderFormulario'; 
import FormularioSteps from '../../navigation/FormularioSteps'; 
import styles from '../../assets/styles'; 
import IconAntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-material-dropdown';
import * as Animatable from 'react-native-animatable';
import Authentication from '../../modules/authentication'
const preciosAprox = require("../../datos/preciosAprox.json")
var categorias = require('../../datos/categoriasFormulario.json');

  
export default class FormularioFiestaScreen extends React.Component  {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = { 
      isLoading : false,
      errorPopup: false,
      step: 1,
      errorPopupTexto: [],
      precioAprox: '0 - 0',
      popupCheckForm: this.props.screenProps.getState().datosUsuario.popupCheckForm,
      primerInput: this.props.screenProps.getState().datosUsuario.popupInputMesagge,
      popupInputMesagge: false,
      datosFiesta: this.props.screenProps.getDatosFiesta(),
      checkboxes: {
        animacion : false, 
        horaLoca: false,
        recuerdos: false,
        filmacionFotografia: false,
        catering: false,
        brindis: false,
        foodTruck: false,
        mesaBocaditos: false,
        ambientacion: false,
        mobiliario: false,
        invitaciones: false,
        genero: false,
        djParty: false,
        pinateria: false,
        maestroCeremonias: false,
        parrillero: false,
        sorpresas: false,
        miniSpa: false,
        planner: false,
        transporte: false,
        servicioCadetes: false,
        chambeLan: false,
        torta: false,
        servicioParrillero: false,
        carnes: false
      },
      inputs: {
        animacion: new Object,
        horaLoca: new Object,
        filmacionFotografia: new Object,
        recuerdos: new Object,
        catering: new Object,
        brindis: new Object,
        foodTruck: new Object,
        mesaBocaditos: new Object, 
        ambientacion: new Object,
        mobiliario: new Object,
        invitaciones: new Object,
        genero: new Object,
        djParty: new Object,
        pinateria: new Object,
        maestroCeremonias: new Object,
        parrillero: new Object,
        sorpresas: new Object,
        miniSpa: new Object,
        planner: new Object,
        transporte: new Object,
        servicioCadetes: new Object,
        chambeLan: new Object,
        torta: new Object,
        servicioParrillero: new Object,
        carnes: new Object
      },
      modal:false,
    };
  }
  

  render() {
    if(!this.state.isLoading){
      const checkboxes = this.state.checkboxes;
      var spaPicker= [];
      for(var i=0; i < 31; i++){spaPicker.push({value: i.toString()})}
      return (
        <View style={{flex: 1}}>
          <HeaderFormulario 
            screenProps={{
              precioAprox: ()=> this.state.precioAprox,
              prevNav: ()=> this.props.navigation.goBack(),
              tipoFiesta: ()=>this.state.datosFiesta.tipoFiesta,
            }} 
          />
          
          <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 24,
                    color: '#333',
                    width: 300,
                    textAlign: 'center',
                    marginVertical: 20
                  }}
                >
                  ¡Completa la información para tu evento!
                </Text>
              </View>
              
              
              
              <View style={this._itemsCheck('animacion', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={checkboxes.animacion ? 'checked' : 'unchecked'}
                        onPress={() => this._Checkbox('animacion')}
                      /> :
                      <Switch
                        value={checkboxes.animacion}
                        onValueChange={() => this._Checkbox('animacion') }
                      />
                    }

                  <Text style={{fontSize: 20}}>Animación</Text>
                </View>
                <View style={checkboxes.animacion==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 5}}>Duración del Show: </Text>
                    <TextInput
                      style={styles.inputHoras} 
                      keyboardType = 'numeric'
                      value={this.state.inputs.animacion.duracion}
                      onChangeText={(value) => this._changeInput("animacion","duracion", value)}
                    />
                    <Text style={{marginLeft: 5}}>Horas</Text>
                    
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio'
                      onChangeText={(value) => this._changeInput('animacion','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Brinda mayor información a los proveedores: Especifica la cantidad de animadores, el tipo de animación que quieres para tu fiesta y cualquier restricción que consideres para tu fiesta'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                </View>
              </View>




              <View style={this._itemsCheck('horaLoca', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.horaLoca ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('horaLoca')}
                      />  :
                      <Switch
                        value={checkboxes.horaLoca}
                        onValueChange={() => this._Checkbox('horaLoca') }
                      />
                    }

                  <Text style={{fontSize: 20}}>Hora Loca</Text>
                </View>
                <View style={checkboxes.horaLoca==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.horaLoca.cotillon ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("horaLoca","cotillon")}
                    /> :
                      <Switch
                        value={this.state.inputs.horaLoca.cotillon}
                        onValueChange={() => this._CheckboxInput("horaLoca","cotillon") }
                      />
                    }
                    <Text>Cotillon</Text>  
                    <View style={{position:'relative', width: 30, height: 60}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Incluye bombardas, mascaras, lentes, globos lapiz, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                                    
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.horaLoca.tema ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("horaLoca","tema")}
                    /> :
                      <Switch
                        value={this.state.inputs.horaLoca.tema}
                        onValueChange={() => this._CheckboxInput("horaLoca","tema") }
                      />
                    }
                   <Text style={{marginRight: 20}}>Tema</Text>  
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar tema'
                      onChangeText={(value, index) => this._changeInput('horaLoca','tema', value)}
                      data={[{value:'Arriba Perú'},{value:'Minions'},{value:'Piratas'},{value:'Otros'}]}
                    />     
                            
                  </View>
                  <View style={this.state.inputs.horaLoca.tema == 'Otros'?estilo.row:styles.novisible}>
                    <TextInput
                      style={styles.input} 
                      placeholder='Especificar'
                      onChangeText={(value) => this._changeInput('horaLoca','temaOtros',value)}
                    />
                  </View>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 20}}>Nro Personajes</Text>
                    <TextInput
                      style={styles.inputHoras} 
                      keyboardType = 'numeric'
                      value={this.state.inputs.horaLoca.animadores}
                      onChangeText={(value) => this._changeInput("horaLoca","animadores", value)}
                    />
                    <View style={{position:'relative', width: 30, height: 60}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Generalmente para fiestas de hasta 50 invitados es suficiente con un máximo de 3 personajes. Asimismo por cada 30 invitados adicionales a este numero se sugiere contratar un personaje adicional.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio'
                      onChangeText={(value) => this._changeInput('animacion','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Ejemplo, quisiera que los globos sean de color blanco y que al menos uno de los personajes de hora loca sea mujer, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                </View>
              </View>


              <View style={this._itemsCheck('pinateria', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.pinateria ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('pinateria')}
                    /> :
                      <Switch
                        value={checkboxes.pinateria}
                        onValueChange={() => this._Checkbox('pinateria') }
                      />
                    }

                  <Text style={{fontSize: 20}}>Piñatería</Text>
                </View>
                <View style={checkboxes.pinateria==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.pinateria.tema ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("pinateria","tema")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.pinateria.tema }
                        onValueChange={() => this._CheckboxInput("pinateria","tema")}
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Tema</Text> 
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar tema'
                      onChangeText={(value, index) => this._changeInput('horaLoca','tema', value)}
                      data={[{value:'Avengers'},{value:'Frozen'},{value:'Cars'},{value:'Otros'}]}
                    />     
                    <View style={this.state.inputs.pinateria.tema == 'Otros'?estilo.row:styles.novisible}>
                      <TextInput
                        style={styles.input} 
                        placeholder='Especificar'
                        onChangeText={(value) => this._changeInput('pinateria','temaOtros',value)}
                      />
                    </View>          
                  </View>
                  <View style={estilo.row}>
                    <Text>Quiero para mi evento:</Text>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.globos ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","globos")}
                        color="#c63275"
                      />:
                      <Switch
                        value={this.state.inputs.pinateria.globos}
                        onValueChange={() => this._CheckboxInput("pinateria","globos") }
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Pack de globos</Text> 
                    </View>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.pinateria.adornosTecho ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("pinateria","adornosTecho")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.pinateria.adornosTecho}
                        onValueChange={() => this._CheckboxInput("pinateria","adornosTecho") }
                        color="#c63275"
                      />
                    }
                     <Text style={{marginRight: 20}}>Adornos Techo</Text> 
                    </View>
                    
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.pinata ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","pinata")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.pinateria.pinata}
                        onValueChange={() => this._CheckboxInput("pinateria","pinata") }
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Piñata</Text> 
                    </View>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.girnaldas ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","girnaldas")}
                        color="#c63275"
                      />:
                      <Switch
                        value={this.state.inputs.pinateria.girnaldas}
                        onValueChange={() => this._CheckboxInput("pinateria","girnaldas") }
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Girnaldas</Text> 
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.sorpresas ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","sorpresas")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.pinateria.sorpresas}
                        onValueChange={() =>this._CheckboxInput("pinateria","sorpresas")}
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Sorpresas</Text> 
                    </View>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.letrero ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","letrero")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.pinateria.letrero}
                        onValueChange={() => this._CheckboxInput("pinateria","letrero") }
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Letrero / Banner de tu evento</Text> 
                    </View>                    
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.bolsaTorta ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","bolsaTorta")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.pinateria.bolsaTorta}
                        onValueChange={() => this._CheckboxInput("pinateria","bolsaTorta")}
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Caja / Bolsa {"\n"}de torta</Text> 
                    </View>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.pinateria.vasos ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("pinateria","vasos")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.pinateria.vasos}
                        onValueChange={() => this._CheckboxInput("pinateria","vasos") }
                        color="#c63275"
                      />
                    }
                     <Text style={{marginRight: 20}}>Vasos</Text> 
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.pinateria.servilletas ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("pinateria","servilletas")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.pinateria.servilletas }
                        onValueChange={() => this._CheckboxInput("pinateria","servilletas")}
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Servilletas</Text> 
                    </View>
                    <View style={{width:150, flexDirection:'row', alignItems:'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.pinateria.accesoriosPinata ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("pinateria","accesoriosPinata")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.pinateria.accesoriosPinata}
                        onValueChange={() => this._CheckboxInput("pinateria","accesoriosPinata")}
                        color="#c63275"
                      />
                    }
                     <Text style={{marginRight: 20}}>Accesorios {"\n"}de Piñata</Text> 
                    </View>
                    
                  </View>
                  <View style={{width:300,flexDirection:'row', justifyContent: 'flex-end', marginBottom:10}}>
                    <View style={{width:90, flexDirection: 'row'}}>
                      <Text style={{textAlign: 'center', flex:1}}>Docenas</Text>
                    </View>
                    <View style={{width:50, marginRight:40, flexDirection: 'row'}}>
                      <Text style={{textAlign: 'center', flex:1}}>Costo máximo / doc.</Text>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:120, flexDirection: 'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.pinateria.dulces ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("pinateria","dulces")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.pinateria.dulces}
                        onValueChange={() => this._CheckboxInput("pinateria","dulces")}
                        color="#c63275"
                      />
                    }
                     <Text style={{marginRight: 20}}>Dulces</Text> 
                    </View>
                    <View style={{width:80, marginRight:10, flexDirection: 'row', alignItems: 'center'}}>
                      <TextInput
                        style={styles.input} 
                        keyboardType = 'numeric'
                        value={this.state.inputs.pinateria.dulcesCantidad}
                        onChangeText={(value) => this._changeInput("pinateria","dulcesCantidad", value)}
                      />
                    </View>
                    <View style={{width:90,flexDirection: 'row', alignItems: 'center'}}>
                      <Dropdown
                        style={{width:100}}
                        label='seleccionar tema'
                        onChangeText={(value, index) => this._changeInput('horaLoca','tema', value)}
                        data={[{value:'5'},{value:'10'},{value:'20'},{value:'30'},{value:'40'}]}
                      />    
                      
                      <Text style={{marginLeft: 5}}>soles</Text> 
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width:120, flexDirection: 'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.pinateria.jugueteria ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("pinateria","jugueteria")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.pinateria.jugueteria}
                        onValueChange={() =>  this._CheckboxInput("pinateria","jugueteria") }
                        color="#c63275"
                      />
                    }
                     <Text style={{marginRight: 20}}>Jugueteria</Text> 
                    </View>
                    <View style={{width:80, marginRight:10, flexDirection: 'row', alignItems: 'center'}}>
                      <TextInput
                        style={styles.input} 
                        keyboardType = 'numeric'
                        value={this.state.inputs.pinateria.jugueteriaCantidad}
                        onChangeText={(value) => this._changeInput("pinateria","jugueteriaCantidad", value)}
                      />
                    </View>
                    <View style={{width:90,flexDirection: 'row', alignItems: 'center'}}>
                      <Dropdown
                        style={{width:100}}
                        label='seleccionar tema'
                        onChangeText={(value, index) => this._changeInput('horaLoca','tema', value)}
                        data={[{value:'5'},{value:'10'},{value:'20'},{value:'30'},{value:'40'}]}
                      />    
                      
                      <Text style={{marginLeft: 5}}>soles</Text> 
                    </View>
                    
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio'
                      onChangeText={(value) => this._changeInput('pinateria','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Ejemplo: quisiera que me coticen galletas, saladas, cocorocos, chupetines, cubos mágicos, carritos, yaces, boleros, pesca, ludo, etc'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                    
                  </View>
               
                </View>
              </View>



               <View style={this._itemsCheck('recuerdos', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.recuerdos ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('recuerdos')}
                    /> :
                      <Switch
                        value={checkboxes.recuerdos}
                        onValueChange={() => this._Checkbox('recuerdos') }
                      />
                    }
  
                  <Text style={{fontSize: 20}}>Recuerdos</Text>
                </View>
                <View style={checkboxes.recuerdos==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 5}}>Cantidad (unid): </Text>
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar cantidad'
                      onChangeText={(value, index) => this._changeInput('horaLoca','tema', value)}
                      data={[{value:'25'},{value:'50'},{value:'75'},{value:'100'},{value:'125'}]}
                    />    
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar cantidad'
                      onChangeText={(value, index) => this._changeInput('recuerdos','cantidad', value)}
                      data={[
                        {value:'25'},
                        {value:'50'},
                        {value:'75'},
                        {value:'100'},
                        {value:'125'},
                        {value:'150'},
                        {value:'200'},
                        {value:'225'},
                        {value:'250'},
                      ]}
                    />   
                    
                  </View>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 5}}>Costo aproximado: </Text>
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar costo'
                      onChangeText={(value, index) => this._changeInput('recuerdos','costo', value)}
                      data={[
                        {value:'5'},
                        {value:'10'},
                        {value:'15'},
                        {value:'20'},
                        {value:'25'},
                        {value:'30'}
                      ]}
                    /> 
                    <Text style={{marginLeft: 5}}>soles </Text>
                    <View style={{position:'relative', width: 30, height: 60}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Especifique el costo referencial máximo que podría asumir por cada recuerdo'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={30}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio'
                      onChangeText={(value) => this._changeInput('recuerdos','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detallar las características del recuerdo: Ejemplo, macetas pequeñas con base de cerámica blanca y plantas naturales, o cupcakes de vainilla con decoración alusiva al tema de mi fiesta'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  

                </View>
              </View>



              <View style={this._itemsCheck('filmacionFotografia', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.filmacionFotografia ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('filmacionFotografia')}
                    />  :
                      <Switch
                        value={checkboxes.filmacionFotografia }
                        onValueChange={() => this._Checkbox('filmacionFotografia')}
                      />
                    }

                  <Text style={{fontSize: 20}}>Filmación y Fotografia</Text>
                </View>
                <View style={checkboxes.filmacionFotografia==true?styles.visible:styles.novisible}>
                  
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.filmacionFotografia.filmacion ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("filmacionFotografia","filmacion")}
                    /> :
                      <Switch
                        value={this.state.inputs.filmacionFotografia.filmacion}
                        onValueChange={() => this._CheckboxInput("filmacionFotografia","filmacion") }
                      />
                    }
                    <Text style={{marginRight: 20}}>Filmación</Text>  
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.filmacionFotografia.fotografia ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("filmacionFotografia","fotografia")}
                    />:
                      <Switch
                        value={this.state.inputs.filmacionFotografia.fotografia}
                        onValueChange={() => this._CheckboxInput("filmacionFotografia","fotografia") }
                      />
                    }
                    <Text style={{marginRight: 20}}>Fotografía</Text>  
                                
                  </View>
                
                  <View style={this.state.inputs.filmacionFotografia.sinLimite?styles.novisible:styles.visible}>
                    <View style={estilo.row}>
                      <Text style={{marginRight: 5}}>Hasta: </Text>
                      <Dropdown
                        style={{width:100}}
                        label='seleccionar precio'
                        onChangeText={(value, index) => this._changeInput('filmacionFotografia','precio', value)}
                        data={this._filmacionFotografiaSelect()}
                      /> 
                      <Text style={{marginLeft: 5}}>soles </Text>
                      <View style={{position:'relative', width: 30, height: 60}}>
                        <TouchableOpacity 
                          style={styles.errorForm}
                          onPress={() => this.errorPopup(['Especifique el costo referencial máximo que podría asumir por los servicios seleccionados'])}
                        >
                          <IconAntDesign
                            name="questioncircleo"
                            fontSize={40}
                            color='#ff2222'
                          />
                        </TouchableOpacity>
                      </View> 
                    </View>
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.filmacionFotografia.sinLimite ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("filmacionFotografia","sinLimite")}
                    /> :
                      <Switch
                        value={this.state.inputs.filmacionFotografia.sinLimite}
                        onValueChange={() => this._CheckboxInput("filmacionFotografia","sinLimite")}
                      />
                    }
                   <Text style={{marginRight: 20}}>No especificar costo límite</Text> 
                  </View>
                  <View style={this.state.inputs.filmacionFotografia.sinLimite?estilo.row:styles.novisible}>
                    <Text style={{fontSize:11, color:'#cbcbcb'}}>Recibirás cotizaciones de todo precio para este servicio</Text> 
                  </View>
                  
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio'
                      onChangeText={(value) => this._changeInput('filmacionFotografia','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Ejemplo, el servicio deberá durar 4 horas, como entregables quisiera video en BluRay, un álbum empastado y un DVD con todas mis fotos. Quisiera incluir el servicio de una foto panorámica tomada con un dron'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>




              <View style={this._itemsCheck('catering', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.catering ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('catering')}
                    />  :
                      <Switch
                        value={checkboxes.catering}
                        onValueChange={() => this._Checkbox('catering')}
                      />
                    }
                    
                  <Text style={{fontSize: 20}}>Catering</Text>
                </View>
                <View style={checkboxes.catering==true?styles.visible:styles.novisible}>
                  <View style={this.state.inputs.catering.sinLimite?styles.novisible:styles.visible}>
                    <View style={estilo.row}>
                      <Text style={{marginRight: 5}}>Hasta: </Text>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar precio'
                          onChangeText={(value, index) => this._changeInput('catering','precio', value)}
                          data={[{value:'20'},{value:'50'},{value:'90'},{value:'120'},{value:'150'}]}
                        />
                       
                      <Text style={{marginLeft: 5}}>soles </Text>
                      <View style={{position:'relative', width: 30, height: 60}}>
                        <TouchableOpacity 
                          style={styles.errorForm}
                          onPress={() => this.errorPopup(['Especifique el costo referencial máximo que podría asumir por los servicios seleccionados'])}
                        >
                          <IconAntDesign
                            name="questioncircleo"
                            fontSize={40}
                            color='#ff2222'
                          />
                        </TouchableOpacity>
                      </View> 
                    </View>
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.catering.sinLimite ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("catering","sinLimite")}
                    /> :
                      <Switch
                        value={this.state.inputs.catering.sinLimite }
                        onValueChange={() => this._CheckboxInput("catering","sinLimite")}
                      />
                    }
                    <Text style={{marginRight: 20}}>No especificar costo límite</Text> 
                  </View>
                  <View style={this.state.inputs.catering.sinLimite?estilo.row:styles.novisible}>
                    <Text style={{fontSize:12, color:'#cbcbcb'}}>Recibirás cotizaciones de todo precio para este servicio</Text> 
                  </View>
                  
                  <View style={estilo.row}>
                    <Text style={{marginRight: 5}}>Tipo de comida: </Text>
                    
                    
                  </View>
                  <View style={Platform.OS === 'ios'?estilo.row:styles.novisible}>
                    <RadioButton.IOS
                      value="Criolla" 
                      status={this.state.inputs.catering.tipoComida === 'Criolla' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Criolla')}
                    />
                    <Text style={{marginRight: 20}}>Criolla</Text>
                    <RadioButton.IOS
                      value="Internacional" 
                      status={this.state.inputs.catering.tipoComida === 'Internacional' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Internacional')}
                    />
                    <Text style={{marginRight: 20}}>Internacional</Text>
                    <RadioButton.IOS
                      value="Marina" 
                      status={this.state.inputs.catering.tipoComida === 'Marina' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Marina')}
                    />
                    <Text style={{marginRight: 20}}>Marina</Text>
                  </View>
                  <View style={Platform.OS === 'ios'?estilo.row:styles.novisible}>
                    <RadioButton.IOS
                      value="Otras" 
                      status={this.state.inputs.catering.tipoComida === 'Otras' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Otras')}
                    />
                    <Text style={{marginRight: 20}}>Otras</Text>
                  </View>
                  <View style={Platform.OS === 'android'?estilo.row:styles.novisible}>
                    <RadioButton.Android
                      value="Criolla" 
                      status={this.state.inputs.catering.tipoComida === 'Criolla' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Criolla')}
                    />
                    <Text style={{marginRight: 20}}>Criolla</Text>
                    <RadioButton.Android
                      value="Internacional" 
                      status={this.state.inputs.catering.tipoComida === 'Internacional' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Internacional')}
                    />
                    <Text style={{marginRight: 20}}>Internacional</Text>
                    <RadioButton.Android
                      value="Marina" 
                      status={this.state.inputs.catering.tipoComida === 'Marina' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Marina')}
                    />
                    <Text style={{marginRight: 20}}>Marina</Text>
                  </View>
                  <View style={Platform.OS === 'android'?estilo.row:styles.novisible}>
                    <RadioButton.Android
                      value="Otras" 
                      status={this.state.inputs.catering.tipoComida === 'Otras' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("catering","tipoComida", 'Otras')}
                    />
                    <Text style={{marginRight: 20}}>Otras</Text>
                  </View>
                  
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.input} 
                      placeholder='Especificar tipos de comida'
                      value={this.state.inputs.tipoComidaOtras}
                      onChangeText={(e) => this._changeInput("catering","tipoComidaOtras", e)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Especificar si gustaría buffet o plato servido u otro tipo de comida que prefiera para su fiesta'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={30}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>



              <View style={this._itemsCheck('brindis', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.brindis ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('brindis')}
                  />  :
                      <Switch
                        value={checkboxes.brindis}
                        onValueChange={() => this._Checkbox('brindis') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Bebidas / Brindis</Text>
                </View>
                <View style={checkboxes.brindis==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.brindis.conAlcohol ? 'checked' : 'unchecked'}
                      color='#c63275'
                      onPress={() => this._CheckboxInput("brindis","conAlcohol")}
                    /> :
                      <Switch
                        value={this.state.inputs.brindis.conAlcohol}
                        onValueChange={() => this._CheckboxInput("brindis","conAlcohol") }
                        color='#c63275'
                      />
                    }
                    <Text style={{marginRight: 20}}>Con Alcohol</Text>
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.brindis.sinAlcohol ? 'checked' : 'unchecked'}
                      color='#c63275'
                      onPress={() => this._CheckboxInput("brindis","sinAlcohol")}
                    /> :
                      <Switch
                        value={this.state.inputs.brindis.sinAlcohol}
                        onValueChange={() => this._CheckboxInput("brindis","sinAlcohol")}
                        color='#c63275'
                      />
                    }
                    <Text style={{marginRight: 20}}>Sin Alcohol</Text>
                    
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.brindis.barraDeDar ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("brindis","barraDeDar")}
                      color='#c63275'
                    /> :
                      <Switch
                        value={this.state.inputs.brindis.barraDeDar}
                        onValueChange={() => this._CheckboxInput("brindis","barraDeDar")}
                        color='#c63275'
                      />
                    }
                    <Text style={{marginRight: 20}}>Barra de dar</Text>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?estilo.row:styles.novisible}>
                      <Text style={{textAlign: 'center', flex:1}}>Con Alcohol</Text>
                    </View>
                  <View style={this.state.inputs.brindis.conAlcohol?{flexDirection: 'row', justifyContent: 'flex-end', marginBottom:10}:styles.novisible}>
                    <Text
                      style={{width:75, textAlign: 'center'}}
                    >Gama Media</Text>
                    <Text
                      style={{width:75, textAlign: 'center'}}
                    >Gama {"\n"}Alta</Text>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          color='#c63275'
                          status={this.state.inputs.brindis.whisky ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("brindis","whisky")}
                        /> :
                      <Switch
                        color='#c63275'
                        value={this.state.inputs.brindis.whisky}
                        onValueChange={() => this._CheckboxInput("brindis","whisky")}
                      />
                    }
                        <Text style={{marginRight: 20}}>Whisky (750ml)</Text>
                      </View>
                      <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.whiskyCalidadMedia}
                            onChangeText={(value) => this._changeInput("brindis","whiskyCalidadMedia", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.whiskyCalidadAlta}
                            onChangeText={(value) => this._changeInput("brindis","whiskyCalidadAlta", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          color='#c63275'
                          status={this.state.inputs.brindis.ron ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("brindis","ron")}
                        /> :
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.ron }
                        onValueChange={() => this._CheckboxInput("brindis","ron") }
                      />
                    }
                        <Text style={{marginRight: 20}}>Ron (1L)</Text>
                      </View>
                      <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.ronCalidadMedia}
                            onChangeText={(value) => this._changeInput("brindis","ronCalidadMedia", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.ronCalidadAlta}
                            onChangeText={(value) => this._changeInput("brindis","ronCalidadAlta", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          color='#c63275'
                          status={this.state.inputs.brindis.pisco ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("brindis","pisco")}
                        />:
                      <Switch
                        value={this.state.inputs.brindis.pisco}
                        onValueChange={() => this._CheckboxInput("brindis","pisco")}
                        color='#c63275'
                      />
                    }
                        <Text style={{marginRight: 20}}>Pisco (1L)</Text>
                      </View>
                      <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.piscoCalidadMedia}
                            onChangeText={(value) => this._changeInput("brindis","piscoCalidadMedia", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.piscoCalidadAlta}
                            onChangeText={(value) => this._changeInput("brindis","piscoCalidadAlta", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    
                    <View style={estilo.row}>
                      <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          color='#c63275'
                          status={this.state.inputs.brindis.tequila ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("brindis","tequila")}
                        /> :
                      <Switch
                        value={this.state.inputs.brindis.tequila }
                        onValueChange={() => this._CheckboxInput("brindis","tequila")}
                        color='#c63275'
                      />
                    }
                        <Text style={{marginRight: 20}}>Tequila (1L)</Text>
                      </View>
                      <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.tequilaCalidadMedia}
                            onChangeText={(value) => this._changeInput("brindis","tequilaCalidadMedia", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.tequilaCalidadAlta}
                            onChangeText={(value) => this._changeInput("brindis","tequilaCalidadAlta", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          color='#c63275'
                          status={this.state.inputs.brindis.ginebra ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("brindis","ginebra")}
                        />:
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.ginebra}
                        onValueChange={() => this._CheckboxInput("brindis","ginebra") }
                      />
                    }
                        <Text style={{marginRight: 20}}>Ginebra (1L)</Text>
                      </View>
                      <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.ginebraCalidadMedia}
                            onChangeText={(value) => this._changeInput("brindis","ginebraCalidadMedia", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.ginebraCalidadAlta}
                            onChangeText={(value) => this._changeInput("brindis","ginebraCalidadAlta", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      color='#c63275'
                      status={this.state.inputs.brindis.vinos ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("brindis","vinos")}
                    /> :
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.vinos }
                        onValueChange={() => this._CheckboxInput("brindis","vinos") }
                      />
                    }
                        <Text style={{marginRight: 20}}>Vinos (750ml)</Text>
                      </View>
                      <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.vinosMedia}
                            onChangeText={(value) => this._changeInput("brindis","vinosMedia", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.vinosAlta}
                            onChangeText={(value) => this._changeInput("brindis","vinosAlta", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?{flexDirection: 'row', justifyContent: 'flex-end', marginBottom:10}:styles.novisible}>
                    <Text
                      style={{width:60, textAlign: 'center'}}
                    >Chica</Text>
                    <Text
                      style={{width:60, textAlign: 'center'}}
                    >Mediana</Text>
                    <Text
                      style={{width:60, textAlign: 'center'}}
                    >Grande</Text>
                  </View>
                  <View style={this.state.inputs.brindis.conAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <View style={{width: 120, flexDirection:'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          color='#c63275'
                          status={this.state.inputs.brindis.cerveza ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("brindis","cerveza")}
                        /> :
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.cerveza}
                        onValueChange={() => this._CheckboxInput("brindis","cerveza") }
                      />
                    }
                        <Text style={{marginRight: 20}}>Cerveza</Text>
                      </View>
                      <View style={{width: 180, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                        <View style={{flex:1, padding:3}}>
                          <TextInput 
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.cervezaChica}
                            onChangeText={(value) => this._changeInput("brindis","cervezaChica", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.cervezaMediana}
                            onChangeText={(value) => this._changeInput("brindis","cervezaMediana", value)}
                          />
                        </View>
                        <View style={{flex:1, padding:3}}>
                          <TextInput
                            style={styles.inputHorasX100} 
                            keyboardType = 'numeric'
                            value={this.state.inputs.brindis.cevezaGrande}
                            onChangeText={(value) => this._changeInput("brindis","cevezaGrande", value)}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={this.state.inputs.brindis.sinAlcohol?styles.visible:styles.novisible}>
                    <View style={estilo.row}>
                      <Text style={{textAlign: 'center', flex:1}}>Sin Alcohol</Text>
                    </View>
                    <View style={estilo.row}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        color='#c63275'
                        status={this.state.inputs.brindis.agua ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("brindis","agua")}
                      /> :
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.agua}
                        onValueChange={() => this._CheckboxInput("brindis","agua")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Agua</Text>
                    </View>
                    <View style={estilo.row}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        color='#c63275'
                        status={this.state.inputs.brindis.gaseosa ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("brindis","gaseosa")}
                      /> :
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.gaseosa}
                        onValueChange={() => this._CheckboxInput("brindis","gaseosa") }
                      />
                    }
                      <Text style={{marginRight: 20}}>Gaseosa</Text>
                    </View>
                    <View style={estilo.row}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        color='#c63275'
                        status={this.state.inputs.brindis.gingerale ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("brindis","gingerale")}
                      /> :
                      <Switch
                      color='#c63275'
                        value={this.state.inputs.brindis.gingerale}
                        onValueChange={() => this._CheckboxInput("brindis","gingerale")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Ginger ale</Text>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de bebidas'
                      onChangeText={(value) => this._changeInput('brindis','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Tus proveedores cotizaran en base a una proporción referencial de 0.5 litros por invitado'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>




              <View style={this._itemsCheck('foodTruck', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.foodTruck ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('foodTruck')}
                  />  :
                      <Switch
                        value={checkboxes.foodTruck}
                        onValueChange={() => this._Checkbox('foodTruck')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Food Truck and Snacks</Text>
                </View>
                <View style={checkboxes.foodTruck==true?styles.visible:styles.novisible}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom:10}}>
                    <Text
                      style={{width:75, textAlign: 'center'}}
                    >Precio</Text>
                    <Text
                      style={{width:75, textAlign: 'center'}}
                    >Cantidad</Text>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.foodTruck.sanguches ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("foodTruck","sanguches")}
                      /> :
                      <Switch
                        value={this.state.inputs.foodTruck.sanguches}
                        onValueChange={() => this._CheckboxInput("foodTruck","sanguches") }
                      />
                    }
                      <Text style={{marginRight: 20}}>Sanguches</Text>
                    </View>
                    <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput 
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.sanguchesPrecio}
                          onChangeText={(value) => this._changeInput("foodTruck","sanguchesPrecio", value)}
                        />
                      </View>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.sanguchesCantidad}
                          onChangeText={(value) => this._changeInput("foodTruck","sanguchesCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.foodTruck.comidaChina ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("foodTruck","comidaChina")}
                      /> :
                      <Switch
                        value={this.state.inputs.foodTruck.comidaChina}
                        onValueChange={() => this._CheckboxInput("foodTruck","comidaChina") }
                      />
                    }
                      <Text style={{marginRight: 20}}>Comida China</Text>
                    </View>
                    <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput 
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.comidaChinaPrecio}
                          onChangeText={(value) => this._changeInput("foodTruck","comidaChinaPrecio", value)}
                        />
                      </View>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.comidaChinaCantidad}
                          onChangeText={(value) => this._changeInput("foodTruck","comidaChinaCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.foodTruck.carnes ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("foodTruck","carnes")}
                      />:
                      <Switch
                        value={this.state.inputs.foodTruck.carnes}
                        onValueChange={() => this._CheckboxInput("foodTruck","carnes")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Carnes</Text>
                    </View>
                    <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput 
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.carnesPrecio}
                          onChangeText={(value) => this._changeInput("foodTruck","carnesPrecio", value)}
                        />
                      </View>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.carnesCantidad}
                          onChangeText={(value) => this._changeInput("foodTruck","carnesCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.foodTruck.salchipapa ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("foodTruck","salchipapa")}
                      /> :
                      <Switch
                        value={this.state.inputs.foodTruck.salchipapa}
                        onValueChange={() => this._CheckboxInput("foodTruck","salchipapa")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Salchipapa</Text>
                    </View>
                    <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput 
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.salchipapaPrecio}
                          onChangeText={(value) => this._changeInput("foodTruck","salchipapaPrecio", value)}
                        />
                      </View>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.salchipapaCantidad}
                          onChangeText={(value) => this._changeInput("foodTruck","salchipapaCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 150, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.foodTruck.platos ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("foodTruck","platos")}
                      />:
                      <Switch
                        value={this.state.inputs.foodTruck.platos}
                        onValueChange={() => this._CheckboxInput("foodTruck","platos") }
                      />
                    }
                      <Text style={{marginRight: 20}}>Platos</Text>
                    </View>
                    <View style={{width: 150, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput 
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.platosPrecio}
                          onChangeText={(value) => this._changeInput("foodTruck","platosPrecio", value)}
                        />
                      </View>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.foodTruck.platosCantidad}
                          onChangeText={(value) => this._changeInput("foodTruck","platosCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>





              <View style={this._itemsCheck('mesaBocaditos', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.mesaBocaditos ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('mesaBocaditos')}
                    /> :
                      <Switch
                        value={checkboxes.mesaBocaditos}
                        onValueChange={() => this._Checkbox('mesaBocaditos') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Mesa de Bocaditos</Text>
                </View>
                <View style={checkboxes.mesaBocaditos==true?styles.visible:styles.novisible}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom:10}}>
                    <Text
                      style={{width:75, textAlign: 'center'}}
                    >Cantidad</Text>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mesaBocaditos.embutidos ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mesaBocaditos","embutidos")}
                      /> :
                      <Switch
                        value={this.state.inputs.mesaBocaditos.embutidos}
                        onValueChange={() => this._CheckboxInput("mesaBocaditos","embutidos")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Embutidos</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mesaBocaditos.embutidosCantidad}
                          onChangeText={(value) => this._changeInput("mesaBocaditos","embutidosCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mesaBocaditos.dulces ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mesaBocaditos","dulces")}
                      /> :
                      <Switch
                        value={this.state.inputs.mesaBocaditos.dulces}
                        onValueChange={() => this._CheckboxInput("mesaBocaditos","dulces")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Dulces</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mesaBocaditos.dulcesCantidad}
                          onChangeText={(value) => this._changeInput("mesaBocaditos","dulcesCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mesaBocaditos.sushi ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mesaBocaditos","sushi")}
                      /> :
                      <Switch
                        value={this.state.inputs.mesaBocaditos.sushi}
                        onValueChange={() => this._CheckboxInput("mesaBocaditos","sushi")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Sushi</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mesaBocaditos.sushiCantidad}
                          onChangeText={(value) => this._changeInput("mesaBocaditos","sushiCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mesaBocaditos.otros ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mesaBocaditos","otros")}
                      />:
                      <Switch
                        value={this.state.inputs.mesaBocaditos.otros}
                        onValueChange={() => this._CheckboxInput("mesaBocaditos","otros") }
                      />
                    }
                      <Text style={{marginRight: 20}}>Otros</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mesaBocaditos.otrosCantidad}
                          onChangeText={(value) => this._changeInput("mesaBocaditos","otrosCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.input} 
                      placeholder="Especificar"
                      value={this.state.inputs.mesaBocaditos.otrosEspecificar}
                      onChangeText={(value) => this._changeInput("mesaBocaditos","otrosEspecificar", value)}
                    />
                  </View>
                </View>
              </View>






              <View style={this._itemsCheck('ambientacion', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.ambientacion ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('ambientacion')}
                  />  :
                      <Switch
                        value={checkboxes.ambientacion}
                        onValueChange={() => this._Checkbox('ambientacion')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Ambientación</Text>
                </View>
                <View style={checkboxes.ambientacion==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Ambientación / Decoración'
                      onChangeText={(value) => this._changeInput('ambientacion','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Ejemplos: Quiero recibir cotizaciones para decorar mi centro de mesa, un marco de entrada hecho con globos de helio, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>






              <View style={this._itemsCheck('mobiliario', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.mobiliario ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('mobiliario')}
                  />  :
                      <Switch
                        value={checkboxes.mobiliario}
                        onValueChange={() => this._Checkbox('mobiliario')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Mobiliario</Text>
                </View>
                <View style={checkboxes.mobiliario==true?styles.visible:styles.novisible}>
                  <View style={{width:300, flexDirection: 'row', justifyContent: 'flex-end', marginBottom:10}}>
                    <Text
                      style={{width:75, textAlign: 'center'}}
                    >Cantidad</Text>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mobiliario.mesas ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mobiliario","mesas")}
                      /> :
                      <Switch
                        value={this.state.inputs.mobiliario.mesas}
                        onValueChange={() => this._CheckboxInput("mobiliario","mesas") }
                      />
                    }
                      <Text style={{marginRight: 20}}>Mesas</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mobiliario.mesasCantidad}
                          onChangeText={(value) => this._changeInput("mobiliario","mesasCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mobiliario.sillas ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mobiliario","sillas")}
                      />:
                      <Switch
                        value={this.state.inputs.mobiliario.sillas}
                        onValueChange={() => this._CheckboxInput("mobiliario","sillas")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Sillas</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mobiliario.sillasCantidad}
                          onChangeText={(value) => this._changeInput("mobiliario","sillasCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={estilo.row}>
                    <View style={{width: 225, flexDirection:'row', alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.mobiliario.juegosLounge ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("mobiliario","juegosLounge")}
                      />:
                      <Switch
                        value={this.state.inputs.mobiliario.juegosLounge}
                        onValueChange={() => this._CheckboxInput("mobiliario","juegosLounge")}
                      />
                    }
                      <Text style={{marginRight: 20}}>Juegos de Lounge</Text>
                    </View>
                    <View style={{width: 75, flexDirection:'row', alignSelf:'flex-end', justifyContent:'space-between'}}>
                      <View style={{flex:1, padding:3}}>
                        <TextInput
                          style={styles.inputHorasX100} 
                          keyboardType = 'numeric'
                          value={this.state.inputs.mobiliario.juegosLoungeCantidad}
                          onChangeText={(value) => this._changeInput("mobiliario","juegosLoungeCantidad", value)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>





              <View style={this._itemsCheck('invitaciones', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.invitaciones ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('invitaciones')}
                  /> :
                      <Switch
                        value={checkboxes.invitaciones }
                        onValueChange={() => this._Checkbox('invitaciones') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Invitaciones</Text>
                </View>
                <View style={checkboxes.invitaciones==true?styles.visible:styles.novisible}>
                  <View style={Platform.OS === 'ios'?estilo.row:styles.novisible}>
                    <RadioButton.IOS
                      value="clasicas"
                      status={this.state.inputs.invitaciones.tipo === 'clasicas' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("invitaciones","tipo", 'clasicas')}
                    /><Text style={{marginRight: 20}}>Clásicas</Text>
                    <RadioButton.IOS
                      value="ejecutivas"
                      status={this.state.inputs.invitaciones.tipo === 'ejecutivas' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("invitaciones","tipo", 'ejecutivas')}
                    /><Text style={{marginRight: 20}}>Ejecutivas</Text>
                  </View>
                  <View style={Platform.OS === 'android'?estilo.row:styles.novisible}>
                    <RadioButton.Android
                      value="clasicas"
                      status={this.state.inputs.invitaciones.tipo === 'clasicas' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("invitaciones","tipo", 'clasicas')}
                    /><Text style={{marginRight: 20}}>Clásicas</Text>
                    <RadioButton.Android
                      value="ejecutivas"
                      status={this.state.inputs.invitaciones.tipo === 'ejecutivas' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("invitaciones","tipo", 'ejecutivas')}
                    /><Text style={{marginRight: 20}}>Ejecutivas</Text>
                  </View>
                  
                  <View style={estilo.row}>
                    <Text style={{marginRight: 20}}>Cantidad:</Text>
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar cantdidad'
                      onChangeText={(value, index) => this._changeInput('invitaciones','cantidad', value)}
                      data={[{value:'25'},{value:'50'},{value:'75'},{value:'100'},{value:'125'},{value:'150'}, {value: '225'},{value:'250'}]}
                    />
                  </View>
                  <View style={estilo.row}>
                    <Text style={{marginRight:10}}>Costo máximo</Text>
                      <Dropdown
                        style={{width:100}}
                        label='seleccionar cantdidad'
                        onChangeText={(value, index) => this._changeInput('invitaciones','costo', value)}
                        data={[{value:'20'},{value:'50'},{value:'80'},{value:'120'},{value:'150'},{value:'200'}]}
                      />
                      <Text style={{marginLeft:10}}>soles</Text>
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Invitaciones'
                      onChangeText={(value) => this._changeInput('invitaciones','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Brinda mayor detalle sobre el color y diseño de las invitaciones para tu fiesta.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>





              <View style={this._itemsCheck('genero', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.genero ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('genero')}
                    />  :
                      <Switch
                        value={checkboxes.genero}
                        onValueChange={() => this._Checkbox('genero') }
                      />
                    }
                 
                  <Text style={{fontSize: 20}}>Genero</Text>
                </View>
                <View style={checkboxes.genero==true?styles.visible:styles.novisible}>
                  <View style={Platform.OS === 'android'?estilo.row:styles.novisible}>
                    <RadioButton.Android
                      value="Masculino"
                      status={this.state.inputs.genero.genero === 'Masculino' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("genero","genero", 'Masculino')}
                    /><Text style={{marginRight: 20}}>Masculino</Text>
                    <RadioButton.Android
                      value="Femenino"
                      status={this.state.inputs.genero.genero === 'Femenino' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("genero","genero", 'Femenino')}
                    /><Text style={{marginRight: 20}}>Femenino</Text>
                    
                  </View>
                  <View style={Platform.OS === 'ios'?estilo.row:styles.novisible}>
                    <RadioButton.IOS
                      value="Masculino"
                      status={this.state.inputs.genero.genero === 'Masculino' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("genero","genero", 'Masculino')}
                    /><Text style={{marginRight: 20}}>Masculino</Text>
                    <RadioButton.IOS
                      value="Femenino"
                      status={this.state.inputs.genero.genero === 'Femenino' ? 'checked' : 'unchecked'}
                      onPress={() => this._changeInput("genero","genero", 'Femenino')}
                    /><Text style={{marginRight: 20}}>Femenino</Text>
                    
                  </View>
                
                </View> 
              </View>





              <View style={this._itemsCheck('djParty', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.djParty ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('djParty')}
                  /> :
                      <Switch
                        value={checkboxes.djParty }
                        onValueChange={() => this._Checkbox('djParty')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Música y Luces</Text>
                </View>
                <View style={checkboxes.djParty==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 20}}>Tiempo</Text>
                    <TextInput
                        style={styles.inputHoras} 
                        keyboardType = 'numeric'
                        value={this.state.inputs.djParty.tiempo}
                        onChangeText={(value) => this._changeInput("djParty","tiempo", value)}
                      />
                      <Text style={{marginLeft: 20}}>horas</Text>
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.djParty.sonido ? 'checked' : 'unchecked'}
                      color="#c63275"
                      onPress={() => this._CheckboxInput("djParty","sonido")}
                    /> :
                      <Switch
                        value={this.state.inputs.djParty.sonido}
                        color="#c63275"
                        onValueChange={() => this._CheckboxInput("djParty","sonido") }
                      />
                    }
                    <Text style={{marginRight: 20}}>Equipo de Sonido</Text>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.djParty.microfono ? 'checked' : 'unchecked'}
                      color="#c63275"
                      onPress={() => this._CheckboxInput("djParty","microfono")}
                    />:
                      <Switch
                        value={this.state.inputs.djParty.microfono}
                        color="#c63275"
                        onValueChange={() => this._CheckboxInput("djParty","microfono") }
                      />
                    }
                    <Text style={{marginRight: 20}}>Micrófonos</Text>
                    
                  </View>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.djParty.luces ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("djParty","luces")}
                      color="#c63275"
                    />:
                      <Switch
                        value={this.state.inputs.djParty.luces}
                        onValueChange={() => this._CheckboxInput("djParty","luces") }
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Luces</Text>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.djParty.dj ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("djParty","dj")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.djParty.dj}
                        onValueChange={() => this._CheckboxInput("djParty","dj")}
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>DJ</Text>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.djParty.orquesta ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("djParty","orquesta")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.djParty.orquesta }
                        onValueChange={() => this._CheckboxInput("djParty","orquesta") }
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Orquesta</Text>
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio'
                      onChangeText={(value) => this._changeInput('djParty','otrosDetallar',value)}
                    />
                    <View style={{position:'absolute', width: 30, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla todos los aspectos que consideres necesarios para que tengas la mejor música y luces para tu fiesta.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View> 
              </View>





              <View style={this._itemsCheck('maestroCeremonias', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.maestroCeremonias ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('maestroCeremonias')}
                    /> :
                      <Switch
                        value={checkboxes.maestroCeremonias}
                        onValueChange={() => this._Checkbox('maestroCeremonias')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Maestro de Ceremonias</Text>
                  <View style={{position:'relative', width: 30, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['El servicio de maestro de ceremonia incluye micrófono y parlante. Cualquier adicional por favor especificarlo.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={checkboxes.maestroCeremonias==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 20}}>Duración</Text>
                    <TextInput
                        style={styles.inputHoras} 
                        keyboardType = 'numeric'
                        value={this.state.inputs.maestroCeremonias.tiempo}
                        onChangeText={(value) => this._changeInput("maestroCeremonias","tiempo", value)}
                      />
                      <Text style={{marginLeft: 20}}>horas</Text>
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Maestro de Ceremonias'
                      onChangeText={(value) => this._changeInput('maestroCeremonias','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Ejemplos: Quiero que el maestro de ceremonia sea hombre y vista de terno color negro.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>







              <View style={this._itemsCheck('sorpresas', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.sorpresas ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('sorpresas')}
                  /> :
                      <Switch
                        value={checkboxes.sorpresas}
                        onValueChange={() => this._Checkbox('sorpresas')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Sorpresas</Text>
                </View>
                <View style={checkboxes.sorpresas==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Text style={{marginRight:10}}>Costo por sorpresas</Text>
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar cantdidad'
                      onChangeText={(value, index) => this._changeInput('invitaciones','cantidad', value)}
                      data={[{value:'6'},{value:'7'},{value:'8'},{value:'9'},{value:'10'},{value:'11'}, {value: '12'},{value:'13'},{value:'14'},{value:'15'}]}
                    />
                    
                    <Text style={{marginLeft:10}}>soles</Text>
                  </View>

                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Sorpresas'
                      onChangeText={(value) => this._changeInput('sorpresas','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla lo que quisieras que incluyamos en las sorpresas. Ejemplo: quisiera que las sorpresas tengan un juego de ludo.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>
          



              <View style={this._itemsCheck('miniSpa', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 

                      <Checkbox
                    status={checkboxes.miniSpa ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('miniSpa')}
                  /> :
                      <Switch
                        value={checkboxes.miniSpa }
                        onValueChange={() =>this._Checkbox('miniSpa')}
                      />
                    }
                   
                  <Text style={{fontSize: 20}}>Mini Spa</Text>
                </View>
                
                <View style={checkboxes.miniSpa==true?styles.visible:styles.novisible}>
                  <View style={[estilo.row, {alignItems: 'flex-start'}]}>
                    <View style={{width:'50%'}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.miniSpa.manicure ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("miniSpa","manicure")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={this.state.inputs.miniSpa.manicure}
                        onValueChange={() => this._CheckboxInput("miniSpa","manicure") }
                      />
                    }
                        <Text style={{marginRight: 20}}>Manicure</Text> 
                      </View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={checkboxes.animacion ? 'checked' : 'unchecked'}
                        onPress={() => this._Checkbox('animacion')}
                      /> :
                      <Switch
                        value={checkboxes.animacion}
                        onValueChange={() => this._Checkbox('animacion') }
                      />
                    }
                        <Checkbox
                          status={this.state.inputs.miniSpa.pedicure ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("miniSpa","pedicure")}
                          color="#c63275"
                        /><Text style={{marginRight: 20}}>Pedicure</Text> 
                      </View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.miniSpa.peinado ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("miniSpa","peinado")}
                      color="#c63275"
                    />:
                      <Switch
                        value={this.state.inputs.miniSpa.peinado}
                        onValueChange={() => this._CheckboxInput("miniSpa","peinado")}
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Peinado</Text> 
                      </View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.miniSpa.caritasPintadas ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("miniSpa","caritasPintadas")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={this.state.inputs.miniSpa.caritasPintadas}
                        onValueChange={() => this._CheckboxInput("miniSpa","caritasPintadas") }
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Caritas Pintadas</Text> 
                      </View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.miniSpa.masajes ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("miniSpa","masajes")}
                          color="#c63275"
                        />:
                      <Switch
                        value={this.state.inputs.miniSpa.masajes }
                        onValueChange={() => this._CheckboxInput("miniSpa","masajes") }
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Masajes</Text> 
                      </View>
                    </View>
                    <View style={{width:'50%'}}>
                      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
                        <Text style={{marginRight:10}}>Nro de Niñ@s</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                            <Dropdown
                              style={{width:100}}
                              label='seleccionar cantidad'
                              onChangeText={(value, index) => this._changeInput('miniSpa','Ninos', value)}
                              data={spaPicker}
                            />
                        <Text style={{marginLeft:10}}>soles</Text>
                      </View>
                    </View>
                  </View>

                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Mini Spa'
                      onChangeText={(value) => this._changeInput('miniSpa','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla caracteristicas de tu servicio. Ejemplo: quisiera que sean masajistas mujeres, que vistan de blanco, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>



              <View style={this._itemsCheck('planner', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={checkboxes.planner ? 'checked' : 'unchecked'}
                      onPress={() => this._Checkbox('planner')}
                    /> :
                      <Switch
                        value={checkboxes.planner}
                        onValueChange={() => this._Checkbox('planner') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Planner</Text>
                </View>
                
                <View style={checkboxes.planner==true?styles.visible:styles.novisible}>
                  <View style={Platform.OS === 'android'?estilo.row:styles.novisible}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton.Android
                        value="desdeElInicio"
                        status={this.state.inputs.planner.inicio === 'desdeElInicio' ? 'checked' : 'unchecked'}
                        onPress={() => this._changeInput("planner","inicio", 'desdeElInicio')}
                      />
                      <Text style={{marginRight: 20}}>Desde el inicio</Text> 
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton.Android
                        value="aMitadDeCamino"
                        status={this.state.inputs.planner.inicio === 'aMitadDeCamino' ? 'checked' : 'unchecked'}
                        onPress={() => this._changeInput("planner","inicio", 'aMitadDeCamino')}
                      />
                      <Text style={{marginRight: 20}}>A mitad de camino</Text> 
                    </View>
                  </View>
                  <View style={Platform.OS === 'android'?estilo.row:styles.novisible}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton.Android
                        value="aMitadDeCamino"
                        status={this.state.inputs.planner.inicio === 'elDiaDeMiEvento' ? 'checked' : 'unchecked'}
                        onPress={() => this._changeInput("planner","inicio", 'elDiaDeMiEvento')}
                      />
                      <Text style={{marginRight: 20}}>El dia de mi evento</Text> 
                    </View>
                    
                  </View>
                  <View style={Platform.OS === 'ios'?estilo.row:styles.novisible}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton.IOS
                        value="desdeElInicio"
                        status={this.state.inputs.planner.inicio === 'desdeElInicio' ? 'checked' : 'unchecked'}
                        onPress={() => this._changeInput("planner","inicio", 'desdeElInicio')}
                      />
                      <Text style={{marginRight: 20}}>Desde el inicio</Text> 
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton.IOS
                        value="aMitadDeCamino"
                        status={this.state.inputs.planner.inicio === 'aMitadDeCamino' ? 'checked' : 'unchecked'}
                        onPress={() => this._changeInput("planner","inicio", 'aMitadDeCamino')}
                      />
                      <Text style={{marginRight: 20}}>A mitad de camino</Text> 
                    </View>
                  </View>
                  <View style={Platform.OS === 'ios'?estilo.row:styles.novisible}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton.IOS
                        value="aMitadDeCamino"
                        status={this.state.inputs.planner.inicio === 'elDiaDeMiEvento' ? 'checked' : 'unchecked'}
                        onPress={() => this._changeInput("planner","inicio", 'elDiaDeMiEvento')}
                      />
                      <Text style={{marginRight: 20}}>El dia de mi evento</Text> 
                    </View>
                    
                  </View>

                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Planner'
                      onChangeText={(value) => this._changeInput('planner','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla datos adicionales para tu Planner, Ejemplo: los servicios que ya tienes adjudicados, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>
           
              <View style={this._itemsCheck('transporte', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.transporte ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('transporte')}
                  />  :
                      <Switch
                        value={checkboxes.transporte}
                        onValueChange={() => this._Checkbox('transporte')}
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Transporte</Text>
                </View>
                
                <View style={checkboxes.transporte==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <View style={{flexDirection: 'row', width:150, alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.transporte.clasico ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("transporte","clasico")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.transporte.clasico}
                        onValueChange={() => this._CheckboxInput("transporte","clasico")}
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Clásico</Text> 
                    </View>
                    <View style={{flexDirection: 'row', width:150, alignItems: 'center'}}>
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                        status={this.state.inputs.transporte.especial ? 'checked' : 'unchecked'}
                        onPress={() => this._CheckboxInput("transporte","especial")}
                        color="#c63275"
                      /> :
                      <Switch
                        value={this.state.inputs.transporte.especial }
                        onValueChange={() => this._CheckboxInput("transporte","especial")}
                        color="#c63275"
                      />
                    }
                      <Text style={{marginRight: 20}}>Especial</Text> 
                    </View>
                    
                  </View>

                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de transporte'
                      onChangeText={(value) => this._changeInput('transporte','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['El transporte clásico incluye auto y decoración, el servicio especial varia entre limosina, carruaje, caballos, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </View>
              </View>


              <View style={this._itemsCheck('servicioCadetes', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.servicioCadetes ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('servicioCadetes')}
                  />  :
                      <Switch
                        value={checkboxes.servicioCadetes}
                        onValueChange={() => this._Checkbox('servicioCadetes') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Servicio de cadetes</Text>
                </View>
                
                <View style={checkboxes.servicioCadetes==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Text style={{marginRight: 20}}>Nro de cadetes</Text> 
                      <Dropdown
                        style={{width:100}}
                        label='seleccionar nro de cadetes'
                        onChangeText={(value, index) => this._changeInput('servicioCadetes','nroCadetes', value)}
                        data={[
                          {value:'6'},
                          {value:'7'},
                          {value:'8'}
                        ]}
                      />  
                  </View>

                </View>
              </View>
           


              <View style={this._itemsCheck('chambeLan', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.chambeLan ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('chambeLan')}
                  />  :
                      <Switch
                        value={checkboxes.chambeLan }
                        onValueChange={() => this._Checkbox('chambeLan') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Chambe Lan</Text>
                </View>
                
                <View style={checkboxes.chambeLan==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de Chambelan'
                      onChangeText={(value) => this._changeInput('chambeLan','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla caracteristicas de tu servicio. Por ejemplo: quisiera que los cadetes se vistan de negro, y el chambelan se vista de blanco.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                

                </View>
                           
              </View>


              <View style={this._itemsCheck('torta', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.torta ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('torta')}
                  /> :
                      <Switch
                        value={checkboxes.torta }
                        onValueChange={() => this._Checkbox('torta')}
                      />
                    }
                  <Text style={{fontSize: 20}}>Torta</Text>
                </View>
                
                <View style={checkboxes.torta==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                    <Dropdown
                      style={{width:100}}
                      label='seleccionar tema del evento'
                      onChangeText={(value, index) => this._changeInput('torta','tema', value)}
                      data={[
                        {value:'Otros'}
                      ]}
                    />  
                  </View> 
                  <View style={this.state.inputs.torta.tema == 'Otros'?estilo.row:styles.novisible}>
                    <TextInput
                      style={this.state.inputs.torta.tema == 'Otros'?styles.input:styles.novisible} 
                      placeholder='Especificar'
                      onChangeText={(value) => this._changeInput('torta','especificar',value)}
                    />
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio de torta'
                      onChangeText={(value) => this._changeInput('torta','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla caracteristicas de tu torta. Por ejemplo: quisiera una torta de 2 pisos que me rinda para 150 invitados.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                

                </View>
                           
              </View>
           


              <View style={this._itemsCheck('servicioParrillero', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.servicioParrillero ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('servicioParrillero')}
                  /> :
                      <Switch
                        value={checkboxes.servicioParrillero }
                        onValueChange={() => this._Checkbox('servicioParrillero') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Servicio Parrillero</Text>
                  <View style={{position:'relative', width: 30, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Cada proveedor cotizara la cantidad de personal necesario en base a la información de tus invitados y su propia experiencia para brindarte un servicio optimo.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                </View>
                
                <View style={checkboxes.servicioParrillero==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.servicioParrillero.parrilla ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("servicioParrillero","parrilla")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.servicioParrillero.parrilla}
                        onValueChange={() => this._CheckboxInput("servicioParrillero","parrilla")}
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Parrilla</Text> 
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.servicioParrillero.encargado ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("servicioParrillero","encargado")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.servicioParrillero.encargado }
                        onValueChange={() => this._CheckboxInput("servicioParrillero","encargado")}
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Encargado de parrilla</Text> 
                  </View> 
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.servicioParrillero.mozos ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("servicioParrillero","mozos")}
                      color="#c63275"
                    />:
                      <Switch
                        value={this.state.inputs.servicioParrillero.mozos}
                        onValueChange={() => this._CheckboxInput("servicioParrillero","mozos")}
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Mozos / Azafatas</Text> 
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.servicioParrillero.menaje ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("servicioParrillero","menaje")}
                      color="#c63275"
                    />:
                      <Switch
                        value={this.state.inputs.servicioParrillero.menaje}
                        onValueChange={() => this._CheckboxInput("servicioParrillero","menaje")}
                        color="#c63275"
                      />
                    }
                   <Text style={{marginRight: 20}}>Menaje</Text> 
                  </View>
                  <View style={estilo.row}>
                    <TextInput
                      style={styles.textarea} 
                      multiline={true}
                      placeholder='Agregar detalles a mi servicio parrillero'
                      onChangeText={(value) => this._changeInput('servicioParrillero','detalles',value)}
                    />
                    <View style={{position:'absolute', width: 60, height: 60, top:0, right:0}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Detalla caracteristicas del servicio. Por ejemplo: quiero que mi servicio lo atiendan solo azafatas, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                

                </View>
                           
              </View>

              <View style={this._itemsCheck('carnes', this.state.step)?styles.visible:styles.novisible}>
                <View style={estilo.row2}>
                {
                      Platform.OS === 'android' ? 
                      <Checkbox
                    status={checkboxes.carnes ? 'checked' : 'unchecked'}
                    onPress={() => this._Checkbox('carnes')}
                  />  :
                      <Switch
                        value={checkboxes.carnes}
                        onValueChange={() => this._Checkbox('carnes') }
                      />
                    }
                  
                  <Text style={{fontSize: 20}}>Carnes</Text>
                </View>
                
                <View style={checkboxes.carnes==true?styles.visible:styles.novisible}>
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.carnes.ensalada ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("carnes","ensalada")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.carnes.ensalada }
                        onValueChange={() =>this._CheckboxInput("carnes","ensalada")}
                        color="#c63275"
                      />
                    }
                    <Text style={{marginRight: 20}}>Ensalada</Text> 
                    {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.carnes.entradas ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("carnes","entradas")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.carnes.entradas}
                        onValueChange={() => this._CheckboxInput("carnes","entradas")}
                        color="#c63275"
                      />
                    }
                    <Text>Entradas</Text> 
                    <View style={{position:'relative', width: 30, height: 60}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Especifica a tu gusto: Champiñones, Pimentones, Chorizo, Hot Dog, Papa Fritas, Esparragos, Papas Coctel, Papas Sancochadas, etc.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View> 
                  <View style={estilo.row}>
                  {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.carnes.carnes ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("carnes","carnes")}
                      color="#c63275"
                    /> :
                      <Switch
                        value={this.state.inputs.carnes.carnes}
                        onValueChange={() => this._CheckboxInput("carnes","carnes")}
                        color="#c63275"
                      />
                    }
                    <Text>Carnes</Text> 
                    <View style={{position:'relative', width: 30, height: 60}}>
                      <TouchableOpacity 
                        style={styles.errorForm}
                        onPress={() => this.errorPopup(['Aproximadamente cada persona consume 250gr.'])}
                      >
                        <IconAntDesign
                          name="questioncircleo"
                          fontSize={40}
                          color='#ff2222'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={this.state.inputs.carnes.carnes?styles.visible:styles.novisible}>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.carnes.asadoDeTira ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("carnes","asadoDeTira")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={this.state.inputs.carnes.asadoDeTira}
                        onValueChange={() => this._CheckboxInput("carnes","asadoDeTira")}
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Asado de tira</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','asadoDeTira', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        />  
                       
                      </View>
                    </View>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.carnes.bifeDeLomo ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("carnes","bifeDeLomo")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={this.state.inputs.carnes.bifeDeLomo}
                        onValueChange={() => this._CheckboxInput("carnes","bifeDeLomo")}
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Bife de lomo</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','bifeDeLomo', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        />  
                        
                      </View>
                    </View>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.carnes.bifeAngosto ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("carnes","bifeAngosto")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={this.state.inputs.carnes.bifeAngosto}
                        onValueChange={() => this._CheckboxInput("carnes","bifeAngosto") }
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Bife Angosto</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','bifeAngosto', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        /> 
                        
                      </View>
                    </View>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                      status={this.state.inputs.carnes.bifeAncho ? 'checked' : 'unchecked'}
                      onPress={() => this._CheckboxInput("carnes","bifeAncho")}
                      color="#c63275"
                    />:
                      <Switch
                        value={this.state.inputs.carnes.bifeAncho }
                        onValueChange={() => this._CheckboxInput("carnes","bifeAncho") }
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Bife Ancho</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','bifeAncho', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        /> 
                        
                      </View>
                    </View>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.carnes.chuleta ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("carnes","chuleta")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={this.state.inputs.carnes.chuleta }
                        onValueChange={() => this._CheckboxInput("carnes","chuleta") }
                      />
                    }
                        <Text style={{marginRight: 20}}>Chuleta</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','chuleta', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        /> 
                        
                      </View>
                    </View>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.carnes.churrasco ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("carnes","churrasco")}
                          color="#c63275"
                        />:
                      <Switch
                        value={this.state.inputs.carnes.churrasco}
                        onValueChange={() => this._CheckboxInput("carnes","churrasco")}
                        color="#c63275"
                      />
                    }
                        <Text style={{marginRight: 20}}>Churrasco</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                      <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','churrasco', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        /> 
                        
                      </View>
                    </View>
                    <View style={{width:300,flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:'60%', flexDirection: 'row', alignItems:'center'}}>
                      {
                      Platform.OS === 'android' ? 
                      <Checkbox
                          status={this.state.inputs.carnes.cuadril ? 'checked' : 'unchecked'}
                          onPress={() => this._CheckboxInput("carnes","cuadril")}
                          color="#c63275"
                        /> :
                      <Switch
                        value={checkboxes.animacion}
                        onValueChange={() => this._Checkbox('animacion') }
                      />
                    }
                        <Text style={{marginRight: 20}}>Cuadril</Text>
                      </View>
                      <View style={{width:'40%', flexDirection: 'row'}}>
                        <Dropdown
                          style={{width:100}}
                          label='seleccionar cantidad'
                          onChangeText={(value, index) => this._changeInput('carnes','cuadril', value)}
                          data={[
                            {value:'0.25'},
                            {value:'0.50'},
                            {value:'0.75'},
                            {value:'1.00'},
                            {value:'1.25'},
                            {value:'1.50'},
                            {value:'1.75'},
                            {value:'2.00'},
                            {value:'2.25'},
                            {value:'2.50'},
                            {value:'2.75'},
                            {value:'3.00'}
                          ]}
                        /> 
                        
                      </View>
                    </View>
                  </View>
                

                </View>
                           
              </View>
           




          </View>
          
            
          </ScrollView>
        
          <FormularioSteps
            screenProps={{
              changeStep: (e) => this.setState({step: e}),
              currentStep: () => this.state.step,
              datosFiesta : this.state.datosFiesta,
              checkboxes : this.state.checkboxes,
              navigation : this.props.navigation,
              inputs: this.state.inputs
            }}
          />

  
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modal}>
                  <TouchableWithoutFeedback onPress={()=>this.setState({modal: false})}>
                  <Animatable.View animation={'fadeIn'}
                  style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.cerrarPopup}  
                            onPress={()=>this.setState({modal: false})}>
                            <Text style={{color:'#fff'}}>X</Text>
                        </TouchableOpacity> 
                        {
                            this.state.errorPopupTexto.map(function(mensaje) { return <Text style={{color:'#ff2222', fontSize: 10, marginBottom: 15}}>- {mensaje}</Text>})
                        }
                    </View>
                  </Animatable.View>
                  </TouchableWithoutFeedback>
                </Modal>   

                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.popupCheckForm}>
                  <TouchableWithoutFeedback onPress={()=>this.setState({popupCheckForm: false})}>
                  <Animatable.View animation={'fadeIn'}
                  style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.cerrarPopup}  
                            onPress={()=>this.setState({popupCheckForm: false})}>
                            <Text style={{color:'#fff'}}>X</Text>
                        </TouchableOpacity> 
                        <Text style={{fontSize:22, marginBottom:30}}>Dale check a todos los servicios que quieras cotizar</Text>
                        <View style={{alignSelf: 'center', justifyContent: 'center', marginTop: 50}}>
                          <TouchableOpacity
                            style={estilo.button}
                            onPress={()=>this._entendido_popupCheckForm()}
                          >
                            <LinearGradient
                              colors={['#C63275', '#8F4D93']}
                              start={[1,1]}
                              end={[0,0]}
                              style={estilo.gradientButton}>
                              <Text style={{
                                fontWeight: '700',
                                color: '#fff'
                              }}>ENTENDIDO</Text>
                            </LinearGradient>
                          </TouchableOpacity>
                        </View>
                    </View>
                  </Animatable.View>
                  </TouchableWithoutFeedback>
                </Modal>   

                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.popupInputMesagge}>
                  <TouchableWithoutFeedback onPress={()=>this.setState({popupInputMesagge: false})}>
                  <Animatable.View animation={'fadeIn'}
                  style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.cerrarPopup}  
                            onPress={()=>this.setState({popupInputMesagge: false})}>
                            <Text style={{color:'#fff'}}>X</Text>
                        </TouchableOpacity> 
                        <Text style={{fontSize:22, marginBottom:30}}>Dale check a todos los servicios que quieras cotizar</Text>
                        <View style={{alignSelf: 'center', justifyContent: 'center', marginTop: 50}}>
                          <TouchableOpacity
                            style={estilo.button}
                            onPress={()=>this._entendido_popupInputMessage()}
                          >
                            <LinearGradient
                              colors={['#C63275', '#8F4D93']}
                              start={[1,1]}
                              end={[0,0]}
                              style={estilo.gradientButton}>
                              <Text style={{
                                fontWeight: '700',
                                color: '#fff'
                              }}>ENTENDIDO</Text>
                            </LinearGradient>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[estilo.button,{marginBottom:20}]}
                            onPress={()=>this.setState({popupInputMessage: false})}
                          >
                            <View
                            style={[estilo.gradientButton, {backgroundColor: '#E9E9E9'}]}>
                              <Text style={{
                                  fontWeight: '700',
                                  color: '#333'
                              }}>CERRAR</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                 
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
  _showModal_popupCheckForm = () => this.setState({ popupCheckForm: true });
  _hideModal_popupCheckForm = () => this.setState({ popupCheckForm: false });

  _showModal_popupInputMessage = () => this.setState({ popupInputMesagge: true });
  _hideModal_popupInputMessage = () => this.setState({ popupInputMesagge: false });
  
  _entendido_popupInputMessage = async () => {

    const popupInputMesagge = false
    const id = this.props.screenProps.getState().datosUsuario.id
    Authentication.update( {popupInputMesagge , id }).then((result) => {
         console.log(result)
    })
    this.setState({popupInputMesagge: false});
    this.setState({primerInput: false});
  }
  
  _entendido_popupCheckForm = async () => {
    const id = this.props.screenProps.getState().datosUsuario.id
    const popupCheckForm = false
    Authentication.update( {popupCheckForm , id }).then((result) => {
          console.log(result)
    })
    this.setState({popupCheckForm: false});
  }

  _itemsCheck = (checkbox, step) => {   
    var tipos = {
      "fiesta infantil": "fiestaInfantil",
      "quinceaños": "quinceAnos",
      "fiesta cumpleaños adultos": "fiestaAdultos",
      "baby shower": "babyShower",
      "karaoke": "karaoke",
      "parrillada": "parrillada",
      "coctel": "coctel",
      "reuniones familiares": "reunionesFamiliares",
      "despedida de soltero": "despedidasSoltero",
      "bautizo": "bautizo",
      "primera comunión": "primeraComunion",
      "matrimonio": "matrimonio",
      "bar mitzvah": "barmitzvah",
      "fin de año": "finAno",
      "halloween": "halloween",
      "san valentin": "sanValentin",
      "año nuevo chino": "anoNuevoChino",
      "aniversario paises": "aniversarioPaises",
      "aniversario de bodas": "aniversarioBodas",
            
    };
    var tipo = tipos[this.state.datosFiesta.tipoFiesta];
    var buscador = categorias[tipo].find(function(value){
      return value === checkbox;
    });
    var steps = {
      1 : ["filmacionFotografia","horaLoca","recuerdos","animacion"],
      2 : ["catering","brindis","foodTruck", "mesaBocaditos", "torta"],
      3: ["local","ambientacion","mobiliario", "pinateria"],
      4: ["invitaciones","genero","maestroCeremonias","servicioParrillero", "sorpresas", "miniSpa", "planner", "transporte", "servicioCadetes", "chambeLan", "carnes", "servicioParrillero"],
      5: ["djParty"]
    }
    var checkStep = steps[step].find(function(value){
      return value == checkbox
    })

    if(buscador && checkStep) return true;
    else return false

    
  }
  _SubirPrecio = () =>{
    
  }

  _Checkbox = (value) =>{
    valores = this.state.checkboxes;
    actual = valores[value]
    valores[value] = !actual;
    if(this.state.primerInput){
      this.setState({popupInputMesagge: true})
    }
    this.setState({checkboxes: valores});
    //actualizar precios aproximado
    this.calcularPreciosAprox(value , 1)
  }

  _CheckboxInput = (tipo, value) =>{
    valores = this.state.inputs;
    actual = valores[tipo][value]
    actual = !actual;
    valores[tipo][value] = actual;
    this.setState({inputs : valores});
    
  }

  _changeInput = (tipo, key, value) => {
    var arrInputs = this.state.inputs;
    arrInputs[tipo][key] = value;
    this.setState({inputs: arrInputs});
    //actualizar precios aproximado
    this.calcularPreciosAprox(tipo , value)

  }

  calcularPreciosAprox( tipo , value)
  {
    try {
      let { tipoFiesta } = this.state.datosFiesta
      let { precioAprox } = this.state
      tipoFiesta = tipoFiesta.toLowerCase()
      tipo = tipo.toLowerCase()
      const preciosA = preciosAprox[tipo]
      let nuevoCosto = 0 //'0 - 0'
      if(!precioAprox || (precioAprox && precioAprox === "0 - 0")) precioAprox = 0
      if( tipo === "animacion" || tipo === "filmacionFotografia" || tipo === "piñateria")
      {
        for(key in preciosA){
          
          if(preciosA[key].tipoFiesta === tipoFiesta)
          {
            nuevoCosto = value * preciosA[key].costo
          } 
        }
      }else{
        nuevoCosto = value * preciosA.costo
      }
      precioAprox = precioAprox + nuevoCosto
      this.setState({
        precioAprox 
      })
    } catch (error) {
      
    }
  }

  errorPopup = (errors) =>{
    
    
    //this.state.errorPopupTexto = errors;
    //this.setState({errorPopup : true});
    this.setState({
      errorPopupTexto:errors,
      modal:true
    })
  }

  _filmacionFotografiaSelect = () =>{
    var precios = []
    if(this.state.inputs.filmacionFotografia.filmacion && !(this.state.inputs.filmacionFotografia.fotografia)){
      precios = [{value:'200'}, {value:'400'},{value: '700'},{value: '1000'}, {value:'1500'}]
    }if(this.state.inputs.filmacionFotografia.fotografia && !(this.state.inputs.filmacionFotografia.filmacion)){
      precios = [{value:'200'}, {value:'400'}, {value:'700'}, {value:'1000'}, {value:'1500'}]
    }else if(this.state.inputs.filmacionFotografia.filmacion && this.state.inputs.filmacionFotografia.fotografia ){
      precios=[{value:'500'},{value:'800'},{value:'1100'},{value:'2000'}]
    }
    return precios;
  }
}

const estilo = StyleSheet.create({
  row: {
    width:300, marginBottom: 20, alignItems: 'center', flexDirection: 'row'
  },
  row2:{
    width:340, marginBottom: 20, alignItems: 'center', flexDirection: 'row'
  },
  modalContainer: {
    width: '300px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: 10,
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
  button:{
    marginBottom: 20,
    width: 200
  },
  buttonSmall:{
    marginBottom: 20,
    width: 140
  },
});  
