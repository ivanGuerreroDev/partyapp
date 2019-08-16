import React, { Component } from 'react';
import {
    Text,
    Image, 
    TextInput,
    TouchableOpacity,
    View,
    Button,
    StyleSheet
} from 'react-native'; 
import {AuthSession} from 'expo';
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    
    static navigationOptions = {
        header: null,
      };
    handleUsername(text){
        this.props.screenProps.setState({username: text})
    }
    handlePassword(text){
        this.props.screenProps.setState({password: text})
    }
    logInFacebook = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('493594601166223', {
            permissions: ['public_profile'],
            behavior : 'browser'
          });
        if (type === 'success') { 
          // Get the user's name using Facebook's Graph API
          const datosFacebook = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`)
            .then((respuesta) => { return respuesta.json() })
            .then((respuestaJson) => {
                this.setState({
                    facebookId: respuestaJson.id,
                    displayName: respuestaJson.name
                });
                let datos = {
                    method: 'POST',
                    headers: { 
                      'Accept':       'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "facebookId": this.state.facebookId,
                        "displayName": this.state.displayName
                    })
                } 
                return fetch('https://gopartyperu.herokuapp.com/api/facebook-movil-login', datos)
            })
            .then((response) => {return response.json()}) 
            .then((responseJson) => { 
                if(responseJson.autorizacion){
                    this.props.screenProps.isLoggedIn();
                }
                return responseJson; 
            })
            .catch((error) => {
                console.log('fetch: '); 
                console.log(error); 
            });
        }
    }
    logInGoogle = async () => {
        
        var googleWebAppId = '653015851148-jpfm471lcv3oe04ts4lgrcb8bsf8odes.apps.googleusercontent.com';
        var redirectUrl =  'https://gopartyperu.herokuapp.com/auth/google-movil/callback';
        var result = await AuthSession.startAsync({
            authUrl:
            `https://accounts.google.com/o/oauth2/v2/auth?` +
            `&client_id=${googleWebAppId}` +
            `&redirect_uri=${redirectUrl}` +
            `&response_type=code` +
            `&access_type=offline` +
            `&scope=https://www.googleapis.com/auth/plus.login`,
        });
        if (result.type === 'success') {
           console.log(result);
        } else {
            return {cancelled: true};
        }
    }
    Login = async () => {
        this.props.screenProps.cargando();
        fetch('https://gopartyperu.herokuapp.com/api/users/login', 
        //fetch('http://192.168.1.22:3000/api/users/login', 
        {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': this.props.screenProps.getState().username,
                'password': this.props.screenProps.getState().password
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            this.props.screenProps.cargado();
            if(responseJson.success){
                this.props.screenProps.setState({datosUsuario: responseJson.user})
                this.props.screenProps.isLoggedIn();
            }else{
                if(responseJson.info) this.props.screenProps.setState({errorAuth: responseJson.info.message})
                else if(responseJson.error) this.props.screenProps.setState({errorAuth: responseJson.error.message})
            }
           
        })
        .catch((error) => {
            console.error(error)
        });
    }
    render() {
        return (
                <View style={styles.loginContainer}>
                    <Text 
                    style={{fontSize: 20, fontWeight: '700', textAlign: 'center', color:'#8F4D93', marginTop:20}}>
                        INICIO DE SESIÓN
                    </Text>
                    <View>
                        <Text 
                        style={{fontSize: 16, fontWeight: '700', marginBottom:20}}>
                            Ingresa tus datos
                        </Text>
                        <Text 
                        style={{fontSize: 12, fontWeight: '400', color:'red', marginBottom:20}}>
                            {this.props.screenProps.getState().errorAuth}
                        </Text>
                            
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Usuario' 
                            onChangeText={(text) => this.handleUsername(text)}
                            autoCapitalize = 'none'
                        />
                        <TextInput 
                            style={styles.inputElement}
                            placeholder='Contraseña' 
                            onChangeText={(text) => this.handlePassword(text)}
                            autoCapitalize = 'none'
                            secureTextEntry={true}
                        />
                        <View style={{margin:7}} />
                        <Icon.Button 
                            name="facebook" 
                            backgroundColor="#3b5998" 
                            style={{
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}
                            onPress={() => this.logInFacebook()} >
                                Ingresar con Facebook
                        </Icon.Button>
                        <View style={{margin:7}} />
                        <Icon.Button 
                            name="google" 
                            backgroundColor="#d84830" 
                            style={{
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}
                            onPress={() => this.logInGoogle()} >
                            Ingresar con Google
                        </Icon.Button>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity
                            style={[styles.button,{marginBottom:20}]}
                            onPress={() => this.Login()} 
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
                            style={[styles.button,{marginBottom:20}]}
                            onPress={() => this.props.navigation.navigate('index')} 
                        >
                            <View
                            style={[styles.gradientButton, {backgroundColor: '#E9E9E9'}]}>
                                <Text style={{
                                    fontWeight: '700',
                                    color: '#333'
                                }}>CANCELAR</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            )
    }
}
const styles = StyleSheet.create({
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
        borderRadius: 30 
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