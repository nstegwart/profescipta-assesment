import Wrap from './axiosWrapper';

export const getOrderList = () =>{
  return Wrap({
    url: '/so-api/Order/GetOrderList',
    method: 'GET'
  });
}

export const getListItem = () =>{
  return Wrap({
    url: '/so-api/Order/GetItems',
    method: 'GET'
  });
}

export const getUserToken = (data, customHeaders) =>{
  return Wrap({
    url: '/so-api/token',
    method: 'POST',
    data,
    customHeaders
  });
}
