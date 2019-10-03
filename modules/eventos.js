import Eventos from '../services/eventos'
import Authentication from'../modules/authentication'

export default {
    async getCotizaciones () {
        let cotizaciones, data = {} , result, statusCode;
		try {
            await Authentication.currentToken().then((auth) => {
                if (auth) {
                  data.id_proveedor = auth.id
                }
            })
            cotizaciones = await Eventos.getCotizaciones(data)
            statusCode = cotizaciones.status;
            if(statusCode !== 200) return false;
            result = await cotizaciones.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
    },
    async getCotizacionesAceptadas () {
        let cotizaciones, data = {} , result, statusCode;
		try {
            await Authentication.currentToken().then((auth) => {
                if (auth) {
                  data.id_proveedor = auth.id
                }
            })
            cotizaciones = await Eventos.getCotizacionesAceptadas(data)
            statusCode = cotizaciones.status;
            if(statusCode !== 200) return false;
            result = await cotizaciones.json()
		} catch (error) {
			console.log(error)
			result = false;
		}
		return result;
	},
}