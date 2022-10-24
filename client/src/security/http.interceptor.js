import Axios from "axios"
import { SERVER_URL } from "../constant/base.constant";
import { SecurityManager } from "./security.manager";

export const useHttpIntercepter = () => {

  Axios.defaults.baseURL = SERVER_URL
  
    Axios.interceptors.request.use(config => {
      const token = SecurityManager.getToken()
      const httpOptions = {
          'Authorization': token
      }
      Object.assign(config.headers, httpOptions)
      return config
    })

    Axios.interceptors.response.use(response => {
      return response
    }, error => {
      if (error && error.response && error.response.status === 401) {
        SecurityManager.logout()
      }
      return Promise.reject(error)
    })
}