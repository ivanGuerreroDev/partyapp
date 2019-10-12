import { server } from './config'

const headers = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export default {

    async saveFiesta( data )
    {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/eventos/nuevaFiesta`, config) 
    },
    async getFiestas (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/eventos/getFiestas`, config) 
    },  
    async getCotizaciones (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/cotizaciones/getCotizacionByEvento`, config) 
    }, 
    async getProveedorProfile(data){
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/users/proveedorProfile`, config) 
    } 
}