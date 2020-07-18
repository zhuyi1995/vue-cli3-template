import login from './module/login'
import system from './module/system'

const api = {}

Object.keys(system).forEach(key => {
  api[key] = system[key]
})

Object.keys(login).forEach(key => {
  api[key] = login[key]
})


export default api
