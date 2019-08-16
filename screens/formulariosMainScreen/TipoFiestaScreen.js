import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../../assets/styles'; 
import Header from '../../navigation/Header'; 


  
export default class TipoFiestaScreen extends React.Component  {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = { 
      isLoading : false
    };
  }
  render() {
    if(!this.state.isLoading){
      return (
        <View
        style={{
            flex: 1,
          }}
        >
          <Header screenProps={{openMenu: ()=>this.props.screenProps.openMenu()}}/>
          <ScrollView>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <View style={this.state.tipoFiesta?styles.novisible:{marginTop: 70}}></View>
            <Image
              source={require('../../assets/images/armatufiestaGlobosIzquierda.png')}
              style={this.state.tipoFiesta?{
                resizeMode: 'contain', // or 'stretch'
                height: 90,
                width: 200,
                marginVertical: 15,
                alignItems: 'center',
                justifyContent: 'center'

              }:{
                resizeMode: 'contain', // or 'stretch'
                height: 120,
                width: 200,
                marginVertical: 15,
                alignItems: 'center',
                justifyContent: 'center'
              }} 
            /> 
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{padding:10}}>
              <TouchableOpacity 
              style={this.state.tipoFiesta == 'cumpleaños'?estilo.tipoFiestaActivo:estilo.tipoFiesta}
              onPress={() => this.setState({tipoFiesta: 'cumpleaños'})}
              >
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
                  Cumpleaños
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity 
              style={this.state.tipoFiesta == 'reuniones'?estilo.tipoFiestaActivo:estilo.tipoFiesta}
              onPress={() => this.setState({tipoFiesta: 'reuniones'})}
              >
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
                  Reuniones  
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{padding:10}}>
              <TouchableOpacity 
                style={this.state.tipoFiesta == 'religiosos'?estilo.tipoFiestaActivo:estilo.tipoFiesta}
                onPress={() => this.setState({tipoFiesta: 'religiosos'})}
              >
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
                  Religiosos
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity 
                style={this.state.tipoFiesta == 'estacionales'?estilo.tipoFiestaActivo:estilo.tipoFiesta}
                onPress={() => this.setState({tipoFiesta: 'estacionales'})}
              >
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
                  Estacionales
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          

          <View style={{marginBottom: 30}}></View>
          <View style={this.state.tipoFiesta=='reuniones'?styles.visible:styles.novisible}>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('karaoke')}
              >
                <Image
                  source={require('../../assets/images/karaokeButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Karaoke</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('parrillada')}
              >
                <Image
                  source={require('../../assets/images/parrilladaButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize:18}}>Parrillada</Text>

              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('coctel')}
              >
                <Image
                  source={require('../../assets/images/coctelButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Coctel</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('reuniones familiares')}
              >
                <Image
                  source={require('../../assets/images/reunionesFamiliaresButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Reuniones{"\n"}Familiares</Text>

              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('despedida de soltero')}
              >
                <Image
                  source={require('../../assets/images/despedidaSolteroButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Despedida{"\n"}de Soltero</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('baby shower')}
              >
                <Image
                  source={require('../../assets/images/babyShowerButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Baby{"\n"}Shower</Text>

              </TouchableOpacity>
            </View>
          </View>

          <View style={this.state.tipoFiesta=='cumpleaños'?styles.visible:styles.novisible}>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('fiesta infantil')}
              >
                <Image
                  source={require('../../assets/images/fiestaInfantilButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Fiesta{"\n"}Infantil</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('quinceaños')}
              >
                <Image
                  source={require('../../assets/images/quinceAnosButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Quinceaños</Text>

              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('fiesta cumpleaños adultos')}
              >
                <Image
                  source={require('../../assets/images/cumpleAnosButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Fiesta Cumpleaños{"\n"}Adultos</Text>

              </TouchableOpacity>
            </View>
          </View>


          <View style={this.state.tipoFiesta=='religiosos'?styles.visible:styles.novisible}>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('bautizo')}
              >
                <Image
                  source={require('../../assets/images/bautizoButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Bautizo</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('primera comunión')}
              >
                <Image
                  source={require('../../assets/images/primeraComunionButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Primera{"\n"}Comunión</Text>

              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('matrimonio')}
              >
                <Image
                  source={require('../../assets/images/matrimonioButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Matrimonio</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('bar mitzvah')}
              >
                <Image
                  source={require('../../assets/images/barMitzvahButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Bar Mitzvah</Text>

              </TouchableOpacity>
            </View>
          </View>

          <View style={this.state.tipoFiesta=='estacionales'?styles.visible:styles.novisible}>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('fin de año')}
              >
                <Image
                  source={require('../../assets/images/finAnoButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Fin de año</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('halloween')}
              >
                <Image
                  source={require('../../assets/images/halloweenButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Halloween</Text>

              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('san valentin')}
              >
                <Image
                  source={require('../../assets/images/sanValentinButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>San Valentin</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('año nuevo chino')}
              >
                <Image
                  source={require('../../assets/images/anoNuevoChinoButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Año Nuevo{"\n"}Chino</Text>

              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('aniversario paises')}
              >
                <Image
                  source={require('../../assets/images/aniversarioPaisesButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Aniversario{"\n"}paises</Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={estilo.tipoItem}
                onPress={()=>this.setTipoFiesta('aniversario de bodas')}
              >
                <Image
                  source={require('../../assets/images/aniversarioButton.png')}
                  style={{
                    resizeMode: 'contain', // or 'stretch'
                    height: 150,
                    width: 150,
                    marginVertical: 10

                  }} 
                /> 
                <Text style={{textAlign: 'center', fontSize: 18}}>Aniversario{"\n"}de bodas</Text>

              </TouchableOpacity>
            </View>
          </View>
        
        
          </ScrollView>
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
 

  setTipoFiesta = (value) => {
    var datos = this.props.screenProps.getDatosFiesta;
    datos['tipoFiesta']=value;
    this.props.screenProps.setDatosFiesta(datos);
    this.props.navigation.navigate('FormularioFiesta');
  }
}

const estilo = StyleSheet.create({
  tipoFiesta: {
    width: 150, borderRadius: 60, backgroundColor: '#c63275',borderColor: '#c63275', borderWidth: 4, paddingVertical: 25
  },
  tipoFiestaActivo: {
    width: 150, borderRadius: 60, borderColor: '#c63275', borderWidth: 4, backgroundColor: '#f4e950', paddingVertical: 25
  },
  tipoItem: {
    paddingHorizontal: 20
  }
});  