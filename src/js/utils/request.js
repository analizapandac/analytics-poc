import axios from 'axios'
import { API_END_POINT } from '../constants/index.js';
import axiosHeaders  from '../config/axios'


/**
 * Request Wrapper with default success/error actions
 */
 export default function request(options) {
  
  // Create an Axios Client with defaults
  let client = axios.create({
    baseURL: API_END_POINT,
    headers: axiosHeaders()
  });

  let onSuccess = function(response) {
    return response.data;
  }

  let onError = function(error) {

    if (error.response) {
    } else {
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
            .then(onSuccess)
            .catch(onError);
}