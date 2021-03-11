import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
export const pokeApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 8000
})

export const setBearer = function(bearer) {
  pokeApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  pokeApi.defaults.headers.authorization = ''
}
