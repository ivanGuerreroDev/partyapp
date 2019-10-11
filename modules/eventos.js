import Eventos from '../services/eventos'
import Authentication from'../modules/authentication'

export default {

    async saveFiesta(data){
      let fiesta, result, statusCode;
      try{
        await Authentication.currentToken().then((auth) => {
            if (auth) {
              data.id_usuario = auth.id
            }
        })
        fiesta = await Eventos.saveFiesta(data)
        statusCode = fiesta.status;
        if(statusCode !== 200) return false;
        result = await fiesta.json()
      }catch(ex)
      {
        console.log(ex)
        result = false
      }
      return result
    },
    async getFiestas () {
      let fiestas, data = {} , result, statusCode;
		  try {
        await Authentication.currentToken().then((auth) => {
          if (auth) {
            data.id_usuario = auth.id
          }
        })
        fiestas = await Eventos.getFiestas(data)
        statusCode = fiestas.status;
        if(statusCode !== 200) return false;
        result = await fiestas.json()
      } catch (error) {
        console.log(error)
        result = false;
      }
		  return result;
    },  
    async getCotizaciones(data){
      let cotizaciones , result, statusCode;
		  try {
        await Authentication.currentToken().then((auth) => {
          if (auth) {
            data.id_usuario = auth.id
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
    async getProveedorProfile(data)
    {
      let proveedor , result, statusCode;
		  try {
        proveedor = await Eventos.getProveedorProfile(data)
        statusCode = proveedor.status;
        if(statusCode !== 200) return false;
        result = await proveedor.json()
      } catch (error) {
        console.log(error)
        result = false;
      }
		  return result;
    }
}