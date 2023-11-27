import Wrap from './axiosWrapper';

export const getOrderList = () =>{
  return Wrap({
    url: '/so-api/Order/GetOrderList',
    method: 'GET'
  });
}

export const getListItem = (customHeaders) =>{
  return Wrap({
    url: '/so-api/Order/GetItems',
    method: 'GET',
    customHeaders
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


export const createItem = (data, customHeaders) =>{
  return Wrap({
    url: '/so-api/Order/CreateItem',
    method: 'POST',
    data,
    customHeaders
  });
}

export const updateItem = (data, customHeaders) =>{
  return Wrap({
    url: '/so-api/Order/UpdateItem',
    method: 'POST',
    data,
    customHeaders
  });
}


export const deleteItem = (data, customHeaders) =>{
  return Wrap({
    url: '/so-api/Order/DeleteItem',
    method: 'POST',
    data,
    customHeaders
  });
}

