import axios from "axios"
import useRegistrationStore from "../stores/UserRegistrationStore"

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})


axiosClient.interceptors.request.use(config => {    
  const store = useRegistrationStore() 

  if (store.personalInfo?.token) { 
    config.headers.Authorization = `Bearer ${store.personalInfo.token}`
  }

  return config
    }, error => {
    return Promise.reject(error)
})

export default axiosClient;