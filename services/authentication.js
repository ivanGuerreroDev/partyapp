import { server } from './config'

const headers = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export default {
    //register user
    async register (data) {
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        return fetch(`${server}/api/users`, config) 
    },
    async login(data){
      let config = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers
      }
      return fetch(`${server}/api/users/login`, config) 
    },
    async update(data)
    {
      let config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }
    return fetch(`${server}/api/users/update`, config) 
    },
    
  
}