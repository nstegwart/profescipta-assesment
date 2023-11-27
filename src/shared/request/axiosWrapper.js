
import axios from 'axios';
import constants from '../constants';
import { store } from '../../reducers/store';

const request = options => {
  const additionalHeaders = options?.customHeaders || {}
  const requestHeaders =  {
    'Content-type': 'application/json',
    Accept: 'application/json',
    'cache-control': 'no-cache',
    ...additionalHeaders
  }

  const userCredential = store.getState().defaultState.userToken;
  
  let tokenParam = {};

  if (userCredential) {
    tokenParam = {
      Authorization: `Bearer ${userCredential}`,
    };
  }
  const client = axios.create({
    baseURL: options.MAIN_URL || constants.API_URL,
    headers: {...requestHeaders, ...tokenParam},
  });

  const onSuccess = response => response.data;

  const onError = error => {
    if (error.response) {
      if (options.handles && error.response.status) {
        if (options.handles.includes(error.response.status)) {
          return Promise.reject(error.response);
        }
      }
    } else {
      
      console.log('Error Message:', error);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
