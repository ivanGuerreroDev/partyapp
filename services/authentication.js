import { server } from './config'

const headers = {
  'Accept':       'application/json',
  'Content-Type': 'application/json'
}

export default {
    //register user
    async register (data) {
        console.log(JSON.stringify(data))
        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        }
        console.log(`${server}/api/users`) 
        return fetch(`${server}/api/users`, config) 
    },
    async login(data){
      console.log(JSON.stringify(data))
      let config = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers
      }
      console.log(`${server}/api/users/login`) 
      return fetch(`${server}/api/users/login`, config) 
    },
    async update(data)
    {
      console.log(JSON.stringify(data))
      let config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }
    console.log(`${server}/api/users/update`) 
    return fetch(`${server}/api/users/update`, config) 
    },
    
  
}