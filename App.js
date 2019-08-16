import React from 'react';
import { Platform, StatusBar, StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'
import Constants from 'expo-constants'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
import LoginNavigator from './navigation/LoginNavigator';
import MenuPrincipal from './navigation/menuPrincipal';
import Loading from './components/Loading';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoadingComplete: false,
      espera: false,
      isLoggedIn: false,
      username: '',
      password: '',
    };   
  }
  render() { 
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (   
        <AppLoading 
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );    
    } else { 
       if (this.state.isLoggedIn) {
       //if(true){
        return ( 
            <View style={styles.container}>
              <View style={styles.statusBar} />
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <View style={this.state.espera?styles.invisible:styles.visible}>
                <MenuPrincipal 
                  screenProps={{
                    cargando: ()=> this._espera(),
                    cargado: ()=> this._esperaTerminada(),
                    _logout: () => this.setState({ isLoggedIn:false }), 
                    setState: (arr) =>  {this.setState(arr);},
                    getState: () => this.state,
                  }}
                />
              </View>
              <View style={!(this.state.espera)?styles.invisible:styles.visible}>
                <Image
                  style={{
                      marginBottom: 80, 
                      alignSelf: 'center', 
                      width: 300,
                      height: 300,
                      resizeMode: 'contain'
                  }}
                  source={require('./assets/images/logo.png')}
                />
              </View>
            </View>
            
        );      
      } else{
        return (
            <View style={styles.container}>
              <View style={styles.statusBar} />
              <LoginNavigator
                screenProps={ 
                  { 
                    isLoggedIn: () => this.setState({ isLoggedIn:true }), 
                    cargando: ()=> this._espera(),
                    cargado: ()=> this._esperaTerminada(),
                    setState: (arr) =>  {this.setState(arr);},
                    getState: () => this.state,
                  }
                }
              />
              <Loading 
                screenProps={ 
                  { 
                    setState: (arr) =>  {this.setState(arr);},
                    getState: () => this.state,
                  }
                }
              />
              
              
            </View>
          

        );
      }
                                                  
    }
  }
  
  _loadResourcesAsync = async () => {  
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/logo.png'),
        require('./assets/images/armatufiestaGlobosIzquierda.png'),
        require('./assets/images/aniversarioButton.png'),
        require('./assets/images/aniversarioPaisesButton.png'),
        require('./assets/images/anoNuevoChinoButton.png'),
        require('./assets/images/armatufiestaGlobos.png'),
        require('./assets/images/babyShowerButton.png'),
        require('./assets/images/barMitzvahButton.png'),
        require('./assets/images/bautizoButton.png'),
        require('./assets/images/BgGradientAzul.jpg'),
        require('./assets/images/brunchButton.png'),
        require('./assets/images/calendar-icon.png'),
        require('./assets/images/coctelButton.png'),
        require('./assets/images/cumpleAnosButton.png'),
        require('./assets/images/despedidaSolteroButton.png'),
        require('./assets/images/fiestaInfantilButton.png'),
        require('./assets/images/finAnoButton.png'),
        require('./assets/images/halloweenButton.png'),
        require('./assets/images/karaokeButton.png'),
        require('./assets/images/logoTop.png'),
        require('./assets/images/matrimonioButton.png'),
        require('./assets/images/parrilladaButton.png'),
        require('./assets/images/primeraComunionButton.png'),
        require('./assets/images/quinceAnosButton.png'),
        require('./assets/images/reunionesFamiliaresButton.png'),
        require('./assets/images/sanValentinButton.png'),
        require('./assets/loader.gif'),

      ]),
      Font.loadAsync({  
        // This is the font that we are using for our tab bar
        ...Icon.Feather.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Barbie-MediumItalic': require('./assets/fonts/Barbie-MediumItalic.ttf'), 
      }), 
    ]);  
  }; 

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }; 

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };  
  _handleLoading = () => {
    this.setState({ isLoadingComplete: false });
  };

  _espera = () => {
    this.setState({ espera: true });
  };  
  _esperaTerminada = () => {
    this.setState({ espera: false });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },   
  statusBar: {
    backgroundColor: "#000",
    height: Constants.statusBarHeight,
  },
  invisible:{display:'none'},
  visible: {display: 'flex', flex:1}
});  
   