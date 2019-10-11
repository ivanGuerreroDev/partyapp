import { server } from './config'

const headers = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export default {

    async saveFiesta( data )
    {
        console.log(data)
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/eventos/nuevaFiesta`) 
        return fetch(`${server}/api/eventos/nuevaFiesta`, config) 
    },
    async getFiestas (data) {
        console.log(data)
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/eventos/getFiestas`) 
        return fetch(`${server}/api/eventos/getFiestas`, config) 
    },  
    async getCotizaciones (data) {
        console.log(data)
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/cotizaciones/getCotizacionByEvento`) 
        return fetch(`${server}/api/cotizaciones/getCotizacionByEvento`, config) 
    }, 
    async getProveedorProfile(data){
        console.log(data)
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/users/proveedorProfile`) 
        return fetch(`${server}/api/users/proveedorProfile`, config) 
    } 
}