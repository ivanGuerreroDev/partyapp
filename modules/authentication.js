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
			console.log(result)
			const auth = {
				token: result.user.token,
				id: result.user.id
			}
			await AsyncStorage.setItem('token', JSON.stringify(auth))
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
	}
}