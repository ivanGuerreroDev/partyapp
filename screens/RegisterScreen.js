import React, { Component } from 'react';
import {
    Text,
    Image, 
    TextInput,
    TouchableOpacity,
    View,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import {LinearGradient, AuthSession} from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends Component {
    constructor(props) {
        super(props);
      }
    static navigationOptions = {
        header: null,
    };
    state = {
        passE: {
            mensaje: 'vacio',
            activo: false
        }
    }
    handlePasswordRepeat(text){
        if(this.state.password1 == this.state.password2){
            this.setState({password: this.state.password1});
        }
    }
    handleEmail(text){
        this.setState({email: text})
    }
    
    handleError(error){
        if(error != 'vacio'){
            return error;
        }
    }
    logInUser() {
        this.props.screenProps.isLoggedIn(); 
    }
    Singup = async () => {
        let data = {
            method: 'POST',
            body: JSON.stringify({
                'username': this.state.username,
                'email': this.state.email,
                'password': this.handlePasswordRepeat(),
                'nombreCompleto': this.state.nombreCompleto,
                'direccion': this.state.direccion,
                'distrito': this.state.distrito,
                'telefono': this.state.telefono,
            }),
            headers: {
              'Accept':       'application/json',
              'Content-Type': 'application/json'
            }
        } 
        fetch('https://192.168.1.22/api/users', data) 
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    this.props.screenProps.setState({datosUsuario: responseJson.user});
                    this.logInUser();
                }
              })
              .catch((error) => {
                console.error(error);
              }
        );
    }
    render() {     
        return (
        <ScrollView>
            <View style={styles.loginContainer}>
                <Text 
                style={{fontSize: 20, fontWeight: '700', textAlign: 'center', color:'#8F4D93', marginVertical:20}}>
                REGISTRO
                </Text>
                <View>
                    <Text 
                    style={{fontSize: 16, fontWeight: '700', marginBottom:20}}>
                        Datos de la cuenta
                    </Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Usuario' 
                        onChangeText={(text) => this.setState({username : text})}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Email' 
                        onChangeText={(text) => this.setState({email : text})}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Contraseña' 
                        onChangeText={(text) => this.setState({password1 : text})}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Contraseña' 
                        onChangeText={(text) => this.setState({password2 : text})}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                    <Text 
                    style={{fontSize: 16, fontWeight: '700', marginBottom:20, marginTop: 30}}>
                        Datos del usuario
                    </Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Nombre y apellido' 
                        onChangeText={(text) => this.setState({nombreCompleto : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Dirección' 
                        onChangeText={(text) => this.setState({direccion : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Distrito' 
                        onChangeText={(text) => this.setState({distrito : text})}
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Teléfono' 
                        onChangeText={(text) => this.setState({telefono : text})}
                    />
                </View>
                <View style={{marginTop:40,alignItems:'center'}}>
                    <TouchableOpacity
                        style={[styles.button,{marginBottom:20}]}
                        onPress={() => this.Singup()} 
                    >
                        <LinearGradient
                            colors={['#C63275', '#8F4D93']}
                            start={[1,1]}
                            end={[0,0]}
                            style={styles.gradientButton}>
                            <Text style={{
                            fontWeight: '700',
                            color: '#fff'
                            }}>REGISTRARSE</Text>
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
        </ScrollView>
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
    },
    hidden:{
        display: 'none'
    },
    errorMensaje: {
        fontSize: 10,
        color: 'red'
    }
});