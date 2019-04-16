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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    
    static navigationOptions = {
        header: null,
      };
    handleUsername(text){
        this.setState({username: text})
    }
    handlePassword(text){
        this.setState({password: text})
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
        let data = {
            method: 'POST',
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            }),
            headers: {
              'Accept':       'application/json',
              'Content-Type': 'application/json'
            } 
        } 
        fetch('http://192.168.1.10:3000/api/login', data) 
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if(responseJson.autorizacion){
                    this.props.screenProps.isLoggedIn();
                }
              })
              .catch((error) => {
                console.error(error);
              }
        );
    }
    render() {
        return (
                <View style={styles.loginContainer}>
                    <Image
                        style={{
                            marginBottom: 20, 
                            alignSelf: 'center', 
                            width: 100,
                            height: 80,
                            resizeMode: 'contain'
                        }}
                        source={require('../assets/images/logo.png')}
                    />
                    <Text 
                        style={{fontSize: 20, textAlign: 'center', marginBottom: 10}}>
                        Iniciar Sesión Clientes
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

                    <Button 
                    style={styles.loginElement} 
                    onPress={() => this.Login()} 
                    title="Ingresar" />

                    <View style={{margin:15}} />

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
                    <View style={{margin:15}} />
                    <Text 
                        style={{fontSize: 14, textAlign: 'center'}}>
                        ¿Aun no estas registrado? 
                        <Text 
                            style={{color: 'blue', paddingLeft: 5}} 
                            onPress={() => this.props.navigation.navigate('Register')} 
                        >
                            Registrarse
                        </Text>
                    </Text>
                </View>
            )
    }
}
const styles = StyleSheet.create({
    loginContainer: { 
        backgroundColor: '#f4f4f4',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 40,
        paddingRight: 40,
    },
    inputElement: {
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#e4e4e4',
        borderRadius: 6
    },
    googleButton: {
        backgroundColor: '#ffffff',
    }
});