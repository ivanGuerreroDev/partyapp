import { server } from './config'

const headers = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export default {
    async getCotizaciones (data) {
        console.log(data)
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/cotizaciones/getCotizaciones`) 
        return fetch(`${server}/api/cotizaciones/getCotizaciones`, config) 
    },  
    async getCotizacionesAceptadas (data) {
        console.log(data)
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/cotizaciones/getCotizaciones`) 
        return fetch(`${server}/api/cotizaciones/getCotizaciones`, config) 
    },
    async cotizar (data) {
        console.log(JSON.stringify(data))
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/users`) 
        return fetch(`${server}/api/users`, config) 
    },  
}