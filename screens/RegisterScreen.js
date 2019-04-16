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
    handleUsername(text){
        this.setState({username: text})
    }
    handlePassword(text){
        this.setState({pass: text})
    }
    handlePasswordRepeat(text){
        this.setState({passR: text})
        if(this.state.pass == text){
            this.setState({password: text})
            this.setState({passE: {activo : false}})
        }else{
            this.setState({passE: {mensaje: 'Contraseña no coincide', activo: true }})
        }
        console.log(text)
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
        // logic to log in user through your server/API/whatever
        this.props.screenProps.isLoggedIn(); // sets state in parent component which will now update and render Home
        // set logged in status in AsyncStorage
      }
    Singup = async () => {
        let data = {
            method: 'POST',
            body: `username=${this.state.username}&password=${this.state.password}&email=${this.state.email}`,
            headers: {
              'Accept':       'application/x-www-form-urlencoded',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        } 
        fetch('https://gopartyperu.herokuapp.com/api/signup', data) 
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.registrado){
                    this.logInUser();
                } else if (responseJson.error){

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
                    <Text 
                        style={{fontSize: 20, textAlign: 'center', marginBottom: 15}}>
                        Registrarse
                    </Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Usuario' 
                        onChangeText={(text) => this.handleUsername(text)}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Correo Electrónico' 
                        onChangeText={(text) => this.handleEmail(text)}
                        autoCapitalize = 'none'
                    />
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Contraseña' 
                        onChangeText={(text) => this.handlePassword(text)}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                    <Text style={ this.state.passE.activo ? styles.errorMensaje : styles.hidden }> { this.handleError(this.state.passE.mensaje) } </Text>
                    <TextInput 
                        style={styles.inputElement}
                        placeholder='Repetir contraseña' 
                        onChangeText={(text) => this.handlePasswordRepeat(text)}
                        autoCapitalize = 'none'
                        secureTextEntry={true}
                    />
                    <Button 
                    style={styles.loginElement} 
                    onPress={() => this.Singup()} 
                    title="Registrarse" />
                    
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
    },
    hidden:{
        display: 'none'
    },
    errorMensaje: {
        fontSize: 10,
        color: 'red'
    }
});