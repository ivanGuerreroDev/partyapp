import { AsyncStorage } from 'react-native'
import Authentication from '../services/authentication'

export default {
	//get session current user
	async currentToken () {
		let token;
		try {
			token = await AsyncStorage.getItem('token')
		} catch (error) {
		}
		return !token ? false : JSON.parse(token);
	},

    //register user
    async register (data) {
        let authData, result;
		try {
            authData = await Authentication.register(data)
            result = await authData.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
	},

	//create new season
	async login(data)
	{
        let authData, result;
		try {
            authData = await Authentication.login(data)
			result = await authData.json()
			const auth ={
				id:  result.user.id,
				username : result.user.username,
				email : result.user.email,
				privilege : result.user.privilege,
				token : result.user.token,
				image: result.profile.image,
				popupCheckForm : result.profile.popupCheckForm,
				popupInputMesagge : result.profile.popupInputMesagge,
				nombreCompleto : result.profile.nombreCompleto,
				genero : result.profile.genero,
				fechaNacimiento : result.profile.fechaNacimiento,
				telefono: result.profile.telefono,
				celular : result.profile.celular,
				direccion : result.profile.direccion,
				distrito : result.profile.distrito,
				id_usuario : result.profile.id_usuario
			}
			await AsyncStorage.setItem('token', JSON.stringify(auth))
			return auth
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
	},
	//update user
    async update (data) {
        let authData, result;
		try {
            authData = await Authentication.update(data)
            result = await authData.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
	},
}